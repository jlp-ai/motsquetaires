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
    ear: "<svg class='ico' viewBox='0 0 24 24'><path d='M4 15v-3a8 8 0 0 1 16 0v3'/><rect x='3' y='14' width='4' height='7' rx='1.5'/><rect x='17' y='14' width='4' height='7' rx='1.5'/></svg>",
    search: "<svg class='ico' viewBox='0 0 24 24'><circle cx='11' cy='11' r='6.5'/><path d='M16 16l5 5'/></svg>",
    play: "<svg class='ico' viewBox='0 0 24 24'><path d='M8 5v14l11-7z'/></svg>",
    check: "<svg class='ico' viewBox='0 0 24 24'><path d='M5 12.5l4.5 4.5L19 7.5'/></svg>",
    cross: "<svg class='ico' viewBox='0 0 24 24'><path d='M6 6l12 12M18 6L6 18'/></svg>",
    wave: "<span class='wave'><i></i><i></i><i></i><i></i></span>",
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
  function stopSpeech() { speechRun++; if (audioEl) { audioEl.pause(); audioEl = null; } if ("speechSynthesis" in window) window.speechSynthesis.cancel(); }
  function themeColor(k) { return THEME_COLORS[k] || "#1b2a6b"; }

  // Renders a screen inside a common shell (top bar + animated container).
  function screen(opts, body) {
    var pill = opts.streak && state.streak > 0 ? "<span class='pill'>Série <b>" + state.streak + "</b></span>" : "";
    app.innerHTML =
      "<div class='screen'><div class='top'>" +
      (opts.back ? "<button class='back' id='back'>" + ICONS.back + "Retour</button>" : "<span></span>") + pill + "</div>" + body + "</div>";
    if (opts.back) document.getElementById("back").onclick = function () { stopSpeech(); opts.back(); };
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
      "<p class='tagline'>Deux jeux, quatre niveaux, des thèmes d'aujourd'hui.</p>" + playerChip() + rankStrip() +
      "<h2>Niveau</h2><div class='levels'>" +
      LEVELS.map(function (l) {
        return "<button class='level lv-" + l.n + "' data-level='" + l.id + "' aria-pressed='" + (l.id === state.level) + "'>" +
          "<span class='nm'>" + l.name + "</span>" + dots(l.n) + "</button>";
      }).join("") + "</div>" +
      "<p class='level-hint' id='hint'>" + esc(cur.hint) + "</p>" +
      "<h2>Jeu</h2><div class='grid'>" +
      "<button class='game g-dictee' data-game='dictee'><span class='badge'>" + ICONS.ear + "</span><span><b>Dictée</b><small>Écouter, écrire, être corrigé</small></span></button>" +
      "<button class='game g-erreur' data-game='erreur'><span class='badge'>" + ICONS.search + "</span><span><b>Trouve l'erreur</b><small>Repérer le mot fautif dans la phrase</small></span></button></div>");
    app.querySelectorAll("[data-level]").forEach(function (b) {
      b.onclick = function () { state.level = b.dataset.level; Progress.setPref("level", state.level); home(); };
    });
    app.querySelectorAll("[data-game]").forEach(function (b) {
      b.onclick = function () { state.game = b.dataset.game; state.streak = 0; themeMenu(); };
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
      "<h1>" + (state.game === "dictee" ? "Dictée" : "Trouve l'erreur") + "</h1>" +
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
    var kind = state.game === "dictee" ? "dictees" : "erreurs";
    var keys = themeKeys();
    var items = [];
    keys.forEach(function (k) {
      (window.THEMES[k][kind] || []).forEach(function (it) {
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
      state.game = last._kind;
      (last._kind === "dictee" ? dictee : erreur)(last);
      return;
    }
    var items = pool();
    if (items.length > 1) items = items.filter(function (it) { return it !== last; });
    if (!items.length) {
      screen({ back: themesBack }, "<div class='card'>Pas encore de contenu pour ce niveau.</div>");
      return;
    }
    last = pick(items);
    (state.game === "dictee" ? dictee : erreur)(last);
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

  // ---------- Game 1: dictation ----------
  var speechRun = 0;
  var audioEl = null;
  // Levels played as a gap-fill text (the player completes the missing words only).
  var CLOZE_LEVELS = { apprenti: true, compagnon: true };

  // Frenchest, most natural voice first: neural ("Natural", "Online") > Google > any fr-FR > any fr.
  function frenchVoices() {
    var score = function (v) {
      return (/Natural|Online/i.test(v.name) ? 4 : 0) + (/Google/i.test(v.name) ? 2 : 0) + (v.lang === "fr-FR" ? 1 : 0);
    };
    return window.speechSynthesis.getVoices().filter(function (v) { return v.lang.indexOf("fr") === 0; })
      .sort(function (a, b) { return score(b) - score(a); });
  }
  function chosenVoice() {
    var list = frenchVoices(), name = load("dictees.voice", "");
    return list.filter(function (v) { return v.name === name; })[0] || list[0];
  }

  // Browser voice fallback. opts: { rate, pause (multiplier), punct }
  function speakBrowser(text, opts, btn) {
    window.speechSynthesis.cancel();
    var run = ++speechRun;
    var groups = Speech.breathGroups(text);
    var voice = chosenVoice();
    var i = 0;
    var off = function () { btn.classList.remove("speaking"); };
    btn.classList.add("speaking");
    (function next() {
      if (run !== speechRun) return;
      if (i >= groups.length) { off(); return; }
      var g = groups[i++];
      var spoken = Speech.respell(g.text, window.PRON);
      if (opts.punct) spoken = Speech.announce(spoken);
      var u = new SpeechSynthesisUtterance(spoken);
      u.lang = "fr-FR";
      u.rate = opts.rate;
      if (voice) u.voice = voice;
      u.onend = function () { setTimeout(next, (g.strong ? 900 : 450) * opts.pause); };
      u.onerror = function () { if (run === speechRun) off(); };
      window.speechSynthesis.speak(u);
    })();
  }

  function clipFor(text, slow, punct) {
    return (window.CLIPS || {})[Speech.clipKey(text, (slow ? "slow" : "normal") + (punct ? "+punct" : ""))];
  }

  // Plays the pre-generated clip when it exists, otherwise the browser voice.
  function playDictation(text, slow, punct, btn) {
    stopSpeech();
    var src = clipFor(text, slow, punct);
    if (src) {
      audioEl = new Audio(src);
      audioEl.onplay = function () { btn.classList.add("speaking"); };
      audioEl.onended = audioEl.onpause = audioEl.onerror = function () { btn.classList.remove("speaking"); };
      audioEl.play().catch(function () { btn.classList.remove("speaking"); });
    } else if ("speechSynthesis" in window) {
      speakBrowser(text, { rate: slow ? 0.68 : 0.9, pause: slow ? 1.6 : 1, punct: punct }, btn);
    }
  }

  function ring(ok, total) {
    var pct = total ? ok / total : 0;
    var c = 2 * Math.PI * 38;
    var color = pct >= 0.9 ? "var(--ok)" : pct >= 0.6 ? "#e68a00" : "var(--pen)";
    return "<svg class='ring' viewBox='0 0 90 90' style='--rc:" + color + "' role='img' aria-label='" + ok + " mots justes sur " + total + "'>" +
      "<circle class='bg' cx='45' cy='45' r='38'/><circle class='fg' cx='45' cy='45' r='38' stroke-dasharray='" + c.toFixed(1) + "' stroke-dashoffset='" + c.toFixed(1) + "' data-to='" + (c * (1 - pct)).toFixed(1) + "'/>" +
      "<text x='45' y='46'>" + Math.round(pct * 100) + "%</text></svg>";
  }

  // Splits the dictation into static text and gaps. A gap is the first whole word
  // matching each note; returns null when fewer than 2 gaps can be placed.
  function buildCloze(item) {
    var words = [], re = /[\p{L}]+(?:-[\p{L}]+)*/gu, m;
    while ((m = re.exec(item.text))) words.push({ w: m[0], at: m.index });
    var gaps = [], seen = {};
    (item.notes || []).forEach(function (n) {
      var key = n.word.toLowerCase();
      if (seen[key]) return;
      var hit = words.filter(function (x) { return x.w.toLowerCase() === key; })[0];
      if (hit) { seen[key] = true; gaps.push({ at: hit.at, word: hit.w, note: n }); }
    });
    if (gaps.length < 2) return null;
    gaps.sort(function (a, b) { return a.at - b.at; });
    var parts = [], pos = 0;
    gaps.forEach(function (g) {
      parts.push({ t: item.text.slice(pos, g.at) });
      parts.push({ gap: g });
      pos = g.at + g.word.length;
    });
    parts.push({ t: item.text.slice(pos) });
    return parts;
  }

  function dictee(item) {
    var hasVoice = "speechSynthesis" in window;
    var hasClip = !!clipFor(item.text, false, false);
    var canPlay = hasVoice || hasClip;
    var parts = CLOZE_LEVELS[item.level] ? buildCloze(item) : null;
    var punct = load("dictees.punct", "0") === "1";
    var gapIdx = 0;
    var body = parts
      ? "<h2>Complétez le texte</h2><div class='card cloze'>" + parts.map(function (p) {
        if (!p.gap) return esc(p.t);
        var n = p.gap.word.length;
        return "<input class='gap' data-k='" + (gapIdx++) + "' style='width:" + Math.max(4, n + 1) + "ch' maxlength='" + (n + 6) + "' autocomplete='off' autocapitalize='off' spellcheck='false' aria-label='Mot manquant " + gapIdx + "'>";
      }).join("") + "</div>"
      : "<h2>Votre texte</h2><textarea class='paper' id='answer' autocomplete='off' autocapitalize='off' spellcheck='false' placeholder='Écrivez ici ce que vous entendez...'></textarea>";
    screen({ back: themesBack },
      "<h1>Dictée</h1><p class='sub'>Niveau " + level(item.level).name.toLowerCase() + "</p>" +
      "<h2>Écoute</h2><div class='card player'>" +
      "<button class='play' id='listen' aria-label='Écouter la dictée'>" + ICONS.play + ICONS.wave + "</button>" +
      "<div class='player-txt'><b>Appuyez pour écouter</b><button class='slow' id='slow'>Plus lentement</button> " +
      "<button class='slow' id='punct'>Ponctuation dite : " + (punct ? "oui" : "non") + "</button></div></div>" +
      (hasVoice && !hasClip ? "<label class='voice'>Voix <select id='voice'></select></label>" : "") +
      (canPlay ? "" : "<p class='hint bad'>Voix indisponible sur ce navigateur : texte affiché ci-dessous.</p><div class='card copy'>" + esc(item.text) + "</div>") +
      body +
      "<div class='row'><button class='btn primary' id='check'>Corriger</button></div><div class='result' id='result' aria-live='polite'></div>");
    var listen = document.getElementById("listen");
    listen.onclick = function () {
      if (listen.classList.contains("speaking")) { stopSpeech(); listen.classList.remove("speaking"); return; }
      playDictation(item.text, false, punct, listen);
    };
    document.getElementById("slow").onclick = function () { playDictation(item.text, true, punct, listen); };
    var pBtn = document.getElementById("punct");
    pBtn.onclick = function () {
      punct = !punct; save("dictees.punct", punct ? "1" : "0");
      pBtn.textContent = "Ponctuation dite : " + (punct ? "oui" : "non");
    };
    var sel = document.getElementById("voice");
    if (sel) {
      var fill = function () {
        var list = frenchVoices(), cur = chosenVoice();
        sel.innerHTML = list.length ? list.map(function (v) {
          return "<option value='" + esc(v.name) + "'" + (cur && v.name === cur.name ? " selected" : "") + ">" + esc(v.name) + "</option>";
        }).join("") : "<option>Voix par défaut</option>";
      };
      fill();
      window.speechSynthesis.onvoiceschanged = fill;
      sel.onchange = function () { save("dictees.voice", sel.value); };
    }
    var inputs = app.querySelectorAll(".gap");
    inputs.forEach(function (inp, k) {
      inp.onkeydown = function (e) {
        if (e.key !== "Enter") return;
        e.preventDefault();
        if (inputs[k + 1]) inputs[k + 1].focus(); else document.getElementById("check").click();
      };
    });
    document.getElementById("check").onclick = function () {
      stopSpeech();
      listen.classList.remove("speaking");
      var out = document.getElementById("result");
      var html, sc, rules, noteResults;
      if (parts) {
        var gaps = parts.filter(function (p) { return p.gap; }).map(function (p) { return p.gap; });
        var wrongWords = {};
        var results = gaps.map(function (g, k) {
          var given = inputs[k].value.replace(/[’‘]/g, "'").trim();
          var ok = given === g.word;
          if (!ok) wrongWords[g.note.word.toLowerCase()] = true;
          return { ok: ok, given: given };
        });
        var gi = 0;
        html = parts.map(function (p) {
          if (!p.gap) return esc(p.t);
          var r = results[gi++];
          return r.ok ? "<span class='w ok'>" + esc(p.gap.word) + "</span>"
            : (r.given ? "<span class='w given'>" + esc(r.given) + "</span> " : "") + "<span class='w ko'>" + esc(p.gap.word) + "</span>";
        }).join("");
        noteResults = gaps.map(function (g, k) { return { key: g.note.type || g.note.rule, label: g.note.rule, ok: results[k].ok }; });
        sc = { ok: results.filter(function (r) { return r.ok; }).length, total: results.length };
        rules = gaps.filter(function (g) { return wrongWords[g.note.word.toLowerCase()]; }).map(function (g) { return g.note; });
      } else {
        var res = Correction.correct(item.text, document.getElementById("answer").value);
        sc = Correction.score(res);
        var wrong = {};
        res.forEach(function (r) { if (!r.ok && Correction.isWord(r.ref)) wrong[r.ref.toLowerCase()] = true; });
        var missed = function (n) { return Object.keys(wrong).some(function (k) { return k.indexOf(n.word.toLowerCase()) >= 0; }); };
        rules = (item.notes || []).filter(missed);
        noteResults = (item.notes || []).map(function (n) { return { key: n.type || n.rule, label: n.rule, ok: !missed(n) }; });
        html = res.map(function (r) {
          var cls = r.ok ? "ok" : "ko";
          var s = (r.given ? "<span class='w given'>" + esc(r.given) + "</span> " : "") + "<span class='w " + cls + "'>" + esc(r.ref) + "</span>";
          // No space before closing punctuation, keeps the copy readable.
          return (/^[,.)…]$/.test(r.ref) ? "" : " ") + s;
        }).join("").trim();
      }
      var pct = sc.total ? sc.ok / sc.total : 0;
      var earned = Progress.record({ kind: "dictee", item: item, ok: pct === 1, perfect: pct === 1, points: sc.ok, notes: noteResults });
      var msg = pct === 1 ? "Sans faute !" : pct >= 0.8 ? "Très bien" : pct >= 0.5 ? "Bon début" : "À retravailler";
      out.innerHTML =
        "<h2>Correction</h2><div class='card score'>" + ring(sc.ok, sc.total) + "<div><b>" + msg + "</b><span class='sub'>" + sc.ok + " mots justes sur " + sc.total + "</span></div></div>" +
        "<div class='card copy' style='margin-top:10px'>" + html + "</div>" +
        (rules.length ? "<h2>À retenir</h2><ul class='rules'>" + rules.map(function (n) { return "<li><b>" + esc(n.word) + "</b>" + (n.rare ? " <span class='tag'>mot rare</span>" : "") + " : " + esc(n.rule) + "</li>"; }).join("") + "</ul>" : "") +
        "<div class='row'><button class='btn primary' id='next'>Autre dictée</button><button class='btn' id='menu'>Menu</button></div>";
      requestAnimationFrame(function () {
        var fg = out.querySelector(".fg");
        if (fg) fg.style.strokeDashoffset = fg.dataset.to;
      });
      if (pct === 1) confetti();
      toastBadges(earned);
      out.scrollIntoView({ behavior: "smooth", block: "start" });
      document.getElementById("next").onclick = play;
      document.getElementById("menu").onclick = home;
    };
  }

  // ---------- Game 2: find the wrong word ----------
  function erreur(item) {
    var tokens = item.text.split(" ");
    var failed = false;
    function strip(t) { return t.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ""); }

    function sentence(chosen, fixedIdx) {
      return "<div class='card sentence' role='group' aria-label='Phrase'>" + tokens.map(function (t, i) {
        var cls = "tok" + (i === chosen ? " chosen" : "") + (i === fixedIdx ? " fixed" : "");
        var txt = i === fixedIdx ? t.replace(item.wrong, item.right) : t;
        return "<button class='" + cls + "' data-i='" + i + "'" + (fixedIdx !== undefined ? " disabled" : "") + ">" + esc(txt) + "</button>";
      }).join(" ") + "</div>";
    }

    function render(chosen, hint, bad) {
      screen({ back: themesBack, streak: true },
        "<h1>Trouve l'erreur</h1><p class='sub'>Niveau " + level(item.level).name.toLowerCase() + "</p>" +
        "<h2>Phrase</h2>" + sentence(chosen) +
        "<p class='hint" + (bad ? " bad" : "") + "' id='hint'>" + (hint || "Touchez le mot fautif.") + "</p><div id='choices'></div>");
      app.querySelectorAll(".tok").forEach(function (el) {
        el.onclick = function () { onPick(+el.dataset.i, el); };
      });
    }

    function onPick(i, el) {
      if (strip(tokens[i]) !== item.wrong) {
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
        shuffle(item.choices).map(function (c) { return "<button class='btn choice' data-c='" + esc(c) + "'>" + esc(c) + "</button>"; }).join("") + "</div>";
      box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      box.querySelectorAll("[data-c]").forEach(function (b) {
        b.onclick = function () { onChoice(i, b.dataset.c); };
      });
    }

    function onChoice(i, c) {
      var ok = c === item.right;
      if (!ok) failed = true;
      state.streak = ok ? state.streak + 1 : 0;
      var firstTry = ok && !failed;
      var earned = Progress.record({ kind: "erreur", item: item, ok: firstTry, notes: [{ key: item.type || item.rule, label: item.rule, ok: firstTry }] });
      screen({ back: themesBack, streak: true },
        "<h1>Trouve l'erreur</h1><p class='sub'>Niveau " + level(item.level).name.toLowerCase() + "</p>" +
        "<div class='verdict " + (ok ? "good" : "bad") + "' style='margin-top:18px' aria-live='polite'>" + (ok ? ICONS.check + "Bravo !" : ICONS.cross + "Presque : « " + esc(item.right) + " »") + "</div>" +
        sentence(null, i) +
        "<h2>À retenir</h2><div class='tip'><span>" + esc(item.rule) + "</span></div>" +
        "<div class='row'><button class='btn primary' id='next'>Phrase suivante</button><button class='btn' id='menu'>Menu</button></div>");
      if (ok) confetti();
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
    var nWeak = Progress.weakList().length;
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
    var p = Progress.load(), r = Progress.rankOf(p.xp), weak = Progress.weakList();
    var pct = r.next ? Math.round((p.xp - r.from) / (r.to - r.from) * 100) : 100;
    var stat = function (n, t) { return "<div class='stat'><b>" + n + "</b><small>" + t + "</small></div>"; };
    screen({ back: home },
      "<h1>Mon carnet</h1>" +
      "<div class='card rank'><b>" + esc(r.name) + "</b><span class='sub'>" + p.xp + " points" + (r.next ? ", prochain rang : " + esc(r.next) : ", rang maximal") + "</span><span class='bar'><i style='width:" + pct + "%'></i></span></div>" +
      "<div class='stats'>" + stat(p.played, "exercices") + stat(p.perfect, "dictées sans faute") + stat(p.found, "erreurs trouvées") + stat(p.bestStreak, "meilleure série") + "</div>" +
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
