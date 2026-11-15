(window.THEMES = window.THEMES || {}).cherbourg = {
  name: "Cherbourg",
  emoji: "⚓",
  dictees: [
    {
      level: "apprenti",
      text: "Au bout du Cotentin, sous la Montagne du Roule, Cherbourg regarde la mer. Les ferries partent du port et les bateaux de pêche rentrent le soir. Sur le quai, les enfants observent les mouettes. Quand le vent souffle fort, ils remontent leur capuche et ouvrent leurs parapluies.",
      notes: [
        { word: "rentrent", rule: "Le sujet « les bateaux » est au pluriel : le verbe se termine par -ent, qui ne s'entend pas." },
        { word: "quand", rule: "« Quand » marque le moment (lorsque) : il s'écrit avec un d." },
        { word: "leurs parapluies", rule: "« Leur » s'accorde avec le nom qu'il accompagne : leur capuche (une par enfant), leurs parapluies (pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Depuis la Montagne du Roule, les promeneurs découvrent la rade tout entière. La digue, que des générations d'ouvriers ont bâtie au large, protège les navires des tempêtes. Les embruns salés fouettent le visage de ceux qui se sont aventurés jusqu'au bout de la jetée.",
      notes: [
        { word: "tout entière", rule: "Devant un adjectif féminin commençant par une voyelle, l'adverbe « tout » reste invariable." },
        { word: "bâtie", rule: "Le COD « que » (la digue) est placé avant l'auxiliaire avoir : accord au féminin singulier." },
        { word: "embruns", rule: "Pluie fine d'eau de mer soulevée par le vent. Nom masculin, souvent au pluriel, écrit avec « em » devant le b.", rare: true, d: 2, piege: "em et non an, finale -uns, s du pluriel" },
        { word: "aventurés", rule: "Verbe pronominal (s'aventurer) : le participe s'accorde avec le sujet « ceux »." }
      ]
    },
    {
      level: "maitre",
      text: "Les chalutiers, partis avant l'aube, contournèrent les écueils de la rade et regagnèrent le bassin à la nuit tombée. Sur les quais, des goélands affamés tournoyaient au-dessus des caisses, bien qu'aucun pêcheur ne leur eût jeté le moindre poisson. Quant à l'arsenal voisin, il veillait, silencieux, sur ses sous-marins en construction.",
      notes: [
        { word: "chalutiers", rule: "Bateaux qui pêchent au chalut, un grand filet : le t final de chalut se retrouve dans chalutier.", rare: true, d: 1, piege: "t de chalut, finale -ier" },
        { word: "écueils", rule: "Récif ou rocher à fleur d'eau, danger pour les navires. Écrit é, puis -cueil comme dans accueil et recueil, avec un s au pluriel.", rare: true, d: 3, piege: "é, -cueil et non -queil ni -euil" },
        { word: "goélands", rule: "Grand oiseau marin : accent aigu sur le é, d final muet (goéland).", rare: true, d: 2, piege: "é, d final muet" },
        { word: "eût", rule: "« Bien que » appelle le subjonctif : plus-que-parfait du subjonctif, « eût jeté », avec accent circonflexe." },
        { word: "quant à", rule: "« Quant à » (en ce qui concerne) s'écrit avec un t, à distinguer de « quand » (lorsque)." },
        { word: "regagnèrent", rule: "Passé simple, 3e personne du pluriel du 1er groupe : -èrent." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Au Nez de Jobourg, des falaises escarpées surplombent un ressac que les rafales rendent plus furieux encore. Les marins, qui se sont maintes fois fiés au balisage de ces parages, savent combien les courants s'y sont montrés traîtres et les écueils nombreux. Quelque aguerris qu'ils soient, ils ne s'y aventurent qu'avec un accastillage irréprochable.",
      notes: [
        { word: "escarpées", rule: "Très raides, d'accès difficile : accord au féminin pluriel avec « falaises ».", rare: true, d: 1, piege: "sc, un seul p" },
        { word: "ressac", rule: "Retour violent des vagues sur elles-mêmes : nom masculin, deux s, finale en -ac.", rare: true, d: 2, piege: "ss, c final" },
        { word: "balisage", rule: "Ensemble des balises qui signalent les dangers en mer : un seul l, finale en -age.", rare: true, d: 1, piege: "s sonore comme dans balise, -age" },
        { word: "aguerris", rule: "Endurcis par l'expérience : deux r, et accord au masculin pluriel avec « ils ».", rare: true, d: 3, piege: "gu, rr (famille guerre), s du pluriel" },
        { word: "fiés", rule: "Se fier est essentiellement pronominal : le participe s'accorde avec le sujet (les marins)." },
        { word: "montrés", rule: "Se montrer : le « se » est COD, le participe s'accorde avec « les courants »." },
        { word: "écueils", rule: "Récif ou rocher à fleur d'eau, danger pour les navires. Écrit é, puis -cueil comme dans accueil et recueil, avec un s au pluriel.", rare: true, d: 3, piege: "é, -cueil et non -queil ni -euil" },
        { word: "quelque aguerris", rule: "« Quelque » devant un adjectif signifie « si » : c'est un adverbe, invariable." },
        { word: "accastillage", rule: "Ensemble des équipements d'un navire (poulies, taquets, cordages). Deux c, un s muet devant le t, puis -illage : ac-cas-til-lage.", rare: true, d: 3, piege: "cc, st, ill : aucun indice à l'oreille" }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les bateaux de pêche rentre dans la rade, devant la digue, avant la nuit.", wrong: "rentre", right: "rentrent", choices: ["rentrent", "rentres", "rentrer"], rule: "Le sujet « les bateaux » est au pluriel : ils rentrent." },
    { level: "apprenti", text: "Depuis la gare maritime de Cherbourg, le ferry part a midi pour l'Angleterre.", wrong: "a", right: "à", choices: ["à", "a", "as"], rule: "« À » est ici une préposition (on ne peut pas dire « avait midi ») : accent grave." },
    { level: "compagnon", text: "Les sous-marins que l'arsenal de Cherbourg a construit impressionnent les visiteurs.", wrong: "construit", right: "construits", choices: ["construits", "construites", "construire"], rule: "Le COD « que » (les sous-marins) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
    { level: "compagnon", text: "La brume qui couvrait la Montagne du Roule s'est levé dès que le soleil est apparu.", wrong: "levé", right: "levée", choices: ["levée", "levés", "lever"], rule: "Verbe pronominal avec « se » COD : le participe s'accorde avec le sujet (la brume)." },
    { level: "maitre", text: "Les promeneurs se sont succédés sur la Montagne du Roule tout l'après-midi.", wrong: "succédés", right: "succédé", choices: ["succédé", "succédés", "succéder"], rule: "Se succéder : le « se » est COI (succéder à quelqu'un), le participe reste invariable." },
    { level: "maitre", text: "Bien que la houle batte la digue, il faut que le ferry part à l'heure.", wrong: "part", right: "parte", choices: ["parte", "partes", "parts"], rule: "« Il faut que » appelle le subjonctif : que le ferry parte." },
    { level: "grand-scribe", text: "Les tempêtes qu'il y a eues cet hiver ont malmené la digue de Cherbourg.", wrong: "eues", right: "eu", choices: ["eu", "eues", "eus"], rule: "Le participe passé d'un verbe impersonnel (il y a) reste toujours invariable." },
    { level: "grand-scribe", text: "Les mouettes de la digue s'étaient tu au lever du jour.", wrong: "tu", right: "tues", choices: ["tues", "tus", "tue"], rule: "Se taire est essentiellement pronominal : le participe s'accorde avec le sujet (les sirènes)." }
  ]
};
