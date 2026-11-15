# Rédaction d'un thème de contenu

Cahier des charges pour écrire ou revoir un fichier `content/<id>.js`. Modèle de structure : `content/psg.js`.

## Structure

```js
(window.THEMES = window.THEMES || {}).<id> = {
  name, emoji,
  dictees: [ { level, text, notes: [ { word, rule, rare? } ] } ],
  erreurs: [ { level, text, wrong, right, choices: [3], rule } ]
};
```

Par niveau (`apprenti`, `compagnon`, `maitre`, `grand-scribe`) : 1 dictée (3 à 5 phrases, 25 à 60 mots) et 2 phrases à erreur. Le thème est ensuite rattaché à un méta-thème dans `content/metas.js`.

## Règles dures

1. **Orthographe irréprochable** du texte dicté et des phrases une fois corrigées (accords, ponctuation, élisions, traits d'union). Relire deux fois. En cas de doute sur une règle, changer la phrase.
2. **Phrase à erreur** : une seule faute, sans ambiguïté ; `wrong` apparaît une seule fois comme mot entier dans `text` ; `right` est la graphie correcte ; les 2 autres `choices` sont des graphies plausibles qu'un joueur écrirait vraiment.
3. **Pas de débat orthographique** : éviter les cas où les rectifications de 1990 ou l'usage admettent deux graphies (marron/marrons, paraît/parait, entraîneur/entraineur, laissé + infinitif, etc.). Garder les circonflexes traditionnels dans les textes. Pas de subjonctif imparfait après un passé composé ; il reste admis après un passé simple ou un imparfait.
4. **Calibrage** : `apprenti` = programme du cycle 3 (CM1, CM2, 6e) ; `compagnon` = cycle 4 (5e, 4e, 3e) ; `maitre` = adulte cultivé, étalon de championnat ; `grand-scribe` = niveau Dicos d'or / Pivot. Références : `../Onirologos/.claude/skills/creer-dictee/references/programmes-scolaires.md` et `mecanismes.md`. Varier les mécanismes (participes passés, homophones, accords, pluriels, adverbes en -ment, subjonctif, etc.).
5. **Le thème porte l'attrait, la difficulté porte sur la langue.** Un nom propre, un titre ou un mot étranger n'est jamais un piège.
6. **Textes originaux** : aucune parole de chanson, aucune citation, aucun extrait d'œuvre. Rien de polémique. Aucune rumeur ni jugement sur des personnes réelles. Éviter ce qui vieillit vite (scores, dates récentes, chiffres d'actualité).
7. **Ton** adapté au niveau, jamais infantilisant, jamais moqueur envers le joueur.
8. **Typographie** : pas de tiret cadratin ni demi-cadratin (— –), pas d'emoji dans les textes (sauf le champ `emoji` du thème). Accents obligatoires. UTF-8 sans BOM.

## Mots rares et difficulté (par dictée)

Deux mesures indépendantes. Un mot rare n'est pas forcément difficile à écrire (« bretteurs » se reconstruit depuis « brette » ; « estafette » cumule s muet, f simple et tt).

**Rareté (R)** : mesurée sur Lexique 3.83 par `node tools/rarete.mjs words <mots>` ; seuils : rare < 5 occurrences par million, très rare < 0,5.

**Devinabilité orthographique (D)** : de 0 à 4, jugée par note. Méthode : transcrire en phonèmes, lister les 3 à 5 graphies d'un scripteur, regarder où tombe la bonne. D0 transparent ; D1 une hésitation courante ; D2 piège connu (la bonne graphie est dans les trois premiers essais) ; D3 graphie opaque mais retrouvable (famille de mots, étymologie) ; D4 irréductible (anti-analogie ou cumul d'au moins trois points opaques sans indice). Grille complète : `../Onirologos/.claude/skills/creer-dictee/references/mesure-difficulte.md` ; skill `juger-difficulte`.

Quotas minimum par dictée :

| Niveau | Mots rares (< 5) | dont très rares (< 0,5) | Mots D≥2 | dont D≥3 |
| --- | --- | --- | --- | --- |
| `apprenti` | 0 (vocabulaire courant, mots du thème acceptés) | 0 | 0 | 0 |
| `compagnon` | 1 | 0 | 1 | 0 |
| `maitre` | 2 | 0 | 2 | 1 |
| `grand-scribe` | 3 | 1 | 3 | 3 |

- Les mots rares sont **du champ lexical du thème**, jamais du charabia érudit plaqué. Ils portent une difficulté orthographique réelle (doubles consonnes, finale muette, accent, genre, pluriel irrégulier).
- Chaque mot rare figure dans `notes` avec `rare: true`, une `rule` qui dit ce qu'il faut retenir, un champ `d` (nombre de 0 à 4) et un champ `piege` (courte étiquette des points d'hésitation, ex. « s muet, f simple, tt »). Exemple : `{ word: "estafettes", rule: "...", rare: true, d: 3, piege: "s muet, f simple, tt" }`.
- Un mot transparent (D0, D1) ne fait pas le quota D : le remplacer par un mot du même champ lexical vraiment piégeux, en retouchant minimalement la phrase. Un mot à plusieurs graphies admises ou à graphie douteuse n'est pas un bon piège.
- Aux niveaux `apprenti` et `compagnon`, les notes sont des mots entiers présents dans le texte (elles servent de trous).
- Vérification : `node tools/rarete.mjs check <id>` doit afficher OK sur les quatre dictées du thème (par dictée : rares, très rares, mots D≥2 et D≥3 face au quota, champs `d` et `piege` obligatoires).

## Contrôle automatique avant de rendre

Charger le fichier (`global.window = {}; new Function("window", fs.readFileSync(f, "utf8"))(global.window)`) et vérifier : 4 dictées, 8 erreurs ; `wrong` unique parmi les mots de sa phrase ; `right` dans `choices` ; chaque `notes[].word` (minuscules) sous-chaîne du texte ; `node tools/rarete.mjs check <id>` OK (quotas de rareté et de difficulté).

## Thèmes tirés d'une œuvre ou d'une saga

Star Wars, Harry Potter, KPop Demon Hunters, Les Trois Mousquetaires : écrire des **textes originaux** qui s'appuient sur l'univers (lieux, objets, fonctions, vocabulaire), sans reprendre ni paraphraser de passage, de réplique ni de paroles. Les noms de personnages et de lieux de l'œuvre sont permis en petit nombre, jamais comme piège. Les faits de l'œuvre cités doivent être exacts et connus de tous ; en cas de doute, rester générique.

## Thèmes de villes

**Ancrage local obligatoire** : chaque dictée et chaque phrase à erreur doit être reconnaissable comme venant de la ville, avec au moins un lieu ou un repère célèbre nommé (place de la Comédie, Écusson, Peyrou, Antigone pour Montpellier ; digue, arsenal, Montagne du Roule pour Cherbourg). Une phrase qui pourrait se passer dans n'importe quelle ville du Sud ou de la côte est refusée (ex. « Les platanes donnent de l'ombre sur toute la place »). Les noms de lieux ne sont jamais le piège. Cherbourg, Montpellier : ne citer que des faits stables et vérifiables (lieux emblématiques, géographie, patrimoine, histoire connue). Pas de chiffres de population, de budget, de classement ni d'événement récent. En cas de doute sur un fait, le retirer.

## Noms propres : mode perso ou commercial

Tant que le projet est personnel, les noms propres de marques, de sagas, d'œuvres ou de personnes sont permis. Dès qu'il sera monétisé, chacun est remplacé par une périphrase. Mécanisme : un nom qui doit pouvoir être remplacé s'écrit **{{Nom|périphrase}}** dans le contenu (texte, notes, règles, nom de thème ou de méta-thème).

- **Mode** : une seule ligne dans `config.js` (`window.NAMES_MODE = "perso"` ou `"commercial"`). `names.js` résout les marqueurs au chargement ; les outils font de même (variable d'environnement `NAMES_MODE` prioritaire).
- **Périphrase interchangeable** : même nature grammaticale que le nom (genre, nombre, élision) pour que la phrase reste correcte, que le mot fautif reste unique et que les notes restent valables. Exemple : `{{Ousmane Dembélé|l'ailier parisien}}` dans « {{Ousmane Dembélé|l'ailier parisien}} a marqué ».
- **Un nom n'est jamais un piège** : ni mot fautif, ni mot de `notes`, ni bonne réponse d'un choix.
- **Contrôle** : `node tools/noms.mjs` liste les marqueurs, vérifie la structure dans les deux modes et signale les mots capitalisés non marqués (candidats à protéger). `NAMES_MODE=commercial node tools/rarete.mjs check` vérifie aussi les quotas de mots rares en mode commercial.
- **Passage en commercial** : changer `config.js`, lancer `node tools/noms.mjs`, puis `node tools/clips.mjs --generate` (les textes modifiés produisent de nouveaux clips ; seuls ceux-là sont à régénérer).
- **Sans marqueur** : les lieux (villes, régions) et les personnages du domaine public (Les Trois Mousquetaires) restent en clair dans les deux modes.

## Consigne actuelle : noms propres bienvenus (mode perso, décidée le 15/11/2026)

Cette consigne remplace les interdictions de noms propres des règles 5 et 6 et des sections « saga » et « villes » ci-dessus, tant que le projet est personnel.
- **Utiliser volontiers** les noms propres du thème : joueurs, personnages, groupes, lieux, œuvres (ex. Ousmane Dembélé pour le PSG, Harry pour Harry Potter, Rumi pour KPop Demon Hunters).
- **Toujours sous forme de marqueur** `{{Nom|périphrase}}` pour tout nom de personne réelle, de personnage, de marque ou d'œuvre sous droits, avec une périphrase de même genre, nombre et élision (ex. `{{Ousmane Dembélé|l'attaquant parisien}}`). Les lieux et les personnages du domaine public restent en clair.
- **Un nom n'est jamais le piège** : ni mot fautif, ni mot de `notes`, ni bonne réponse.
- **Exactitude** : n'écrire que des faits certains et stables (rôle, appartenance, trait connu) ; aucun score, aucune statistique, aucune rumeur, aucun jugement sur une personne réelle. Orthographe des noms vérifiée ; en cas de doute sur un nom ou son orthographe, ne pas l'utiliser et le signaler dans le rapport.
- **Contrôle** : `node tools/noms.mjs` doit rester OK dans les deux modes.
