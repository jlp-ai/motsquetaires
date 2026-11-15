(window.THEMES = window.THEMES || {}).harrypotter = {
  name: "{{Harry Potter|Sorciers}}",
  emoji: "🧙",
  dictees: [
    {
      level: "apprenti",
      text: "Le premier soir, les nouveaux élèves sont entrés dans la grande salle. Des bougies flottaient au-dessus des longues tables. Chacun se demandait dans quelle maison il serait réparti. Les plus timides se sont assis tout au bout des bancs.",
      notes: [
        { word: "entrés", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les nouveaux élèves : masculin pluriel)." },
        { word: "flottaient", rule: "Imparfait, 3e personne du pluriel : le sujet est « des bougies », terminaison -aient." },
        { word: "au-dessus", rule: "« Au-dessus » s'écrit avec un trait d'union." },
        { word: "quelle", rule: "« Quelle » s'accorde avec le nom qu'il accompagne : maison est féminin singulier." },
        { word: "assis", rule: "Verbe pronominal : le participe s'accorde avec le sujet (les plus timides : masculin pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Penchés sur leurs chaudrons, les élèves ont suivi les consignes de leur vieux grimoire. La potion qu'ils avaient préparée a soudain changé de couleur. Quelques alambics se sont brisés sur le carrelage, mais aucun d'eux n'a été blessé.",
      notes: [
        { word: "penchés", rule: "Le participe employé seul s'accorde avec le nom auquel il se rapporte (les élèves : masculin pluriel)." },
        { word: "grimoire", rule: "Livre de formules magiques. Nom masculin terminé par -oire, comme « répertoire ».", rare: true, d: 1, piege: "finale -oire (comme répertoire)" },
        { word: "préparée", rule: "Le COD « qu' » (la potion) est placé avant l'auxiliaire avoir : accord au féminin singulier." },
        { word: "alambics", rule: "Appareil de verre ou de cuivre servant à distiller. Nom masculin terminé par un c muet, comme dans alambiquer.", rare: true, d: 3, piege: "c final muet (famille alambiquer)" },
        { word: "brisés", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (quelques alambics : masculin pluriel)." },
        { word: "blessé", rule: "« Aucun d'eux » est singulier : le verbe et le participe restent au singulier." }
      ]
    },
    {
      level: "maitre",
      text: "Penchée sur un parchemin jauni, l'élève recopiait, à la lueur diaphane d'une chandelle, des sortilèges qu'aucun professeur n'avait encore enseignés. Les escaliers, qui changeaient de direction à leur guise, l'obligèrent maintes fois à rebrousser chemin. Quoiqu'elle fût épuisée, elle ne referma son encrier qu'à l'aube.",
      notes: [
        { word: "parchemin", rule: "Peau préparée pour l'écriture. Finale en -in, nom masculin.", rare: true, d: 2, piege: "ch pour [ʃ], finale -in" },
        { word: "diaphane", rule: "Qui laisse passer la lumière sans être transparent. Ph et non f, finale -ane : dia-pha-ne.", rare: true, d: 3, piege: "ph et non f, finale -ane" },
        { word: "sortilèges", rule: "Formules magiques. Accent grave sur le e, nom masculin malgré sa finale en -ège.", rare: true, d: 2, piege: "è, g doux, -ège masculin" },
        { word: "enseignés", rule: "Le COD « qu' » (des sortilèges) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "maintes", rule: "« Maintes fois » : maint s'accorde avec fois, féminin pluriel." },
        { word: "obligèrent", rule: "Passé simple, 3e personne du pluriel du 1er groupe : -èrent." },
        { word: "fût", rule: "« Quoique » appelle le subjonctif ; dans un récit au passé simple, imparfait du subjonctif avec accent circonflexe : fût." },
        { word: "encrier", rule: "Petit récipient à encre. Dérivé de encre, finale en -ier.", rare: true, d: 2, piege: "en- et non an-, finale -ier (famille encre)" }
      ]
    },
    {
      level: "grand-scribe",
      text: "Des générations de lecteurs se sont succédé sur ces pages, ont rêvé de s'incliner devant un hippogriffe et de rempoter des mandragores aux cris stridents. Quel qu'ait été leur âge, tous se sont plu à imaginer les philtres, un phénix et les centaures scrutant le ciel ; la plupart s'en sont souvenus bien après avoir refermé le dernier tome.",
      notes: [
        { word: "succédé", rule: "On succède à quelqu'un : le « se » est COI, le participe reste invariable." },
        { word: "hippogriffe", rule: "Créature mi-cheval, mi-aigle. Deux p après hi, deux f, finale en -e.", rare: true, d: 3, piege: "pp (comme hippopotame), ff (comme griffe), -e final" },
        { word: "mandragores", rule: "Plante aux racines de forme humaine. Nom féminin, finale en -ore suivie d'un e.", rare: true, d: 1, piege: "finale -ore" },
        { word: "quel", rule: "« Quel que » + être au subjonctif : quel s'accorde avec le sujet (leur âge : masculin singulier)." },
        { word: "plu", rule: "Le participe passé de se plaire reste invariable (le « se » est COI)." },
        { word: "philtres", rule: "Breuvages magiques. Ph initial et finale en -tre, comme « filtre » mais avec ph.", rare: true, d: 3, piege: "ph et non f, finale -tre" },
        { word: "phénix", rule: "Oiseau fabuleux qui renaît de ses cendres. Ph initial, accent aigu, finale en -x ; le mot ne change pas au pluriel.", rare: true, d: 3, piege: "ph, é, x final muet" },
        { word: "centaures", rule: "Êtres mi-hommes, mi-chevaux. Finale en -aure, écrite avec « au ».", rare: true, d: 2, piege: "c devant e, -au-" },
        { word: "souvenus", rule: "Se souvenir est essentiellement pronominal : le participe s'accorde avec le sujet (la plupart des lecteurs : masculin pluriel)." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Le hibou a apporter une lettre ce matin.", wrong: "apporter", right: "apporté", choices: ["apporté", "apportée", "apportés"], rule: "Après l'auxiliaire avoir, on utilise le participe passé : apporté." },
    { level: "apprenti", text: "Les élèves rangent leur baguettes avant le dîner.", wrong: "leur", right: "leurs", choices: ["leurs", "leur", "l'heure"], rule: "Devant un nom pluriel (baguettes), le déterminant prend un s : leurs." },
    { level: "compagnon", text: "Les grimoires que nous avons emprunté sont très anciens.", wrong: "emprunté", right: "empruntés", choices: ["empruntés", "emprunter", "empruntées"], rule: "Le COD « que » (les grimoires) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
    { level: "compagnon", text: "Les balais se sont envolé au-dessus du terrain.", wrong: "envolé", right: "envolés", choices: ["envolés", "envolées", "envoler"], rule: "S'envoler est essentiellement pronominal : le participe s'accorde avec le sujet (les balais)." },
    { level: "maitre", text: "Bien que la potion ait bouillit toute la nuit, elle n'a pas changé de couleur.", wrong: "bouillit", right: "bouilli", choices: ["bouilli", "bouillie", "bouillis"], rule: "Le participe passé de bouillir se termine par -i : ait bouilli." },
    { level: "maitre", text: "Les sortilèges qu'elle s'est efforcée d'apprendre lui ont coûtés des nuits entières.", wrong: "coûtés", right: "coûté", choices: ["coûté", "coûtées", "coûtés"], rule: "Le COD « des nuits entières » est placé après le verbe : le participe reste invariable." },
    { level: "grand-scribe", text: "Les deux amis se sont souris en découvrant qu'ils partageraient le même dortoir.", wrong: "souris", right: "souri", choices: ["souri", "souris", "souries"], rule: "On sourit à quelqu'un : le « se » est COI, le participe de se sourire reste invariable." },
    { level: "grand-scribe", text: "Quelques deux cents grimoires s'entassaient sur les rayonnages de la réserve.", wrong: "Quelques", right: "Quelque", choices: ["Quelque", "Quelques", "Quel que"], rule: "Devant un nombre, « quelque » signifie « environ » : c'est un adverbe invariable." }
  ]
};
