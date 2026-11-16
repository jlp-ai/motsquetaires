// Pre-generated voice clips for every dictation (Azure Speech, neural voice).
// One mp3 per dictation and per mode: normal, slow, and each with punctuation spoken.
// The app plays a clip when audio/manifest.js lists it, otherwise falls back to the browser voice.
//
//   node tools/clips.mjs                 dry run: counts clips and characters, generates nothing
//   node tools/clips.mjs --generate      generates the missing clips and rewrites audio/manifest.js
//   node tools/clips.mjs --generate --only starwars,psg    limit to some themes
//
// Needs AZURE_SPEECH_KEY and AZURE_SPEECH_REGION, read from the environment or from
// ../Onirologos/.env (shared key). Nothing is printed about the key. Clips are keyed by the exact
// text, so editing a dictation makes its old clips orphans (reported, never deleted).
// Breath groups come from speech.js, the same code the browser fallback uses.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { loadContent } from "./content.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const Speech = require(path.join(root, "speech.js"));
const audioDir = path.join(root, "audio");
const VOICE = "fr-FR-DeniseNeural";
const MODES = { normal: { rate: "-10%", pause: 1 }, slow: { rate: "-30%", pause: 1.6 } };

for (const envFile of [path.join(root, ".env"), path.join(root, "..", "Onirologos", ".env")]) {
  if (!fs.existsSync(envFile)) continue;
  for (const line of fs.readFileSync(envFile, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*(AZURE_SPEECH_[A-Z]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const args = process.argv.slice(2);
const generate = args.includes("--generate");
// --no-punct: do not generate the punctuation-spoken variants (browser voice is the fallback).
// --lite: lighter mp3 (16 kHz, 32 kbit/s) for the new clips, to keep the deployment small.
const noPunct = args.includes("--no-punct");
const lite = args.includes("--lite");
const only = (args.includes("--only") ? args[args.indexOf("--only") + 1] : "").split(",").filter(Boolean);

const { themes, pron: PRON, mode: NAMES_MODE } = loadContent();

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// SSML for one dictation in one mode (slow, punct).
function ssml(text, slow, punct) {
  const cfg = MODES[slow ? "slow" : "normal"];
  const body = Speech.breathGroups(text).map((g, i, all) => {
    const inner = g.text.split(/([\p{L}]+)/u).map((seg) => {
      if (/^[\p{L}]+$/u.test(seg)) {
        const e = PRON[seg.toLowerCase()];
        return e && e.ipa ? `<phoneme alphabet="ipa" ph="${esc(e.ipa)}">${esc(seg)}</phoneme>` : esc(seg);
      }
      return esc(punct ? Speech.announce(seg) : seg);
    }).join("");
    const gap = i < all.length - 1 ? `<break time="${Math.round((g.strong ? 900 : 450) * cfg.pause)}ms"/>` : "";
    return inner + gap;
  }).join(" ");
  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="fr-FR"><voice name="${VOICE}"><prosody rate="${cfg.rate}">${body}</prosody></voice></speak>`;
}

// Every clip the app can ask for.
const jobs = [];
for (const [id, theme] of Object.entries(themes)) {
  if (only.length && !only.includes(id)) continue;
  for (const d of theme.dictees) {
    for (const slow of [false, true]) for (const punct of [false, true]) {
      const mode = (slow ? "slow" : "normal") + (punct ? "+punct" : "");
      const key = Speech.clipKey(d.text, mode);
      const file = "audio/" + crypto.createHash("sha1").update(key).digest("hex").slice(0, 12) + ".mp3";
      jobs.push({ theme: id, level: d.level, key, file, ssml: ssml(d.text, slow, punct), chars: d.text.length });
    }
  }
}

const missing = jobs.filter((j) => !fs.existsSync(path.join(root, j.file)) && !(noPunct && j.key.startsWith("normal+punct|") ) && !(noPunct && j.key.startsWith("slow+punct|")));
const chars = missing.reduce((n, j) => n + j.chars, 0);
console.log(`Noms propres : mode ${NAMES_MODE}.`);
console.log(`Clips : ${jobs.length} au total, ${missing.length} à générer (${chars} caractères).`);
const known = new Set(jobs.map((j) => path.basename(j.file)));
const orphans = fs.existsSync(audioDir) ? fs.readdirSync(audioDir).filter((f) => f.endsWith(".mp3") && !known.has(f)) : [];
if (orphans.length) console.log(`Orphelins : ${orphans.length} fichier(s) d'un texte modifié (non supprimés).`);

if (!generate) {
  console.log("Dry run : ajouter --generate pour produire les clips.");
} else {
  if (!process.env.AZURE_SPEECH_KEY || !process.env.AZURE_SPEECH_REGION) {
    console.error("AZURE_SPEECH_KEY et AZURE_SPEECH_REGION introuvables.");
    process.exit(1);
  }
  fs.mkdirSync(audioDir, { recursive: true });
  const url = `https://${process.env.AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  let done = 0, failed = 0, next = 0;
  async function one(j) {
    for (let attempt = 1; attempt <= 4; attempt++) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.AZURE_SPEECH_KEY,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": lite ? "audio-16khz-32kbitrate-mono-mp3" : "audio-24khz-48kbitrate-mono-mp3",
          "User-Agent": "dictees-clips"
        },
        body: j.ssml
      });
      if (res.ok) { fs.writeFileSync(path.join(root, j.file), Buffer.from(await res.arrayBuffer())); return; }
      if (res.status === 429 || res.status >= 500) { await new Promise((r) => setTimeout(r, 1500 * attempt)); continue; }
      throw new Error("HTTP " + res.status);
    }
    throw new Error("échec après 4 essais");
  }
  async function worker() {
    while (next < missing.length) {
      const j = missing[next++];
      try { await one(j); done++; } catch (e) { failed++; console.log("ECHEC", j.theme, j.level, String(e.message).slice(0, 120)); }
    }
  }
  await Promise.all([worker(), worker(), worker(), worker()]);
  console.log(`Générés : ${done}, échecs : ${failed}.`);
}

// Manifest: only clips whose file exists.
const manifest = {};
for (const j of jobs) if (fs.existsSync(path.join(root, j.file))) manifest[j.key] = j.file;
fs.writeFileSync(path.join(audioDir, "manifest.js"), "window.CLIPS = " + JSON.stringify(manifest, null, 0).replace(/,"/g, ',\n"') + ";\n");
console.log(`Manifeste : ${Object.keys(manifest).length} clips référencés.`);
