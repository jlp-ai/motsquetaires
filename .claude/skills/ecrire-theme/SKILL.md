---
name: ecrire-theme
description: Écrit un nouveau thème de contenu (content/<id>.js) ou étend un thème existant avec davantage de dictées et de phrases à erreur, pour le jeu Dictées. Utiliser dès que l'utilisateur donne une idée de thème à produire, demande « plus de textes par thème », ou veut compléter un thème (escrime, Odyssée, chevaux, piano, etc.).
---

# Écrire ou étendre un thème

Source de vérité : `docs/redaction-contenu.md` (règles dures, quotas de mots rares et de difficulté, noms propres, thèmes d'œuvres et de villes). Le lire en entier avant d'écrire. Référentiel de notions par niveau : `docs/programme-referentiel.md`. Barèmes de pièges : `../Onirologos/.claude/skills/creer-dictee/references/` (`programmes-scolaires.md`, `mecanismes.md`, `mesure-difficulte.md`).

## Marche à suivre

1. **Cadrer** : id (slug en minuscules), nom, emoji, méta-thème d'accueil (`content/metas.js`), angle du thème (champ lexical, lieux ou repères nommés). Si le thème est une œuvre sous droits ou une personne réelle, appliquer le mécanisme `{{Nom|périphrase}}`. Pour une ville, ancrage local obligatoire (lieux célèbres nommés).
2. **Écrire** `content/<id>.js` sur le modèle de `content/psg.js` : par niveau (`apprenti`, `compagnon`, `maitre`, `grand-scribe`), au moins 1 dictée (25 à 60 mots, 3 à 5 notes dont les mots rares `rare: true` avec `d` et `piege`) et 2 phrases à erreur. En mode extension, ajouter des items **différents** des existants (autre angle, autres mécanismes) sans modifier ceux qui existent ; objectif courant : 3 dictées et 6 phrases à erreur par niveau.
3. **Niveaux Facile et Moyen** (`apprenti`, `compagnon`) : chaque `notes[].word` est un mot entier du texte (il devient un trou).
4. **Brancher** : ajouter `<script src="content/<id>.js">` dans `index.html` avant `content/metas.js`, et l'id dans la liste `themes` d'un méta de `content/metas.js`.
5. **Contrôler** : `node tools/rarete.mjs check <id>` (quotas rareté et difficulté), `node tools/noms.mjs` (structure dans les deux modes, noms non marqués). Itérer jusqu'à OK.
6. **Relire** : enchaîner avec le skill `relire-orthographe` sur le fichier, puis `publier`.

## Modèle à utiliser pour les sous-agents

Sonnet par défaut ; Opus quand l'orthographe doit être irréprochable (production et relecture de textes) ; jamais Fable. Un agent par thème, en parallèle.

## Ce qu'il ne faut pas faire

Faire d'un nom propre un piège ; reprendre un passage, une réplique ou des paroles d'une œuvre ; citer un fait douteux, un score ou une statistique ; utiliser une graphie à deux usages admis (marron, paraît, entraîneur) ; mettre un tiret cadratin ou demi-cadratin ou un emoji dans un texte.
