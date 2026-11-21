// Progress, badges and weak points, kept in localStorage (never sent anywhere).
// A "weak point" is a rule the player missed: key = note.type || note.rule of Trouve l'erreur items. A `type` field on content items, when present, groups
// different sentences under one error type; without it the rule text is the key.
(function (root) {
  var PKEY = "dictees.profiles", LEGACY = "dictees.progress";
  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lw(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  var profiles = null;
  // Several players on one device: each has its own progress, badges, weak points and level.
  function loadProfiles() {
    if (profiles) return profiles;
    try { profiles = JSON.parse(ls(PKEY)); } catch (e) { profiles = null; }
    if (!profiles || !profiles.list || !profiles.list.length) {
      profiles = { cur: "p1", list: [{ id: "p1", name: "Joueur 1" }] };
      var old = ls(LEGACY); if (old) lw(LEGACY + ".p1", old); // the existing progress goes to the first player
      var lvl = ls("dictees.level"); if (lvl) lw("dictees.pref.p1.level", lvl);
      lw(PKEY, JSON.stringify(profiles));
    }
    return profiles;
  }
  function saveProfiles() { lw(PKEY, JSON.stringify(profiles)); }
  function key() { return LEGACY + "." + loadProfiles().cur; }
  function current() { var p = loadProfiles(); return p.list.filter(function (x) { return x.id === p.cur; })[0] || p.list[0]; }
  function players() { return loadProfiles().list; }
  function cleanName(n, fallback) { return (n || "").replace(/s+/g, " ").trim().slice(0, 20) || fallback; }
  function addPlayer(name) {
    var p = loadProfiles(), id = "p" + Date.now().toString(36);
    p.list.push({ id: id, name: cleanName(name, "Joueur " + (p.list.length + 1)) });
    p.cur = id; mem = null; saveProfiles();
  }
  function switchTo(id) { var p = loadProfiles(); if (p.list.some(function (x) { return x.id === id; })) { p.cur = id; mem = null; saveProfiles(); } }
  function renamePlayer(id, name) { var p = loadProfiles(); p.list.forEach(function (x) { if (x.id === id) x.name = cleanName(name, x.name); }); saveProfiles(); }
  function removePlayer(id) {
    var p = loadProfiles();
    if (p.list.length < 2) return false;
    p.list = p.list.filter(function (x) { return x.id !== id; });
    try { localStorage.removeItem(LEGACY + "." + id); localStorage.removeItem("dictees.pref." + id + ".level"); } catch (e) { /* ignore */ }
    if (p.cur === id) { p.cur = p.list[0].id; mem = null; }
    saveProfiles();
    return true;
  }
  function pref(k, def) { return ls("dictees.pref." + loadProfiles().cur + "." + k) || def; }
  function setPref(k, v) { lw("dictees.pref." + loadProfiles().cur + "." + k, v); }
  var RANKS = [
    { xp: 0, name: "Curieux" }, { xp: 120, name: "Appliqué" }, { xp: 350, name: "Plume sûre" },
    { xp: 800, name: "Érudit" }, { xp: 1600, name: "Grand scribe" }
  ];
  var BADGES = [
    { id: "premier-pas", name: "Premier pas", how: "Terminer un premier exercice." },
    { id: "oeil-de-lynx", name: "Œil de lynx", how: "Trouver 10 erreurs du premier coup." },
    { id: "serie-5", name: "Série de 5", how: "Enchaîner 5 bonnes réponses à Trouve l'erreur." },
    { id: "explorateur", name: "Explorateur", how: "Jouer dans 3 thèmes différents." },
    { id: "globe-trotteur", name: "Globe-trotteur", how: "Jouer dans 8 thèmes différents." },
    { id: "assidu", name: "Assidu", how: "Jouer 3 jours différents." },
    { id: "expert", name: "Expert", how: "Terminer un exercice au niveau Expert." },
    { id: "reviseur", name: "Réviseur", how: "Maîtriser un point à réviser." },
    { id: "centurion", name: "Centurion", how: "Terminer 100 exercices." }
  ];

  var mem = null;
  function empty() { return { xp: 0, played: 0, perfect: 0, found: 0, bestStreak: 0, streak: 0, days: [], themes: {}, levels: {}, weak: {}, mastered: 0, badges: {} }; }
  function load() {
    if (mem) return mem;
    try { mem = JSON.parse(localStorage.getItem(key())) || empty(); } catch (e) { mem = empty(); }
    return mem;
  }
  function save() { try { localStorage.setItem(key(), JSON.stringify(mem)); } catch (e) { /* ignore */ } }

  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return "i" + (h >>> 0).toString(36); }

  // Gives each content item a stable id, its theme and its game kind.
  function annotate(themes) {
    Object.keys(themes).forEach(function (t) {
      (themes[t].erreurs || []).forEach(function (it) { it._id = hash(it.text); it._theme = t; it._kind = "erreur"; });
    });
  }

  function rankOf(xp) {
    var i = 0;
    while (i + 1 < RANKS.length && xp >= RANKS[i + 1].xp) i++;
    var next = RANKS[i + 1];
    return { name: RANKS[i].name, next: next ? next.name : null, from: RANKS[i].xp, to: next ? next.xp : RANKS[i].xp, xp: xp };
  }

  function earn(p, id, out) { if (!p.badges[id]) { p.badges[id] = new Date().toISOString().slice(0, 10); out.push(BADGES.filter(function (b) { return b.id === id; })[0]); } }

  // r: { kind, item, ok (whole item right first time), points, notes: [{key, label, ok}] }
  function record(r) {
    var p = load(), out = [], day = new Date().toISOString().slice(0, 10);
    p.played++;
    p.xp += 10 + (r.ok ? 10 : 0) + (r.points || 0);
    p.themes[r.item._theme] = (p.themes[r.item._theme] || 0) + 1;
    p.levels[r.item.level] = (p.levels[r.item.level] || 0) + 1;
    if (p.days.indexOf(day) < 0) p.days.push(day);
    if (r.kind === "erreur") {
      p.streak = r.ok ? p.streak + 1 : 0;
      p.bestStreak = Math.max(p.bestStreak, p.streak);
      if (r.ok) p.found++;
    }
    (r.notes || []).forEach(function (n) {
      var w = p.weak[n.key];
      if (n.ok) {
        if (w) { w.ok++; if (w.ok >= 2) { delete p.weak[n.key]; p.mastered++; earn(p, "reviseur", out); } }
      } else {
        w = p.weak[n.key] = p.weak[n.key] || { label: n.label, themes: {}, count: 0, ok: 0, last: day };
        w.count++; w.ok = 0; w.last = day; w.themes[r.item._theme] = 1;
      }
    });
    earn(p, "premier-pas", out);
    if (p.found >= 10) earn(p, "oeil-de-lynx", out);
    if (p.bestStreak >= 5) earn(p, "serie-5", out);
    if (Object.keys(p.themes).length >= 3) earn(p, "explorateur", out);
    if (Object.keys(p.themes).length >= 8) earn(p, "globe-trotteur", out);
    if (p.days.length >= 3) earn(p, "assidu", out);
    if (r.item.level === "grand-scribe") earn(p, "expert", out);
    if (p.played >= 100) earn(p, "centurion", out);
    save();
    return out;
  }

  // With `themes`, entries no item tests any more (e.g. old dictation notes) are left out.
  function weakList(themes) {
    var p = load();
    return Object.keys(p.weak).filter(function (k) { return !themes || itemsFor(themes, k).length; }).map(function (k) { return { key: k, w: p.weak[k] }; })
      .sort(function (a, b) { return b.w.count - a.w.count || (a.w.last < b.w.last ? 1 : -1); });
  }

  // Items (any theme) testing the given weak key, the failed ones first.
  function itemsFor(themes, key, level) {
    var all = [];
    Object.keys(themes).forEach(function (t) {
      (themes[t].erreurs || []).forEach(function (e) { if ([e.type, e.rule].concat((e.faults || []).map(function (f) { return f.type || f.rule; })).indexOf(key) >= 0) all.push(e); });
    });
    var inLevel = all.filter(function (it) { return it.level === level; });
    return (inLevel.length ? inLevel : all);
  }

  var api = { current: current, players: players, addPlayer: addPlayer, switchTo: switchTo, renamePlayer: renamePlayer, removePlayer: removePlayer, pref: pref, setPref: setPref, RANKS: RANKS, BADGES: BADGES, load: load, record: record, annotate: annotate, rankOf: rankOf, weakList: weakList, itemsFor: itemsFor, hash: hash };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Progress = api;
})(typeof window !== "undefined" ? window : globalThis);
