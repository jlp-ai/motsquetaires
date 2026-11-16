// Mix of error types of the "Trouve l'erreur" sentences, per theme and level.
//   node tools/erreurs.mjs            report: untyped items and mix per theme (opt-in themes only fail)
//   node tools/erreurs.mjs --all      treat every theme as opt-in (fail if any item is untyped)
// A theme is checked once at least one of its erreurs carries a `type`. Rules per theme and level (8 items):
//   pronominal <= 1 ; participe <= 2 ; homophone <= 2 ; lexique >= minimum by level.
import { loadContent } from "./content.mjs";

const TYPES = ["lexique", "pronominal", "participe", "homophone", "invariable", "temps", "accord", "adverbe", "compose", "sens"];
// Ratios scale with the number of items n of a level (8 items: lexique 2/3/3/4, caps 1/2/2; 20 items: lexique 5/8/8/10, caps 3/5/5).
const LEX_RATIO = { apprenti: 0.25, compagnon: 0.375, maitre: 0.375, "grand-scribe": 0.5 };
const CAP_RATIO = { pronominal: 0.125, participe: 0.25, homophone: 0.25 };
const LEVELS = Object.keys(LEX_RATIO);
const all = process.argv.includes("--all");

const { themes } = loadContent("perso");
let bad = 0, untypedThemes = 0;
for (const [id, t] of Object.entries(themes)) {
  const typed = t.erreurs.filter((e) => e.type).length;
  if (!typed && !all) { untypedThemes++; continue; }
  for (const lv of LEVELS) {
    const items = t.erreurs.filter((e) => e.level === lv);
    const count = {};
    const problems = [];
    for (const e of items) {
      if (!TYPES.includes(e.type)) problems.push(`type manquant ou inconnu (« ${e.wrong} »)`);
      count[e.type] = (count[e.type] || 0) + 1;
    }
    const n = items.length;
    for (const [k, r] of Object.entries(CAP_RATIO)) { const cap = Math.ceil(r * n); if ((count[k] || 0) > cap) problems.push(`${k} ${count[k]} > ${cap}`); }
    const minLex = Math.ceil(LEX_RATIO[lv] * n);
    if ((count.lexique || 0) < minLex && n >= 8) problems.push(`lexique ${count.lexique || 0} < ${minLex}`);
    if (items.length >= 8 && Object.keys(count).filter((k) => TYPES.includes(k)).length < 5) problems.push("mécanismes trop peu variés");
    if (problems.length) bad++;
    console.log((problems.length ? "FAIL " : "OK   ") + id.padEnd(18) + lv.padEnd(13) + Object.entries(count).map(([k, v]) => `${k}:${v}`).join(" ") + (problems.length ? "  | " + problems.join("; ") : ""));
  }
}
console.log(`\n${untypedThemes} thème(s) sans type (non contrôlés, à réécrire) ; ${bad} niveau(x) en échec parmi les thèmes typés.`);
process.exitCode = bad ? 1 : 0;
