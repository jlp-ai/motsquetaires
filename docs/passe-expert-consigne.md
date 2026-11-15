# Consigne de la passe Expert (phrases Trouve l'erreur)

Lis intégralement `docs/niveau-expert.md` et `docs/extension-brief.md` (sections « Densité des phrases Trouve l'erreur » et « Répartition des types d'erreur et vocabulaire »), puis `docs/redaction-contenu.md` pour les règles dures (noms propres en marqueurs `{{Nom|périphrase}}` quand ils sont sous droits ou réels, périphrase de même genre, nombre et élision et correcte dans les deux modes ; lieux et domaine public en clair ; ancrage local pour les villes).

Mission sur les phrases à erreur (`erreurs`) du thème demandé ; ne touche pas aux dictées :

1. **Niveau `grand-scribe`** : remplace TOUTES les phrases à erreur Expert actuelles par 8 nouvelles phrases au standard championnat : 18 à 35 mots, au moins 4 difficultés correctement écrites autour de la faute, faute unique et sans débat, trois choix vraiment plausibles, règle en deux phrases au plus. Répartition imposée sur les 8 : **4 phrases `lexique`** (un mot rare du thème à graphie opaque, D≥3 ; la phrase est correcte sauf ce mot ; `wrong` = graphie fautive plausible, `right` = graphie exacte, les trois choix = trois orthographes plausibles du même mot), pas plus d'1 `pronominal`, 2 `participe`, 2 `homophone`, au moins 5 types différents au total. Le thème reste reconnaissable. Pas de graphie à double usage admis, pas de mot étranger piège, noms propres jamais piège. `wrong` ne porte pas d'élision collée (`l'estafilade`) : l'application découpe sur les espaces ; choisis un mot précédé d'un espace.
2. **Tous les autres niveaux** : ajoute à chaque phrase à erreur un champ `type` (lexique, pronominal, participe, homophone, invariable, temps, accord, adverbe, compose, sens ; voir `content/types.js`), sans changer le texte.

Contrôles : `node tools/erreurs.mjs` (le niveau grand-scribe du thème doit être OK ; les autres niveaux peuvent encore échouer), `node tools/rarete.mjs check <id>` (OK), `node tools/noms.mjs` (structure OK ; si un autre fichier en cours d'édition le fait planter, relance plus tard). Contrôle propre : `wrong` unique comme mot entier dans sa phrase (dans les deux modes si marqueurs), `right` dans `choices`, trois choix distincts. Ne touche à aucun autre fichier.

Rapport court : les 8 phrases Expert (wrong, right, type), points de doute (graphies discutables, faits à vérifier).
