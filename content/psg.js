(window.THEMES = window.THEMES || {}).psg = {
  name: "{{PSG|Football}}",
  emoji: "⚽",
  dictees: [
    {
      level: "apprenti",
      text: "Samedi soir, les supporters sont arrivés tôt au stade. Ils ont chanté, agité leurs écharpes et encouragé les joueurs. Leur équipe a marqué deux buts.",
      notes: [
        { word: "arrivés", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les supporters : masculin pluriel)." },
        { word: "leurs", rule: "« Leurs » est un déterminant : il accompagne un nom pluriel (leurs écharpes)." },
        { word: "marqué", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (pas de COD placé avant)." }
      ]
    },
    {
      level: "compagnon",
      text: "Les joueurs que l'entraîneur avait convoqués se sont entraînés toute la semaine. Les spectateurs qui s'étaient déplacés avec leurs banderoles les ont longuement applaudis, même si la rencontre s'est terminée sur un match nul.",
      notes: [
        { word: "banderoles", rare: true, rule: "Longue bande d'étoffe portant une inscription. Un seul r, un seul l, et un e muet au milieu : ban-de-role." },
        { word: "convoqués", rule: "Le COD « que » (les joueurs) est placé avant le verbe : le participe passé s'accorde." },
        { word: "entraînés", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet." },
        { word: "longuement", rule: "Adverbe formé sur l'adjectif long : longue + ment." },
        { word: "applaudis", rule: "Le COD « les » (les joueurs) est placé avant l'auxiliaire avoir : accord au masculin pluriel." }
      ]
    },
    {
      level: "maitre",
      text: "Quoique le gardien eût détourné une frappe redoutable en première période, les Parisiens, malgré leur domination, peinèrent à concrétiser leurs occasions. Personne n'aurait imaginé que le dénouement surviendrait aussi tard.",
      notes: [
        { word: "eût", rule: "« Quoique » est suivi du subjonctif : plus-que-parfait du subjonctif, « eût détourné »." },
        { word: "concrétiser", rare: true, rule: "Transformer une occasion en but. Formé sur concret : accent aigu sur le é (con-cré-ti-ser), alors que le féminin concrète prend un accent grave." },
        { word: "dénouement", rare: true, rule: "Issue finale d'une situation. Formé sur dénouer : on garde le e muet entre « ou » et « -ment »." },
        { word: "peinèrent", rule: "Passé simple, 3e personne du pluriel du 1er groupe : -èrent." },
        { word: "aurait", rule: "« Personne » est un sujet de 3e personne du singulier : conditionnel passé, « aurait imaginé »." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les ultras, dont l'enthousiasme confine parfois à l'exaltation, déploient des tifos à l'élaboration minutieuse ; quelques-uns, s'étant plu à les concevoir des semaines durant, en ont référé aux dirigeants, lesquels, tout compte fait, les ont autorisés.",
      notes: [
        { word: "plu", rule: "Le participe passé de se plaire reste invariable (le « se » est COI)." },
        { word: "quelques-uns", rule: "Pronom indéfini : quelques, trait d'union, uns." },
        { word: "référé", rare: true, rule: "« En référer à quelqu'un » : soumettre une question à qui décide. Deux accents aigus, et le participe reste invariable." },
        { word: "élaboration", rare: true, rule: "Préparation soignée. Accent aigu sur le é initial, un seul l, un seul b : é-la-bo-ra-tion." },
        { word: "autorisés", rule: "Le COD « les » (les tifos) est placé avant l'auxiliaire avoir : accord au masculin pluriel." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les joueurs ont gagner le match hier soir.", wrong: "gagner", right: "gagné", choices: ["gagné", "gagnés", "gagnez"], rule: "Après l'auxiliaire avoir, on utilise le participe passé : gagné." },
    { level: "apprenti", text: "Le stade étais plein dès le début de la rencontre.", wrong: "étais", right: "était", choices: ["était", "étaient", "été"], rule: "Le sujet « le stade » est à la 3e personne du singulier : il était." },
    { level: "compagnon", text: "Les maillots que les supporters ont acheté sont déjà épuisés.", wrong: "acheté", right: "achetés", choices: ["achetés", "acheter", "achetée"], rule: "Le COD « que » (les maillots) est placé avant le verbe : accord au masculin pluriel." },
    { level: "compagnon", text: "Les attaquants se sont blessé pendant l'entraînement.", wrong: "blessé", right: "blessés", choices: ["blessés", "blessées", "blesser"], rule: "Verbe pronominal avec « se » COD : le participe s'accorde avec le sujet." },
    { level: "maitre", text: "Quoique l'équipe soit favorite, elle a du s'employer pour l'emporter.", wrong: "du", right: "dû", choices: ["dû", "dut", "dus"], rule: "Le participe passé de devoir prend un accent circonflexe au masculin singulier : dû." },
    { level: "maitre", text: "Bien qu'il ai marqué deux fois, l'avant-centre est resté discret.", wrong: "ai", right: "ait", choices: ["ait", "aie", "a"], rule: "« Bien que » appelle le subjonctif : qu'il ait marqué." },
    { level: "grand-scribe", text: "Ils se sont plus à démentir tous les pronostics.", wrong: "plus", right: "plu", choices: ["plu", "plus", "plue"], rule: "Le participe passé de se plaire est invariable : le « se » est COI." },
    { level: "grand-scribe", text: "Quel que soient les critiques, le club s'est imposé sans coup férir.", wrong: "Quel", right: "Quelles", choices: ["Quelles", "Quelle", "Quels"], rule: "« Quel que » + être au subjonctif : « quel » s'accorde avec le sujet (les critiques)." }
  ]
};
