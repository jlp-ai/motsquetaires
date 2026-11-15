(window.THEMES = window.THEMES || {}).dessin = {
  name: "Dessin",
  emoji: "🎨",
  dictees: [
    {
      level: "apprenti",
      text: "Le mercredi, Léa ouvre son carnet de croquis. Elle taille ses crayons, puis elle dessine une pomme posée sur la table. Avec sa gomme, elle efface les traits inutiles et ajoute une ombre légère sous le fruit.",
      notes: [
        { word: "croquis", rule: "Le nom « croquis » se termine par un s muet, même au singulier." },
        { word: "ses", rule: "« Ses » est un déterminant possessif : les crayons sont à elle (à ne pas confondre avec « ces »)." },
        { word: "posée", rule: "Le participe passé employé comme adjectif s'accorde avec le nom : une pomme posée (féminin singulier)." },
        { word: "inutiles", rule: "L'adjectif s'accorde avec le nom qu'il qualifie : les traits inutiles (pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Les esquisses que le professeur avait demandées étaient posées sur les chevalets. Au fusain, chaque élève a tracé des hachures serrées pour suggérer les ombres, puis les a estompées du bout des doigts. Peu à peu, les volumes sont apparus sur le papier.",
      notes: [
        { word: "demandées", rule: "Le COD « que » (les esquisses) est placé avant le verbe : le participe passé s'accorde au féminin pluriel." },
        { word: "fusain", rule: "Baguette de charbon de bois pour dessiner. Finale en -ain, comme dans « bain ».", rare: true },
        { word: "hachures", rule: "Traits parallèles qui figurent l'ombre. Le h est aspiré (pas de liaison : des / hachures) et le mot finit en -ure.", rare: true },
        { word: "chaque élève a", rule: "« Chaque » est toujours singulier : le verbe se conjugue à la 3e personne du singulier." },
        { word: "estompées", rule: "Le COD « les » (les hachures) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "apparus", rule: "Apparaître se conjugue avec être : le participe s'accorde avec le sujet (les volumes : masculin pluriel)." }
      ]
    },
    {
      level: "maitre",
      text: "Bien que l'aquarelle pardonne rarement les hésitations, elle s'y est essayée tout l'été. Les lavis d'outremer qu'elle a superposés sur le papier humide ont révélé, une fois secs, des transparences inattendues. Jamais elle n'aurait cru que l'eau seule conduirait si docilement le pigment.",
      notes: [
        { word: "pardonne", rule: "« Bien que » est suivi du subjonctif : que l'aquarelle pardonne." },
        { word: "essayée", rule: "« S'essayer à » est un verbe pronominal : le participe s'accorde avec le sujet (elle)." },
        { word: "lavis", rule: "Teinte d'encre ou d'aquarelle étendue d'eau. Le s final est muet et le mot est invariable au pluriel.", rare: true },
        { word: "outremer", rule: "Bleu tiré à l'origine du lapis-lazuli. Le nom s'écrit en un seul mot, sans trait d'union.", rare: true },
        { word: "superposés", rule: "Le COD « que » (les lavis) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "pigment", rule: "Matière colorante en poudre. Finale en -ment, avec un g devant le m.", rare: true }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les pochades qu'il a brossées sur le motif, à la sanguine rehaussée de craie, ne sont que des ébauches. Pourtant, quels que soient les repentirs dont elles sont émaillées, l'œil s'y arrête volontiers. Le camaïeu de sépia qu'il a ménagé dans chacune d'elles témoigne d'une sûreté de main peu commune.",
      notes: [
        { word: "pochades", rule: "Peinture rapide faite sur le vif. Un seul c, finale en -ade.", rare: true },
        { word: "brossées", rule: "Le COD « que » (les pochades) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "rehaussée", rule: "Le participe s'accorde avec « la sanguine » ; rehausser garde le h intérieur et prend deux s." },
        { word: "quels que soient", rule: "« Quel que » + être au subjonctif : « quel » s'accorde avec le sujet (les repentirs : masculin pluriel)." },
        { word: "émaillées", rule: "Le participe s'accorde avec « elles » (les pochades) ; émailler (parsemer) s'écrit avec un accent aigu et deux l.", rare: true },
        { word: "camaïeu", rule: "Peinture en tons d'une seule couleur. Tréma sur le i, finale en -eu.", rare: true },
        { word: "sépia", rule: "Brun tiré de l'encre de seiche. Accent aigu sur le e, finale en -a.", rare: true },
        { word: "sûreté", rule: "Le nom garde l'accent circonflexe de « sûr »." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les enfants dessine un arbre sur une grande feuille.", wrong: "dessine", right: "dessinent", choices: ["dessinent", "dessines", "dessinez"], rule: "Le sujet « les enfants » est à la 3e personne du pluriel : ils dessinent." },
    { level: "apprenti", text: "Elle a prit sa gomme pour effacer le trait.", wrong: "prit", right: "pris", choices: ["pris", "prise", "prie"], rule: "Après l'auxiliaire avoir, on utilise le participe passé de prendre : pris." },
    { level: "compagnon", text: "Les aquarelles qu'elle a peint cet été sont exposées dans l'atelier.", wrong: "peint", right: "peintes", choices: ["peintes", "peints", "peinte"], rule: "Le COD « que » (les aquarelles) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
    { level: "compagnon", text: "Le modèle est resté immobile pendant prés d'une heure.", wrong: "prés", right: "près", choices: ["près", "prêt", "pré"], rule: "« Près de » (environ, presque) s'écrit avec un accent grave." },
    { level: "maitre", text: "Les ombres se sont succédées sur la nature morte tout au long de l'après-midi.", wrong: "succédées", right: "succédé", choices: ["succédé", "succédés", "succéder"], rule: "Se succéder : le « se » est COI (succéder à quelqu'un), le participe reste invariable." },
    { level: "maitre", text: "Les trois heures qu'il a fallues pour achever l'esquisse ont paru brèves.", wrong: "fallues", right: "fallu", choices: ["fallu", "fallus", "fallut"], rule: "Le participe passé de falloir, verbe impersonnel, est toujours invariable." },
    { level: "grand-scribe", text: "Quelques habiles qu'ils soient, les élèves ne saisissent jamais la lumière du premier coup.", wrong: "Quelques", right: "Quelque", choices: ["Quelque", "Quels que", "Quelle que"], rule: "Devant un adjectif suivi de « que », « quelque » est un adverbe (si, aussi) : il est invariable." },
    { level: "grand-scribe", text: "Ce sont les meilleurs croquis qu'il ait pus tracer d'après le modèle vivant.", wrong: "pus", right: "pu", choices: ["pu", "pus", "put"], rule: "Le participe de pouvoir suivi d'un infinitif sous-entendu ou exprimé reste invariable : le COD est l'infinitif, pas « que »." }
  ]
};
