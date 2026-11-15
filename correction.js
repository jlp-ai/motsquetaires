// Pure dictation correction: token-level LCS diff. Usable in browser and node.
(function (root) {
  function normalize(s) {
    return s.replace(/[’‘]/g, "'").replace(/ /g, " ");
  }

  function tokenize(s) {
    return normalize(s).match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*'?|[^\s\p{L}\p{N}]/gu) || [];
  }

  function isWord(t) {
    return /[\p{L}\p{N}]/u.test(t);
  }

  // Returns one entry per reference token: { ref, ok, given }
  function correct(reference, answer) {
    var a = tokenize(reference);
    var b = tokenize(answer);
    var n = a.length, m = b.length, i, j;
    var dp = [];
    for (i = 0; i <= n; i++) dp.push(new Array(m + 1).fill(0));
    for (i = n - 1; i >= 0; i--) {
      for (j = m - 1; j >= 0; j--) {
        dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
    var out = [];
    i = 0; j = 0;
    while (i < n) {
      if (j < m && a[i] === b[j]) {
        out.push({ ref: a[i], ok: true });
        i++; j++;
      } else if (j < m && dp[i + 1][j] === dp[i][j + 1]) {
        // substitution: pair the two diverging tokens
        out.push({ ref: a[i], ok: false, given: b[j] });
        i++; j++;
      } else if (j < m && dp[i][j + 1] > dp[i + 1][j]) {
        j++; // extra token typed by the player
      } else {
        out.push({ ref: a[i], ok: false, given: null });
        i++;
      }
    }
    return out;
  }

  function score(result) {
    var words = result.filter(function (r) { return isWord(r.ref); });
    var ok = words.filter(function (r) { return r.ok; }).length;
    return { ok: ok, total: words.length };
  }

  var api = { tokenize: tokenize, correct: correct, score: score, isWord: isWord };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Correction = api;
})(typeof window !== "undefined" ? window : globalThis);
