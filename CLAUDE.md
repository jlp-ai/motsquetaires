# CLAUDE.md : Dictées

Projet personnel (hors OCTO) : spin-off allégé d'Onirologos / Les Motsquetaires
(`../Onirologos/`). Même socle pédagogique (quatre niveaux de difficulté), mais
sans récit, sans univers, sans méta-progression. Deux jeux courts, jouables
en quelques minutes.

- **Statut (15/11/2026)** : prototype jouable, publié sur `https://github.com/jlp-ai/motsquetaires` (branche `main`, workflow GitHub Pages à activer dans Settings > Pages > source « GitHub Actions »). Fait : deux jeux, quatre niveaux, 15 thèmes en 7 méta-thèmes, textes à trous (Facile, Moyen), clips Azure pré-générés (clé partagée d'Onirologos), mots rares mesurés, mode noms propres perso/commercial, référentiel des programmes (`docs/programme-referentiel.md`).
- **Reste à faire** : (0) réécrire les phrases à erreur et dictées de `montpellier` et `cherbourg` pour un ancrage local net (lieux célèbres nommés, règle ajoutée dans `docs/redaction-contenu.md`), après la fin de l'agent juge D qui édite les mêmes fichiers ; vérifier ensuite les autres thèmes de lieu ou d'œuvre pour la même généricité ; (1) critère de difficulté orthographique D à côté de la rareté R (un mot rare n'est pas forcément difficile à écrire : « estafette » plus dur que « bretteur »), avec un agent juge sur les mots `rare: true` ; (2) analyse des dictées de Pivot, rapports attendus dans `docs/pivot/` (dossier ignoré par git, droits) ; (3) étiqueter notes et erreurs par identifiant de notion du référentiel, pour une révision ciblée ; (4) vérifier à l'oreille les clips et à l'écran le mode à trous ; (5) thèmes à traiter plus tard, ci-dessous ; (6) skill `proposer-themes` (agent qui propose des thèmes à valider).
- **Reprise après limite de session (15/11/2026, limite levée à 18h20)** : dernier envoi publié = commit « Sept nouveaux thèmes… ». Non publié, dans l'arbre de travail : (a) extension à 3 dictées et 6 erreurs par niveau de `starwars`, `harrypotter`, `kpopdemonhunters`, `mousquetaires` (noms propres en marqueurs ; relecture orthographique à refaire : consignes dans l'historique du skill `relire-orthographe`, points à vérifier : contractions devant les marqueurs dans les deux modes, « Louis XIII » à remplacer par « le roi », phrases pointues) ; (b) extensions INTERROMPUES de `manga.js` et `youtube.js` (quotas `rarete.mjs check` en échec : à terminer ou à restaurer avec `git checkout content/manga.js content/youtube.js`) ; (c) extensions non commencées (limite atteinte) de psg, kpop, jeuxvideo, series, ia, escrime, dessin, cherbourg, montpellier vers 4 dictées et 8 erreurs par niveau, selon `docs/extension-brief.md` ; puis les 7 thèmes récents et les 4 fictions à 4/8. Ensuite : clips (`node tools/clips.mjs --generate`), contrôles, publication (skill `publier`). Ne pas publier tant que `node tools/rarete.mjs check` a des FAIL.
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
- **Les coins de France** (15/11/2026) : méta-thème de lieux (villes, régions, massifs, côtes, villages, sites remarquables). Il recouvre le méta « Villes de France » existant (Cherbourg, Montpellier) : à fusionner en le renommant « Coins de France » si l'utilisateur confirme. Chaque thème de lieu reste ancré dans des repères nommés et célèbres (règle « ancrage local » de `docs/redaction-contenu.md`) ; la dictée « Douce France » de Micheline Sommant (`docs/pivot/douce-france-sommant.md`) en est le modèle de format. Faits stables, aucun chiffre.
- **Les fêtes et leurs origines** (15/11/2026) : Noël, Halloween, Pâques, Chandeleur, Épiphanie, Toussaint, 14 juillet, Carnaval, Saint-Valentin, nouvel an... Méta-thème « Fêtes et traditions », un thème par fête (origine, coutumes, vocabulaire : crèche, santon, bûche, citrouille, déguisement, galette, fève, crêpe). Sujets religieux et historiques : ton neutre et factuel, origines établies seulement (marquer « non vérifié » ce qui est légende), aucune prise de position ; ne rien dire qui puisse offenser une famille ou un enseignant. Idéal pour la dictée du jour calendaire plus tard (voir le skill `dictees-du-jour` d'Onirologos).
- **Le métro** (15/11/2026) : probablement le métro de Paris (stations nommées, lignes, correspondances, quai, rame, tourniquet, ticket) ; à préciser si d'autres métros sont visés (Lyon, Marseille, Londres, New York). Méta-thème possible « Transports » (métro, train, tramway, vélo). Ancrage obligatoire : stations et repères célèbres nommés ; faits stables, aucun chiffre de fréquentation ni horaire ; noms de lignes et de stations en clair (lieux publics), nom de l'opérateur en marqueur.
- **Les magasins** (15/11/2026) : commerces et lieux d'achat (boulangerie, boucherie, fromagerie, librairie, quincaillerie, marché, supermarché, centre commercial, caisse, rayon, vitrine, soldes). À préciser : commerces de quartier, grandes surfaces, ou les deux. Méta-thème possible « Vie quotidienne » (magasins, métro, cuisine, fêtes). Enseignes et marques en marqueurs `{{Nom|périphrase}}` ; aucun prix ni promotion datés. Les métiers de commerce (boulanger, fromager, quincaillier) sont un bon gisement de mots rares, dans l'esprit des métiers d'autrefois de la dictée « Douce France ».
- **Comprendre le monde** (vulgarisation, dans l'esprit de « C'est pas sorcier », 15/11/2026) : méta-thème de textes qui expliquent comment les choses fonctionnent. Sous-thèmes possibles (propositions, non validées) : le corps humain, l'espace et les planètes, les volcans et les séismes, la météo et le climat, l'électricité, les ponts et les barrages, les trains et les avions, l'eau et ses cycles, les fourmis et les abeilles, le cerveau. Un thème = un mécanisme expliqué en quelques phrases (cause, étapes, conséquence) avec un champ lexical technique accessible, idéal pour les mots rares et les termes savants. Règles : faits scientifiques établis seulement, aucun chiffre contesté ni donnée datée, ton clair et vivant. Le titre « C'est pas sorcier » est une marque ; ne s'y référer qu'en marqueur ou pas du tout.
- **Cuisine** (15/11/2026) : champ lexical très riche en mots rares et pièges (ustensiles, techniques, ingrédients : sauter, blanchir, déglacer, mijoter, échalote, poêle, ciseler). Méta-thème probable « Cuisine et gastronomie », avec sous-thèmes possibles (pâtisserie, cuisine du monde, produits de saison). Faits culinaires stables ; noms de chefs et de marques en marqueurs si utilisés.
- **Les Enfants de la Résistance** (bande dessinée) : méta « Fictions et sagas » ou « Lecture et dessin ». Œuvre protégée : textes originaux, aucun personnage ni passage repris. Appuyer l'angle sur l'histoire (occupation, réseaux, maquis, clandestinité) avec des faits historiques exacts et sourcés ; sujet grave, ton sobre et respectueux.
- **Méta-thème « Mythologie »** (15/11/2026, demandé par l'utilisateur) : regroupe les thèmes de mythes et d'épopées. Premier thème : Odyssée. Sous-thèmes envisagés (propositions, non validées) : mythologie grecque (dieux et héros), mythologie romaine, mythologie nordique, mythologie égyptienne, les douze travaux d'Hercule. Mythes et épopées antiques du domaine public : noms propres en clair. **Lore des jeux vidéo** (ajouté le 15/11/2026) : univers narratifs et mythologies inventées de jeux (à préciser avec l'utilisateur : quels jeux). Œuvres sous droits : textes originaux, noms propres en marqueurs `{{Nom|périphrase}}`, aucun passage ni réplique repris, faits certains seulement. Distinct du thème `jeuxvideo` existant (gaming au quotidien : manette, serveur, tournoi). Créer le méta dans `content/metas.js` avec le premier thème écrit (un méta sans thème n'est pas affiché).
- **Odyssée** (15/11/2026, rattaché au méta Mythologie) : suppose l'épopée d'Homère (Ulysse, Pénélope, Ithaque, Polyphème, les Sirènes, Circé, Calypso). Œuvre du domaine public : noms propres en clair, mythologie et vocabulaire de la navigation et de l'Antiquité (cyclope, nautonier, onde, rivage). À confirmer si « Odyssée » visait autre chose (par exemple le film ou le roman de science-fiction).
- **Disney** : méta « Fictions et sagas » ou méta dédié. Univers très large (films, parcs, personnages) : cadrer l'angle avant d'écrire (par exemple films d'animation et vocabulaire du conte) et rester sur des textes originaux, sans réplique ni paroles.

## Skills du projet (`.claude/skills/`)

- `ecrire-theme` : écrire un thème ou l'étendre (plus de dictées et de phrases à erreur).
- `relire-orthographe` : relecture indépendante des fichiers de contenu.
- `juger-difficulte` : difficulté orthographique D à côté de la rareté R, quota de difficulté.
- `proposer-themes` : veille et fiches de thèmes à valider, sans rien rédiger.
- `publier` : contrôles, clips vocaux, commit et push (GitHub, Vercel).

Modèles des sous-agents : Sonnet par défaut, Opus quand l'orthographe doit être irréprochable, jamais Fable. Ces skills s'appuient sur les références d'Onirologos (`../Onirologos/.claude/skills/creer-dictee/references/`) sans les copier.

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
