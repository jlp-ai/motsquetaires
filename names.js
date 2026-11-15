// Proper-name switch. Content may mark a name that has a neutral stand-in:
//   {{Star Wars|Space opera}}   personal mode shows "Star Wars", commercial mode shows "Space opera".
// The mode lives in config.js (window.NAMES_MODE = "perso" | "commercial").
// Loaded after the content files: resolves window.THEMES and window.METAS in place, so the rest
// of the app, the speech clips and the checks never see the markup.
(function (root) {
  var RE = /\{\{([^|{}]+)\|([^{}]+)\}\}/g;

  function resolve(s, mode) {
    return s.replace(RE, function (_, name, stand) { return mode === "commercial" ? stand : name; });
  }

  function resolveDeep(v, mode) {
    if (typeof v === "string") return resolve(v, mode);
    if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) v[i] = resolveDeep(v[i], mode); return v; }
    if (v && typeof v === "object") { for (var k in v) v[k] = resolveDeep(v[k], mode); return v; }
    return v;
  }

  // Lists every marker found in a value: [{ name, stand }]
  function markers(v, out) {
    out = out || [];
    if (typeof v === "string") {
      var m, re = new RegExp(RE.source, "g");
      while ((m = re.exec(v))) out.push({ name: m[1], stand: m[2] });
    } else if (Array.isArray(v)) v.forEach(function (x) { markers(x, out); });
    else if (v && typeof v === "object") for (var k in v) markers(v[k], out);
    return out;
  }

  var api = { resolve: resolve, resolveDeep: resolveDeep, markers: markers };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else {
    root.Names = api;
    var mode = root.NAMES_MODE || "perso";
    if (root.THEMES) resolveDeep(root.THEMES, mode);
    if (root.METAS) resolveDeep(root.METAS, mode);
  }
})(typeof window !== "undefined" ? window : globalThis);
