(window.THEMES = window.THEMES || {}).piano = {
  name: "Piano et solfège",
  emoji: "🎹",
  dictees: [
    {
      level: "apprenti",
      text: "Chaque mercredi, Léa s'installe sur le tabouret devant le piano. Elle pose ses doigts sur les touches blanches et les touches noires. Quand elle appuie sur la pédale, les notes résonnent plus longtemps. Sa grand-mère l'écoute et lui montre comment lire la partition.",
      notes: [
        { word: "ses", rule: "« Ses » est un déterminant possessif : il accompagne un nom pluriel (ses doigts) et peut se remplacer par « mes » ou « tes »." },
        { word: "blanches", rule: "L'adjectif s'accorde avec le nom « touches » : féminin pluriel, blanches." },
        { word: "appuie", rule: "Verbe appuyer : le y devient i devant un e muet. Présent, 3e personne du singulier : elle appuie." },
        { word: "résonnent", rule: "Verbe résonner, avec deux n. Présent, 3e personne du pluriel : -ent muet." },
        { word: "grand-mère", rule: "Nom composé avec un trait d'union ; « mère » prend un accent grave." }
      ]
    },
    {
      level: "apprenti",
      text: "Hier, la classe a appris à lire les notes sur la portée. Le signe placé au début de chaque ligne indique la hauteur des sons. Les élèves ont tapé le rythme en comptant les temps de la mesure. Ensuite, ils ont joué une petite gamme sans se tromper.",
      notes: [
        { word: "appris", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (pas de COD placé avant). Apprendre donne appris, avec un s final." },
        { word: "placé", rule: "Participe passé employé comme adjectif : il s'accorde avec le nom « signe » (masculin singulier). On peut dire « mis »." },
        { word: "élèves", rule: "Nom au pluriel : accent aigu sur le premier e, accent grave sur le second, et s final." },
        { word: "tapé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « le rythme » est placé après). On peut dire « battu »." },
        { word: "gamme", rule: "Suite de notes qui montent ou descendent par degrés : deux m." }
      ]
    },
    {
      level: "compagnon",
      text: "Avant le concert, l'accordeur a sorti son diapason et vérifié chaque corde. Celles qui s'étaient relâchées, il les a retendues, puis il a essayé les notes qu'il avait corrigées. Satisfait, il est reparti sans un mot.",
      notes: [
        { word: "accordeur", rule: "Professionnel qui accorde les pianos. Dérivé d'accorder : deux c, puis la finale -eur.", rare: true, d: 1, piege: "cc, finale -eur" },
        { word: "diapason", rule: "Petit instrument en métal qui donne le la. Le s entre deux voyelles se prononce [z] : dia-pa-son, finale en -on.", rare: true, d: 2, piege: "s sonore (z), finale -on" },
        { word: "sorti", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « son diapason » est placé après)." },
        { word: "relâchées", rule: "Verbe pronominal : le participe s'accorde avec le sujet « celles » (les cordes : féminin pluriel). Accent circonflexe sur le a." },
        { word: "retendues", rule: "Le COD « les » (les cordes) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "corrigées", rule: "Le COD « que » (les notes) est placé avant l'auxiliaire avoir : accord au féminin pluriel." }
      ]
    },
    {
      level: "compagnon",
      text: "Le professeur a posé un métronome sur le piano, puis il a demandé à l'élève de jouer les arpèges lentement et régulièrement. Malgré la fatigue, la jeune fille a persévéré et elle a fini par maîtriser les accords qu'elle avait tant travaillés.",
      notes: [
        { word: "métronome", rule: "Appareil qui bat la mesure à vitesse réglable. Accent aigu sur le premier e, puis -nome, sans accent circonflexe.", rare: true, d: 1, piege: "o simple, pas d'accent circonflexe" },
        { word: "arpèges", rule: "Notes d'un accord jouées l'une après l'autre. Accent grave sur le è, g doux, s au pluriel.", rare: true, d: 2, piege: "è et non ai, g doux, s du pluriel" },
        { word: "régulièrement", rule: "Adverbe formé sur l'adjectif régulière : on garde l'accent grave, puis -ment." },
        { word: "persévéré", rule: "Verbe persévérer : accents aigus sur les deux é qui encadrent le v, participe passé invariable ici." },
        { word: "travaillés", rule: "Le COD « que » (les accords) est placé avant l'auxiliaire avoir : accord au masculin pluriel." }
      ]
    },
    {
      level: "maitre",
      text: "Bien que le récital se fût déroulé sans incident, la jeune virtuose, qu'on avait vue trembler dans les coulisses, ne put cacher son soulagement. Les quelques contretemps qu'elle s'était reprochés passèrent inaperçus, et le public, ravi, la rappela trois fois sur scène.",
      notes: [
        { word: "fût", rule: "« Bien que » appelle le subjonctif ; le verbe principal étant au passé simple (« put »), l'imparfait du subjonctif est admis : se fût déroulé, avec un accent circonflexe." },
        { word: "récital", rule: "Concert donné par un seul interprète. Accent aigu, un seul t, un seul l.", rare: true, d: 1, piege: "é, un seul t, un seul l" },
        { word: "virtuose", rule: "Instrumentiste d'une habileté exceptionnelle. Le s entre deux voyelles se prononce [z] ; le mot est invariable en genre.", rare: true, d: 2, piege: "s sonore (z), u et non e (vir-)" },
        { word: "vue", rule: "Le COD « que » (la pianiste) est placé avant l'auxiliaire avoir et fait l'action de l'infinitif (elle tremblait) : accord au féminin singulier." },
        { word: "contretemps", rule: "Événement imprévu, ou note jouée à contretemps. Un seul mot sans trait d'union, avec un ps final muet (famille de temps), invariable au pluriel.", rare: true, d: 3, piege: "soudé sans trait d'union, ps muet (famille temps)" },
        { word: "reprochés", rule: "« Se » est complément d'objet indirect ; le COD « que » (les contretemps) est placé avant l'auxiliaire : accord au masculin pluriel." }
      ]
    },
    {
      level: "maitre",
      text: "Le solfège impose une rigueur que bien des débutants jugent fastidieuse. Un dièse élève la note d'un demi-ton, un bémol l'abaisse, et un bécarre annule l'un comme l'autre. Quelques élèves, quelque habiles qu'ils soient, oublient pourtant ces altérations en cours de mesure.",
      notes: [
        { word: "solfège", rule: "Apprentissage de la lecture et de l'écriture de la musique. Formé sur sol et fa : un f, accent grave, puis ge.", rare: true, d: 2, piege: "f, è et non ai, g doux" },
        { word: "fastidieuse", rule: "Attribut de « rigueur » (féminin singulier) : fastidieux devient fastidieuse." },
        { word: "dièse", rule: "Signe qui hausse la note d'un demi-ton. Accent grave, et un s qui se prononce [z] entre deux voyelles.", rare: true, d: 2, piege: "è, s sonore (z)" },
        { word: "bécarre", rule: "Signe qui annule un dièse ou un bémol. Accent aigu, un c, puis deux r : bé-car-re.", rare: true, d: 3, piege: "c et non qu, rr, e final" },
        { word: "quelque", rule: "Devant un adjectif, « quelque » est adverbe (« si ») et reste invariable : quelque habiles qu'ils soient." },
        { word: "Quelques", rule: "Déterminant indéfini devant un nom pluriel : quelques élèves, avec un s." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Un do dièse et un ré bémol se jouent sur la même touche : ces notes, dites enharmoniques, ne diffèrent que par leur écriture. Dans l'atelier de lutherie, l'accordeur s'efforce de tempérer l'instrument, tandis que les étouffoirs, restés soulevés tant que la pédale demeure enfoncée, laissent vibrer les cordes.",
      notes: [
        { word: "dites", rule: "Participe passé employé comme adjectif : il s'accorde avec « notes » (féminin pluriel). Dire donne dites, avec un t et un e muet." },
        { word: "enharmoniques", rule: "Se dit de notes de même hauteur écrites différemment. Famille d'harmonie : le h est muet, et la finale est -iques, au pluriel.", rare: true, d: 3, piege: "h muet (famille harmonie), finale -iques" },
        { word: "lutherie", rule: "Art de fabriquer les instruments à cordes. Famille de luth : th muet, puis -erie, avec un seul r.", rare: true, d: 3, piege: "th muet (famille luth), finale -erie" },
        { word: "s'efforce", rule: "Verbe pronominal s'efforcer : deux f, avec un c devant le e (s'efforcer, il s'efforce)." },
        { word: "étouffoirs", rule: "Pièces garnies de feutre qui arrêtent la vibration des cordes. Famille d'étouffer : deux f, puis la finale -oirs.", rare: true, d: 3, piege: "ff (famille étouffer), finale -oirs" },
        { word: "restés", rule: "Attribut du sujet « étouffoirs » avec l'auxiliaire être sous-entendu : accord au masculin pluriel." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Quoique le jeune pianiste eût déchiffré la partition sans peine, les doigtés que le maître lui avait imposés le déroutèrent. L'œuvre comportait une tessiture étendue, des appoggiatures capricieuses et des syncopes que le compositeur y avait fait figurer, si bien qu'une lecture distraite, quelque habile qu'elle fût, échouait.",
      notes: [
        { word: "eût", rule: "« Quoique » appelle le subjonctif ; après un passé simple (« déroutèrent »), le plus-que-parfait du subjonctif est admis : eût déchiffré, avec un accent circonflexe." },
        { word: "doigtés", rule: "Choix des doigts pour jouer un passage. Famille de doigt : g muet avant le t, accent aigu final, s au pluriel.", rare: true, d: 3, piege: "g muet (famille doigt), é, s du pluriel" },
        { word: "imposés", rule: "Le COD « que » (les doigtés) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "tessiture", rule: "Étendue des notes qu'une voix ou un instrument peut couvrir. Un seul t au début, deux s, puis la finale -ure.", rare: true, d: 3, piege: "t simple, ss, finale -ure" },
        { word: "appoggiatures", rule: "Note d'ornement qui précède une note réelle. Deux p, deux g, puis -iature ; s au pluriel.", rare: true, d: 4, piege: "pp, gg, -iature" },
        { word: "syncopes", rule: "Rythme où une note commence sur un temps faible et se prolonge sur un temps fort. Un y après le s, un c devant le o, s au pluriel.", rare: true, d: 2, piege: "y et non i, c et non qu" },
        { word: "fait", rule: "Suivi d'un infinitif, le participe « fait » reste toujours invariable, même si le COD « que » est placé avant." },
        { word: "fût", rule: "« Quelque... que » appelle le subjonctif ; après l'imparfait (« échouait »), l'imparfait du subjonctif est admis : qu'elle fût, avec un accent circonflexe." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les marteaux frappent les cordes quand on appuis sur une touche.", wrong: "appuis", right: "appuie", choices: ["appuie", "appuies", "appuis"], rule: "Verbe appuyer au présent, 3e personne du singulier : on appuie, avec un e final (le y devient i devant un e muet)." },
    { level: "apprenti", text: "Ce piano droit et trop lourd pour être déplacé seul.", wrong: "et", right: "est", choices: ["est", "et", "es"], rule: "On peut dire « était » : c'est le verbe être. Le mot « et » relie deux éléments et ne peut pas être remplacé par « était »." },
    { level: "apprenti", text: "Pour bien joué cette gamme, il faut compter les temps.", wrong: "joué", right: "jouer", choices: ["jouer", "jouez", "joué"], rule: "Après la préposition « pour », le verbe se met à l'infinitif. On peut le remplacer par « prendre » : pour bien prendre." },
    { level: "apprenti", text: "Les touches noires sont plus étroite que les touches blanches.", wrong: "étroite", right: "étroites", choices: ["étroites", "étroits", "étroite"], rule: "L'adjectif s'accorde avec le nom « touches » : féminin pluriel, étroites." },
    { level: "compagnon", text: "Les deux pianistes se sont salué avec respect avant de jouer.", wrong: "salué", right: "salués", choices: ["salués", "salué", "saluées"], rule: "Verbe pronominal réciproque : « se » est COD, le participe s'accorde avec le sujet (les deux pianistes : masculin pluriel)." },
    { level: "compagnon", text: "Elle joue ce passage différament selon son humeur.", wrong: "différament", right: "différemment", choices: ["différemment", "différamment", "différament"], rule: "Adjectif en -ent, adverbe en -emment : différent donne différemment, avec deux m." },
    { level: "compagnon", text: "Les élèves on répété la gamme pendant une heure.", wrong: "on", right: "ont", choices: ["ont", "on", "ons"], rule: "On peut dire « avaient » : c'est le verbe avoir, 3e personne du pluriel, qui s'écrit ont." },
    { level: "compagnon", text: "Elle a joué toute les gammes sans une seule erreur.", wrong: "toute", right: "toutes", choices: ["toutes", "tous", "toute"], rule: "Le déterminant « tout » s'accorde avec le nom « gammes » : féminin pluriel, toutes." },
    { level: "maitre", text: "Elle travaillera ce morceau chaque jour, quelque soit sa difficulté.", wrong: "quelque", right: "quelle que", choices: ["quelle que", "quelque", "quel que"], rule: "Devant le verbe être au subjonctif, on écrit « quel que » en deux mots, et « quel » s'accorde avec le sujet (sa difficulté : féminin singulier) : quelle que soit." },
    { level: "maitre", text: "Les sonates que la voisine a entendues jouer chaque soir l'ont longtemps charmée.", wrong: "entendues", right: "entendu", choices: ["entendu", "entendus", "entendues"], rule: "Suivi d'un infinitif, le participe s'accorde seulement si le COD fait l'action de l'infinitif. Ici les sonates sont jouées : entendu reste invariable." },
    { level: "maitre", text: "Le jeune pianiste joue constament en retard sur le temps.", wrong: "constament", right: "constamment", choices: ["constamment", "constamant", "constament"], rule: "Adjectif en -ant, adverbe en -amment : constant donne constamment, avec deux m." },
    { level: "maitre", text: "Sa tache consiste à rendre vivante une partition silencieuse.", wrong: "tache", right: "tâche", choices: ["tâche", "tache", "tasche"], rule: "Une tâche est un travail à accomplir, avec un accent circonflexe ; une tache est une salissure." },
    { level: "grand-scribe", text: "Les nuances que le pianiste a faites ressortir ont ému la salle.", wrong: "faites", right: "fait", choices: ["fait", "faites", "faite"], rule: "Suivi d'un infinitif, le participe « fait » reste toujours invariable, même avec un COD placé avant." },
    { level: "grand-scribe", text: "Les jeunes pianistes, toutes émues qu'elles étaient, ont salué le public.", wrong: "toutes", right: "tout", choices: ["tout", "toutes", "tous"], rule: "Devant un adjectif féminin commençant par une voyelle, « tout » adverbe reste invariable : tout émues." },
    { level: "grand-scribe", text: "Le piano demeure un instrument exigeant, quoique l'on en dise.", wrong: "quoique", right: "quoi que", choices: ["quoi que", "quoique", "quoiqu'"], rule: "« Quoi que » en deux mots signifie « quelle que soit la chose que » et se construit avec le subjonctif ; « quoique » signifie « bien que »." },
    { level: "grand-scribe", text: "Les deux sœurs se sont plues à jouer à quatre mains tous les dimanches.", wrong: "plues", right: "plu", choices: ["plu", "plus", "plues"], rule: "Se plaire : « se » est COI (plaire à quelqu'un), le participe plu reste invariable." }
  ]
};
