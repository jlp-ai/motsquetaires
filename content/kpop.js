(window.THEMES = window.THEMES || {}).kpop = {
  name: "K-Pop",
  emoji: "🎤",
  dictees: [
    {
      level: "apprenti",
      text: "Mes amies et moi avons dansé toute la soirée sur la nouvelle chanson. Les chanteuses sont montées sur la scène, et la foule a crié très fort.",
      notes: [
        { word: "dansé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici." },
        { word: "montées", rule: "Avec l'auxiliaire être, le participe s'accorde avec le sujet (les chanteuses : féminin pluriel)." },
        { word: "soirée", rule: "Nom féminin en -ée." }
      ]
    },
    {
      level: "compagnon",
      text: "Ces groupes, que des milliers de fans ont découverts sur Internet, répètent pendant des années avant de se produire en public. Les chorégraphies qu'ils ont apprises demandent une précision remarquable.",
      notes: [
        { word: "découverts", rule: "Le COD « que » (ces groupes) est placé avant le verbe : accord au masculin pluriel." },
        { word: "apprises", rule: "Le COD « que » (les chorégraphies) est placé avant le verbe : accord au féminin pluriel." },
        { word: "chorégraphies", rare: true, rule: "Le « ch » se prononce [k], le son [f] s'écrit « ph », et un seul accent aigu : cho-ré-gra-phies.", d: 2, piege: "ch pour [k], é, ph pour [f], finale -ies" }
      ]
    },
    {
      level: "maitre",
      text: "Bien que l'engouement pour ces formations soit récent, leurs méthodes de recrutement, héritées d'une logique industrielle, ont suscité des débats : on s'est interrogé sur les cadences et la synchronisation imposées à des adolescents, quelles que soient leurs motivations.",
      notes: [
        { word: "soit", rule: "« Bien que » est suivi du subjonctif : soit." },
        { word: "engouement", rule: "Enthousiasme vif et souvent passager. Formé sur engouer : en- (et non an-), puis -ement avec le e muet.", rare: true, d: 2, piege: "en- et non an-, e muet devant -ment" },
        { word: "interrogé", rule: "« On » a ici un sens indéterminé : le participe de « s'interroger » s'accorde au masculin singulier." },
        { word: "quelles", rule: "« Quel que » + être au subjonctif : « quel » s'accorde avec le sujet (leurs motivations : féminin pluriel)." },
        { word: "synchronisation", rule: "Mise en accord de mouvements dans le temps. Famille de synchrone : y après le s, ch prononcé [k], puis -isation avec un s.", rare: true, d: 3, piege: "y, ch pour [k], -isation (famille synchrone)" },
        { word: "recrutement", rare: true, rule: "Formé sur recruter : aucun accent sur le premier e, et le e muet de recrute se garde devant -ment.", d: 1, piege: "pas d'accent, e muet devant -ment" },
        { word: "imposées", rule: "Le participe employé sans auxiliaire s'accorde avec les noms qu'il qualifie (les cadences et la synchronisation : féminin pluriel)." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Phénomène planétaire, la vague coréenne, qu'on eût crue éphémère, s'est imposée au point que même les plus sceptiques, naguère rétifs, se sont piqués d'en fredonner les refrains hypnotiques et d'en imiter les chorégraphies millimétrées ; maints observateurs, longtemps perplexes devant ce foisonnement de talents, se sont répandus en éloges dithyrambiques.",
      notes: [
        { word: "crue", rule: "Le COD « que » (la vague) est placé avant le verbe : accord au féminin singulier." },
        { word: "eût", rule: "« Qu'on eût crue » est un conditionnel passé 2e forme (= qu'on aurait crue), identique au plus-que-parfait du subjonctif : eût, avec un accent circonflexe." },
        { word: "piqués", rule: "« Se piquer de » (se flatter de) est un pronominal à sens figuré : le participe s'accorde avec le sujet (les plus sceptiques)." },
        { word: "hypnotiques", rule: "Qui exerce une sorte de fascination. Famille d'hypnose : y après le h, puis -ique, avec un s au pluriel.", rare: true, d: 3, piege: "y (famille hypnose), -ique" },
        { word: "naguère", rule: "Adverbe signifiant « il y a peu de temps » ; à ne pas confondre avec « jadis »." },
        { word: "millimétrées", rare: true, rule: "Réglées avec une précision extrême. Formé sur millimètre : deux l, le è devient é, et l'accord se fait au féminin pluriel (les chorégraphies).", d: 2, piege: "ll, é (et non è), accord féminin pluriel" },
        { word: "foisonnement", rule: "Abondance, grand nombre. Dérivé de foisonner : oi, puis deux n devant -ement.", rare: true, d: 3, piege: "oi, nn (famille foisonner)" },
        { word: "répandus", rule: "Se répandre en éloges : pronominal, le participe s'accorde avec le sujet (maints observateurs : masculin pluriel)." },
        { word: "dithyrambiques", rule: "Excessivement élogieux. Dérivé de dithyrambe : th, y, puis -ambique, avec -ques au pluriel.", rare: true, d: 3, piege: "th, y, -ambiques" }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Elle à chanté devant des milliers de fans.", wrong: "à", right: "a", choices: ["a", "as", "à"], rule: "« A » est le verbe avoir : on peut dire « elle avait chanté ». Pas d'accent." },
    { level: "apprenti", text: "Ma sœur et ses copines sont allé voir le concert.", wrong: "allé", right: "allées", choices: ["allées", "allés", "allez"], rule: "Avec l'auxiliaire être, le participe s'accorde avec le sujet : féminin pluriel." },
    { level: "compagnon", text: "Les chansons qu'elles ont enregistré ce mois-ci sortiront bientôt.", wrong: "enregistré", right: "enregistrées", choices: ["enregistrées", "enregistrer", "enregistrés"], rule: "Le COD « que » (les chansons) est placé avant le verbe : accord au féminin pluriel." },
    { level: "compagnon", text: "Les fans ont attendu patiamment leurs idoles devant la salle.", wrong: "patiamment", right: "patiemment", choices: ["patiemment", "patiamment", "patiemant"], rule: "Patient donne patiemment : les adverbes formés sur un adjectif en -ent s'écrivent -emment." },
    { level: "maitre", text: "Quelque soit le groupe, les répétitions sont intenses.", wrong: "Quelque", right: "Quel que", choices: ["Quel que", "Quelque", "Quelques"], rule: "Devant le verbe être au subjonctif, « quel que » s'écrit en deux mots." },
    { level: "maitre", text: "Ces chorégraphies, d'une rare complexité, ont été applaudit par le public.", wrong: "applaudit", right: "applaudies", choices: ["applaudies", "applaudis", "applaudit"], rule: "Passif : le participe s'accorde avec le sujet (ces chorégraphies : féminin pluriel)." },
    { level: "grand-scribe", text: "Les idoles se sont révélées d'une étonnante simplicité, et leurs admirateurs s'en sont retourné ravis.", wrong: "retourné", right: "retournés", choices: ["retournés", "retournées", "retourner"], rule: "S'en retourner : verbe pronominal, le participe s'accorde avec le sujet (leurs admirateurs : masculin pluriel)." },
    { level: "grand-scribe", text: "Les chanteuses, tout joyeuses, ont salué la foule.", wrong: "tout", right: "toutes", choices: ["toutes", "tous", "tout"], rule: "Devant un adjectif féminin commençant par une consonne, « tout » s'accorde : toutes joyeuses." }
  ]
};
