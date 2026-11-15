---
name: relire-orthographe
description: Relecture orthographique indépendante, niveau correcteur de championnat, des fichiers de contenu du jeu Dictées (content/*.js). Utiliser après toute rédaction ou extension de thème, avant publication, ou quand une phrase paraît douteuse (accord, concordance des temps, double graphie).
---

# Relire l'orthographe d'un thème

Un relecteur ne fait pas confiance au rédacteur. Il corrige directement dans le fichier et rapporte ce qu'il a changé.

## Contrôles, fichier par fichier

1. Chaque dictée et chaque phrase à erreur, une fois `wrong` remplacé par `right`, est irréprochable : orthographe, accords, ponctuation, élisions, traits d'union. Aucune autre faute dans la phrase.
2. Les règles (`rule`, `notes[].rule`) sont exactes et bien formulées.
3. **Zéro débat** : remplacer l'item plutôt que l'expliquer quand deux graphies sont admises (rectifications de 1990 ou usage : marron/marrons, paraît/parait, entraîneur, maîtriser, laissé suivi d'un infinitif, accord de proximité). Circonflexes traditionnels conservés.
4. Concordance : pas de subjonctif imparfait après un passé composé ; il reste admis après un passé simple, un imparfait ou un plus-que-parfait.
5. Choix (`choices`) : chaque leurre est une graphie plausible qu'un joueur écrirait vraiment ; `right` figure dans `choices`.
6. Faits : aucun fait douteux, score ou statistique ; noms propres sous forme de marqueurs `{{Nom|périphrase}}` pour les personnes réelles, personnages et marques ; orthographe des noms propres vérifiée.
7. Ancrage : un thème de ville nomme des lieux célèbres ; une phrase interchangeable est à réécrire.
8. Technique : `wrong` apparaît une seule fois comme mot entier ; chaque `notes[].word` est une sous-chaîne du texte (mot entier pour apprenti et compagnon) ; pas de tiret cadratin ni demi-cadratin, pas d'emoji ; UTF-8 sans BOM.

Terminer par `node tools/rarete.mjs check <id>` et `node tools/noms.mjs`.

## Rapport

Pour chaque correction : fichier, avant, après, raison. Puis les points encore discutables laissés tels quels, et la liste des dictées dont le texte a changé (leurs clips sont à régénérer par `publier`).

## Modèle

Opus quand il est disponible (l'orthographe y est critique), sinon Sonnet avec une seconde passe. Jamais Fable.

## Densité des phrases Trouve l'erreur

Contrôler aussi la densité de chaque phrase à erreur selon le niveau (tableau « Densité des phrases Trouve l'erreur » de `docs/redaction-contenu.md` et `docs/niveau-expert.md`) : longueur, nombre de difficultés correctes autour de la faute, choix plausibles, mécanismes variés. Une phrase trop courte ou à une seule règle pour son niveau est réécrite, la faute restant unique et sans débat.
