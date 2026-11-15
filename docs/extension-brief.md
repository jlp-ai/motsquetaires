# Brief d'extension d'un thème (à lire en entier)

Cadre : jeu de dictées en français, projet personnel hors OCTO, dossier du projet Dictées. Appliquer le skill `.claude/skills/ecrire-theme/SKILL.md` (mode extension) et `docs/redaction-contenu.md` en entier (règles dures, quotas de mots rares et de difficulté D avec champs `rare`, `d`, `piege`, noms propres, ancrage local pour les villes). Modèles de format récents : `content/escrime.js`, `content/cuisine.js`.

## Mission

Étendre le fichier du thème **sans modifier les items existants**. Ajouter à la fin des tableaux, pour chacun des quatre niveaux (`apprenti`, `compagnon`, `maitre`, `grand-scribe`), le nombre de dictées et de phrases à erreur demandé dans ta consigne, afin d'atteindre **4 dictées et 8 phrases à erreur par niveau** au total.

- Chaque nouvelle dictée a un angle, un champ lexical précis et des mécanismes différents de celles qui existent déjà dans le fichier (lis-les d'abord pour ne pas les répéter) et des autres ajouts.
- 25 à 60 mots, 3 à 5 notes. Niveaux `apprenti` et `compagnon` : chaque `notes[].word` est un mot entier du texte (il devient un trou du texte à trous).
- Quotas par dictée : rareté et difficulté D (voir `docs/redaction-contenu.md`, section « Mots rares et difficulté »). Chaque mot rare est une note `rare: true` avec `d` et `piege`.
- Phrases à erreur : une seule faute, `wrong` unique comme mot entier, 3 `choices` plausibles dont `right`, règle exacte.

## Noms propres (mode perso)

Les noms propres sont bienvenus. Toute personne réelle, tout personnage, toute marque ou œuvre sous droits s'écrit en marqueur `{{Nom|périphrase}}` avec une périphrase de même genre, nombre et élision, correcte dans les deux modes. Lieux et personnages du domaine public en clair. Un nom propre n'est jamais le piège (ni mot fautif, ni mot de notes, ni bonne réponse). Pour une personne réelle : seulement le nom et un rôle certain et stable, jamais de statistique, de transfert, de score, de rumeur ni de jugement. En cas de doute sur un fait ou une graphie, ne pas l'utiliser, vérifier par recherche web (WebSearch, WebFetch) ou le signaler.

## Règles de fond rappelées

Orthographe irréprochable, relue deux fois. Zéro débat : pas de double graphie admise (marron, paraît, entraîneur, maîtresse, voûte, clé/clef, laissé + infinitif, durer avec complément de durée, mots étrangers pièges). Pas de subjonctif imparfait après un passé composé. Ni tiret cadratin ni demi-cadratin, ni emoji dans les textes. Aucune citation, réplique ni parole reprise.

## Contrôles avant de rendre

`node tools/rarete.mjs check <id>` (tous OK) et `node tools/noms.mjs` (structure OK dans les deux modes), plus ton propre contrôle : `wrong` unique, `right` dans `choices`, notes présentes dans le texte. Ne touche à aucun autre fichier (ni index.html, ni metas.js, ni app.js, ni clips, ni git).

## Rapport (court)

Items ajoutés par niveau, mots rares avec D, noms propres utilisés, faits à vérifier, points de doute, liste des dictées ajoutées.
