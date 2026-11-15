# CLAUDE.md : Dictées

Projet personnel (hors OCTO) : spin-off allégé d'Onirologos / Les Motsquetaires
(`../Onirologos/`). Même socle pédagogique (quatre niveaux de difficulté), mais
sans récit, sans univers, sans méta-progression. Deux jeux courts, jouables
en quelques minutes.

- **Statut** : démarrage, aucun code. Rien n'est tranché côté stack.
- **Principe directeur** : plus simple qu'Onirologos. Toute fonctionnalité
  qui ressemble à de la méta (sceaux, carnet, carte de mondes, conteurs)
  est hors périmètre.

---

## Les deux jeux

### 1. Dictées thématiques contemporaines

Le joueur écoute un texte court dicté à voix haute et l'écrit. Correction
à la fin, faute par faute, avec mini-explication de la règle.

- **Thèmes contemporains** : PSG, K-Pop, et d'autres à ajouter (jeux vidéo,
  séries, cuisine, voyage, réseaux sociaux, sport...). Un thème = un fichier
  de contenu, un champ lexical propre.
- **Piège orthographique et sujet moderne** : le thème porte l'attrait, la
  difficulté porte sur la langue française (accords, homophones, participes
  passés, mots rares du champ lexical).
- **Noms propres et mots étrangers** (joueurs, groupes, termes coréens) : ne
  jamais en faire des pièges. Les donner en clair (affichés ou épelés) ou les
  éviter aux rangs bas.

### 2. Trouve le mot en erreur

Une phrase s'affiche avec **une seule faute d'orthographe** (ou de grammaire)
cachée sur un mot. Le joueur touche le mot fautif, puis tape ou choisit la
bonne forme. Correction et règle expliquée.

- Une et une seule erreur par phrase, sans ambiguïté possible.
- La phrase doit rester correcte et naturelle une fois corrigée.
- Mêmes thèmes contemporains que le jeu 1, pour mutualiser le contenu.

---

## Quatre niveaux de difficulté (repris d'Onirologos)

Mêmes références scolaires et mêmes étalons que le projet source. Noms
affichés à trancher (pas de lexique Motsquetaires ici) ; identifiants
techniques repris tels quels.

| Niveau | id | Public visé | Référence |
| --- | --- | --- | --- |
| 1 | `apprenti` | CM1, CM2, 6e (cycle 3) | programme de français du cycle 3 |
| 2 | `compagnon` | 5e, 4e, 3e (cycle 4) | programme de français du cycle 4 |
| 3 | `maitre` | au-delà du collège, adulte cultivé | étalons de championnat |
| 4 | `grand-scribe` | championnat (Dicos d'or, Pivot) | étalon Grand Scribe |

- Un piège de niveau 1 ou 2 doit être au programme de son cycle.
- Le niveau se règle avant de jouer, il ne s'acquiert pas en cours de partie.
- Barèmes de difficulté (rareté lexicale, mécanismes), à réutiliser plutôt
  que réinventer : `../Onirologos/.claude/skills/creer-dictee/references/`
  (`programmes-scolaires.md`, `mecanismes.md`) et
  `../Onirologos/.claude/skills/juger-difficulte/`.

---

## Thèmes et méta-thèmes

- Un **thème** est un fichier `content/<id>.js` (voir `docs/redaction-contenu.md`).
- Un **méta-thème** regroupe des thèmes (Sport > PSG, Escrime ; Villes de France > Cherbourg, Montpellier ; etc.). Déclaration unique dans `content/metas.js`. Un méta-thème à un seul thème s'ouvre directement ; un thème absent de tout méta tombe dans « Autres ».
- Ajouter un thème : écrire `content/<id>.js`, l'ajouter dans `index.html` et dans la liste `themes` d'un méta de `content/metas.js`.
- Thèmes tirés d'une œuvre (Star Wars, Harry Potter, KPop Demon Hunters, Les Trois Mousquetaires) : textes originaux, aucune citation ni extrait (cahier des charges).

### Thèmes à traiter plus tard

- **Le Club des Cinq** (série de romans jeunesse) : méta « Fictions et sagas », mêmes règles que les autres œuvres (textes originaux, aucune citation).
- **Idées de thèmes (15/11/2026)** : chevaux, équitation, football, danse, piano, solfège. Méta-thèmes probables : Sport (équitation, football, danse), Animaux (chevaux) ou Sport, Musique (piano, solfège). À fusionner si des doublons apparaissent (chevaux et équitation). D'autres idées suivront : les ajouter ici au fil de l'eau.
- **Les Enfants de la Résistance** (bande dessinée) : méta « Fictions et sagas » ou « Lecture et dessin ». Œuvre protégée : textes originaux, aucun personnage ni passage repris. Appuyer l'angle sur l'histoire (occupation, réseaux, maquis, clandestinité) avec des faits historiques exacts et sourcés ; sujet grave, ton sobre et respectueux.
- **Disney** : méta « Fictions et sagas » ou méta dédié. Univers très large (films, parcs, personnages) : cadrer l'angle avant d'écrire (par exemple films d'animation et vocabulaire du conte) et rester sur des textes originaux, sans réplique ni paroles.

## Noms propres : perso puis commercial

Tant que le projet est personnel, les noms propres sont permis. Avant toute monétisation, ils sont remplacés par des périphrases. Un nom remplaçable s'écrit `{{Nom|périphrase}}` dans le contenu ; le mode se règle dans `config.js` (`perso` ou `commercial`). Contrôle : `node tools/noms.mjs`. Règles et procédure de bascule : `docs/redaction-contenu.md`. Aujourd'hui seuls les noms de thème (PSG, YouTube, Star Wars, Harry Potter, KPop Demon Hunters) sont marqués ; les textes n'en contiennent aucun.

## Mots rares

Quota par dictée selon le niveau (0, 1, 2, 3 mots rares ; au moins 1 très rare en Expert), mesuré sur Lexique 3.83 : `node tools/rarete.mjs check`. Chaque mot rare est une note `rare: true`, affichée avec une pastille « mot rare » dans la correction. Détail dans `docs/redaction-contenu.md`.

## Ce qui est réutilisable depuis Onirologos

À copier ou adapter, pas à lier (les deux projets doivent rester
indépendants) :

- `prototype/correction.js` : moteur de correction pur, utilisable sous node.
- `prototype/voice.js` : lecture à voix haute et prononciations par
  occurrence.
- `tools/rarete.mjs` et `data/lexique/` : rareté mesurée sur Lexique 3.83
  (CC BY-SA 4.0, à créditer).
- Skills `creer-dictee` et `juger-difficulte` (écriture et jugement de
  difficulté).

À ne **pas** reprendre : récit, conteurs, mondes, carnet, caserne, sceaux,
atelier de back-office, BMAD.

---

## Conventions de contenu

- **Français soigné**, accents obligatoires, UTF-8 sans BOM, LF.
- Contenu **factuel et daté** sur les thèmes d'actualité (PSG, K-Pop) :
  vérifier les noms, scores, titres avant de les mettre dans un texte. Éviter
  les faits qui vieillissent vite, ou les dater.
- Pas de contenu polémique, pas de rumeur sur des personnes réelles.
- Ton adapté au niveau, jamais infantilisant ; on corrige la faute, on ne
  juge jamais le joueur.
- Droits : pas de paroles de chansons ni d'extraits d'articles. Textes
  originaux uniquement.
- Une dictée : 3 à 6 phrases (à affiner par niveau). Une phrase à erreur :
  une ligne.

## Conventions techniques (provisoires, à valider)

- Application web statique, HTML/CSS/JS sans framework ni build, mobile
  d'abord (390 x 844).
- Voix : synthèse vocale du navigateur par défaut ; clips pré-générés
  seulement si la qualité est insuffisante.
- Contenu en JSON, un fichier par thème, un jeu de champs par jeu et par
  niveau.
- Persistance minimale en `localStorage` (niveau choisi, dernier thème).
- Code et identifiants en anglais, commentaires en anglais.

## Questions ouvertes

- Nom du jeu et noms affichés des quatre niveaux.
- Texte dicté : phrase à trous aux niveaux 1 et 2 (comme Onirologos) ou
  dictée libre partout ?
- Format du jeu 2 : saisie libre de la correction, ou choix entre
  plusieurs graphies ?
- Production du contenu : écriture assistée par Claude puis relecture
  humaine, avec quelle grille de validation ?
- Hébergement (Vercel comme Onirologos ou simple fichier local).
