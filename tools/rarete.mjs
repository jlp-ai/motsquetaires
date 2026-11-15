// Word rarity measured on Lexique 3.83 (New, Pallier et al., CC BY-SA 4.0, to be credited).
// Frequency kept: highest of lemma/form frequency (films, books), in occurrences per million.
//   node tools/rarete.mjs words mot1 mot2 ...   frequency of each word
//   node tools/rarete.mjs check [theme ...]     rare-word quota and spelling-difficulty (D) quota per dictation (all themes by default)
// Lexique TSV is read from ../Onirologos/data/lexique/ (or LEXIQUE_TSV env var); it is not copied here.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { loadContent } from "./content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TSV = process.env.LEXIQUE_TSV || join(root, "..", "Onirologos", "data", "lexique", "Lexique383.tsv");
if (!existsSync(TSV)) {
  console.error("Lexique introuvable : " + TSV + " (définir LEXIQUE_TSV).");
  process.exit(1);
}

export const RARE = 5;        // < 5 occ/million : rare
export const VERY_RARE = 0.5; // < 0.5 occ/million : très rare
// Minimum per dictation, by level: [rare words, very rare words]
export const QUOTA = { apprenti: [0, 0], compagnon: [1, 0], maitre: [2, 0], "grand-scribe": [3, 1] };

// Spelling difficulty D (0-4, see Onirologos mesure-difficulte.md), judged per `rare: true` note (fields d and piege).
// Minimum per dictation, by level: [words with D>=2, words with D>=3]
export const QUOTA_D = { apprenti: [0, 0], compagnon: [1, 0], maitre: [2, 1], "grand-scribe": [3, 3] };
// Note: for grand-scribe the 3 words are all D>=3, so the D>=2 minimum is implied.

const freq = new Map();
const lines = readFileSync(TSV, "utf8").split("\n");
const head = lines[0].split("\t");
const iOrtho = head.indexOf("ortho");
const iFreq = ["freqlemfilms2", "freqlemlivres", "freqfilms2", "freqlivres"].map((n) => head.indexOf(n));
for (let k = 1; k < lines.length; k++) {
  const c = lines[k].split("\t");
  if (c.length < 8) continue;
  const f = Math.max(...iFreq.map((i) => parseFloat(c[i]) || 0));
  const w = c[iOrtho];
  if (!freq.has(w) || freq.get(w) < f) freq.set(w, f);
}

const STOP = new Set("le la les l un une des de du d à au aux et ou ni que qu qui ne n se s ce c il ils elle elles je j tu nous vous on en y a est sont son sa ses leur leurs ma mon mes ton ta tes pas plus par pour sur dans avec sans".split(" "));

export function wordFreq(w) {
  const x = w.toLowerCase().replace(/[’]/g, "'");
  if (freq.has(x)) return freq.get(x);
  const noLig = x.replace(/œ/g, "oe").replace(/æ/g, "ae");
  if (freq.has(noLig)) return freq.get(noLig);
  return 0;
}

export function words(text) {
  return [...new Set((text.replace(/[’]/g, "'").match(/[\p{L}]+(?:-[\p{L}]+)*/gu) || []).map((w) => w.toLowerCase()))]
    .filter((w) => w.length > 3 && !STOP.has(w));
}

let CONTENT = null;
function loadTheme(id) {
  CONTENT = CONTENT || loadContent().themes;
  return CONTENT[id];
}

function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (cmd === "words") {
    for (const w of args) console.log(w.padEnd(20), wordFreq(w).toFixed(2));
    return;
  }
  if (cmd === "check") {
    const ids = args.length ? args : readdirSync(join(root, "content")).filter((f) => f.endsWith(".js") && f !== "metas.js" && f !== "pronunciations.js").map((f) => f.slice(0, -3));
    let bad = 0;
    for (const id of ids) {
      const theme = loadTheme(id);
      for (const d of theme.dictees) {
        const scored = words(d.text).map((w) => [w, wordFreq(w)]).sort((a, b) => a[1] - b[1]);
        const rare = scored.filter((x) => x[1] < RARE);
        const very = scored.filter((x) => x[1] < VERY_RARE);
        const [qr, qv] = QUOTA[d.level];
        const flagged = (d.notes || []).filter((n) => n.rare).map((n) => n.word.toLowerCase());
        const flagOk = flagged.every((w) => rare.some((r) => r[0] === w || r[0].includes(w) || w.includes(r[0])));
        const rareNotes = (d.notes || []).filter((n) => n.rare);
        const missing = rareNotes.filter((n) => !(Number.isInteger(n.d) && n.d >= 0 && n.d <= 4) || typeof n.piege !== "string" || !n.piege.trim()).map((n) => n.word);
        const d2 = rareNotes.filter((n) => n.d >= 2).length;
        const d3 = rareNotes.filter((n) => n.d >= 3).length;
        const [qd2, qd3] = QUOTA_D[d.level];
        const okR = rare.length >= qr && very.length >= qv && flagged.length >= Math.min(qr, 1) && flagOk;
        const okD = !missing.length && d2 >= qd2 && d3 >= qd3;
        const ok = okR && okD;
        if (!ok) bad++;
        console.log((ok ? "OK  " : "FAIL") + " " + id.padEnd(16) + d.level.padEnd(13) + "rares " + rare.length + "/" + qr + "  très rares " + very.length + "/" + qv + "  D>=2 " + d2 + "/" + qd2 + "  D>=3 " + d3 + "/" + qd3 + "  notes rare:true " + flagged.length + (flagOk ? "" : " (mot signalé non rare)") + (missing.length ? " (d/piege manquant : " + missing.join(", ") + ")" : "") + "  | " + rare.slice(0, 5).map((x) => x[0] + "(" + x[1].toFixed(1) + ")").join(" "));
      }
    }
    process.exitCode = bad ? 1 : 0;
    return;
  }
  console.log("Usage : node tools/rarete.mjs words <mots...> | check [thèmes...]");
}
main();
