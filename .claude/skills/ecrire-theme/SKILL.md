---
name: ecrire-theme
description: Écrit un nouveau thème de contenu (content/<id>.js) ou étend un thème existant avec davantage de phrases à erreur, pour le jeu Trouve l'erreur. Utiliser dès que l'utilisateur donne une idée de thème à produire, demande « plus de textes par thème », ou veut compléter un thème (escrime, Odyssée, chevaux, piano, etc.).
---

# Écrire ou étendre un thème

Source de vérité : `docs/redaction-contenu.md` (règles dures, rareté et difficulté des mots, noms propres, thèmes d'œuvres et de villes). Le lire en entier avant d'écrire. Référentiel de notions par niveau : `docs/programme-referentiel.md`. Barèmes de pièges : `../Onirologos/.claude/skills/creer-dictee/references/` (`programmes-scolaires.md`, `mecanismes.md`, `mesure-difficulte.md`).

## Marche à suivre

1. **Cadrer** : id (slug en minuscules), nom, emoji, méta-thème d'accueil (`content/metas.js`), angle du thème (champ lexical, lieux ou repères nommés). Si le thème est une œuvre sous droits ou une personne réelle, appliquer le mécanisme `{{Nom|périphrase}}`. Pour une ville, ancrage local obligatoire (lieux célèbres nommés).
2. **Viser les règles absentes** avant d'écrire : lancer `node tools/couverture.mjs` (liste de contrôle `docs/couverture-regles.md`). Choisir d'abord, pour chaque niveau, des règles absentes de ce niveau (prio A, puis B), puis des règles peu couvertes. Éviter les règles surreprésentées (section b) et les mots justes déjà répétés dans plusieurs thèmes (section b bis : « Quelque », « succédé », « demie », « chefs-d'œuvre », etc.). Pour voir les phrases existantes d'une règle : `node tools/couverture.mjs --rule <id>`. Après écriture, relancer le script : les nouvelles phrases doivent être classées (aucune dans `--unclassified`).
3. **Écrire** `content/<id>.js` sur le modèle de `content/psg.js` : par niveau (`apprenti`, `compagnon`, `maitre`, `grand-scribe`), au moins 2 phrases à erreur. En mode extension, ajouter des items **différents** des existants (autre angle, autres mécanismes) sans modifier ceux qui existent ; objectif : 20 phrases à erreur par niveau (`docs/extension-brief.md`).
4. **Brancher** : ajouter `<script src="content/<id>.js">` dans `index.html` avant `content/metas.js`, et l'id dans la liste `themes` d'un méta de `content/metas.js`.
5. **Contrôler** : `node tools/erreurs.mjs` (répartition des types), `node tools/rarete-erreurs.mjs` (rareté des mots lexique), `node tools/noms.mjs` (structure dans les deux modes, noms non marqués). Itérer jusqu'à OK.
6. **Relire** : enchaîner avec le skill `relire-orthographe` sur le fichier, puis `publier`.

## Modèle à utiliser pour les sous-agents

Sonnet par défaut ; Opus quand l'orthographe doit être irréprochable (production et relecture de textes) ; jamais Fable. Un agent par thème, en parallèle.

## Ce qu'il ne faut pas faire

Faire d'un nom propre un piège ; reprendre un passage, une réplique ou des paroles d'une œuvre ; citer un fait douteux, un score ou une statistique ; utiliser une graphie à deux usages admis (marron, paraît, entraîneur) ; mettre un tiret cadratin ou demi-cadratin ou un emoji dans un texte.
