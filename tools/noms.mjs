// Proper-name mechanism checks.
//   node tools/noms.mjs          current mode, markers per theme, structure checks in BOTH modes,
//                                and a scan of capitalized words left unmarked (commercial mode).
// A marker {{Name|stand-in}} must leave every dictation and every error sentence valid in both modes.
import { loadContent, currentMode, Names } from "./content.mjs";

console.log("Mode courant : " + currentMode() + " (config.js ; NAMES_MODE de l'environnement prioritaire)\n");

// Markers (raw content)
const raw = loadContent("raw");
let total = 0;
for (const [id, t] of Object.entries(raw.themes)) {
  const ms = Names.markers(t);
  if (!ms.length) continue;
  total += ms.length;
  console.log(id.padEnd(18), ms.map((m) => `${m.name} → ${m.stand}`).join(" ; "));
}
for (const m of Names.markers(raw.metas)) { total++; console.log("méta".padEnd(18), `${m.name} → ${m.stand}`); }
console.log(`${total} marqueur(s).\n`);

// Structure in both modes
let bad = 0;
const fail = (mode, id, msg) => { bad++; console.log(`ERREUR [${mode}] ${id} : ${msg}`); };
for (const mode of ["perso", "commercial"]) {
  const { themes } = loadContent(mode);
  for (const [id, t] of Object.entries(themes)) {
    for (const lv of ["apprenti", "compagnon", "maitre", "grand-scribe"]) if (t.erreurs.filter((e) => e.level === lv).length < 2) fail(mode, id, `niveau ${lv} : au moins 2 erreurs attendues`);
    for (const d of t.dictees) {
      const text = d.text.toLowerCase();
      for (const n of d.notes || []) if (!text.includes(n.word.toLowerCase())) fail(mode, id, `note « ${n.word} » absente de la dictée ${d.level}`);
      if (/\{\{|\}\}/.test(d.text)) fail(mode, id, "marqueur non résolu");
    }
    for (const e of t.erreurs) {
      const words = e.text.split(" ").map((w) => w.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ""));
      const unel = (w) => w.replace(/^(?:[ldjmtsnc]|qu|lorsqu|puisqu|jusqu)['’]/i, ""); // same rule as app.js stripEl
      const faults = e.faults || [e];
      if (e.faults && (e.faults.length < 2 || e.wrong || e.right || e.choices)) fail(mode, id, `faults : au moins 2 fautes, sans wrong/right/choices au niveau de l'item (« ${e.text} »)`);
      const used = new Set();
      for (const f of faults) {
        const idx = words.map((w, i) => (w === f.wrong || unel(w) === f.wrong ? i : -1)).filter((i) => i >= 0);
        if (idx.length !== 1) fail(mode, id, `« ${f.wrong} » doit apparaître une fois dans « ${e.text} »`);
        else if (used.has(idx[0])) fail(mode, id, `deux fautes sur le même mot dans « ${e.text} »`);
        else used.add(idx[0]);
        if (!f.choices || !f.choices.includes(f.right)) fail(mode, id, `« ${f.right} » absent des choix`);
        if (e.faults && !f.rule) fail(mode, id, `règle manquante pour « ${f.wrong} »`);
      }
      if (/\{\{|\}\}/.test(e.text)) fail(mode, id, "marqueur non résolu");
    }
  }
}
console.log(bad ? `${bad} erreur(s) de structure.\n` : "Structure : OK dans les deux modes.\n");

// Unmarked capitalized words (commercial mode): candidates for a name to protect.
const { themes } = loadContent("commercial");
// Allowed without a marker: places and neutral words (geography is not a brand), and the characters and
// places of Les Trois Mousquetaires (Dumas, public domain), plus an invented first name.
const ALLOWED = new Set(["Paris", "Parisiens", "Parisien", "Internet", "Normandie", "Manche", "France", "Cotentin", "Languedoc", "Hérault",
  "Cherbourg", "Montagne", "Roule", "Nez", "Jobourg", "Angleterre", "Comédie", "Peyrou", "La", "Rochelle", "Gascogne", "Gascon", "Calais",
  "Artagnan", "Milady", "Buckingham", "Léa"]);
let flagged = 0;
for (const [id, t] of Object.entries(themes)) {
  const texts = [...t.dictees.map((d) => d.text), ...t.erreurs.map((e) => e.text)];
  const found = new Set();
  for (const text of texts) {
    for (const m of text.matchAll(/(?<![.!?…]\s|^)\b\p{Lu}[\p{L}'’-]*/gu)) {
      const w = m[0].replace(/['’].*$/, "");
      if (!ALLOWED.has(w) && w.length > 1) found.add(w);
    }
  }
  if (found.size) { flagged += found.size; console.log(`À vérifier [${id}] : ${[...found].join(", ")}`); }
}
console.log(flagged ? `\n${flagged} mot(s) capitalisé(s) hors début de phrase : nom propre à protéger ou mot ordinaire ?` : "Aucun nom propre non marqué.");
process.exitCode = bad ? 1 : 0;
