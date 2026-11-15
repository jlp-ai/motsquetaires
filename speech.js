// Pure speech helpers shared by the browser app and tools/clips.mjs.
// Keep the breath-group logic here only: the pre-generated clips and the browser
// fallback voice must cut the text the same way.
(function (root) {
  var PUNCT_NAMES = { ",": "virgule", ".": "point", ";": "point-virgule", ":": "deux-points", "!": "point d'exclamation", "?": "point d'interrogation", "…": "points de suspension" };

  // Cuts a text into breath groups: strong stop at . ! ? … ; :  and weak stop at a comma
  // once the group holds 5 words or more.
  function breathGroups(text) {
    var pieces = text.replace(/\s+/g, " ").match(/[^,.;:!?…]+[,.;:!?…]*/g) || [text];
    var groups = [], acc = "";
    pieces.forEach(function (p) {
      acc += (acc ? " " : "") + p.trim();
      var strong = /[.;:!?…]$/.test(p.trim());
      var words = (acc.match(/[\p{L}]+/gu) || []).length;
      if (strong || (/,$/.test(p.trim()) && words >= 5)) { groups.push({ text: acc, strong: strong }); acc = ""; }
    });
    if (acc) groups.push({ text: acc, strong: true });
    return groups;
  }

  // dict: { word: { say, ipa } }. Replaces a word by its respelling (browser voice).
  function respell(text, dict) {
    dict = dict || {};
    return text.replace(/[\p{L}]+/gu, function (w) {
      var e = dict[w.toLowerCase()];
      return e && e.say ? e.say : w;
    });
  }

  // Announces punctuation marks aloud ("virgule", "point").
  function announce(text) {
    return text.replace(/[,.;:!?…]/g, function (m) { return ", " + PUNCT_NAMES[m] + ", "; });
  }

  // Clip key: mode is "normal" or "slow", with "+punct" when punctuation is spoken.
  function clipKey(text, mode) { return mode + "|" + text.replace(/\s+/g, " ").trim(); }

  var api = { breathGroups: breathGroups, respell: respell, announce: announce, clipKey: clipKey, PUNCT_NAMES: PUNCT_NAMES };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Speech = api;
})(typeof window !== "undefined" ? window : globalThis);
