(window.THEMES = window.THEMES || {}).series = {
  name: "Séries et streaming",
  emoji: "📺",
  dictees: [
    {
      level: "apprenti",
      text: "Ce soir, mes cousins et moi avons regardé le premier épisode de la nouvelle saison. Le générique était superbe, et la musique nous a donné envie de danser. À la fin, un rebondissement a surpris tout le monde. Nous attendrons la suite avec impatience.",
      notes: [
        { word: "regardé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD est placé après le verbe)." },
        { word: "surpris", rule: "Surprendre se conjugue comme prendre : son participe passé se termine par un -s (une surprise)." },
        { word: "attendrons", rule: "Futur simple, 1re personne du pluriel : la terminaison est -rons." },
        { word: "générique", rare: true, rule: "Nom masculin qui prend deux accents aigus : gé-né-rique.", d: 1, piege: "g doux, finale -ique" },
        { word: "rebondissement", rare: true, rule: "Formé sur rebondir : deux s, puis le suffixe -ement : re-bon-dis-se-ment.", d: 1, piege: "ss, -issement" }
      ]
    },
    {
      level: "compagnon",
      text: "Les scénaristes que la plateforme avait recrutés ont écrit une intrigue haletante. Chaque épisode se termine par un rebondissement inattendu, si bien que les abonnés se sont rués sur la saison suivante. Quant aux critiques, ils ont salué la justesse des dialogues.",
      notes: [
        { word: "recrutés", rule: "Le COD « que » (les scénaristes) est placé avant le verbe : le participe s'accorde au masculin pluriel." },
        { word: "haletante", rule: "Adjectif formé sur le verbe haleter, accordé avec « intrigue » (féminin singulier)." },
        { word: "rués", rule: "Se ruer est un verbe essentiellement pronominal : le participe s'accorde avec le sujet (les abonnés)." },
        { word: "quant", rule: "« Quant à » signifie « pour ce qui est de » et s'écrit avec un t, comme quantité." },
        { word: "scénaristes", rare: true, rule: "Auteurs du scénario. « sc » au début, accent aigu sur le é, et un s au pluriel.", d: 2, piege: "sc, é, -iste" }
      ]
    },
    {
      level: "maitre",
      text: "Quelle que soit l'heure, les spectateurs les plus assidus enchaînent les épisodes jusqu'à l'aube. Les deux premières saisons, qu'on avait jugées inégales, se sont révélées bien plus hypnotiques qu'il n'y paraissait. Les scénaristes eux-mêmes ne s'attendaient pas à ce que la série trouvât un public aussi fidèle.",
      notes: [
        { word: "quelle", rule: "« Quel que » suivi du verbe être au subjonctif : « quel » s'accorde avec le sujet (l'heure, féminin singulier)." },
        { word: "jugées", rule: "Le COD « qu' » (les deux premières saisons) est placé avant le verbe : accord au féminin pluriel." },
        { word: "hypnotiques", rule: "Qui exerce une sorte de fascination. Famille d'hypnose : y après le h, puis -ique, avec un s au pluriel.", rare: true, d: 3, piege: "y (famille hypnose), -ique" },
        { word: "eux-mêmes", rule: "Lié à un pronom personnel par un trait d'union, « même » prend la marque du pluriel." },
        { word: "scénaristes", rule: "Auteurs du scénario. Sc, accent aigu, puis -iste, avec un s au pluriel.", rare: true, d: 2, piege: "sc, é, -iste" },
        { word: "trouvât", rule: "Après un verbe principal à l'imparfait, la concordance classique des temps emploie le subjonctif imparfait : trouvât, avec un accent circonflexe." },
        { word: "assidus", rare: true, rule: "Qui reviennent avec régularité. Deux s, et la finale -us au masculin pluriel (féminin : assidues).", d: 2, piege: "ss, -us" }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les épisodes se sont succédé à un rythme effréné ; quelque blasés qu'ils soient, maints abonnés se sont fait happer par ces intrigues alambiquées. Les génériques, tout empreints d'une mélancolie surannée, ne laissaient rien présager des pièges retors que les scénaristes s'étaient plu à semer.",
      notes: [
        { word: "succédé", rule: "Se succéder : le « se » est COI (succéder à quelqu'un), le participe reste invariable." },
        { word: "effréné", rule: "Sans frein, démesuré. Deux f, accent aigu sur le premier e et sur le dernier : ef-fré-né.", rare: true, d: 3, piege: "ff, é, é" },
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est un adverbe signifiant « si » : il reste invariable." },
        { word: "fait", rule: "« Fait » suivi d'un infinitif reste toujours invariable, y compris à la forme pronominale." },
        { word: "surannée", rule: "Démodée, d'un autre temps. Formé sur an : un seul r, deux n, accord au féminin avec « mélancolie ».", rare: true, d: 3, piege: "un seul r, nn (famille an)" },
        { word: "retors", rule: "Rusé, tortueux. Le s final est muet et ne varie pas : un piège retors, des pièges retors.", rare: true, d: 3, piege: "s final (famille tordre)" },
        { word: "plu", rule: "Le participe passé de se plaire reste toujours invariable : le « se » est COI." },
        { word: "alambiquées", rare: true, rule: "Compliquées à l'excès. Formé sur alambic : « am » devant b, le c devient « qu », et accord au féminin pluriel (ces intrigues).", d: 3, piege: "qu (famille alambic), é, accord féminin pluriel" }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Le dernier épisode et très attendu par les spectateurs.", wrong: "et", right: "est", choices: ["est", "es", "ai"], rule: "On peut dire « le dernier épisode était attendu » : c'est le verbe être, « est »." },
    { level: "apprenti", text: "Les deux sœurs sont resté devant l'écran toute la soirée.", wrong: "resté", right: "restées", choices: ["restées", "restés", "rester"], rule: "Avec l'auxiliaire être, le participe s'accorde avec le sujet (les deux sœurs : féminin pluriel)." },
    { level: "compagnon", text: "Il faut que tu vois cette série avant la fin du mois.", wrong: "vois", right: "voies", choices: ["voies", "voit", "voie"], rule: "Après « il faut que », on emploie le subjonctif présent : que tu voies." },
    { level: "compagnon", text: "Si j'avais le temps, je regarderai l'intégrale ce week-end.", wrong: "regarderai", right: "regarderais", choices: ["regarderais", "regarderait", "regardais"], rule: "Après « si » suivi de l'imparfait, le verbe principal se met au conditionnel présent : je regarderais." },
    { level: "maitre", text: "Les figurants, la production les a faits venir de très loin pour le tournage.", wrong: "faits", right: "fait", choices: ["fait", "faits", "faites"], rule: "Le participe passé « fait » suivi d'un infinitif reste toujours invariable." },
    { level: "maitre", text: "Quoiqu'en disent les critiques, cette série mérite le détour.", wrong: "Quoiqu'en", right: "Quoi qu'en", choices: ["Quoi qu'en", "Quoiqu'en", "Quoique en"], rule: "« Quoi que » en deux mots signifie « quelle que soit la chose que » ; « quoique » en un mot signifie « bien que »." },
    { level: "grand-scribe", text: "Les deux héroïnes se sont menties pendant toute une saison.", wrong: "menties", right: "menti", choices: ["menti", "menties", "mentis"], rule: "On ment à quelqu'un : le « se » est COI, le participe reste invariable." },
    { level: "grand-scribe", text: "La plateforme a diffusé plusieurs bandes-annonce avant la sortie.", wrong: "bandes-annonce", right: "bandes-annonces", choices: ["bandes-annonces", "bande-annonces", "bandes-annonce"], rule: "Bande-annonce associe deux noms : au pluriel, chacun prend un s." }
  ]
};
