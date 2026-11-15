(window.THEMES = window.THEMES || {}).ia = {
  name: "Intelligence artificielle",
  emoji: "🤖",
  dictees: [
    {
      level: "apprenti",
      text: "Ce matin, ma sœur a posé une question à son assistant vocal. Les réponses sont arrivées en quelques secondes. Elle les a comparées avec soin, puis elle a vérifié ses sources dans deux livres de la bibliothèque.",
      notes: [
        { word: "arrivées", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les réponses : féminin pluriel)." },
        { word: "comparées", rule: "Le COD « les » (les réponses) est placé avant le verbe avoir : le participe s'accorde au féminin pluriel." },
        { word: "posé", rule: "Avec l'auxiliaire avoir, le participe reste invariable quand le COD (une question) est placé après." },
        { word: "ses", rule: "« Ses » est un déterminant possessif (les siennes) ; « ces » montrerait les sources." },
        { word: "vocal", rare: true, rule: "Qui fonctionne avec la voix. Adjectif en -al : un assistant vocal, des assistants vocaux.", d: 1, piege: "c et non k, finale -al" }
      ]
    },
    {
      level: "compagnon",
      text: "Les données que les chercheurs ont rassemblées servent à entraîner un algorithme. Celui-ci repère peu à peu des régularités, mais il ne comprend pas vraiment ce qu'il traite. Quant aux résultats, il faut les vérifier soigneusement avant de s'y fier.",
      notes: [
        { word: "rassemblées", rule: "Le COD « que » (les données) est placé avant le verbe : accord au féminin pluriel." },
        { word: "entraîner", rule: "Après la préposition « à », le verbe se met à l'infinitif : on peut le remplacer par « à construire » (et non « construit »)." },
        { word: "quant", rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t." },
        { word: "soigneusement", rule: "Adverbe formé sur le féminin de l'adjectif : soigneuse + ment." },
        { word: "algorithme", rare: true, rule: "Suite d'instructions qui résout un problème. Un i après le r, puis « th » : al-go-ri-thme (jamais « algorythme »).", d: 2, piege: "th pour [t], i après le r, finale -me" }
      ]
    },
    {
      level: "maitre",
      text: "Quelles que soient les prouesses des modèles de langage, il convient de garder l'esprit critique. Les réponses qu'on a crues infaillibles se sont parfois révélées fausses ; maintes affabulations, que l'algorithme avait présentées avec aplomb, ont échappé aux lecteurs pressés.",
      notes: [
        { word: "quelles", rule: "« Quel que » suivi du verbe être au subjonctif : « quel » s'accorde avec le sujet (les prouesses)." },
        { word: "crues", rule: "Le COD « que » (les réponses) précède le participe de croire, suivi d'un attribut : accord au féminin pluriel." },
        { word: "révélées", rule: "Se révéler : le « se » est COD, le participe s'accorde avec le sujet (les réponses)." },
        { word: "maintes affabulations", rare: true, rule: "« Maint » est un déterminant variable : il s'accorde avec le nom qu'il précède (maintes, féminin pluriel). Affabulations : récits inventés, avec deux f et un seul b.", d: 3, piege: "ff (famille fable), un seul b, maintes accordé" },
        { word: "algorithme", rare: true, rule: "Un i après le r, puis « th » : al-go-ri-thme (jamais « algorythme »).", d: 2, piege: "th pour [t], i après le r, finale -me" }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les algorithmes se sont succédé à un rythme tel que les plus aguerris, d'ordinaire circonspects, se sont fait séduire par ces oracles conversationnels. Quelque convaincantes que paraissent leurs réponses, il sied de les confronter aux sources, sans s'en remettre aveuglément à des machines qui, faute de discernement, ne doutent jamais.",
      notes: [
        { word: "succédé", rule: "Se succéder : le « se » est COI (succéder à), le participe reste invariable." },
        { word: "aguerris", rule: "Endurcis par l'expérience. Famille de guerre : gu devant e, deux r, accord au masculin pluriel.", rare: true, d: 3, piege: "gu, rr (famille guerre), s du pluriel" },
        { word: "circonspects", rule: "Prudents, réservés. Le t final, muet, se retrouve dans circonspection ; s au masculin pluriel.", rare: true, d: 3, piege: "sp, ct final muet (famille circonspection)" },
        { word: "fait", rule: "« Fait » suivi d'un infinitif reste toujours invariable, y compris à la forme pronominale." },
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est adverbe (si) et reste invariable." },
        { word: "aveuglément", rare: true, rule: "Sans réflexion ni contrôle. Cet adverbe prend un accent aigu avant le suffixe : aveuglé + ment.", d: 3, piege: "é de l'adverbe (et non -ement), famille aveugle" },
        { word: "conversationnels", rare: true, rule: "Qui dialoguent avec l'utilisateur. Formé sur conversation : deux n devant le suffixe -el, et un s au masculin pluriel (ces oracles).", d: 2, piege: "nn (-ionnel), finale -els" }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les ordinateurs calcule très vite, mais ils peuvent se tromper.", wrong: "calcule", right: "calculent", choices: ["calculent", "calcules", "calculer"], rule: "Le sujet « les ordinateurs » est à la 3e personne du pluriel : ils calculent." },
    { level: "apprenti", text: "La réponse de l'assistant et rapide, mais elle n'est pas toujours juste.", wrong: "et", right: "est", choices: ["est", "es", "ait"], rule: "On peut dire « était rapide » : c'est le verbe être, qui s'écrit « est »." },
    { level: "compagnon", text: "Bien qu'elle est présentée avec assurance, cette réponse contient une erreur.", wrong: "est", right: "soit", choices: ["soit", "soient", "soi"], rule: "« Bien que » est toujours suivi du subjonctif : bien qu'elle soit présentée." },
    { level: "compagnon", text: "Les élèves se sont aperçu que l'image avait été générée par un ordinateur.", wrong: "aperçu", right: "aperçus", choices: ["aperçus", "aperçue", "apercevoir"], rule: "S'apercevoir est un verbe pronominal dont le participe s'accorde avec le sujet (les élèves)." },
    { level: "maitre", text: "Les images que le logiciel a faites apparaître semblaient presque réelles.", wrong: "faites", right: "fait", choices: ["fait", "faits", "faites"], rule: "Le participe « fait » suivi d'un infinitif reste toujours invariable." },
    { level: "maitre", text: "Quoiqu'on lui demande, l'assistant fournit une réponse sans toujours signaler ses incertitudes.", wrong: "Quoiqu'on", right: "Quoi qu'on", choices: ["Quoi qu'on", "Quoiqu'on", "Quoique on"], rule: "« Quoi que » en deux mots signifie « quelle que soit la chose que » ; « quoique » en un mot signifie « bien que »." },
    { level: "grand-scribe", text: "Les deux équipes se sont parlées longuement avant de publier leurs travaux.", wrong: "parlées", right: "parlé", choices: ["parlé", "parlées", "parlés"], rule: "Se parler : le « se » est COI (parler à quelqu'un), le participe reste invariable." },
    { level: "grand-scribe", text: "Malgré les nombreuses vérifications qu'il a fallues, quelques erreurs ont subsisté dans le texte généré.", wrong: "fallues", right: "fallu", choices: ["fallu", "fallues", "fallus"], rule: "Le participe d'un verbe impersonnel comme falloir reste toujours invariable." }
  ]
};
