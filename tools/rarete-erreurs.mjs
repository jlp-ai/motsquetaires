// Rarity check for lexique-type erreurs items (right word frequency on Lexique 3.83).
// Usage: node tools/rarete-erreurs.mjs [theme ...]
import { readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { wordFreq } from "./rarete.mjs";
import { loadContent } from "./content.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Frequency thresholds (occ/million) by level for lexique items
const THRESHOLD = {
  apprenti: Infinity,      // no constraint (common words OK)
  compagnon: 100,          // fairly common
  maitre: 50,              // rare
  "grand-scribe": 10       // very rare
};

function main() {
  const args = process.argv.slice(2);
  const allIds = readdirSync(join(root, "content"))
    .filter((f) => f.endsWith(".js") && f !== "metas.js" && f !== "types.js")
    .map((f) => f.slice(0, -3));
  const ids = args.length ? args : allIds;

  const { themes } = loadContent();
  let totalChecked = 0;
  let totalFailed = 0;
  const problems = [];

  for (const id of ids) {
    const theme = themes[id];
    if (!theme) continue;

    for (const item of theme.erreurs) {
      // Extract lexique faults (item-level or multi-fault)
      const faults = item.faults || [item];
      const lexiqueFaults = faults.filter((f) => (f.type || item.type) === "lexique");

      if (!lexiqueFaults.length) continue;

      for (const fault of lexiqueFaults) {
        totalChecked++;
        const word = fault.right.toLowerCase();
        const f = wordFreq(word);
        const threshold = THRESHOLD[item.level];
        const ok = f <= threshold;

        if (!ok) {
          totalFailed++;
          const excerpt = item.text.slice(0, 50) + (item.text.length > 50 ? "..." : "");
          problems.push({ id, level: item.level, word, freq: f, threshold, excerpt });
          console.log(
            `FAIL ${id.padEnd(16)} ${item.level.padEnd(13)} ` +
            `"${word}" freq=${f.toFixed(1)}/M (seuil ${threshold}/M) | ${excerpt}`
          );
        }
      }
    }
  }

  console.log();
  console.log(`Vérifié: ${totalChecked} mots lexique | Échecs: ${totalFailed}`);

  if (totalFailed > 0) {
    console.log();
    console.log("=== Résumé par thème ===");
    const byTheme = {};
    for (const p of problems) {
      byTheme[p.id] = byTheme[p.id] || [];
      byTheme[p.id].push(p);
    }
    for (const [id, items] of Object.entries(byTheme)) {
      console.log(`${id}: ${items.length} mots trop courants`);
      const byLevel = {};
      for (const item of items) {
        byLevel[item.level] = byLevel[item.level] || [];
        byLevel[item.level].push(item.word);
      }
      for (const [level, words] of Object.entries(byLevel)) {
        console.log(`  ${level}: ${words.join(", ")}`);
      }
    }
  }

  process.exitCode = totalFailed ? 1 : 0;
}

main();
