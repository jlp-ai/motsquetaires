(window.THEMES = window.THEMES || {}).jeuxvideo = {
  name: "Jeux vidéo",
  emoji: "🎮",
  dictees: [
    {
      level: "apprenti",
      text: "Ce soir, ma sœur allume sa console et rejoint ses amies sur le serveur. Les joueuses ont choisi leurs personnages, puis elles sont parties explorer une grande forêt. Chaque victoire leur rapporte des pièces pour la boutique.",
      notes: [
        { word: "parties", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (elles : féminin pluriel)." },
        { word: "choisi", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici : le COD « leurs personnages » est placé après." },
        { word: "leurs", rule: "« Leurs » est un déterminant devant un nom pluriel : il prend un s (leurs personnages)." },
        { word: "rapporte", rule: "Après « chaque », le nom et le verbe restent au singulier : chaque victoire rapporte." }
      ]
    },
    {
      level: "compagnon",
      text: "Les mises à jour que les développeurs ont publiées cette semaine ont corrigé plusieurs défauts. Quant aux joueuses qui s'étaient plaintes de la lenteur du serveur, elles se sont aussitôt reconnectées. Il faut maintenant que chacune vérifie sa manette avant le tournoi.",
      notes: [
        { word: "publiées", rule: "Le COD « que » (les mises à jour) est placé avant le verbe : le participe s'accorde au féminin pluriel." },
        { word: "plaintes", rule: "« Se plaindre de » : le participe de ce verbe pronominal s'accorde avec le sujet (les joueuses : féminin pluriel)." },
        { word: "quant", rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t." },
        { word: "vérifie", rule: "« Il faut que » est suivi du subjonctif présent : que chacune vérifie." },
        { word: "développeurs", rare: true, rule: "Personnes qui programment le jeu. Un seul l, deux p, et le pluriel en -eurs : dé-ve-lop-peurs." }
      ]
    },
    {
      level: "maitre",
      text: "Quelles que soient les embûches qu'elle a dû surmonter, la joueuse ne s'est jamais découragée. Les heures qu'il lui a fallu pour maîtriser chaque niveau, elle ne les a pas comptées ; ses coéquipiers, eux-mêmes admiratifs, l'ont vue progresser patiemment.",
      notes: [
        { word: "quelles", rule: "« Quel que » suivi du verbe être : « quel » s'accorde avec le sujet (les embûches : féminin pluriel)." },
        { word: "fallu", rule: "Le participe passé d'un verbe impersonnel (il faut) reste toujours invariable." },
        { word: "vue", rule: "Le COD « l' » (la joueuse) placé avant fait l'action de l'infinitif (elle progresse) : le participe s'accorde." },
        { word: "eux-mêmes", rule: "« Même » lié à un pronom personnel prend un trait d'union et s'accorde : eux-mêmes." },
        { word: "embûches", rare: true, rule: "Obstacles, pièges. Nom féminin qui prend un accent circonflexe sur le u : des embûches." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les tournois se sont succédé tout l'hiver, et les équipes, quelque aguerries qu'elles soient, se sont parfois nui par d'oiseuses chicaneries. Maints joueurs, s'étant arrogé des privilèges indus, se sont vu infliger des sanctions ; les plus sages s'en sont tenus à leur stratégie, tout entière fondée sur la patience.",
      notes: [
        { word: "succédé", rule: "Dans « se succéder », le « se » est COI (succéder à) : le participe reste invariable." },
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est adverbe (si) et reste invariable." },
        { word: "arrogé", rare: true, rule: "« S'arroger » : s'attribuer sans droit. Deux r, un seul g. Le « se » est COI et le COD « des privilèges » est placé après : participe invariable." },
        { word: "vu", rule: "Les joueurs ne font pas l'action d'infliger : « vu » suivi de l'infinitif reste invariable." },
        { word: "chicaneries", rare: true, rule: "Querelles mesquines sur des détails. Dérivé de chicane : un seul n, et le e muet se garde avant -ries : chi-ca-ne-ries." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "La partie et déjà terminée : il faut relancer le serveur.", wrong: "et", right: "est", choices: ["est", "es", "ai"], rule: "On peut remplacer par « était » : c'est le verbe être, « est »." },
    { level: "apprenti", text: "Mes amis ont acheté deux nouvelle manettes.", wrong: "nouvelle", right: "nouvelles", choices: ["nouvelles", "nouveaux", "nouvels"], rule: "L'adjectif s'accorde avec le nom qu'il accompagne (manettes : féminin pluriel)." },
    { level: "compagnon", text: "Si j'avais plus de temps, je terminerai ce niveau ce soir.", wrong: "terminerai", right: "terminerais", choices: ["terminerais", "terminerait", "terminais"], rule: "Après « si » suivi de l'imparfait, le verbe principal se met au conditionnel présent : je terminerais." },
    { level: "compagnon", text: "Quand à la boutique du jeu, elle propose de nouvelles tenues.", wrong: "Quand", right: "Quant", choices: ["Quant", "Qu'en", "Quand"], rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t." },
    { level: "maitre", text: "Les dix heures que la mise à jour a durées nous ont paru interminables.", wrong: "durées", right: "duré", choices: ["duré", "durée", "durés"], rule: "« Que » est ici un complément de durée, pas un COD : le participe de durer reste invariable." },
    { level: "maitre", text: "Elle a remporté le plus de trophées possibles lors du tournoi.", wrong: "possibles", right: "possible", choices: ["possible", "possibles", "posible"], rule: "Après « le plus de », « possible » se rapporte à un « il est possible » sous-entendu et reste invariable." },
    { level: "grand-scribe", text: "Les deux coéquipières se sont faites bannir du serveur pour une simple maladresse.", wrong: "faites", right: "fait", choices: ["fait", "faits", "faite"], rule: "« Fait » suivi d'un infinitif est toujours invariable, y compris à la forme pronominale." },
    { level: "grand-scribe", text: "Après trois heures et demi de jeu, la joueuse a enfin vaincu le dernier adversaire.", wrong: "demi", right: "demie", choices: ["demie", "demis", "demies"], rule: "Placé après le nom, « demi » s'accorde en genre seulement : trois heures et demie." }
  ]
};
