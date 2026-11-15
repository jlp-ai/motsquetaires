(window.THEMES = window.THEMES || {}).starwars = {
  name: "{{Star Wars|Space opera}}",
  emoji: "🚀",
  dictees: [
    {
      level: "apprenti",
      text: "Ce soir, les enfants ont transformé le salon en vaisseau spatial. Ils ont fabriqué des boutons en carton et dessiné des étoiles sur les fenêtres. Leur petit frère jouait le rôle du droïde de bord. Ensemble, ils sont partis vers des planètes lointaines.",
      notes: [
        { word: "transformé", rule: "Avec l'auxiliaire avoir, le participe passé reste invariable ici (le COD « le salon » est placé après)." },
        { word: "leur", rule: "« Leur » est un déterminant singulier : il accompagne un seul nom (leur petit frère)." },
        { word: "droïde", rule: "Le tréma sur le i indique qu'on prononce séparément le o et le i : dro-ïde." },
        { word: "partis", rule: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet (ils : masculin pluriel)." },
        { word: "lointaines", rule: "L'adjectif s'accorde avec le nom qu'il qualifie (des planètes : féminin pluriel)." }
      ]
    },
    {
      level: "compagnon",
      text: "Les pilotes que la rébellion avait recrutés se sont préparés pendant des semaines. Dans le hangar, ils vérifiaient patiemment chaque écoutille et chaque propulseur. Quand l'alerte a retenti, ils se sont élancés vers leurs chasseurs, prêts à décoller.",
      notes: [
        { word: "recrutés", rule: "Le COD « que » (les pilotes) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
        { word: "préparés", rule: "Verbe pronominal : « se » est COD, le participe s'accorde avec le sujet (les pilotes)." },
        { word: "patiemment", rule: "Adjectif en -ent (patient) : l'adverbe se termine en -emment, qui se prononce « a-man »." },
        { word: "écoutille", rule: "Ouverture qui permet d'entrer dans un vaisseau ou un navire. Nom féminin en -ille, avec deux l.", rare: true },
        { word: "propulseur", rule: "Moteur qui fait avancer l'engin. Nom masculin en -eur, sans e final." },
        { word: "élancés", rule: "Verbe pronominal : « se » est COD, accord avec le sujet « ils »." },
        { word: "prêts", rule: "Adjectif accordé avec « ils » (masculin pluriel) ; accent circonflexe sur le e." }
      ]
    },
    {
      level: "maitre",
      text: "Accoudés au comptoir d'une cantina enfumée, deux contrebandiers comptaient leurs gains. Bien qu'ils n'eussent jamais juré allégeance à quiconque, ils hésitèrent lorsque des rebelles leur proposèrent une cargaison périlleuse. La somme qu'on leur avait promise les convainquit ; ils s'engagèrent sans plus attendre.",
      notes: [
        { word: "accoudés", rule: "Participe employé comme adjectif, accordé avec « deux contrebandiers » : masculin pluriel, deux c." },
        { word: "contrebandiers", rule: "Ceux qui transportent des marchandises interdites. Un seul mot, sans trait d'union : contre + bandier.", rare: true },
        { word: "eussent", rule: "« Bien que » appelle le subjonctif ; plus-que-parfait du subjonctif, admis après un récit au passé simple." },
        { word: "allégeance", rule: "Fidélité jurée à un chef ou à une cause. Accent aigu sur le premier e, et e après le g pour garder le son « j » devant a : -geance.", rare: true },
        { word: "hésitèrent", rule: "Passé simple, 3e personne du pluriel du 1er groupe : -èrent." },
        { word: "promise", rule: "Le COD « qu' » (la somme) est placé avant l'auxiliaire avoir : accord au féminin singulier." },
        { word: "convainquit", rule: "Passé simple de convaincre : le c devient qu devant i, « il convainquit »." }
      ]
    },
    {
      level: "grand-scribe",
      text: "Des années durant, l'apprenti s'était astreint à une ascèse que peu de chevaliers auraient endurée. Les doutes qui l'avaient assailli, il les avait vaincus un à un ; mais le moindre vacillement de sa lame trahissait une prescience encore imparfaite. Quelque aguerri qu'il parût, il savait que la maîtrise ne s'acquiert qu'au prix d'une longue abnégation.",
      notes: [
        { word: "astreint", rule: "S'astreindre : « se » est COD, accord avec le sujet (l'apprenti, masculin singulier) ; finale -eint." },
        { word: "ascèse", rule: "Discipline de vie rigoureuse. Groupe sc au milieu du mot, accent grave sur le e, nom féminin.", rare: true },
        { word: "endurée", rule: "Le COD « que » (une ascèse) est placé avant l'auxiliaire avoir : accord au féminin singulier." },
        { word: "assailli", rule: "Le COD « l' » (l'apprenti) est placé avant l'auxiliaire : accord au masculin singulier, deux s et deux l." },
        { word: "vaincus", rule: "Le COD « les » (les doutes) est placé avant l'auxiliaire : accord au masculin pluriel." },
        { word: "vacillement", rule: "Fait de trembler, de perdre son assurance. Un seul c, deux l, suffixe -ement.", rare: true },
        { word: "prescience", rule: "Connaissance de ce qui va arriver. Pre + science : le groupe sc est conservé et, piège, le e du préfixe ne prend pas d'accent.", rare: true },
        { word: "quelque", rule: "Devant un adjectif, « quelque » signifie « si » : adverbe invariable, sans s." },
        { word: "parût", rule: "Subjonctif imparfait après « quelque... que », admis dans un récit à l'imparfait : accent circonflexe, « qu'il parût »." },
        { word: "acquiert", rule: "Présent d'acquérir, 3e personne du singulier : un seul r, « il acquiert »." }
      ]
    }
  ],
  erreurs: [
    { level: "apprenti", text: "Le droïde a réparer le moteur du vaisseau.", wrong: "réparer", right: "réparé", choices: ["réparé", "réparés", "réparez"], rule: "Après l'auxiliaire avoir, on utilise le participe passé : réparé." },
    { level: "apprenti", text: "Les deux soleils se couche lentement derrière les dunes.", wrong: "couche", right: "couchent", choices: ["couchent", "couches", "couchant"], rule: "Le sujet « les deux soleils » est au pluriel : ils se couchent." },
    { level: "compagnon", text: "Les droïdes que le contrebandier a vendu étaient tous en panne.", wrong: "vendu", right: "vendus", choices: ["vendus", "vendues", "vendre"], rule: "Le COD « que » (les droïdes) est placé avant l'auxiliaire avoir : accord au masculin pluriel." },
    { level: "compagnon", text: "Quand aux rebelles, ils ont rejoint leur base secrète.", wrong: "Quand", right: "Quant", choices: ["Quant", "Qu'en", "Quan"], rule: "« Quant à » signifie « en ce qui concerne » et s'écrit avec un t ; « quand » marque le temps." },
    { level: "maitre", text: "Les heures que le contrebandier a passé à réparer son vaisseau lui ont semblé interminables.", wrong: "passé", right: "passées", choices: ["passées", "passés", "passer"], rule: "« Passer des heures » : le COD « que » (les heures) est placé avant l'auxiliaire avoir, accord au féminin pluriel." },
    { level: "maitre", text: "Il faut que le jeune chevalier acquiert la maîtrise de ses émotions.", wrong: "acquiert", right: "acquière", choices: ["acquière", "acquiers", "acquérir"], rule: "« Il faut que » appelle le subjonctif : qu'il acquière, avec un accent grave." },
    { level: "grand-scribe", text: "Quelques aguerris qu'ils soient, les pilotes redoutent toujours le passage en hyperespace.", wrong: "Quelques", right: "Quelque", choices: ["Quelque", "Quelques", "Quels"], rule: "Devant un adjectif, « quelque » signifie « si » : c'est un adverbe invariable." },
    { level: "grand-scribe", text: "Les deux heures qu'a durées la traversée de l'hyperespace leur ont paru interminables.", wrong: "durées", right: "duré", choices: ["duré", "durées", "durée"], rule: "« Durer » est intransitif : « deux heures » est un complément de mesure et non un COD, le participe reste invariable." }
  ]
};
