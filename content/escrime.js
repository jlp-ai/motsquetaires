(window.THEMES = window.THEMES || {}).escrime = {
  name: "Escrime",
  emoji: "🤺",
  dictees: [
    {
      level: "apprenti",
      text: "Mercredi, chaque élève du club a enfilé son masque et sa veste blanche. Sur la piste, les tireurs se saluent avant l'assaut. Quand l'arbitre annonce une touche, les parents applaudissent. Les enfants sont repartis fiers de leurs progrès.",
      notes: [
        { word: "enfilé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « son masque » est placé après)." },
        { word: "saluent", rule: "Verbe saluer au présent, 3e personne du pluriel : -ent, sans oublier le e après le u." },
        { word: "applaudissent", rule: "Verbe du 2e groupe au présent, 3e personne du pluriel : applaud-issent." },
        { word: "repartis", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les enfants : masculin pluriel)." },
        { word: "progrès", rule: "« Progrès » s'écrit avec un s final, même au singulier, et un accent grave." }
      ]
    },
    {
      level: "compagnon",
      text: "Armée de son fleuret, la tireuse s'est fendue d'un geste vif, mais son adversaire a paré l'attaque et a riposté aussitôt. Les touches qu'elles ont échangées ont tenu le public en haleine. Finalement, la plus jeune l'a emporté.",
      notes: [
        { word: "fleuret", rule: "Arme d'escrime à lame fine et souple : finale en -et, avec un t muet.", rare: true, d: 2, piege: "eu, finale -et muette" },
        { word: "fendue", rule: "Se fendre (allonger la jambe avant pour toucher) : verbe pronominal, le participe s'accorde avec le sujet (la tireuse)." },
        { word: "riposté", rule: "Avec l'auxiliaire avoir et sans COD placé avant, le participe passé reste invariable." },
        { word: "échangées", rule: "Le COD « que » (les touches) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "emporté", rule: "Dans la locution « l'emporter », le pronom « l' » est neutre : le participe reste invariable." }
      ]
    },
    {
      level: "maitre",
      text: "Avant que l'assaut reprît, le maître d'armes vérifia le plastron de son élève. Les feintes qu'il lui avait vu exécuter la veille avaient achevé de le convaincre : elle était prête. Quelles qu'aient été ses craintes, la jeune tireuse enchaîna parades, dégagements et estocades avec un sang-froid remarquable.",
      notes: [
        { word: "reprît", rule: "« Avant que » appelle le subjonctif ; après un passé simple, l'imparfait du subjonctif est admis : reprît, avec un accent circonflexe." },
        { word: "plastron", rule: "Protection rembourrée portée sous la veste : finale en -on, sans e.", rare: true, d: 1, piege: "finale -on, sans e" },
        { word: "vu", rule: "Participe suivi d'un infinitif : « que » (les feintes) est COD d'exécuter, pas de voir. Le participe reste invariable." },
        { word: "quelles", rule: "« Quel que » suivi du verbe être : « quel » s'accorde avec le sujet (ses craintes : féminin pluriel)." },
        { word: "dégagements", rule: "Mouvements de lame qui passent de l'autre côté de celle de l'adversaire. Accent aigu sur le premier é, e muet gardé devant -ment, s au pluriel.", rare: true, d: 2, piege: "é, e muet devant -ment" },
        { word: "estocades", rule: "Coups portés de la pointe de l'épée. Dérivé d'estoc : s muet après le e initial, puis c et -ade.", rare: true, d: 3, piege: "s muet (famille estoc), c, -ade" },
        { word: "sang-froid", rule: "Nom composé avec trait d'union ; « sang » garde son g final muet." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Les bretteurs d'antan ferraillaient d'estoc et de taille. Les escrimeurs d'aujourd'hui, le visage protégé par un masque grillagé, ont fait de ces gestes une science subtile. Parades de quarte ou de septime, dégagements, battements : autant de finesses que les maîtres d'armes ont toujours voulu transmettre, et que leurs élèves se sont efforcés de parfaire.",
      notes: [
        { word: "bretteurs", rule: "Bretteur : amateur de duels à l'épée. Deux t, comme dans « brette », l'ancienne épée longue.", rare: true, d: 1, piege: "deux t (famille brette)" },
        { word: "ferraillaient", rule: "Ferrailler : se battre à l'épée. Formé sur fer, avec deux r et -ill-, puis -aient à l'imparfait.", rare: true, d: 3, piege: "rr (famille fer), ill, -aient" },
        { word: "estoc", rule: "Frapper d'estoc, c'est frapper de la pointe. Finale en -oc, avec un c prononcé.", rare: true, d: 3, piege: "s muet, c final prononcé" },
        { word: "escrimeurs", rule: "Dérivé d'escrime : un seul m, et pas d'accent sur le e initial.", rare: true, d: 1, piege: "un seul m, pas d'accent" },
        { word: "quarte", rule: "Position de parade (la quatrième) : nom féminin, avec le groupe -qu-.", rare: true, d: 2, piege: "qu et non c (carte), e final" },
        { word: "septime", rule: "Septième position de parade. Formé sur sept : le p se garde sans se prononcer ; nom féminin.", rare: true, d: 3, piege: "p muet (famille sept), finale -ime" },
        { word: "voulu", rule: "Participe suivi d'un infinitif : « que » (les finesses) est COD de transmettre. Le participe reste invariable." },
        { word: "efforcés", rule: "S'efforcer est essentiellement pronominal : le participe s'accorde avec le sujet (leurs élèves)." },
        { word: "d'antan", rule: "« D'antan » (d'autrefois) : locution invariable, finale en -an." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "La tireuse à mis son masque avant l'assaut.", wrong: "à", right: "a", choices: ["a", "as", "à"], rule: "On peut dire « avait mis » : c'est le verbe avoir, sans accent." },
    { level: "apprenti", text: "Les tireurs saluent l'arbitre avant de commencé.", wrong: "commencé", right: "commencer", choices: ["commencer", "commencez", "commencé"], rule: "Après la préposition « de », le verbe se met à l'infinitif : commencer." },
    { level: "compagnon", text: "Les parades qu'elle a réussi ont impressionné l'arbitre.", wrong: "réussi", right: "réussies", choices: ["réussies", "réussis", "réussie"], rule: "Le COD « que » (les parades) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
    { level: "compagnon", text: "Le sabreur a attaqué violament dès la première touche.", wrong: "violament", right: "violemment", choices: ["violemment", "violamment", "violament"], rule: "Adjectif en -ent, adverbe en -emment : violent donne violemment." },
    { level: "maitre", text: "Les deux épéistes se sont succédés sur la piste.", wrong: "succédés", right: "succédé", choices: ["succédé", "succédées", "succédés"], rule: "Se succéder : « se » est COI (succéder à quelqu'un), le participe reste invariable." },
    { level: "maitre", text: "Si elle gagnait cet assaut, elle se qualifierai pour la finale.", wrong: "qualifierai", right: "qualifierait", choices: ["qualifierait", "qualifierais", "qualifierai"], rule: "Après « si » suivi de l'imparfait, on emploie le conditionnel : elle se qualifierait." },
    { level: "grand-scribe", text: "Les touches que l'arbitre a jugé valables ont décidé du titre.", wrong: "jugé", right: "jugées", choices: ["jugées", "jugés", "jugé"], rule: "Le COD « que » (les touches) est placé avant l'auxiliaire avoir : accord au féminin pluriel, même avec un attribut." },
    { level: "grand-scribe", text: "Les libertés qu'elle s'est permise avec le règlement lui ont valu un carton.", wrong: "permise", right: "permises", choices: ["permises", "permis", "permise"], rule: "Se permettre : « se » est COI, le participe s'accorde avec le COD « que » placé avant (les libertés)." }
  ]
};
