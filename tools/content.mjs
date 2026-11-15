// Shared content loader for the tools. Applies the proper-name mode like the browser does.
// mode: "perso" | "commercial" | "raw" (markup left as is). Default: NAMES_MODE env, else config.js.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const Names = createRequire(import.meta.url)(path.join(root, "names.js"));
const NON_THEME = ["metas.js", "pronunciations.js"];

export function currentMode() {
  if (process.env.NAMES_MODE) return process.env.NAMES_MODE;
  const m = fs.readFileSync(path.join(root, "config.js"), "utf8").match(/NAMES_MODE\s*=\s*"(\w+)"/);
  return m ? m[1] : "perso";
}

function run(file) {
  const win = {};
  new Function("window", fs.readFileSync(path.join(root, file), "utf8"))(win);
  return win;
}

export function loadContent(mode = currentMode()) {
  const themes = {};
  for (const f of fs.readdirSync(path.join(root, "content"))) {
    if (!f.endsWith(".js") || NON_THEME.includes(f)) continue;
    Object.assign(themes, run("content/" + f).THEMES);
  }
  const metas = run("content/metas.js").METAS;
  const pron = run("content/pronunciations.js").PRON || {};
  if (mode !== "raw") { Names.resolveDeep(themes, mode); Names.resolveDeep(metas, mode); }
  return { themes, metas, pron, mode };
}

export { Names, root };
