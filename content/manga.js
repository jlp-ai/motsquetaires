(window.THEMES = window.THEMES || {}).manga = {
  name: "Manga et anime",
  emoji: "📚",
  dictees: [
    {
      level: "apprenti",
      text: "Chaque mercredi, la jeune dessinatrice prépare une nouvelle planche. Elle trace d'abord les cases au crayon, puis elle encre les visages de ses héros. Ses amies sont venues l'encourager, et elles ont admiré les dessins terminés.",
      notes: [
        { word: "venues", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (ses amies : féminin pluriel)." },
        { word: "admiré", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici, car le COD (les dessins) est placé après." },
        { word: "ses", rule: "« Ses » est un déterminant possessif : ce sont ses héros à elle (les siens), à ne pas confondre avec « ces »." },
        { word: "terminés", rule: "Le participe employé comme adjectif s'accorde avec le nom qu'il accompagne (les dessins : masculin pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Les planches que la dessinatrice avait esquissées pendant l'été ont enfin été publiées. Dès la sortie du premier tome, les lecteurs se sont précipités en librairie. Quant à l'adaptation en série animée, elle passionne déjà les amateurs, qui attendent impatiemment le premier épisode.",
      notes: [
        { word: "esquissées", rule: "Le COD « que » (les planches) est placé avant le verbe : le participe s'accorde au féminin pluriel." },
        { word: "précipités", rule: "Verbe pronominal : le participe s'accorde avec le sujet (les lecteurs : masculin pluriel)." },
        { word: "Quant", rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t, à la différence de « quand », qui marque le temps." },
        { word: "impatiemment", rare: true, rule: "Les adjectifs en -ent donnent des adverbes en -emment : impatient, impatiemment.", d: 2, piege: "-emment (famille patient), mm" }
      ]
    },
    {
      level: "maitre",
      text: "Pour ce nouveau tome, la dessinatrice a repris quelque trente planches, phylactères compris. Les efforts qu'il lui a fallu consentir ont été considérables : les mèches bleu nuit de son héroïne ont exigé des heures d'encrage et de retouches. Ses lecteurs, eux, n'en ont rien su.",
      notes: [
        { word: "quelque", rule: "Devant un nombre, « quelque » est un adverbe qui signifie « environ » : il reste invariable." },
        { word: "phylactères", rule: "Bulle qui contient les paroles d'un personnage de bande dessinée. Ph, y, puis -lactère avec un c et un t, accent grave sur le e.", rare: true, d: 3, piege: "ph, y, ct, è : aucun indice à l'oreille" },
        { word: "fallu", rule: "Le participe passé d'un verbe impersonnel (il faut) reste toujours invariable." },
        { word: "bleu nuit", rule: "Un adjectif de couleur composé de deux mots reste invariable : des mèches bleu nuit." },
        { word: "encrage", rare: true, rule: "Passage à l'encre des dessins au crayon. Formé sur encre, avec « en » : à ne pas confondre avec l'ancrage d'un bateau.", d: 2, piege: "en- (famille encre), -age" },
        { word: "retouches", rare: true, rule: "Corrections apportées à un dessin. Nom féminin formé sur toucher : re-, sans accent, et -ouches au pluriel.", d: 1, piege: "re- sans accent, -ouches" }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les dessinatrices se sont succédé à la table de l'atelier ; aucune ne s'est dérobée, quelque harassantes que soient les nuits de bouclage. Les rivaux qu'on avait crus irréconciliables se sont donné la main lors du festival, où maints amateurs costumés, tout ébaubis devant le dernier chapitre apocalyptique, arboraient des perruques vermillon.",
      notes: [
        { word: "succédé", rule: "Dans « se succéder », le « se » est complément indirect (succéder à quelqu'un) : le participe reste invariable." },
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est un adverbe signifiant « si » : il reste invariable." },
        { word: "irréconciliables", rule: "Qu'on ne peut réconcilier. Préfixe ir- devant ré-, d'où deux r ; un seul l ; accord au masculin pluriel avec « les rivaux ».", rare: true, d: 3, piege: "deux r (ir- + ré-), un seul l" },
        { word: "donné", rule: "Le « se » est complément indirect et le COD (la main) est placé après le verbe : le participe reste invariable." },
        { word: "apocalyptique", rule: "Qui évoque la fin du monde. Famille d'apocalypse : y, p puis t, et finale -ique.", rare: true, d: 3, piege: "y, pt (famille apocalypse), -ique" },
        { word: "vermillon", rare: true, rule: "Rouge vif. Deux l, finale -on. Nom employé comme adjectif de couleur, il reste invariable : des perruques vermillon.", d: 2, piege: "ll, finale -on" },
        { word: "ébaubis", rare: true, rule: "Stupéfaits, ébahis. Accent aigu initial, « -au- » au milieu, et accord au masculin pluriel (les amateurs).", d: 3, piege: "é, au et non o, b : aucune famille" }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Dans ce tome, le héros affronte trois rivals redoutables.", wrong: "rivals", right: "rivaux", choices: ["rivaux", "rivaus", "rivals"], rule: "Les noms en -al font en général leur pluriel en -aux : un rival, des rivaux." },
    { level: "apprenti", text: "Les deux amies dessinait leurs personnages pendant la récréation.", wrong: "dessinait", right: "dessinaient", choices: ["dessinaient", "dessinais", "dessinai"], rule: "Le sujet « les deux amies » est à la 3e personne du pluriel : elles dessinaient." },
    { level: "compagnon", text: "Il faut que la dessinatrice finit le chapitre avant samedi.", wrong: "finit", right: "finisse", choices: ["finisse", "finissent", "finira"], rule: "« Il faut que » est suivi du subjonctif : que la dessinatrice finisse." },
    { level: "compagnon", text: "Si la série avait du succès, l'éditeur publierai un deuxième tome.", wrong: "publierai", right: "publierait", choices: ["publierait", "publiera", "publierais"], rule: "Après « si » suivi de l'imparfait, le verbe principal se met au conditionnel : il publierait." },
    { level: "maitre", text: "Les décors qu'elle a faits peindre par ses assistants sont superbes.", wrong: "faits", right: "fait", choices: ["fait", "faite", "faites"], rule: "Le participe « fait » suivi d'un infinitif reste toujours invariable." },
    { level: "maitre", text: "Ce festival récompense chaque année des chefs-d'œuvres de l'animation.", wrong: "chefs-d'œuvres", right: "chefs-d'œuvre", choices: ["chefs-d'œuvre", "chef-d'œuvres", "chefs-d'œuvres"], rule: "Dans « chef-d'œuvre », seul « chef » prend la marque du pluriel : des chefs-d'œuvre." },
    { level: "grand-scribe", text: "Les deux rivaux se sont longtemps nuis avant de devenir alliés.", wrong: "nuis", right: "nui", choices: ["nui", "nuit", "nuits"], rule: "Dans « se nuire », le « se » est complément indirect (nuire à quelqu'un) : le participe reste invariable." },
    { level: "grand-scribe", text: "La scénariste a retouché toutes les répliques qu'elle a pues.", wrong: "pues", right: "pu", choices: ["pu", "pus", "pue"], rule: "Le participe « pu » a pour COD un infinitif sous-entendu (retoucher) : il reste invariable." }
  ]
};
