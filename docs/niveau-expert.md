# Niveau Expert : standard « championnat » pour Trouve l'erreur (et les dictées)

Constat de l'utilisateur (15/11/2026) : les phrases Trouve l'erreur du niveau Expert (`grand-scribe`) sont trop simples. Une seule règle scolaire par phrase (« plu », « toutes joyeuses », « demi ») ne ressemble ni à Micheline Sommant ni à Bernard Pivot. Ce document fixe le standard.

Sources : analyses privées du dossier `docs/pivot/` (ignoré par git) : dictées de la finale 1985, « Douce France » de Sommant, comptes rendus des Dicos d'or. Ce fichier n'en recopie rien.

## Ce qui fait un piège de championnat

1. **Plusieurs règles se croisent dans la même phrase** : un participe pronominal avec sujet inversé, un « quelque … que » et un subjonctif, un numéral et un nom composé.
2. **La règle contredit l'analogie** : le mot voisin s'écrit autrement (famille de mots trompeuse, graphie opaque).
3. **Le vocabulaire rare d'un seul domaine** porte l'essentiel de la difficulté (métiers disparus, zoologie, botanique, marine, musique, cuisine) : le mot fautif est souvent un mot rare à graphie opaque (D3 ou D4), pas un accord banal.
4. **Les invariables déguisés** : « tout », « quelque », « même », « quel que », « demi », « nu », « fin prêt », « ci-joint ».
5. **Les participes difficiles** : pronominaux sans accord (se plaire, se nuire, se succéder, se rire), « laissé » et « fait » suivis d'un infinitif, participe avec COD antéposé et infinitif sous-entendu, participe de verbe impersonnel.
6. **Les séries parallèles** : trois subjonctifs, quatre pronominaux, une énumération de noms composés ou de métiers.
7. **Le piège de sens** : homophones rares, paronymes, mot qui change de sens selon la graphie.
8. **L'écriture des nombres, des noms composés et des couleurs.**

Un seul point douteux entre dictionnaires (accord de proximité, double graphie) est exclu : règle « zéro débat » du cahier des charges.

## Trouve l'erreur, niveau Expert

- **Phrase longue** : 18 à 35 mots, une phrase littéraire (subordonnées, inversions, énumérations) qui contient **au moins 4 difficultés correctement écrites** en plus de la faute.
- **Une seule faute**, qui peut être : un mot rare mal écrit (graphie opaque, D≥3 : double consonne, lettre muette, finale, y/i, ph/f, accent), un accord de participe pronominal avec sujet inversé, un invariable déguisé accordé à tort (ou l'inverse), le pluriel d'un nom composé, un participe invariable accordé, un homophone de sens.
- **Choix** : trois graphies ou accords vraiment plausibles pour un lecteur cultivé, pas un leurre absurde.
- **Règle** : une explication de deux phrases au plus qui donne le raisonnement (famille de mots, analyse de la phrase), jamais « c'est comme ça ».
- **Mécanismes variés** : sur les 8 phrases d'un thème au niveau Expert, au moins 5 mécanismes différents ; au plus 2 phrases dont la faute est un accord de participe.
- Le thème reste l'attrait : la phrase est reconnaissable (lieu, objet, personnage, vocabulaire du thème).

## Dictées Expert

Texte de **90 à 140 mots**, narratif ou descriptif, au moins **8 difficultés notées** (3 mots rares dont 1 très rare, 5 mots D≥3, au moins 1 mot D4 si le champ lexical s'y prête), au moins **2 sujets inversés avec verbe pronominal** ou participes difficiles, une série parallèle, un invariable déguisé, un subjonctif correct (concordance sûre), au plus 12 notes.

## Contrôle

Les quotas de rareté et de difficulté D par dictée sont dans `tools/rarete.mjs`. Les phrases Trouve l'erreur ne passent pas par ce script : relecture par `relire-orthographe` avec ce standard.

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
