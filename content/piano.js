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
    { level: "apprenti", text: "Les marteaux frappent les cordes quand on appuis sur une touche.", wrong: "appuis", right: "appuie", choices: ["appuie", "appuies", "appuis"], type: "temps", rule: "Verbe appuyer au présent, 3e personne du singulier : on appuie, avec un e final (le y devient i devant un e muet)." },
    { level: "apprenti", text: "Ce piano droit et trop lourd pour être déplacé seul.", wrong: "et", right: "est", choices: ["est", "et", "es"], type: "homophone", rule: "On peut dire « était » : c'est le verbe être. Le mot « et » relie deux éléments et ne peut pas être remplacé par « était »." },
    { level: "apprenti", text: "Pour bien joué cette gamme, il faut compter les temps.", wrong: "joué", right: "jouer", choices: ["jouer", "jouez", "joué"], type: "homophone", rule: "Après la préposition « pour », le verbe se met à l'infinitif. On peut le remplacer par « prendre » : pour bien prendre." },
    { level: "apprenti", text: "Les touches noires sont plus étroite que les touches blanches.", wrong: "étroite", right: "étroites", choices: ["étroites", "étroits", "étroite"], type: "accord", rule: "L'adjectif s'accorde avec le nom « touches » : féminin pluriel, étroites." },
    { level: "compagnon", text: "Les deux frères pianistes se sont salué avec respect avant de jouer.", wrong: "salué", right: "salués", choices: ["salués", "salué", "saluées"], type: "pronominal", rule: "Verbe pronominal réciproque : « se » est COD, le participe s'accorde avec le sujet (les deux frères : masculin pluriel)." },
    { level: "compagnon", text: "Elle joue ce passage différament selon son humeur.", wrong: "différament", right: "différemment", choices: ["différemment", "différamment", "différament"], type: "adverbe", rule: "Adjectif en -ent, adverbe en -emment : différent donne différemment, avec deux m." },
    { level: "compagnon", text: "Les élèves on répété la gamme pendant une heure.", wrong: "on", right: "ont", choices: ["ont", "on", "ons"], type: "homophone", rule: "On peut dire « avaient » : c'est le verbe avoir, 3e personne du pluriel, qui s'écrit ont." },
    { level: "compagnon", text: "Elle a joué toute les gammes sans une seule erreur.", wrong: "toute", right: "toutes", choices: ["toutes", "tous", "toute"], type: "accord", rule: "Le déterminant « tout » s'accorde avec le nom « gammes » : féminin pluriel, toutes." },
    { level: "maitre", text: "Elle travaillera ce morceau chaque jour, quelque soit sa difficulté.", wrong: "quelque", right: "quelle que", choices: ["quelle que", "quelque", "quel que"], type: "invariable", rule: "Devant le verbe être au subjonctif, on écrit « quel que » en deux mots, et « quel » s'accorde avec le sujet (sa difficulté : féminin singulier) : quelle que soit." },
    { level: "maitre", text: "Les sonates que la voisine a entendues jouer chaque soir l'ont longtemps charmée.", wrong: "entendues", right: "entendu", choices: ["entendu", "entendus", "entendues"], type: "participe", rule: "Suivi d'un infinitif, le participe s'accorde seulement si le COD fait l'action de l'infinitif. Ici les sonates sont jouées : entendu reste invariable." },
    { level: "maitre", text: "Le jeune pianiste joue constament en retard sur le temps.", wrong: "constament", right: "constamment", choices: ["constamment", "constamant", "constament"], type: "adverbe", rule: "Adjectif en -ant, adverbe en -amment : constant donne constamment, avec deux m." },
    { level: "maitre", text: "Sa tache consiste à rendre vivante une partition silencieuse.", wrong: "tache", right: "tâche", choices: ["tâche", "tache", "tasche"], type: "sens", rule: "Une tâche est un travail à accomplir, avec un accent circonflexe ; une tache est une salissure." },
    { level: "grand-scribe", text: "Les élèves que le professeur avait entendus déchiffrer la partition ont reconnu, malgré leur appréhension, une apoggiature qui retarde la résolution de l'accord et suspend un instant la phrase musicale.", wrong: "apoggiature", right: "appoggiature", choices: ["appoggiature","apoggiature","appogiature"], type: "lexique", rule: "Mot d'origine italienne (appoggiare, appuyer) : deux p, deux g, puis la finale -iature. Cette note d'ornement s'appuie sur la note réelle qu'elle précède." },
    { level: "grand-scribe", text: "Le théoricien expliquait que le fa dièse et le sol bémol, notes enarmoniques sur un clavier tempéré, occupent la même touche, bien que la portée les distingue par leur nom et leur place.", wrong: "enarmoniques", right: "enharmoniques", choices: ["enharmoniques","enarmoniques","enharmonniques"], type: "lexique", rule: "Le mot est de la famille d'harmonie : le h, muet, se conserve après le n. La finale est -iques, au pluriel." },
    { level: "grand-scribe", text: "Formé à la luterie dans un atelier de quartier, le facteur, quoique fort jeune, restaura les chevalets que des années d'humidité avaient fendillés, puis rendit au vieux piano toute sa sonorité.", wrong: "luterie", right: "lutherie", choices: ["lutherie","luterie","lutherrie"], type: "lexique", rule: "La lutherie est l'art de fabriquer les instruments à cordes, famille de luth : le th est conservé, puis -erie avec un seul r." },
    { level: "grand-scribe", text: "Dès que la pédale se relève, les étoufoirs, ces petits tampons de feutre garnissant chaque corde, retombent et interrompent aussitôt la résonance que les marteaux avaient provoquée.", wrong: "étoufoirs", right: "étouffoirs", choices: ["étouffoirs","étoufoirs","étouffoires"], type: "lexique", rule: "Les étouffoirs arrêtent la vibration des cordes. Famille d'étouffer : deux f, puis la finale -oirs." },
    { level: "grand-scribe", text: "Les trois concertistes que le jury avait retenus pour la finale se sont succédés au piano de concert, et la salle, malgré la chaleur, les a longuement acclamés.", wrong: "succédés", right: "succédé", choices: ["succédé","succédés","succédées"], type: "pronominal", rule: "Dans « se succéder », « se » est complément d'objet indirect (succéder à quelqu'un) : le participe reste invariable." },
    { level: "grand-scribe", text: "Les fausses notes que le public a crues entendre durant le nocturne n'étaient que des silences voulus, tant le piano, accordé la veille, vibrait avec justesse.", wrong: "crues", right: "cru", choices: ["cru","crues","crus"], type: "participe", rule: "Le COD « que » complète l'infinitif « entendre », non le verbe « croire » : le participe « cru » reste invariable." },
    { level: "grand-scribe", text: "Quelques exigeants que soient les professeurs du conservatoire, les jeunes interprètes, tout émerveillés par la sonorité du grand piano de concert, travaillent chaque gamme avec une ardeur patiente.", wrong: "Quelques", right: "Quelque", choices: ["Quelque","Quelques","Quelle que"], type: "invariable", rule: "Devant un adjectif, « quelque » est un adverbe (« si exigeants que ») : il reste invariable. « Quelques » ne se met que devant un nom." },
    { level: "grand-scribe", text: "Le maître exige que vous croyez à la justesse de vos doigts et que vous ne regardiez jamais le clavier, même lorsque le métronome, réglé trop vite, rend le passage presque interminable.", wrong: "croyez", right: "croyiez", choices: ["croyiez","croyez","croyions"], type: "temps", rule: "Après « exige que », le verbe se met au subjonctif ; à la 2e personne du pluriel, croire fait croyiez (y et i), comme regardiez dans la même phrase." },
    { level: "apprenti", type: "lexique", notion: "6e.lex.mots-frequents-autonomie", text: "Pour garder le ritme, Zoé compte les temps à voix basse en jouant.", wrong: "ritme", right: "rythme", choices: ["rythme", "ritme", "rytme"], rule: "Rythme est un mot d'origine grecque : il s'écrit avec y et th, qu'on n'entend pas." },
    { level: "apprenti", type: "lexique", notion: "cm2.voc.univers-reference", text: "Sur le pupitre, la partission est ouverte à la première page du morceau.", wrong: "partission", right: "partition", choices: ["partition", "partission", "partision"], rule: "Partition se termine par -tion, comme « addition » et « émotion », même si on entend [sj]." },
    { level: "apprenti", type: "lexique", notion: "cm1.lex.mots-frequents", text: "Avant de jouer, Max règle la hauteur du tabouré et pose ses pieds à plat.", wrong: "tabouré", right: "tabouret", choices: ["tabouret", "tabouré", "tabourai"], rule: "Tabouret se termine par -et, avec un t muet, comme « cornet » et « sachet »." },
    { level: "apprenti", type: "lexique", notion: "6e.voc.univers-reference", text: "Samedi, le jeune pianiste jouera avec un orquestre devant toute sa famille.", wrong: "orquestre", right: "orchestre", choices: ["orchestre", "orquestre", "orkestre"], rule: "Orchestre s'écrit avec ch prononcé [k], comme « chorale »." },
    { level: "apprenti", type: "lexique", notion: "cm2.lex.mots-frequents", text: "Chaque jeudi, Emma retrouve son professeur pour sa lecon de piano.", wrong: "lecon", right: "leçon", choices: ["leçon", "lecon", "leson"], rule: "Leçon prend une cédille sous le c devant o, pour garder le son [s]." },
    { level: "apprenti", type: "lexique", notion: "cm1.lex.morphologie", text: "Pour jouer vite, il faut garder les doits souples et bien arrondis.", wrong: "doits", right: "doigts", choices: ["doigts", "doits", "doigs"], rule: "Doigt s'écrit avec un g muet avant le t, qu'on retrouve dans « doigté »." },
    { level: "apprenti", type: "homophone", notion: "cm1.homo.a-a", text: "Le soir, Léo à répété la même mélodie, sans jamais se lasser.", wrong: "à", right: "a", choices: ["a", "à", "as"], rule: "On peut dire « avait répété » : c'est le verbe avoir, sans accent." },
    { level: "apprenti", type: "homophone", notion: "cm1.homo.ou-ou", text: "Le conservatoire est l'endroit ou les jeunes musiciens apprennent leur instrument.", wrong: "ou", right: "où", choices: ["où", "ou", "oû"], rule: "« Où » indique un lieu : on ne peut pas le remplacer par « ou bien »." },
    { level: "apprenti", type: "homophone", notion: "cm1.homo.son-sont", text: "Après le cours, les crayons son rangés dans la trousse, les partitions dans le classeur.", wrong: "son", right: "sont", choices: ["sont", "son", "sons"], rule: "On peut dire « étaient rangés » : c'est le verbe être, 3e personne du pluriel. « Son » est un déterminant possessif." },
    { level: "apprenti", type: "participe", notion: "cm2.accords.pp-avoir-cod-antepose", text: "Les petites mélodies que Jules a inventé ravissent toute sa famille.", wrong: "inventé", right: "inventées", choices: ["inventées", "inventés", "inventé"], rule: "Le COD « que » (les mélodies) est placé avant l'auxiliaire avoir : le participe s'accorde, au féminin pluriel." },
    { level: "apprenti", type: "participe", notion: "cm1.accords.pp-etre", text: "Les deux cousines sont arrivé en avance devant la salle de concert.", wrong: "arrivé", right: "arrivées", choices: ["arrivées", "arrivé", "arrivés"], rule: "Avec l'auxiliaire être, le participe s'accorde avec le sujet : les deux cousines, féminin pluriel." },
    { level: "apprenti", type: "temps", notion: "cm1.conj.futur-g3-liste", text: "À la fin de l'audition, les parents viendrons féliciter chaque jeune pianiste.", wrong: "viendrons", right: "viendront", choices: ["viendront", "viendrons", "viendraient"], rule: "Au futur, la 3e personne du pluriel se termine par -ont : les parents viendront. La terminaison -ons est celle de « nous »." },
    { level: "apprenti", type: "temps", notion: "6e.conj.imperatif-g1", text: "Respire, détends tes épaules et poses doucement tes mains sur le clavier.", wrong: "poses", right: "pose", choices: ["pose", "poses", "posent"], rule: "À l'impératif, les verbes du 1er groupe n'ont pas de s à la 2e personne du singulier : pose, comme respire." },
    { level: "apprenti", type: "accord", notion: "cm2.accords.attribut-sujet", text: "Les notes hautes sont légères et brillantes, mais les notes graves sont lourd et profondes.", wrong: "lourd", right: "lourdes", choices: ["lourdes", "lourd", "lourds"], rule: "L'attribut s'accorde avec le sujet « les notes graves » : féminin pluriel, lourdes." },
    { level: "apprenti", type: "compose", notion: "6e.lex.simples-derives-composes", text: "Entre deux touches voisines du clavier, l'écart est toujours d'un demiton.", wrong: "demiton", right: "demi-ton", choices: ["demi-ton", "demiton", "demi ton"], rule: "Placé devant un nom, demi reste invariable et s'y relie par un trait d'union : un demi-ton, comme une demi-heure." },
    { level: "apprenti", type: "accord", notion: "cm2.accords.sujet-inverse", text: "Sur le piano de la classe se trouve quatre vieux cahiers de solfège.", wrong: "trouve", right: "trouvent", choices: ["trouvent", "trouve", "trouves"], rule: "Le sujet est inversé : « quatre vieux cahiers » est placé après le verbe, qui s'accorde avec lui au pluriel." },
    { level: "compagnon", type: "lexique", notion: "5e.lex.derivation", text: "Pour chanter juste, elle a besoin d'un bon acompagnement au piano, doux et régulier.", wrong: "acompagnement", right: "accompagnement", choices: ["accompagnement", "acompagnement", "accompagnemant"], rule: "Accompagnement vient d'accompagner : on garde les deux c et un seul m, puis la finale -ement." },
    { level: "compagnon", type: "lexique", notion: "5e.voc.etymologie-latin-grec", text: "Dans une valse, la main gauche dessine une armonie régulière pendant que la droite chante la mélodie.", wrong: "armonie", right: "harmonie", choices: ["harmonie", "armonie", "harmonnie"], rule: "Harmonie commence par un h muet, qu'on retrouve dans « harmonieux »." },
    { level: "compagnon", type: "lexique", notion: "4e.lex.regularites-exceptions", text: "Après dix ans d'étude, le jeune pianiste connaît un répertoir varié, de la valse au jazz.", wrong: "répertoir", right: "répertoire", choices: ["répertoire", "répertoir", "répertoyre"], rule: "Répertoire (liste des œuvres qu'on sait jouer) se termine par -oire, comme « histoire » et « mémoire »." },
    { level: "compagnon", type: "lexique", notion: "4e.lex.morphologie", text: "Quand le pianiste enfonce la pédale de droite, la résonnance des cordes se prolonge dans la salle.", wrong: "résonnance", right: "résonance", choices: ["résonance", "résonnance", "résonence"], rule: "Le verbe résonner prend deux n, mais le nom résonance n'en a qu'un : on écrit -ance après un seul n." },
    { level: "compagnon", type: "lexique", notion: "5e.lex.regularites", text: "En jazz, le pianiste aime improvisser sur la grille d'accords, sans partition devant lui.", wrong: "improvisser", right: "improviser", choices: ["improviser", "improvisser", "improvizer"], rule: "Improviser s'écrit avec un seul s, prononcé [z] entre deux voyelles, et la finale -er." },
    { level: "compagnon", type: "lexique", notion: "5e.lex.vocabulaire-rencontre", text: "Contrairement au piano, qui frappe ses cordes avec des marteaux, le clavessin les pince.", wrong: "clavessin", right: "clavecin", choices: ["clavecin", "clavessin", "claveçin"], rule: "Clavecin s'écrit avec un seul c : devant e ou i, il se prononce [s] sans cédille ni double s." },
    { level: "compagnon", type: "lexique", notion: "5e.voc.etymologie-latin-grec", text: "Dans la salle de concert, un quatour à cordes réunit deux violons, un alto et un violoncelle.", wrong: "quatour", right: "quatuor", choices: ["quatuor", "quatour", "quatuort"], rule: "Quatuor (groupe de quatre musiciens) se termine par -uor, avec u puis o, et non par -our comme « tambour »." },
    { level: "compagnon", type: "lexique", notion: "4e.voc.interdisciplinaire", text: "Une simphonie classique est une grande œuvre pour orchestre, le plus souvent composée de quatre mouvements.", wrong: "simphonie", right: "symphonie", choices: ["symphonie", "simphonie", "symfonie"], rule: "Symphonie s'écrit avec y et ph, comme les mots d'origine grecque « sympathie » et « téléphone »." },
    { level: "compagnon", type: "homophone", notion: "4e.homo.ni-ny", text: "Le concert est complet : il ni a plus une seule place libre dans la salle.", wrong: "ni", right: "n'y", choices: ["n'y", "ni", "nid"], rule: "« N'y » (ne + y) se retrouve dans « il n'y a pas ». « Ni » relie deux éléments niés (ni l'un ni l'autre)." },
    { level: "compagnon", type: "homophone", notion: "4e.homo.si-sy", text: "Elle adore son vieux piano droit et si exerce chaque soir après le dîner.", wrong: "si", right: "s'y", choices: ["s'y", "si", "sis"], rule: "« S'y » (se + y) : elle s'exerce sur ce piano, et y reprend « piano ». « Si » exprime l'hypothèse ou l'intensité." },
    { level: "compagnon", type: "participe", notion: "5e.accords.pp-avoir-coi", text: "Les élèves à qui le professeur a parlés ont aussitôt rouvert leurs partitions.", wrong: "parlés", right: "parlé", choices: ["parlé", "parlés", "parlées"], rule: "On parle à quelqu'un : « à qui » est un COI, donc le participe parlé reste invariable." },
    { level: "compagnon", type: "temps", notion: "3e.conj.conditionnel-emplois", text: "Si l'accordeur serait venu hier matin, le vieux piano sonnerait juste ce soir devant le public.", wrong: "serait", right: "était", choices: ["était", "serait", "fut"], rule: "Après « si » de condition, on n'emploie pas le conditionnel : plus-que-parfait (était venu), puis conditionnel dans l'autre partie." },
    { level: "compagnon", type: "temps", notion: "3e.conj.subjonctif-present", text: "Avant que le rideau se lève, il faut que Hugo va chercher sa partition dans les coulisses.", wrong: "va", right: "aille", choices: ["aille", "va", "allait"], rule: "« Il faut que » appelle le subjonctif présent : que Hugo aille (et non « va »)." },
    { level: "compagnon", type: "accord", notion: "3e.accords.sujet-collectif-distributif", text: "La plupart des méthodes de piano commence par la gamme de do majeur, sans dièse ni bémol.", wrong: "commence", right: "commencent", choices: ["commencent", "commence", "commences"], rule: "Avec « la plupart de » suivi d'un nom pluriel (des méthodes), le verbe se met au pluriel : commencent." },
    { level: "compagnon", type: "invariable", notion: "5e.gram.determinants-vs-pronoms", text: "Après les applaudissements, le chef d'orchestre se tourne vers les musiciens et leurs adresse un sourire.", wrong: "leurs", right: "leur", choices: ["leur", "leurs", "leurre"], rule: "Devant un verbe, leur est un pronom personnel (il adresse un sourire à eux) : il est invariable et ne prend jamais de s." },
    { level: "compagnon", type: "sens", notion: "3e.homo.lexicaux", text: "Au court de la leçon, le professeur corrige la position des poignets et des coudes.", wrong: "court", right: "cours", choices: ["cours", "court", "cour"], rule: "« Au cours de » signifie « pendant » : cours est un nom (un cours de piano). « Court » signifie « bref »." }
  ]
};
