(function () {
  var LEVELS = [
    { id: "apprenti", name: "Facile", hint: "CM1, CM2, 6e", n: 1 },
    { id: "compagnon", name: "Moyen", hint: "5e, 4e, 3e", n: 2 },
    { id: "maitre", name: "Difficile", hint: "Adulte cultivé", n: 3 },
    { id: "grand-scribe", name: "Expert", hint: "Niveau championnat", n: 4 }
  ];
  var THEME_COLORS = {
    psg: "#1d3f8f", kpop: "#d63a95", jeuxvideo: "#6d45e8", youtube: "#d92f26",
    manga: "#e8740c", series: "#0b8f94", ia: "#2a8f62"
  };
  var app = document.getElementById("app");
  var state = { level: Progress.pref("level", "apprenti"), game: null, theme: null, streak: 0 };

  var ICONS = {
    back: "<svg class='ico' viewBox='0 0 24 24'><path d='M15 5l-7 7 7 7'/></svg>",
    search: "<svg class='ico' viewBox='0 0 24 24'><circle cx='11' cy='11' r='6.5'/><path d='M16 16l5 5'/></svg>",
    check: "<svg class='ico' viewBox='0 0 24 24'><path d='M5 12.5l4.5 4.5L19 7.5'/></svg>",
    cross: "<svg class='ico' viewBox='0 0 24 24'><path d='M6 6l12 12M18 6L6 18'/></svg>",
    logo: "<svg viewBox='0 0 48 48' aria-hidden='true'><rect x='3' y='3' width='42' height='42' rx='12' fill='var(--accent)'/><path d='M14 33l3.5-1 14-14a2.4 2.4 0 0 0-3.4-3.4l-14 14z' fill='#fff'/><path d='M14 36h20' stroke='var(--pen)' stroke-width='2.6' stroke-linecap='round'/></svg>"
  };

  function load(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function shuffle(list) { return list.slice().sort(function () { return Math.random() - 0.5; }); }
  function level(id) { return LEVELS.filter(function (l) { return l.id === id; })[0]; }
  function themeColor(k) { return THEME_COLORS[k] || "#1b2a6b"; }

  // Renders a screen inside a common shell (top bar + animated container).
  function screen(opts, body) {
    var pill = opts.streak && state.streak > 0 ? "<span class='pill'>Série <b>" + state.streak + "</b></span>" : "";
    app.innerHTML =
      "<div class='screen'><div class='top'>" +
      (opts.back ? "<button class='back' id='back'>" + ICONS.back + "Retour</button>" : "<span></span>") + pill + "</div>" + body + "</div>";
    if (opts.back) document.getElementById("back").onclick = opts.back;
    window.scrollTo(0, 0);
  }

  function home() {
    var dots = function (n) {
      var s = "";
      for (var i = 1; i <= 4; i++) s += "<i class='" + (i <= n ? "on" : "") + "'></i>";
      return "<span class='dots'>" + s + "</span>";
    };
    var cur = level(state.level);
    screen({},
      "<div class='logo'>" + ICONS.logo + "<div class='name'><span>Dictées</span></div></div>" +
      "<p class='tagline'>Quatre niveaux, des thèmes d'aujourd'hui.</p>" + playerChip() + rankStrip() +
      "<h2>Niveau</h2><div class='levels'>" +
      LEVELS.map(function (l) {
        return "<button class='level lv-" + l.n + "' data-level='" + l.id + "' aria-pressed='" + (l.id === state.level) + "'>" +
          "<span class='nm'>" + l.name + "</span>" + dots(l.n) + "</button>";
      }).join("") + "</div>" +
      "<p class='level-hint' id='hint'>" + esc(cur.hint) + "</p>" +
      "<h2>Jouer</h2><div class='grid'>" +
      "<button class='game g-erreur' data-game='erreur'><span class='badge'>" + ICONS.search + "</span><span><b>Trouve l'erreur</b><small>Repérer le mot fautif dans la phrase</small></span></button></div>");
    app.querySelectorAll("[data-level]").forEach(function (b) {
      b.onclick = function () { state.level = b.dataset.level; Progress.setPref("level", state.level); home(); };
    });
    app.querySelectorAll("[data-game]").forEach(function (b) {
      b.onclick = function () { state.game = "erreur"; state.streak = 0; themeMenu(); };
    });
    document.getElementById("carnet").onclick = carnet;
    document.getElementById("players").onclick = playersScreen;
  }

  // Metas actually available: declared metas (existing themes only) plus a
  // fallback "Autres" for any theme no meta claims.
  function metas() {
    var themes = window.THEMES, claimed = {};
    var list = (window.METAS || []).map(function (m) {
      var ids = m.themes.filter(function (id) { return themes[id]; });
      ids.forEach(function (id) { claimed[id] = true; });
      return { id: m.id, name: m.name, emoji: m.emoji, color: m.color, themes: ids };
    }).filter(function (m) { return m.themes.length; });
    var rest = Object.keys(themes).filter(function (id) { return !claimed[id]; });
    if (rest.length) list.push({ id: "autres", name: "Autres", emoji: "✨", color: "#1b2a6b", themes: rest });
    return list;
  }

  function tile(attrs, color, emoji, name, extra) {
    return "<button class='theme' style='--t:" + color + "' " + attrs + "><span class='em'>" + emoji + "</span><span class='tn'>" + esc(name) + "</span>" +
      (extra ? "<span class='tc'>" + extra + "</span>" : "") + "</button>";
  }

  function themeMenu() {
    var all = metas();
    screen({ back: home },
      "<h1>Trouve l'erreur</h1>" +
      "<p class='sub'>Niveau " + level(state.level).name.toLowerCase() + ". Choisissez un univers.</p>" +
      "<h2>Univers</h2><div class='grid two'>" +
      all.map(function (m) {
        return tile("data-meta='" + m.id + "'", m.color, m.emoji, m.name, m.themes.length > 1 ? m.themes.length + " thèmes" : "");
      }).join("") +
      "<button class='theme surprise' data-theme='*'><span class='em'>🎲</span><span class='tn'>Surprise</span></button></div>");
    app.querySelectorAll("[data-meta]").forEach(function (b) {
      b.onclick = function () {
        var m = all.filter(function (x) { return x.id === b.dataset.meta; })[0];
        state.metaOf = null; if (m.themes.length === 1) { state.theme = m.themes[0]; play(); } else subMenu(m);
      };
    });
    app.querySelector("[data-theme='*']").onclick = function () { state.theme = "*"; state.metaOf = null; play(); };
  }

  function subMenu(m) {
    var themes = window.THEMES;
    screen({ back: themeMenu },
      "<h1>" + esc(m.name) + "</h1><p class='sub'>Niveau " + level(state.level).name.toLowerCase() + ". Choisissez un thème.</p>" +
      "<h2>Thème</h2><div class='grid two'>" +
      m.themes.map(function (k) {
        return tile("data-theme='" + k + "'", themeColor(k), themes[k].emoji, themes[k].name);
      }).join("") +
      "<button class='theme surprise' style='background:" + m.color + "' data-theme='meta:" + m.id + "'><span class='em'>🎲</span><span class='tn'>Tout " + esc(m.name.toLowerCase()) + "</span></button></div>");
    app.querySelectorAll("[data-theme]").forEach(function (b) {
      b.onclick = function () { state.theme = b.dataset.theme; state.metaOf = m; play(); };
    });
  }

  function themesBack() { if (state.metaOf) subMenu(state.metaOf); else themeMenu(); }

  function themeKeys() {
    if (state.theme === "*") return Object.keys(window.THEMES);
    if (state.theme.indexOf("meta:") === 0) {
      var id = state.theme.slice(5);
      var m = metas().filter(function (x) { return x.id === id; })[0];
      return m ? m.themes : [];
    }
    return [state.theme];
  }

  function pool() {
    var keys = themeKeys();
    var items = [];
    keys.forEach(function (k) {
      (window.THEMES[k].erreurs || []).forEach(function (it) {
        if (it.level === state.level) items.push(it);
      });
    });
    return items;
  }

  var last = null;
  function play() {
    if (state.review) {
      if (!state.review.length) { state.review = null; carnet(); return; }
      last = state.review.shift();
      state.game = "erreur";
      erreur(last);
      return;
    }
    var items = pool();
    if (items.length > 1) items = items.filter(function (it) { return it !== last; });
    if (!items.length) {
      screen({ back: themesBack }, "<div class='card'>Pas encore de contenu pour ce niveau.</div>");
      return;
    }
    last = pick(items);
    erreur(last);
  }

  function confetti() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colors = ["#d8362f", "#2f6bff", "#1f9d57", "#e68a00", "#c1347a"];
    var box = document.createElement("div");
    box.className = "confetti";
    for (var i = 0; i < 22; i++) {
      var p = document.createElement("i");
      p.style.setProperty("--c", colors[i % colors.length]);
      p.style.setProperty("--x", (Math.random() * 320 - 160) + "px");
      p.style.setProperty("--y", (Math.random() * 360 + 40) + "px");
      p.style.setProperty("--r", (Math.random() * 720 - 360) + "deg");
      box.appendChild(p);
    }
    document.body.appendChild(box);
    setTimeout(function () { box.remove(); }, 1300);
  }

  // ---------- Game: find the wrong word ----------
  // An item has either one fault (wrong, right, choices, rule) or several (faults: [{ wrong, right, choices, rule, type? }]).
  function faultsOf(item) {
    return item.faults || [{ wrong: item.wrong, right: item.right, choices: item.choices, rule: item.rule, type: item.type }];
  }

  function erreur(item) {
    var tokens = item.text.split(" ");
    var faults = faultsOf(item);
    var multi = faults.length > 1;
    var fixed = {};      // token index -> fault, once found
    var results = [];    // { fault, ok } in order of discovery
    var failed = false;
    function strip(t) { return t.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ""); }
    // Same, also without an elided article (l', d', qu'...) glued to the word: "l'estocade" matches "estocade".
    function stripEl(t) { return strip(t).replace(/^(?:[ldjmtsnc]|qu|lorsqu|puisqu|jusqu)['’]/i, ""); }
    function faultAt(i) {
      for (var k = 0; k < faults.length; k++) {
        if (results.some(function (r) { return r.fault === faults[k]; })) continue;
        if (strip(tokens[i]) === faults[k].wrong || stripEl(tokens[i]) === faults[k].wrong) return faults[k];
      }
      return null;
    }
    function remaining() { return faults.length - results.length; }

    function sentence(chosen, done) {
      return "<div class='card sentence' role='group' aria-label='Phrase'>" + tokens.map(function (t, i) {
        var f = fixed[i];
        var cls = "tok" + (i === chosen ? " chosen" : "") + (f ? " fixed" : "");
        var txt = f ? t.replace(f.wrong, f.right) : t;
        return "<button class='" + cls + "' data-i='" + i + "'" + (done || f ? " disabled" : "") + ">" + esc(txt) + "</button>";
      }).join(" ") + "</div>";
    }

    function intro() {
      return multi ? "Cette phrase contient " + faults.length + " erreurs. Touchez un mot fautif." : "Touchez le mot fautif.";
    }

    function render(chosen, hint, bad) {
      screen({ back: themesBack, streak: true },
        "<h1>Trouve l'erreur</h1><p class='sub'>Niveau " + level(item.level).name.toLowerCase() + "</p>" +
        "<h2>Phrase</h2>" + sentence(chosen) +
        "<p class='hint" + (bad ? " bad" : "") + "' id='hint'>" + (hint || intro()) + "</p><div id='choices'></div>");
      app.querySelectorAll(".tok").forEach(function (el) {
        el.onclick = function () { onPick(+el.dataset.i, el); };
      });
    }

    function onPick(i, el) {
      var f = faultAt(i);
      if (!f) {
        failed = true;
        el.classList.add("nope");
        var h = document.getElementById("hint");
        h.className = "hint bad";
        h.textContent = "Ce mot est correct. Cherchez encore.";
        setTimeout(function () { el.classList.remove("nope"); }, 400);
        return;
      }
      app.querySelectorAll(".tok").forEach(function (t) { t.classList.toggle("chosen", +t.dataset.i === i); });
      var h2 = document.getElementById("hint");
      h2.className = "hint";
      h2.textContent = "Bien repéré. Quelle est la bonne graphie ?";
      var box = document.getElementById("choices");
      box.innerHTML = "<div class='grid' style='margin-top:6px'>" +
        shuffle(f.choices).map(function (c) { return "<button class='btn choice' data-c='" + esc(c) + "'>" + esc(c) + "</button>"; }).join("") + "</div>";
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      box.querySelectorAll("[data-c]").forEach(function (b) {
        b.onclick = function () { onChoice(i, f, b.dataset.c); };
      });
    }

    function onChoice(i, f, c) {
      var ok = c === f.right;
      if (!ok) failed = true;
      results.push({ fault: f, ok: ok && !failed });
      fixed[i] = f;
      if (remaining() > 0) {
        render(null, (ok ? "Bien vu. " : "Presque : « " + f.right + " ». ") + (remaining() === 1 ? "Il reste une erreur." : "Il reste " + remaining() + " erreurs."), !ok);
        return;
      }
      finish();
    }

    function finish() {
      var allOk = !failed;
      state.streak = allOk ? state.streak + 1 : 0;
      var notes = results.map(function (r) {
        var ty = r.fault.type || item.type;
        return { key: ty || r.fault.rule, label: (ty && window.TYPE_LABELS && window.TYPE_LABELS[ty]) || r.fault.rule, ok: r.ok };
      });
      var earned = Progress.record({ kind: "erreur", item: item, ok: allOk, notes: notes });
      var verdict = allOk ? ICONS.check + "Bravo !" : ICONS.cross + "Presque : " + results.filter(function (r) { return !r.ok; }).map(function (r) { return "« " + esc(r.fault.right) + " »"; }).join(", ");
      var tips = faults.map(function (f) { return "<div class='tip'><span>" + esc(f.rule) + "</span></div>"; }).join("");
      screen({ back: themesBack, streak: true },
        "<h1>Trouve l'erreur</h1><p class='sub'>Niveau " + level(item.level).name.toLowerCase() + "</p>" +
        "<div class='verdict " + (allOk ? "good" : "bad") + "' style='margin-top:18px' aria-live='polite'>" + verdict + "</div>" +
        sentence(null, true) +
        "<h2>À retenir</h2>" + tips +
        "<div class='row'><button class='btn primary' id='next'>Phrase suivante</button><button class='btn' id='menu'>Menu</button></div>");
      if (allOk) confetti();
      toastBadges(earned);
      document.getElementById("next").onclick = play;
      document.getElementById("menu").onclick = home;
    }

    render(null);
  }

  // ---------- Progress: rank strip, carnet (badges, points to review), review ----------
  function rankStrip() {
    var p = Progress.load(), r = Progress.rankOf(p.xp);
    var pct = r.next ? Math.round((p.xp - r.from) / (r.to - r.from) * 100) : 100;
    var nWeak = Progress.weakList(window.THEMES).length;
    return "<button class='strip' id='carnet'><span class='strip-top'><b>" + esc(r.name) + "</b><span>" + p.xp + " pts" +
      (nWeak ? " · " + nWeak + " à réviser" : "") + "</span></span><span class='bar'><i style='width:" + pct + "%'></i></span></button>";
  }

  function toastBadges(list) {
    if (!list || !list.length) return;
    var d = document.createElement("div");
    d.className = "toast";
    d.innerHTML = "Badge débloqué : <b>" + list.map(function (b) { return esc(b.name); }).join(", ") + "</b>";
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 3500);
  }

  function startReview(keys) {
    var seen = {}, queue = [];
    keys.forEach(function (k) {
      shuffle(Progress.itemsFor(window.THEMES, k, state.level)).slice(0, 3).forEach(function (it) {
        if (!seen[it._id]) { seen[it._id] = 1; queue.push(it); }
      });
    });
    state.review = queue.slice(0, 8);
    state.streak = 0;
    play();
  }

  function carnet() {
    var p = Progress.load(), r = Progress.rankOf(p.xp), weak = Progress.weakList(window.THEMES);
    var pct = r.next ? Math.round((p.xp - r.from) / (r.to - r.from) * 100) : 100;
    var stat = function (n, t) { return "<div class='stat'><b>" + n + "</b><small>" + t + "</small></div>"; };
    screen({ back: home },
      "<h1>Mon carnet</h1>" +
      "<div class='card rank'><b>" + esc(r.name) + "</b><span class='sub'>" + p.xp + " points" + (r.next ? ", prochain rang : " + esc(r.next) : ", rang maximal") + "</span><span class='bar'><i style='width:" + pct + "%'></i></span></div>" +
      "<div class='stats'>" + stat(p.played, "exercices") + stat(p.found, "erreurs trouvées") + stat(p.bestStreak, "meilleure série") + "</div>" +
      "<h2>À réviser</h2>" +
      (weak.length
        ? "<button class='btn primary block' id='revAll'>Tout réviser</button><ul class='weak'>" + weak.slice(0, 8).map(function (x, i) {
          var names = Object.keys(x.w.themes).map(function (t) { return window.THEMES[t] ? window.THEMES[t].name : t; }).join(", ");
          return "<li><span><b>" + esc(x.w.label) + "</b><small>Manquée " + x.w.count + " fois" + (names ? " · " + esc(names) : "") + "</small></span><button class='btn' data-w='" + i + "'>Réviser</button></li>";
        }).join("") + "</ul>"
        : "<p class='sub'>Rien à réviser pour l'instant. Les règles manquées apparaîtront ici ; deux bonnes réponses d'affilée les retirent.</p>") +
      "<h2>Badges</h2><div class='badges'>" + Progress.BADGES.map(function (b) {
        var on = !!p.badges[b.id];
        return "<div class='badge " + (on ? "on" : "off") + "'><span class='bi'>" + (on ? "★" : "☆") + "</span><b>" + esc(b.name) + "</b><small>" + esc(b.how) + "</small></div>";
      }).join("") + "</div>");
    var all = document.getElementById("revAll");
    if (all) all.onclick = function () { startReview(weak.slice(0, 8).map(function (x) { return x.key; })); };
    app.querySelectorAll("[data-w]").forEach(function (b) {
      b.onclick = function () { startReview([weak[+b.dataset.w].key]); };
    });
  }

  // ---------- Several players on one device ----------
  function playerChip() {
    return "<button class='chip' id='players' aria-label='Changer de joueur'><span class='dot'></span>" + esc(Progress.current().name) + "<span class='chev'>&#9662;</span></button>";
  }

  function playersScreen() {
    var cur = Progress.current(), list = Progress.players();
    screen({ back: home },
      "<h1>Joueurs</h1><p class='sub'>Chaque joueur garde ses points, ses badges, ses règles à réviser et son niveau.</p>" +
      "<ul class='plist'>" + list.map(function (p) {
        return "<li class='" + (p.id === cur.id ? "on" : "") + "'><button class='pname' data-sw='" + p.id + "'>" + (p.id === cur.id ? "&#10003; " : "") + esc(p.name) + "</button>" +
          "<button class='btn' data-rn='" + p.id + "' aria-label='Renommer'>Renommer</button>" +
          (list.length > 1 ? "<button class='btn' data-rm='" + p.id + "' aria-label='Supprimer'>Supprimer</button>" : "") + "</li>";
      }).join("") + "</ul>" +
      "<h2>Nouveau joueur</h2><div class='row'><input class='field' id='newName' maxlength='20' placeholder='Prénom ou surnom' autocomplete='off'><button class='btn primary' id='addP'>Ajouter</button></div>");
    app.querySelectorAll("[data-sw]").forEach(function (b) {
      b.onclick = function () { Progress.switchTo(b.dataset.sw); state.level = Progress.pref("level", "apprenti"); home(); };
    });
    app.querySelectorAll("[data-rn]").forEach(function (b) {
      b.onclick = function () {
        var p = list.filter(function (x) { return x.id === b.dataset.rn; })[0];
        var n = window.prompt("Nouveau nom pour ce joueur :", p.name);
        if (n !== null) { Progress.renamePlayer(p.id, n); playersScreen(); }
      };
    });
    app.querySelectorAll("[data-rm]").forEach(function (b) {
      b.onclick = function () {
        var p = list.filter(function (x) { return x.id === b.dataset.rm; })[0];
        if (window.confirm("Supprimer le joueur « " + p.name + " » et toute sa progression ?")) {
          Progress.removePlayer(p.id); state.level = Progress.pref("level", "apprenti"); playersScreen();
        }
      };
    });
    document.getElementById("addP").onclick = function () {
      Progress.addPlayer(document.getElementById("newName").value);
      state.level = Progress.pref("level", "apprenti");
      home();
    };
  }

  Progress.annotate(window.THEMES);
  home();
})();
