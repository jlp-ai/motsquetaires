// Assembles the deployable site in _site/: the app files and only the audio clips the manifest lists
// (orphan clips of edited texts stay out of the deployment). Used by vercel.json and the Pages workflow.
// The punctuation-spoken clip variants are left out (the browser voice is the fallback) to keep the
// deployment under the 100 MB limit of the free plan.
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
fs.mkdirSync(path.join(out, "audio"), { recursive: true });
for (const f of ["index.html", "style.css", "app.js", "correction.js", "speech.js", "names.js", "config.js", "progress.js", "manifest.webmanifest"]) {
  fs.copyFileSync(path.join(root, f), path.join(out, f));
}
copyDir(path.join(root, "content"), path.join(out, "content"));
copyDir(path.join(root, "icons"), path.join(out, "icons"));

const win = {};
new Function("window", fs.readFileSync(path.join(root, "audio", "manifest.js"), "utf8"))(win);
const kept = {};
for (const [key, file] of Object.entries(win.CLIPS)) if (!/^(normal|slow)\+punct\|/.test(key)) kept[key] = file;
fs.writeFileSync(path.join(out, "audio", "manifest.js"), "window.CLIPS = " + JSON.stringify(kept) + ";\n");

let bytes = 0;
const files = new Set(Object.values(kept));
for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
  bytes += fs.statSync(path.join(out, file)).size;
}
console.log(`Site assemblé dans _site/ : ${files.size} clips (${(bytes / 1e6).toFixed(1)} Mo).`);
