(window.THEMES = window.THEMES || {}).mousquetaires = {
  name: "Les Trois Mousquetaires",
  emoji: "⚔️",
  dictees: [
    {
      level: "apprenti",
      text: "Le jeune d'Artagnan quitte sa Gascogne pour rejoindre Paris. Il rêve de devenir mousquetaire du roi. En chemin, il s'arrête dans une auberge où il se dispute avec un inconnu. À Paris, il rencontre trois mousquetaires et les provoque en duel le même jour.",
      notes: [
        { word: "rejoindre", rule: "Après la préposition « pour », le verbe se met à l'infinitif : pour rejoindre." },
        { word: "où", rule: "« Où » pronom relatif de lieu (l'auberge où il s'arrête) prend un accent grave ; « ou » sans accent signifie « ou bien »." },
        { word: "mousquetaires", rule: "Après « trois », le nom est au pluriel : trois mousquetaires, avec un s." },
        { word: "les provoque", rule: "« Les » est un pronom placé devant le verbe (il provoque les mousquetaires) ; le verbe reste au singulier, accordé avec « il »." }
      ]
    },
    {
      level: "compagnon",
      text: "Les ferrets que la reine avait offerts au duc de Buckingham devaient briller au bal. Le cardinal, qui connaissait ce secret, espérait la compromettre. Les quatre amis se sont mis en route vers l'Angleterre ; trois sont restés en chemin, mais d'Artagnan a rapporté les bijoux à temps.",
      notes: [
        { word: "ferrets", rule: "Ferret : ici, bijou serti de diamants. Finale en -et, deux r ; pluriel régulier en s.", rare: true },
        { word: "offerts", rule: "Le COD « que » (les ferrets) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "restés", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet « trois » (trois amis) : masculin pluriel." },
        { word: "rapporté", rule: "Le COD « les bijoux » est placé après le verbe : le participe passé avec avoir reste invariable." },
        { word: "bijoux", rule: "Bijou fait partie des sept noms en -ou qui prennent un x au pluriel." }
      ]
    },
    {
      level: "maitre",
      text: "Bien que les gardes du cardinal les eussent surpris près d'un couvent, les mousquetaires ne cédèrent pas un pouce de terrain. Les rapières s'entrechoquèrent longtemps, et le jeune Gascon se rangea résolument à leurs côtés. Quelque intrigue qu'on ourdît ensuite à la cour, cette alliance ne se démentit jamais.",
      notes: [
        { word: "eussent", rule: "« Bien que » appelle le subjonctif : plus-que-parfait du subjonctif, « eussent surpris », admis devant un passé simple." },
        { word: "cédèrent", rule: "Passé simple du 1er groupe à la 3e personne du pluriel : -èrent, avec un accent grave." },
        { word: "rapières", rule: "Rapière : longue épée de duel. Un seul p, accent grave sur le e ; mot féminin.", rare: true },
        { word: "résolument", rule: "Adverbe formé sur « résolu » : le e de l'adjectif féminin disparaît, résolument sans e ni accent circonflexe." },
        { word: "ourdît", rule: "Ourdir : tramer en secret. « Quelque... que » appelle le subjonctif ; imparfait du subjonctif, 3e personne : -ît, avec un accent circonflexe.", rare: true },
        { word: "démentit", rule: "Passé simple de « se démentir » : il se démentit, sans accent circonflexe (indicatif)." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les estafettes qu'on avait aperçues aux abords de La Rochelle annonçaient le siège. Quatre bretteurs, s'étant targués de tenir un bastion exposé, y déjeunèrent sous le feu ennemi. Quels qu'aient été les périls encourus, ils ne se sont jamais départis de leur panache, et les embûches que Milady leur a tendues ont échoué.",
      notes: [
        { word: "estafettes", rule: "Estafette : messager à cheval. Mot féminin, deux t et finale en -ette.", rare: true },
        { word: "aperçues", rule: "Cédille devant u ; le COD « qu' » (les estafettes) précède l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "bretteurs", rule: "Bretteur : homme qui aime se battre à l'épée (de « brette », longue épée). Deux t.", rare: true },
        { word: "targués", rule: "« Se targuer » est essentiellement pronominal : le participe s'accorde avec le sujet (quatre bretteurs)." },
        { word: "bastion", rule: "Bastion : ouvrage avancé d'une fortification. Finale en -tion, masculin.", rare: true },
        { word: "quels", rule: "« Quel que » + être au subjonctif : « quel » s'accorde avec le sujet inversé (les périls, masculin pluriel)." },
        { word: "départis", rule: "« Se départir de » : essentiellement pronominal, accord avec le sujet « ils ». Se conjugue comme partir.", rare: true },
        { word: "embûches", rule: "Embûche : piège. Accent circonflexe sur le u ; mot féminin.", rare: true },
        { word: "tendues", rule: "Le COD « que » (les embûches) est placé avant l'auxiliaire avoir : accord au féminin pluriel." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les mousquetaires portait une cape et une épée.", wrong: "portait", right: "portaient", choices: ["portaient", "portais", "porter"], rule: "Le sujet « les mousquetaires » est au pluriel : ils portaient." },
    { level: "apprenti", text: "Le jeune Gascon quitte sont village pour Paris.", wrong: "sont", right: "son", choices: ["son", "sont", "sons"], rule: "« Son » est un déterminant possessif (son village) ; « sont » est le verbe être (ils sont)." },
    { level: "compagnon", text: "Les lettres que la reine a écrit sont restées secrètes.", wrong: "écrit", right: "écrites", choices: ["écrites", "écrits", "écrite"], rule: "Le COD « que » (les lettres) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
    { level: "compagnon", text: "Les gardes du cardinal se sont battu près du couvent.", wrong: "battu", right: "battus", choices: ["battus", "battues", "battre"], rule: "Verbe pronominal réciproque, « se » est COD : le participe s'accorde avec le sujet (les gardes)." },
    { level: "maitre", text: "Il faut que le messager parte avant l'aube et qu'il revient avec les ferrets.", wrong: "revient", right: "revienne", choices: ["revienne", "revint", "reviennent"], rule: "« Il faut que » appelle le subjonctif : qu'il revienne." },
    { level: "maitre", text: "Les deux duellistes s'étaient donnés rendez-vous à l'aube.", wrong: "donnés", right: "donné", choices: ["donné", "donnés", "données"], rule: "« Se » est COI (donner à soi) et le COD « rendez-vous » est placé après : le participe reste invariable." },
    { level: "grand-scribe", text: "Toutes les montures qu'il avait fallues pour atteindre Calais furent changées aux relais.", wrong: "fallues", right: "fallu", choices: ["fallu", "fallus", "fallues"], rule: "Le participe passé de falloir, verbe impersonnel, est toujours invariable." },
    { level: "grand-scribe", text: "Quelques intrépides qu'aient été ces cavaliers, ils redoutaient Milady.", wrong: "Quelques", right: "Quelque", choices: ["Quelque", "Quelques", "Quel que"], rule: "Devant un adjectif suivi de « que », « quelque » est un adverbe (si, aussi) : il est invariable." }
  ]
};
