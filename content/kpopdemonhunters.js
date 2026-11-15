(window.THEMES = window.THEMES || {}).kpopdemonhunters = {
  name: "K-Pop Demon Hunters",
  emoji: "👹",
  dictees: [
    {
      level: "apprenti",
      text: "Ce soir, les chanteuses sont montées sur scène sous les cris des fans. Elles ont dansé sans jamais se tromper. Quand les démons sont apparus au fond de la salle, leurs voix ont formé un mur de lumière. Le public, ravi, a applaudi très fort.",
      notes: [
        { word: "montées", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les chanteuses : féminin pluriel)." },
        { word: "dansé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (pas de COD placé avant)." },
        { word: "apparus", rule: "Apparaître se conjugue avec être : accord avec le sujet (les démons : masculin pluriel)." },
        { word: "leurs", rule: "« Leurs » est un déterminant : il accompagne un nom pluriel (leurs voix)." }
      ]
    },
    {
      level: "compagnon",
      text: "Avant chaque concert, les chanteuses répètent leurs chorégraphies jusqu'à l'épuisement. Le trac qu'elles ont ressenti ce soir-là ne les a pas empêchées de briller. Leurs fans, qui s'étaient rassemblés devant la scène, ne se doutaient pas qu'un combat se jouait au-dessus de leurs têtes.",
      notes: [
        { word: "chorégraphies", rare: true, rule: "Chorégraphie : art de régler les danses. Retenir « ch » prononcé [k], l'accent aigu et « ph »." },
        { word: "ressenti", rule: "Le COD « qu' » reprend « le trac », masculin singulier : ressenti, sans accord visible." },
        { word: "empêchées", rule: "Le COD « les » (les chanteuses) est placé avant l'auxiliaire avoir : accord au féminin pluriel." },
        { word: "rassemblés", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (leurs fans)." },
        { word: "au-dessus", rule: "Locution prépositive avec trait d'union : au-dessus de." }
      ]
    },
    {
      level: "maitre",
      text: "Bien que les démons eussent envahi les coulisses, les chanteuses ne s'interrompirent pas. Leurs voix, mêlées à l'unisson, tissèrent autour du public un envoûtement protecteur. Les spectateurs, éblouis par les projecteurs, crurent assister à un simple effet de mise en scène et leur réservèrent une ovation.",
      notes: [
        { word: "eussent", rule: "« Bien que » appelle le subjonctif ; après un passé simple, plus-que-parfait du subjonctif : eussent envahi." },
        { word: "interrompirent", rule: "Passé simple d'interrompre, 3e personne du pluriel : -irent ; deux r." },
        { word: "unisson", rare: true, rule: "Unisson : nom masculin, deux s. Chanter à l'unisson, c'est chanter la même note ensemble." },
        { word: "envoûtement", rare: true, rule: "Envoûtement, formé sur envoûter : accent circonflexe sur le u." },
        { word: "crurent", rule: "Passé simple de croire, 3e personne du pluriel : ils crurent." },
        { word: "ovation", rare: true, rule: "Ovation : acclamation enthousiaste du public. Nom féminin, finale en -tion." },
        { word: "leur", rule: "Pronom personnel COI placé devant le verbe (réserver une ovation aux chanteuses) : « leur » reste invariable." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Quelque redoutables qu'aient paru les démons, les chasseuses ne se sont jamais départies de leur sang-froid. Entre deux entrechats, sous les gerbes d'une pyrotechnie éblouissante, elles ont conjuré les maléfices que le groupe rival avait ourdis. Les fans, eux, n'y ont vu que du feu.",
      notes: [
        { word: "quelque", rule: "Devant un adjectif suivi de « que », « quelque » est adverbe (si, aussi) : invariable." },
        { word: "départies", rule: "Se départir est essentiellement pronominal : accord avec le sujet (les chasseuses)." },
        { word: "entrechats", rare: true, rule: "Entrechat : saut de danse où les pieds se croisent en l'air. Nom masculin, finale muette en -t." },
        { word: "pyrotechnie", rare: true, rule: "Pyrotechnie : art des feux d'artifice. Retenir « py » avec un y, puis « ch » prononcé [k]." },
        { word: "maléfices", rare: true, rule: "Maléfice : sortilège qui vise à nuire. Nom masculin, finale en -ice." },
        { word: "ourdis", rare: true, rule: "Ourdir : tramer en secret. Le COD « que » (les maléfices) est placé avant l'auxiliaire avoir : accord au masculin pluriel." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Les chanteuses sont monté sur la grande scène.", wrong: "monté", right: "montées", choices: ["montées", "montés", "monter"], rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (les chanteuses : féminin pluriel)." },
    { level: "apprenti", text: "Les fans agite leurs bâtons lumineux pendant tout le concert.", wrong: "agite", right: "agitent", choices: ["agitent", "agites", "agité"], rule: "Le sujet « les fans » est à la 3e personne du pluriel : ils agitent." },
    { level: "compagnon", text: "Les démons que les chasseuses ont vaincu ne reviendront plus.", wrong: "vaincu", right: "vaincus", choices: ["vaincus", "vaincues", "vaincut"], rule: "Le COD « que » (les démons) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
    { level: "compagnon", text: "La chorégraphie qu'elles ont répétée s'est déroulé sans accroc.", wrong: "déroulé", right: "déroulée", choices: ["déroulée", "déroulées", "dérouler"], rule: "Verbe pronominal : le participe s'accorde avec le sujet (la chorégraphie : féminin singulier)." },
    { level: "maitre", text: "Bien que le trac les ait saisies, elles ont chantés avec assurance.", wrong: "chantés", right: "chanté", choices: ["chanté", "chantées", "chanter"], rule: "Avec l'auxiliaire avoir et sans COD placé avant, le participe passé reste invariable." },
    { level: "maitre", text: "Les spectateurs s'en sont aperçu trop tard : la salle était déjà envahie.", wrong: "aperçu", right: "aperçus", choices: ["aperçus", "aperçues", "apperçus"], rule: "S'apercevoir de est essentiellement pronominal : accord avec le sujet (les spectateurs)." },
    { level: "grand-scribe", text: "Quelques talentueuses qu'elles soient, les chanteuses doutent avant chaque tournée.", wrong: "Quelques", right: "Quelque", choices: ["Quelque", "Quelques", "Quelle que"], rule: "Devant un adjectif suivi de « que », « quelque » est adverbe : invariable." },
    { level: "grand-scribe", text: "Les chanteuses se sont succédées sur scène sous les ovations du public.", wrong: "succédées", right: "succédé", choices: ["succédé", "succédées", "succédés"], rule: "Se succéder : « se » est COI (succéder à quelqu'un), le participe reste invariable." }
  ]
};
