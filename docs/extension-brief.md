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

## Niveau Expert (`grand-scribe`) : standard championnat, à appliquer sans exception

Lis `docs/niveau-expert.md`. Les phrases à erreur Expert sont des phrases longues (18 à 35 mots) qui croisent plusieurs règles et dont la faute est de préférence un mot rare à graphie opaque ou un accord difficile, avec trois choix vraiment plausibles. Les dictées Expert font 90 à 140 mots et portent au moins 8 difficultés notées. Les anciens items Expert de ce fichier, trop simples, seront remplacés dans une passe dédiée ; pour tes ajouts Expert, applique déjà le standard.

## Densité des phrases Trouve l'erreur, par niveau (décidé le 15/11/2026)

Les phrases à erreur doivent monter en densité d'un niveau à l'autre, pas seulement en difficulté de la règle. La faute reste unique ; ce qui change, ce sont la longueur et le nombre de difficultés correctement écrites autour de la faute.

| Niveau | Longueur | Difficultés dans la phrase |
| --- | --- | --- |
| `apprenti` | 8 à 15 mots | une règle du cycle 3, phrase simple |
| `compagnon` | 12 à 20 mots | une règle du cycle 4 et au moins 1 autre point correct (accord, homophone, mot du thème) |
| `maitre` | 15 à 25 mots | deux règles croisées, dont l'une porte la faute, et au moins 1 mot rare correctement écrit |
| `grand-scribe` | 18 à 35 mots | au moins 4 difficultés correctes autour de la faute (voir `docs/niveau-expert.md`) |

- Les choix (`choices`) sont trois graphies ou accords vraiment plausibles, plus subtils à chaque niveau.
- Sur les 8 phrases d'un thème à un même niveau : au plus 2 dont la faute est un accord de participe, au moins 5 mécanismes différents (5 à tous les niveaux : 4 phrases lexique laissent 4 types pour les autres).
- La règle (`rule`) explique le raisonnement en deux phrases au plus.
- Les dictées ne sont pas concernées par cette échelle (périmètre limité aux phrases Trouve l'erreur).

## Répartition des types d'erreur et vocabulaire (décidée le 15/11/2026)

Chaque phrase à erreur porte un champ `type` parmi : `lexique`, `pronominal`, `participe`, `homophone`, `invariable`, `temps`, `accord`, `adverbe`, `compose`, `sens` (libellés dans `content/types.js`). Constat : seules 1,6 % des phrases existantes portaient sur l'orthographe d'un mot, et un tiers des phrases Expert sur un verbe pronominal. Désormais, pour les 8 phrases d'un thème à un même niveau :

| Niveau | `lexique` (minimum) | Plafonds | Variété |
| --- | --- | --- | --- |
| `apprenti` | 2 | pronominal 1, participe 2, homophone 2 | au moins 5 types |
| `compagnon` | 3 | idem | au moins 5 types |
| `maitre` | 3 (mots rares) | idem | au moins 5 types |
| `grand-scribe` | 4 (mots rares D≥3, graphies opaques) | pronominal 1, participe 2, homophone 2 | au moins 5 types |

- **Phrase `lexique`** : une phrase correcte dans laquelle un mot du thème est mal écrit (double consonne, lettre muette, accent, finale, y/i, ph/f, graphie opaque). `wrong` est la graphie fautive plausible, `right` la graphie exacte, les trois choix sont trois orthographes plausibles du même mot. Le mot est du champ lexical du thème (rare à partir du niveau `maitre`), jamais un nom propre, jamais un mot à double graphie admise.
- Contrôle : `node tools/erreurs.mjs` (un thème est contrôlé dès que l'un de ses items porte un `type`).
