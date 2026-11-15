(window.THEMES = window.THEMES || {}).metro = {
  name: "Le métro de Paris",
  emoji: "🚇",
  dictees: [
    {
      level: "apprenti",
      text: "Ce matin, Léa a pris le métro à la station Bastille. Elle a passé le tourniquet, puis elle est descendue sur le quai de la ligne 1. Quand la rame est arrivée, les voyageurs sont montés sans se bousculer. Léa est restée debout jusqu'à Châtelet.",
      notes: [
        { word: "passé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « le tourniquet » est placé après)." },
        { word: "descendue", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (Léa : féminin singulier)." },
        { word: "arrivée", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (la rame : féminin singulier)." },
        { word: "montés", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les voyageurs : masculin pluriel)." },
        { word: "restée", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (Léa : féminin singulier)." }
      ]
    },
    {
      level: "apprenti",
      text: "Dimanche, la famille de Paul a visité Montmartre. Pour y monter, elle a pris la ligne 12 jusqu'à la station Abbesses. L'entrée de style Art nouveau, avec sa verrière, a beaucoup plu aux enfants. Ils ont pris des photos avant de remonter à l'air libre.",
      notes: [
        { word: "visité", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « Montmartre » est placé après)." },
        { word: "pris", rule: "Participe passé de prendre : il se termine par un s, comme le féminin « prise » le laisse entendre." },
        { word: "plu", rule: "Participe passé de plaire : il s'écrit sans s ni t et reste invariable." },
        { word: "photos", rule: "« Photo » est l'abréviation de « photographie » : au pluriel, un s final." },
        { word: "remonter", rule: "Après la préposition « de », le verbe se met à l'infinitif : remonter." }
      ]
    },
    {
      level: "compagnon",
      text: "Aux heures de pointe, la station Châtelet devient un véritable labyrinthe. Les voyageurs que le flot a portés jusqu'aux couloirs de correspondance se sont frayé un passage entre les portillons et les escaliers. Plusieurs sont arrivés en retard à leur rendez-vous.",
      notes: [
        { word: "labyrinthe", rule: "Réseau de couloirs où l'on se perd : y après le l, puis -inthe avec th et e final." },
        { word: "portés", rule: "Le COD « que » (les voyageurs) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "frayé", rule: "Se frayer un passage : « se » est COI, le COD « un passage » est placé après. Le participe reste invariable." },
        { word: "portillons", rule: "Petite porte à battant qui barre un passage : -ill- avant la finale -on, comme dans « portail » ; s au pluriel.", rare: true, d: 2, piege: "ill, finale -on" },
        { word: "arrivés", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (plusieurs : masculin pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Sur la ligne 14, qui dessert la gare Saint-Lazare et la gare de Lyon, les rames circulent sans conducteur. Les voyageurs attendent derrière des portes vitrées, qui s'ouvrent quand le train s'est arrêté. Dans les couloirs, la foule s'est écoulée sans bousculade devant les tourniquets.",
      notes: [
        { word: "dessert", rule: "Desservir : le verbe se termine par un t et prend deux s. Il s'écrit comme le nom « dessert » (le dernier plat du repas) et se distingue de « désert »." },
        { word: "vitrées", rule: "L'adjectif s'accorde avec « portes » : féminin pluriel." },
        { word: "arrêté", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (le train : masculin singulier)." },
        { word: "tourniquets", rule: "Appareil à barres tournantes qui filtre le passage : finale en -quet avec un t muet, et s au pluriel.", rare: true, d: 2, piege: "qu et non k, finale -et muette" },
        { word: "écoulée", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (la foule : féminin singulier)." },
        { word: "bousculade", rule: "Nom formé sur « bousculer » : un seul l, puis -ade." }
      ]
    },
    {
      level: "maitre",
      text: "Sous les voûtes de la station Concorde, des carreaux disposés en mosaïque composent les lettres d'un texte célèbre. Quelque patience qu'aient eue les passants, rares sont ceux qui l'ont lu en entier. Les voyageurs claustrophobes, eux, pressent le pas jusqu'à la correspondance sans lever les yeux.",
      notes: [
        { word: "disposés", rule: "Participe passé employé comme adjectif : il s'accorde avec « carreaux » (masculin pluriel)." },
        { word: "mosaïque", rule: "Assemblage de petits carreaux : tréma sur le i, puis -que.", rare: true, d: 2, piege: "s et non z, tréma, -que" },
        { word: "quelque", rule: "« Quelque » est un adjectif devant un nom : il s'accorde en nombre avec lui (quelque patience, quelques efforts)." },
        { word: "eue", rule: "Le COD « que » (la patience) est placé avant l'auxiliaire avoir : le participe « eu » s'accorde et prend un e au féminin." },
        { word: "claustrophobes", rule: "Qui craint les lieux clos. Formé sur « claustrum » : claustro- avec au, puis -phobes avec ph.", rare: true, d: 3, piege: "au, ph, famille claustro-" },
      ]
    },
    {
      level: "maitre",
      text: "Entre Passy et Bir-Hakeim, la ligne 6 franchit la Seine sur un viaduc. Les rames, qui roulent sur des pneumatiques, filent sans le fracas qu'on imaginait. Les voyageurs, que la vue du fleuve a surpris, se sont tus un instant, puis se sont souri en reconnaissant la tour Eiffel.",
      notes: [
        { word: "viaduc", rule: "Pont portant une voie : via- comme dans « voie », puis -duc avec un c final muet.", rare: true, d: 2, piege: "c final muet, via-" },
        { word: "pneumatiques", rule: "Pneu : le p initial est muet et pn- se prononce n ; puis -eu-, -ma-, -tiques.", rare: true, d: 3, piege: "p muet, pn-, eu, -tiques" },
        { word: "imaginait", rule: "Imparfait, 3e personne du singulier : -ait. Le sujet est « on »." },
        { word: "surpris", rule: "Le COD « que » (les voyageurs) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "tus", rule: "Se taire : « se » est COD, le participe s'accorde avec le sujet (les voyageurs). Il s'écrit sans accent circonflexe : tu, tus." },
        { word: "souri", rule: "Se sourire : « se » est COI (sourire à quelqu'un), le participe reste invariable." }
      ]
    },
    {
      level: "grand-scribe",
      text: "À Montmartre, l'entrée de la station Abbesses est un édicule de style Art nouveau, coiffé d'une verrière aux courbes végétales. Autrefois, des poinçonneurs, postés derrière un portillon, contrôlaient chaque ticket, et leurs gestes se reflétaient dans les carreaux biseautés des couloirs. Les voyageurs d'aujourd'hui, que nul poinçonneur n'arrête plus, passent sans y songer.",
      notes: [
        { word: "édicule", rule: "Petite construction en surface, ici l'abri d'une entrée de station : é initial, un seul d, puis -icule avec c.", rare: true, d: 3, piege: "é initial, un seul d, c et non qu" },
        { word: "coiffé", rule: "Participe employé comme adjectif : il s'accorde avec « édicule » (masculin singulier)." },
        { word: "poinçonneurs", rule: "Employés qui perçaient les tickets avec un poinçon : -oin-, cédille sous le c, puis -onn- avec deux n et -eurs.", rare: true, d: 4, piege: "oin, ç, deux n, -eur" },
        { word: "postés", rule: "Participe employé comme adjectif : il s'accorde avec « poinçonneurs » (masculin pluriel)." },
        { word: "biseautés", rule: "Taillés en biseau, comme les bords de ces carreaux : le son [z] s'écrit s (comme dans « biseau »), puis -eau- et -tés au masculin pluriel.", rare: true, d: 3, piege: "s et non z, eau, -té accordé" },
        { word: "songer", rule: "Après la préposition « sans », le verbe se met à l'infinitif : songer." }
      ]
    },
    {
      level: "grand-scribe",
      text: "À Châtelet, la signalétique, aussi complète soit-elle, ne dispense pas le voyageur de s'orienter dans un dédale de couloirs. Aux heures d'affluence, les pas résonnent sous les voûtes, et les parois laissent perler un léger suintement, tandis que les rames, en franchissant les aiguillages, crissent à tout rompre. Les voyageurs s'y sont toujours sentis un peu perdus.",
      notes: [
        { word: "signalétique", rule: "Ensemble des panneaux et pictogrammes d'orientation. Famille de « signal » : signa-, puis -létique avec é et un seul t.", rare: true, d: 3, piege: "gn, é, un seul t, -ique" },
        { word: "soit", rule: "Dans « aussi complète soit-elle », le verbe être est au subjonctif présent, inversé, avec un trait d'union avant le pronom." },
        { word: "affluence", rule: "Arrivée en grand nombre : deux f, puis -luence. Famille de « affluer ».", rare: true, d: 2, piege: "ff, -uence" },
        { word: "suintement", rule: "Écoulement lent de gouttelettes. Formé sur « suinter » : sui-, n, t, puis -ement avec e muet.", rare: true, d: 3, piege: "ui, n devant t, e muet devant -ment" },
        { word: "aiguillages", rule: "Dispositif qui dirige les rames d'une voie à l'autre. Famille d'« aiguille » : ai-, gu, -ill-, puis -ages au pluriel.", rare: true, d: 3, piege: "ai, gu, ill (famille aiguille)" },
        { word: "sentis", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (les voyageurs : masculin pluriel)." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les couloirs de la station Châtelet sont long et pleins de monde.", wrong: "long", right: "longs", choices: ["longs", "long", "longue"], rule: "L'adjectif attribut s'accorde avec le sujet « les couloirs » : masculin pluriel." },
    { level: "apprenti", text: "À Nation, Inès et son frère on pris la ligne 6 jusqu'à l'Étoile.", wrong: "on", right: "ont", choices: ["ont", "on", "ons"], rule: "On peut dire « avaient » : c'est le verbe avoir, avec un t final." },
    { level: "apprenti", text: "La rame est arrivé à la station Concorde et les portes se sont ouvertes.", wrong: "arrivé", right: "arrivée", choices: ["arrivée", "arrivés", "arrivé"], rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet « la rame » : féminin singulier." },
    { level: "apprenti", text: "Pour monter à Montmartre, Léo doit prendre la ligne 12 puis descendu à Abbesses.", wrong: "descendu", right: "descendre", choices: ["descendre", "descendez", "descendu"], rule: "Après un verbe conjugué (« doit prendre... puis »), le verbe se met à l'infinitif : descendre." },
    { level: "compagnon", text: "Les correspondances que les voyageurs ont pris à Châtelet étaient nombreuses.", wrong: "pris", right: "prises", choices: ["prises", "pris", "prise"], rule: "Le COD « que » (les correspondances) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
    { level: "compagnon", text: "Sur la ligne 1, entre Bastille et Concorde, les rames passent fréquament.", wrong: "fréquament", right: "fréquemment", choices: ["fréquemment", "fréquamment", "fréquament"], rule: "Adjectif en -ent, adverbe en -emment : fréquent donne fréquemment (deux m)." },
    { level: "compagnon", text: "À la station Louvre-Rivoli, la rame peu arriver à tout moment.", wrong: "peu", right: "peut", choices: ["peut", "peu", "peux"], rule: "On peut dire « pouvait » : c'est le verbe pouvoir, 3e personne du singulier, avec un t." },
    { level: "compagnon", text: "Dans le couloir de correspondance de Châtelet, les passants se sont bousculé.", wrong: "bousculé", right: "bousculés", choices: ["bousculés", "bousculé", "bousculées"], rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (les passants : masculin pluriel)." },
    { level: "maitre", text: "Quelles que soit les heures de la journée, les quais de Châtelet restent animés.", wrong: "soit", right: "soient", choices: ["soient", "soit", "soie"], rule: "Dans « quel que soit », le verbe être s'accorde avec le sujet (les heures : pluriel) et « quel » aussi." },
    { level: "maitre", text: "Bien que la ligne 1 est automatique, les voyageurs de Bastille restent prudents.", wrong: "est", right: "soit", choices: ["soit", "est", "sois"], rule: "« Bien que » est suivi du subjonctif : que la ligne 1 soit automatique." },
    { level: "maitre", text: "Les voyageuses, tout confuses d'avoir manqué la correspondance de Châtelet, ont attendu la rame suivante.", wrong: "tout", right: "toutes", choices: ["toutes", "tout", "tous"], rule: "Devant un adjectif féminin commençant par une consonne, « tout » s'accorde : toutes confuses." },
    { level: "maitre", text: "Dans la rame de la ligne 4, les deux inconnues se sont parlées longuement jusqu'à Montparnasse.", wrong: "parlées", right: "parlé", choices: ["parlé", "parlées", "parlés"], rule: "Se parler : « se » est COI (parler à quelqu'un), le participe reste invariable." },
    { level: "grand-scribe", text: "Quoique l'on fasse, les couloirs de Châtelet restent bondés aux heures de pointe.", wrong: "Quoique", right: "Quoi que", choices: ["Quoi que", "Quoique", "Quoiqu'"], rule: "« Quoi que » en deux mots signifie « quelle que soit la chose que » et appelle le subjonctif (que l'on fasse) ; « quoique » signifie « bien que »." },
    { level: "grand-scribe", text: "Les voyageurs se sont plus à déchiffrer les lettres de la station Concorde.", wrong: "plus", right: "plu", choices: ["plu", "plus", "plut"], rule: "Se plaire à : « se » est COI, le participe « plu » reste invariable et s'écrit sans s." },
    { level: "grand-scribe", text: "Les voyageurs eux-même s'étonnent de la lenteur des correspondances à Châtelet.", wrong: "eux-même", right: "eux-mêmes", choices: ["eux-mêmes", "eux-même", "eux mêmes"], rule: "« Même » s'accorde après un pronom pluriel et s'écrit avec un trait d'union : eux-mêmes." },
    { level: "grand-scribe", text: "Les voyageurs de la ligne 12 se sont aperçu trop tard qu'ils avaient dépassé Concorde.", wrong: "aperçu", right: "aperçus", choices: ["aperçus", "aperçu", "aperçues"], rule: "S'apercevoir : « se » est COD, le participe s'accorde avec le sujet (les voyageurs : masculin pluriel)." }
  ]
};
