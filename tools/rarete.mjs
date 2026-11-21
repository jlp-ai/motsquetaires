// Word rarity measured on Lexique 3.83 (New, Pallier et al., CC BY-SA 4.0, to be credited).
// Frequency kept: highest of lemma/form frequency (films, books), in occurrences per million.
//   node tools/rarete.mjs words mot1 mot2 ...   frequency of each word
// Lexique TSV is read from ../Onirologos/data/lexique/ (or LEXIQUE_TSV env var); it is not copied here.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TSV = process.env.LEXIQUE_TSV || join(root, "..", "Onirologos", "data", "lexique", "Lexique383.tsv");
if (!existsSync(TSV)) {
  console.error("Lexique introuvable : " + TSV + " (définir LEXIQUE_TSV).");
  process.exit(1);
}

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

function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (cmd === "words") {
    for (const w of args) console.log(w.padEnd(20), wordFreq(w).toFixed(2));
    return;
  }
  console.log("Usage : node tools/rarete.mjs words <mots...>");
}
if (process.argv[1] && fileURLToPath(import.meta.url) === join(process.argv[1])) main();
