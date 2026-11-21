// Assembles the deployable site in _site/ (app files, content, icons). Used by vercel.json and the Pages workflow.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "_site");

// Manual recursive copy (fs.cpSync misbehaves on some synced folders).
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name), b = path.join(to, e.name);
    if (e.isDirectory()) copyDir(a, b); else fs.copyFileSync(a, b);
  }
}

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const f of ["index.html", "style.css", "app.js", "names.js", "config.js", "progress.js", "manifest.webmanifest"]) {
  fs.copyFileSync(path.join(root, f), path.join(out, f));
}
copyDir(path.join(root, "content"), path.join(out, "content"));
copyDir(path.join(root, "icons"), path.join(out, "icons"));

console.log("Site assemblé dans _site/.");
