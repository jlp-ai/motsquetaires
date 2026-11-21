// Coverage audit of the "Trouve l'erreur" sentences against the rule checklist docs/couverture-regles.md.
//   node tools/couverture.mjs                  report: missing rules, over-represented rules, unclassified rate, per level
//   node tools/couverture.mjs --json           same data as JSON
//   node tools/couverture.mjs --rule <id>      list the sentences classified under one rule (id or id prefix)
//   node tools/couverture.mjs --unclassified   list the faults no rule recognises
//   options: --max <n> (over-representation threshold, default 8), --themes <n> (themes per level, default 3)
// Each fault (item or item.faults[]) is matched against the detection column of the checklist:
//   n: notion prefixes ; r: rule keywords (any) ; a: rule keywords (all) ; w: wrong/right forms (glob) ;
//   e: ending pairs wrong/right on the same stem ; t: type filter ; x: exclusions.
// A rule whose detection is only a type filter is a fallback: it applies when no other rule matched.
// A sentence is "rule" when a precise rule (scope règle) matches, "family" when only broad families match.
// Read-only on content/*.js. Never fails (exit 0).
import fs from "node:fs";
import path from "node:path";
import { loadContent, root } from "./content.mjs";

const LEVELS = ["apprenti", "compagnon", "maitre", "grand-scribe"];
const LEVEL_LABEL = { apprenti: "1 apprenti", compagnon: "2 compagnon", maitre: "3 maitre", "grand-scribe": "4 grand-scribe" };
const args = process.argv.slice(2);
const opt = (name, dflt) => { const i = args.indexOf(name); return i >= 0 && args[i + 1] !== undefined ? args[i + 1] : dflt; };
const asJson = args.includes("--json");
const ruleArg = opt("--rule", null);
const showUnclassified = args.includes("--unclassified");
const MAX = Number(opt("--max", 8));
const MAX_THEMES = Number(opt("--themes", 3));

// Text normalisation for rule keywords: lower case, no accents, no quotes, single spaces.
function norm(s) {
  return String(s || "").toLowerCase()
    .replace(/œ/g, "oe").replace(/æ/g, "ae")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[’‘`]/g, "'").replace(/[«»"“”]/g, " ")
    .replace(/\s+/g, " ").trim();
}
// Forms keep their accents: lower case and apostrophes only.
const normForm = (s) => String(s || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/ /g, " ").trim();
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function keywordRe(kw) {
  const k = norm(kw);
  const prefix = k.endsWith("*");
  const body = esc(prefix ? k.slice(0, -1) : k);
  return new RegExp("(^|[^a-z0-9])" + body + (prefix ? "" : "(?=$|[^a-z0-9])"));
}
const globRe = (g) => new RegExp("^" + normForm(g).split("*").map(esc).join(".*") + "$");

// ---- Parse the checklist -------------------------------------------------
function parseChecklist() {
  const file = path.join(root, "docs", "couverture-regles.md");
  const rules = [];
  let domain = "";
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const h = line.match(/^##\s+(.+)/);
    if (h) { domain = h[1].trim(); continue; }
    if (!line.startsWith("| `")) continue;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length < 7) continue;
    const id = cells[0].replace(/`/g, "");
    if (!/^[a-z]+\.[a-z0-9.-]+$/.test(id)) continue;
    const [lo, hi] = cells[1].split("-").map(Number);
    const det = { n: [], r: [], a: [], w: [], e: [], t: [], x: [] };
    for (const clause of cells[6].split(" ; ")) {
      const m = clause.match(/^\s*([nrawetx]):\s*(.*)$/);
      if (!m) continue;
      det[m[1]].push(...m[2].split(",").map((s) => s.trim()).filter(Boolean));
    }
    rules.push({
      id, domain, lo, hi: hi || lo, prio: cells[2], scope: cells[3], label: cells[4], examples: cells[5],
      fallback: !det.n.length && !det.r.length && !det.a.length && !det.w.length && !det.e.length && det.t.length > 0,
      det,
      re: { r: det.r.map(keywordRe), a: det.a.map(keywordRe), x: det.x.map(keywordRe), w: det.w.map(globRe),
        e: det.e.map((p) => p.split("/").map(normForm)).filter((p) => p.length === 2) },
    });
  }
  return rules;
}

// ---- Matching ------------------------------------------------------------
function forms(f) {
  const out = new Set();
  for (const s of [f.wrong, f.right]) {
    const v = normForm(s);
    if (!v) continue;
    out.add(v);
    for (const tok of v.split(/\s+/)) out.add(tok);
  }
  return [...out];
}

function matches(rule, f) {
  const d = rule.det, re = rule.re;
  if (d.t.length && !d.t.includes(f.type)) return false;
  const ruleText = norm(f.rule);
  if (re.x.some((x) => x.test(ruleText))) return false;
  if (rule.fallback) return true;
  if (d.n.some((p) => f.notion && f.notion.startsWith(p))) return true;
  if (re.r.some((r) => r.test(ruleText))) return true;
  if (re.a.length && re.a.every((r) => r.test(ruleText))) return true;
  if (re.w.length && re.w.some((g) => f.forms.some((v) => g.test(v)))) return true;
  if (re.e.length) {
    const w = normForm(f.wrong), r = normForm(f.right);
    const pair = (a, b, x, y) => a.endsWith(x) && b.endsWith(y) && a.slice(0, -x.length) === b.slice(0, -y.length) && a.length > x.length;
    if (re.e.some(([x, y]) => pair(w, r, x, y) || pair(r, w, x, y))) return true;
  }
  return false;
}

// ---- Classification ------------------------------------------------------
const rules = parseChecklist();
const precise = rules.filter((r) => !r.fallback);
const fallbacks = rules.filter((r) => r.fallback);
const ruleById = Object.fromEntries(rules.map((r) => [r.id, r]));
const { themes } = loadContent("perso");

const entries = []; // one per sentence
for (const [themeId, t] of Object.entries(themes)) {
  for (const e of t.erreurs || []) {
    const faults = (e.faults && e.faults.length ? e.faults : [e]).map((f) => ({
      wrong: f.wrong, right: f.right, rule: f.rule || e.rule, type: f.type || e.type, notion: f.notion || e.notion,
    }));
    const entry = { theme: themeId, level: e.level, text: e.text, faults: [] };
    for (const f of faults) {
      f.forms = forms(f);
      let ids = precise.filter((r) => matches(r, f)).map((r) => r.id);
      let how = ids.some((id) => ruleById[id].scope !== "famille") ? "rule" : "family";
      if (!ids.length) { ids = fallbacks.filter((r) => matches(r, f)).map((r) => r.id); how = ids.length ? "fallback" : "none"; }
      entry.faults.push({ wrong: f.wrong, right: f.right, type: f.type, notion: f.notion, rule: f.rule, ids, how });
    }
    entry.ids = [...new Set(entry.faults.flatMap((f) => f.ids))];
    entry.how = ["rule", "family", "fallback", "none"].find((h) => entry.faults.some((f) => f.how === h));
    entries.push(entry);
  }
}

// ---- Aggregation ---------------------------------------------------------
const stats = {};
for (const r of rules) stats[r.id] = { count: 0, byLevel: Object.fromEntries(LEVELS.map((l) => [l, 0])), themesByLevel: Object.fromEntries(LEVELS.map((l) => [l, new Set()])) };
for (const e of entries) for (const id of e.ids) {
  const s = stats[id];
  s.count++;
  if (s.byLevel[e.level] !== undefined) { s.byLevel[e.level]++; s.themesByLevel[e.level].add(e.theme); }
}
const levelIndex = (lv) => LEVELS.indexOf(lv) + 1;
const pertinent = (r, lv) => levelIndex(lv) >= r.lo && levelIndex(lv) <= r.hi;
const prioRank = { A: 0, B: 1, C: 2 };
const byPrio = (a, b) => (prioRank[a.prio] - prioRank[b.prio]) || a.lo - b.lo || a.id.localeCompare(b.id);

const missingAll = rules.filter((r) => !r.fallback && r.scope !== "famille" && stats[r.id].count === 0).sort(byPrio);
const missingByLevel = Object.fromEntries(LEVELS.map((lv) => [lv,
  rules.filter((r) => !r.fallback && r.scope !== "famille" && pertinent(r, lv) && stats[r.id].byLevel[lv] === 0).sort(byPrio)]));

const over = [];
for (const r of rules) {
  if (r.scope === "famille" || r.fallback) continue;
  const s = stats[r.id];
  const spread = LEVELS.filter((lv) => s.themesByLevel[lv].size > MAX_THEMES).map((lv) => `${lv} ${s.themesByLevel[lv].size} thèmes`);
  if (s.count > MAX || spread.length) over.push({ id: r.id, count: s.count, spread, byLevel: s.byLevel });
}
over.sort((a, b) => b.count - a.count);

// Repeated trap words: same right form across several themes.
const wordMap = {};
for (const e of entries) for (const f of e.faults) {
  const k = normForm(f.right);
  if (!k) continue;
  (wordMap[k] = wordMap[k] || { word: f.right, n: 0, themes: new Set() }).n++;
  wordMap[k].themes.add(e.theme);
}
// Short grammatical words (a, où, se...) are left to the homophone rules.
const repeated = Object.values(wordMap).filter((w) => w.themes.size >= 3 && (w.word.length > 3 || /[-' ]/.test(w.word))).sort((a, b) => b.themes.size - a.themes.size || b.n - a.n);

const total = entries.length;
const count = (how, lv) => entries.filter((e) => e.how === how && (!lv || e.level === lv)).length;
const pct = (a, b) => (b ? (100 * a / b).toFixed(1) : "0.0") + " %";

// ---- Output --------------------------------------------------------------
if (asJson) {
  const out = {
    rulesCount: rules.length, sentences: total,
    classified: { rule: count("rule"), family: count("family"), fallback: count("fallback"), none: count("none") },
    levels: Object.fromEntries(LEVELS.map((lv) => [lv, {
      sentences: entries.filter((e) => e.level === lv).length,
      rule: count("rule", lv), family: count("family", lv), fallback: count("fallback", lv), none: count("none", lv),
      rulesPertinent: rules.filter((r) => !r.fallback && r.scope !== "famille" && pertinent(r, lv)).length,
      rulesMissing: missingByLevel[lv].map((r) => r.id),
    }])),
    missing: missingAll.map((r) => ({ id: r.id, levels: `${r.lo}-${r.hi}`, prio: r.prio, label: r.label })),
    overRepresented: over,
    repeatedWords: repeated.map((w) => ({ word: w.word, sentences: w.n, themes: [...w.themes] })),
    rules: rules.map((r) => ({ id: r.id, domain: r.domain, levels: `${r.lo}-${r.hi}`, prio: r.prio, scope: r.scope, fallback: r.fallback, count: stats[r.id].count, byLevel: stats[r.id].byLevel })),
    unclassified: entries.filter((e) => e.how === "none").map((e) => ({ theme: e.theme, level: e.level, faults: e.faults.map((f) => ({ wrong: f.wrong, right: f.right, type: f.type, rule: f.rule })) })),
  };
  console.log(JSON.stringify(out, null, 2));
} else if (ruleArg) {
  const ids = rules.filter((r) => r.id === ruleArg || r.id.startsWith(ruleArg)).map((r) => r.id);
  if (!ids.length) console.log(`Aucune règle ne correspond à « ${ruleArg} ».`);
  for (const id of ids) {
    const r = rules.find((x) => x.id === id);
    const list = entries.filter((e) => e.ids.includes(id));
    console.log(`\n${id} (niveaux ${r.lo}-${r.hi}, prio ${r.prio}, ${r.scope}) : ${r.label}`);
    console.log(`${list.length} phrase(s) ; par niveau : ${LEVELS.map((lv) => `${lv} ${stats[id].byLevel[lv]}`).join(", ")}`);
    for (const e of list) {
      const f = e.faults.find((x) => x.ids.includes(id));
      console.log(`  ${e.theme.padEnd(18)} ${e.level.padEnd(13)} ${f.wrong} → ${f.right}  | ${e.text}`);
    }
  }
} else if (showUnclassified) {
  const list = entries.filter((e) => e.how === "none");
  console.log(`${list.length} phrase(s) non classée(s) sur ${total}.`);
  for (const e of list) for (const f of e.faults) console.log(`  ${(f.type || "?").padEnd(11)} ${e.theme.padEnd(18)} ${e.level.padEnd(13)} ${f.wrong} → ${f.right} | ${f.rule}`);
} else {
  console.log(`Couverture des règles : ${rules.length} règles (docs/couverture-regles.md), ${total} phrases, ${Object.keys(themes).length} thèmes.\n`);

  console.log("(a) Règles précises sans aucune phrase, par niveau minimal pertinent");
  for (const lv of LEVELS) {
    const list = missingAll.filter((r) => r.lo === levelIndex(lv));
    if (!list.length) continue;
    console.log(`  ${LEVEL_LABEL[lv]} (${list.length}) :`);
    for (const r of list) console.log(`    [${r.prio}] ${r.id.padEnd(34)} ${r.lo}-${r.hi}  ${r.label.slice(0, 90)}`);
  }
  console.log("\n(a bis) Règles pertinentes sans phrase à ce niveau (prio A, puis nombre en B et C)");
  for (const lv of LEVELS) {
    const list = missingByLevel[lv];
    const a = list.filter((r) => r.prio === "A");
    console.log(`  ${LEVEL_LABEL[lv]} : ${list.length} absentes (A ${a.length}, B ${list.filter((r) => r.prio === "B").length}, C ${list.filter((r) => r.prio === "C").length})`);
    if (a.length) console.log("    A : " + a.map((r) => r.id).join(", "));
  }

  console.log(`\n(b) Règles surreprésentées (plus de ${MAX} phrases, ou plus de ${MAX_THEMES} thèmes à un même niveau)`);
  for (const o of over.slice(0, 40)) console.log(`  ${o.id.padEnd(34)} ${String(o.count).padStart(4)}  ${LEVELS.map((lv) => o.byLevel[lv]).join("/")}${o.spread.length ? "  | " + o.spread.join(", ") : ""}`);
  if (over.length > 40) console.log(`  ... ${over.length - 40} autre(s), voir --json`);
  console.log("\n(b bis) Mots justes répétés dans au moins 3 thèmes");
  for (const w of repeated.slice(0, 30)) console.log(`  ${w.word.padEnd(24)} ${w.n} phrase(s), ${w.themes.size} thèmes : ${[...w.themes].join(", ")}`);

  console.log("\n(c) Classement des phrases");
  console.log(`  règle précise : ${count("rule")} (${pct(count("rule"), total)}) ; famille large seulement : ${count("family")} (${pct(count("family"), total)}) ; repli par type seul : ${count("fallback")} (${pct(count("fallback"), total)}) ; non classées : ${count("none")} (${pct(count("none"), total)})`);
  console.log("  détail : node tools/couverture.mjs --unclassified");

  console.log("\n(d) Résumé par niveau");
  for (const lv of LEVELS) {
    const n = entries.filter((e) => e.level === lv).length;
    const pert = rules.filter((r) => !r.fallback && r.scope !== "famille" && pertinent(r, lv));
    const covered = pert.filter((r) => stats[r.id].byLevel[lv] > 0).length;
    console.log(`  ${LEVEL_LABEL[lv].padEnd(15)} ${String(n).padStart(4)} phrases ; règles pertinentes couvertes ${covered}/${pert.length} (${pct(covered, pert.length)}) ; règle précise ${pct(count("rule", lv), n)}, famille ${pct(count("family", lv), n)}, repli ${pct(count("fallback", lv), n)}, non classées ${pct(count("none", lv), n)}`);
  }
  console.log("\nOptions : --json, --rule <id>, --unclassified, --max <n>, --themes <n>.");
}
process.exitCode = 0;
