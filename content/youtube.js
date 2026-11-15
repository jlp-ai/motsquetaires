(window.THEMES = window.THEMES || {}).youtube = {
  name: "{{YouTube|Vidéo en ligne}}",
  emoji: "▶️",
  dictees: [
    {
      level: "apprenti",
      text: "Chaque semaine, ma cousine filme une nouvelle vidéo dans sa chambre. Elle installe la caméra, vérifie la lumière et commence à parler. Le soir, ses abonnés regardent la vidéo et laissent des commentaires gentils.",
      notes: [
        { word: "regardent", rule: "Le sujet « ses abonnés » est au pluriel : le verbe se termine par -ent." },
        { word: "ses", rule: "« Ses » est un déterminant possessif : les abonnés sont à elle (à ne pas confondre avec « ces »)." },
        { word: "gentils", rule: "L'adjectif s'accorde avec le nom « commentaires » : masculin pluriel." },
        { word: "à", rule: "Dans « commence à parler », « à » est une préposition : on ne peut pas le remplacer par « avait »." },
        { word: "abonnés", rare: true, rule: "Formé sur abonner : deux n, puis -és au masculin pluriel (ses abonnés)." }
      ]
    },
    {
      level: "compagnon",
      text: "Les vidéos que la créatrice a montées pendant la nuit ont été mises en ligne dès l'aube. Ses abonnés, qui les attendaient impatiemment, se sont précipités pour les regarder. Quant aux miniatures, elles ont été retouchées avec soin.",
      notes: [
        { word: "montées", rule: "Le COD « que » (les vidéos) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "impatiemment", rare: true, rule: "Les adverbes formés sur un adjectif en -ent s'écrivent -emment : impatient, impatiemment." },
        { word: "précipités", rule: "Verbe pronominal dont le « se » est COD : le participe s'accorde avec le sujet (ses abonnés)." },
        { word: "Quant", rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t." },
        { word: "abonnés", rare: true, rule: "Formé sur abonner : deux n, puis -és au masculin pluriel." }
      ]
    },
    {
      level: "maitre",
      text: "Quelles que soient les modes, la vidéaste refuse de céder aux sirènes de l'algorithme. Les heures de tournage qu'il a fallu pour cette série, elle ne les a jamais comptées. Les extraits qu'elle a fait traduire ont été bien accueillis à l'étranger.",
      notes: [
        { word: "Quelles", rule: "« Quel que » suivi du verbe être : « quel » s'accorde avec le sujet (les modes : féminin pluriel)." },
        { word: "fallu", rule: "Le participe passé d'un verbe impersonnel reste toujours invariable : les heures qu'il a fallu." },
        { word: "comptées", rule: "Le COD « les » (les heures) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "fait", rule: "« Fait » suivi d'un infinitif reste toujours invariable." },
        { word: "vidéaste", rare: true, rule: "Personne qui réalise des vidéos. Accent aigu sur le é de vidé-, suffixe -aste avec un e final, au masculin comme au féminin." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les vidéastes se sont succédé dans ce studio exigu, quelque aguerris qu'ils soient aux affres du direct. Les scénarios qu'ils avaient cru pouvoir improviser leur ont coûté maintes nuits blanches ; aussi en rient-ils volontiers aujourd'hui.",
      notes: [
        { word: "succédé", rule: "Dans « se succéder », le « se » est COI (succéder à quelqu'un) : le participe reste invariable." },
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est adverbe (si) et reste invariable." },
        { word: "cru", rule: "Le « que » est COD de « improviser » et non de « croire » : le participe reste invariable." },
        { word: "affres", rare: true, rule: "Tourments, angoisses. Deux f, et ce nom féminin ne s'emploie qu'au pluriel : les affres." },
        { word: "vidéastes", rare: true, rule: "Personnes qui réalisent des vidéos. Accent aigu sur le é de vidé-, suffixe -aste, et un s au pluriel." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les abonnés attende la prochaine vidéo avec impatience.", wrong: "attende", right: "attendent", choices: ["attendent", "attend", "attendes"], rule: "Le sujet « les abonnés » est au pluriel : le verbe se termine par -ent." },
    { level: "apprenti", text: "La vidéo et en ligne depuis ce matin.", wrong: "et", right: "est", choices: ["est", "ai", "es"], rule: "On peut remplacer par « était » : c'est le verbe être, qui s'écrit « est »." },
    { level: "compagnon", text: "Les commentaires qu'elle a reçu l'ont beaucoup encouragée.", wrong: "reçu", right: "reçus", choices: ["reçus", "reçues", "reçut"], rule: "Le COD « que » (les commentaires) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
    { level: "compagnon", text: "Dans son tutoriel, elle décrit son matériel très précisement.", wrong: "précisement", right: "précisément", choices: ["précisément", "précisemment", "précisement"], rule: "Précisément fait partie des adverbes en -ément, comme énormément ou profondément : accent aigu sur le e devant -ment." },
    { level: "maitre", text: "Les dix minutes qu'a durées le direct ont paru interminables.", wrong: "durées", right: "duré", choices: ["duré", "durées", "durés"], rule: "« Que » est ici un complément de durée et non un COD : le participe de durer reste invariable." },
    { level: "maitre", text: "Pour ses miniatures, la graphiste a choisi des contours kakis assez discrets.", wrong: "kakis", right: "kaki", choices: ["kaki", "kakis", "kakies"], rule: "Un nom employé comme adjectif de couleur reste invariable : des contours kaki." },
    { level: "grand-scribe", text: "Les deux créatrices se sont parlées longuement avant de tourner ensemble.", wrong: "parlées", right: "parlé", choices: ["parlé", "parlées", "parlés"], rule: "On parle à quelqu'un : le « se » est COI, le participe reste invariable." },
    { level: "grand-scribe", text: "Le tournage a duré deux heures et demi, pauses comprises.", wrong: "demi", right: "demie", choices: ["demie", "demi", "demies"], rule: "Placé après le nom, « demi » s'accorde en genre seulement : deux heures et demie." }
  ]
};
