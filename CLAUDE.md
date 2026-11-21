# CLAUDE.md : Dictées

Projet personnel (hors OCTO) : spin-off allégé d'Onirologos / Les Motsquetaires
(`../Onirologos/`). Même socle pédagogique (quatre niveaux de difficulté), mais
sans récit, sans univers, sans méta-progression. Un seul jeu, « Trouve l'erreur »,
jouable en quelques minutes. Le jeu Dictée (audio, clips, textes à trous) a été supprimé le 20/11/2026 ; il reste récupérable dans l'historique git.

- **Statut (20/11/2026)** : prototype jouable, publié sur `https://github.com/jlp-ai/motsquetaires` (branche `main`, workflow GitHub Pages). Fait : jeu « Trouve l'erreur », quatre niveaux, thèmes regroupés en méta-thèmes, phrases à plusieurs fautes, types d'erreur, mode noms propres perso/commercial, référentiel des programmes (`docs/programme-referentiel.md`).
- **Reste à faire** : (0) vérifier l'ancrage local des thèmes de lieu ou d'œuvre (`montpellier`, `cherbourg` : lieux célèbres nommés, règle de `docs/redaction-contenu.md`) ; (1) analyse des dictées de Pivot, rapports attendus dans `docs/pivot/` (dossier ignoré par git, droits) ; (2) étiqueter les erreurs par identifiant de notion du référentiel, pour une révision ciblée ; (3) thèmes à traiter plus tard, ci-dessous ; (4) skill `proposer-themes` (agent qui propose des thèmes à valider).
- **Densité des phrases Trouve l'erreur (décidée le 15/11/2026)** : phrases à réécrire par niveau (`docs/niveau-expert.md`, tableau de densité dans `docs/redaction-contenu.md`) : Expert (18 à 35 mots, 4 difficultés correctes autour de la faute), puis Difficile (15 à 25 mots, deux règles croisées), puis Moyen (12 à 20 mots), par vagues d'agents (une par thème, 8 phrases par niveau) ; relecture indépendante ensuite.
- **Volume cible (15/11/2026)** : 20 phrases à erreur par niveau et par sous-thème (voir `docs/extension-brief.md`). Règles de répartition en proportions (`tools/erreurs.mjs`).
- **À reprendre (18/11/2026)** : (a) quatre thèmes demandés, non écrits : photographie, Résistance (sobre, faits établis), Révolution française, Moyen Âge ; méta « Histoire » proposé pour les trois derniers ; (b) lot « variété des niveaux Apprenti et Compagnon » : remplacer environ 6 phrases par thème par des pièges des nouveaux types (`typographie`, `syntaxe`, `quantite`, `euphonie`, ajoutés dans `content/types.js` et `tools/erreurs.mjs`) ; (c) phrases à plusieurs fautes (`faults`, voir `docs/redaction-contenu.md`) : support prêt dans `app.js`, à introduire en minorité en Difficile et Expert ; (d) relecture orthographique (`relire-orthographe`) des lots Difficile et Expert et des thèmes La Fontaine, Échecs, Métal, Disney, puis enregistrement de ces 4 thèmes dans `index.html` et `content/metas.js` ; (e) autres idées de thèmes : marine et voile, architecture et patrimoine, espace et astronomie, cinéma. Limiter les agents en parallèle (4 au plus) pour ne pas épuiser la limite de session avant publication.
- **Principe directeur** : plus simple qu'Onirologos. Toute fonctionnalité
  qui ressemble à de la méta (sceaux, carnet, carte de mondes, conteurs)
  est hors périmètre.

---

## Le jeu

### Trouve le mot en erreur

Une phrase s'affiche avec **une seule faute d'orthographe** (ou de grammaire)
cachée sur un mot. Le joueur touche le mot fautif, puis tape ou choisit la
bonne forme. Correction et règle expliquée.

- Une et une seule erreur par phrase, sans ambiguïté possible.
- La phrase doit rester correcte et naturelle une fois corrigée.
- Un thème = un fichier de contenu, un champ lexical propre (PSG, K-Pop, jeux vidéo, séries, cuisine, voyage, sport...).
- **Piège orthographique et sujet moderne** : le thème porte l'attrait, la difficulté porte sur la langue française (accords, homophones, participes passés, mots rares du champ lexical).
- **Noms propres et mots étrangers** (joueurs, groupes, termes coréens) : ne jamais en faire des pièges. Les donner en clair ou les éviter aux rangs bas.

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
- **Les fêtes et leurs origines** (15/11/2026) : Noël, Halloween, Pâques, Chandeleur, Épiphanie, Toussaint, 14 juillet, Carnaval, Saint-Valentin, nouvel an... Méta-thème « Fêtes et traditions », un thème par fête (origine, coutumes, vocabulaire : crèche, santon, bûche, citrouille, déguisement, galette, fève, crêpe). Sujets religieux et historiques : ton neutre et factuel, origines établies seulement (marquer « non vérifié » ce qui est légende), aucune prise de position ; ne rien dire qui puisse offenser une famille ou un enseignant.
- **Le métro** (15/11/2026) : probablement le métro de Paris (stations nommées, lignes, correspondances, quai, rame, tourniquet, ticket) ; à préciser si d'autres métros sont visés (Lyon, Marseille, Londres, New York). Méta-thème possible « Transports » (métro, train, tramway, vélo). Ancrage obligatoire : stations et repères célèbres nommés ; faits stables, aucun chiffre de fréquentation ni horaire ; noms de lignes et de stations en clair (lieux publics), nom de l'opérateur en marqueur.
- **Les magasins** (15/11/2026) : commerces et lieux d'achat (boulangerie, boucherie, fromagerie, librairie, quincaillerie, marché, supermarché, centre commercial, caisse, rayon, vitrine, soldes). À préciser : commerces de quartier, grandes surfaces, ou les deux. Méta-thème possible « Vie quotidienne » (magasins, métro, cuisine, fêtes). Enseignes et marques en marqueurs `{{Nom|périphrase}}` ; aucun prix ni promotion datés. Les métiers de commerce (boulanger, fromager, quincaillier) sont un bon gisement de mots rares, dans l'esprit des métiers d'autrefois de la dictée « Douce France ».
- **Comprendre le monde** (vulgarisation, dans l'esprit de « C'est pas sorcier », 15/11/2026) : méta-thème de textes qui expliquent comment les choses fonctionnent. Sous-thèmes possibles (propositions, non validées) : le corps humain, l'espace et les planètes, les volcans et les séismes, la météo et le climat, l'électricité, les ponts et les barrages, les trains et les avions, l'eau et ses cycles, les fourmis et les abeilles, le cerveau. Un thème = un mécanisme expliqué en quelques phrases (cause, étapes, conséquence) avec un champ lexical technique accessible, idéal pour les mots rares et les termes savants. Règles : faits scientifiques établis seulement, aucun chiffre contesté ni donnée datée, ton clair et vivant. Le titre « C'est pas sorcier » est une marque ; ne s'y référer qu'en marqueur ou pas du tout.
- **Cuisine** (15/11/2026) : champ lexical très riche en mots rares et pièges (ustensiles, techniques, ingrédients : sauter, blanchir, déglacer, mijoter, échalote, poêle, ciseler). Méta-thème probable « Cuisine et gastronomie », avec sous-thèmes possibles (pâtisserie, cuisine du monde, produits de saison). Faits culinaires stables ; noms de chefs et de marques en marqueurs si utilisés.
- **Sous-thèmes de la Cuisine par pays (15/11/2026)** : cuisine vietnamienne, italienne, japonaise, indienne, mexicaine, libanaise, chinoise, marocaine, espagnole (liste à confirmer par l'utilisateur). Le thème actuel `cuisine` (techniques et vocabulaire généraux) devient un sous-thème du méta « Cuisine » (renommer « Bases de cuisine » ou « Cuisine française »). Chaque sous-thème : plats, ingrédients, ustensiles et gestes propres à la cuisine du pays, en mots français ; les noms de plats étrangers (pho, risotto, sushi) sont des emprunts : jamais des pièges, graphie francisée vérifiée au dictionnaire, usage rare et sans double graphie. Faits culinaires stables, sans prétention d'authenticité ; aucune polémique culturelle ; noms de chefs ou de marques en marqueurs.
- **Les Enfants de la Résistance** (bande dessinée) : méta « Fictions et sagas » ou « Lecture et dessin ». Œuvre protégée : textes originaux, aucun personnage ni passage repris. Appuyer l'angle sur l'histoire (occupation, réseaux, maquis, clandestinité) avec des faits historiques exacts et sourcés ; sujet grave, ton sobre et respectueux.
- **Méta-thème « Mythologie »** (15/11/2026, demandé par l'utilisateur) : regroupe les thèmes de mythes et d'épopées. Premier thème : Odyssée. Sous-thèmes envisagés (propositions, non validées) : mythologie grecque (dieux et héros), mythologie romaine, mythologie nordique, mythologie égyptienne, les douze travaux d'Hercule. Mythes et épopées antiques du domaine public : noms propres en clair. **Lore des jeux vidéo** (ajouté le 15/11/2026) : univers narratifs et mythologies inventées de jeux (à préciser avec l'utilisateur : quels jeux). Œuvres sous droits : textes originaux, noms propres en marqueurs `{{Nom|périphrase}}`, aucun passage ni réplique repris, faits certains seulement. Distinct du thème `jeuxvideo` existant (gaming au quotidien : manette, serveur, tournoi). Créer le méta dans `content/metas.js` avec le premier thème écrit (un méta sans thème n'est pas affiché).
- **Odyssée** (15/11/2026, rattaché au méta Mythologie) : suppose l'épopée d'Homère (Ulysse, Pénélope, Ithaque, Polyphème, les Sirènes, Circé, Calypso). Œuvre du domaine public : noms propres en clair, mythologie et vocabulaire de la navigation et de l'Antiquité (cyclope, nautonier, onde, rivage). À confirmer si « Odyssée » visait autre chose (par exemple le film ou le roman de science-fiction).
- **Disney** : méta « Fictions et sagas » ou méta dédié. Univers très large (films, parcs, personnages) : cadrer l'angle avant d'écrire (par exemple films d'animation et vocabulaire du conte) et rester sur des textes originaux, sans réplique ni paroles.

## Skills du projet (`.claude/skills/`)

- `ecrire-theme` : écrire un thème ou l'étendre (plus de phrases à erreur).
- `relire-orthographe` : relecture indépendante des fichiers de contenu.
- `juger-difficulte` : difficulté orthographique D des pièges, rareté R des mots.
- `proposer-themes` : veille et fiches de thèmes à valider, sans rien rédiger.
- `publier` : contrôles, commit et push (GitHub, Vercel).

Modèles des sous-agents : Sonnet par défaut, Opus quand l'orthographe doit être irréprochable, jamais Fable. Ces skills s'appuient sur les références d'Onirologos (`../Onirologos/.claude/skills/creer-dictee/references/`) sans les copier.

## Noms propres : perso puis commercial

Tant que le projet est personnel, les noms propres sont permis. Avant toute monétisation, ils sont remplacés par des périphrases. Un nom remplaçable s'écrit `{{Nom|périphrase}}` dans le contenu ; le mode se règle dans `config.js` (`perso` ou `commercial`). Contrôle : `node tools/noms.mjs`. Règles et procédure de bascule : `docs/redaction-contenu.md`. Aujourd'hui seuls les noms de thème (PSG, YouTube, Star Wars, Harry Potter, KPop Demon Hunters) sont marqués ; les textes n'en contiennent aucun.

## Rareté des mots

Les phrases à erreur de type `lexique` sont contrôlées sur Lexique 3.83 par niveau (`node tools/rarete-erreurs.mjs`) ; fréquence d'un mot : `node tools/rarete.mjs words <mots>`. Détail dans `docs/redaction-contenu.md`.

## Ce qui est réutilisable depuis Onirologos

À copier ou adapter, pas à lier (les deux projets doivent rester
indépendants) :

- `tools/rarete.mjs` et `data/lexique/` : rareté mesurée sur Lexique 3.83
  (CC BY-SA 4.0, à créditer).
- Skill `juger-difficulte` (jugement de difficulté).

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
- Une phrase à erreur : une ligne.

## Conventions techniques (provisoires, à valider)

- Application web statique, HTML/CSS/JS sans framework ni build, mobile
  d'abord (390 x 844).
- Pas de voix ni d'audio : jeu purement textuel.
- Contenu en JSON, un fichier par thème, un jeu de champs par jeu et par
  niveau.
- Persistance minimale en `localStorage` (niveau choisi, dernier thème).
- Code et identifiants en anglais, commentaires en anglais.

## Questions ouvertes

- Nom du jeu et noms affichés des quatre niveaux.
- Format du jeu : saisie libre de la correction, ou choix entre
  plusieurs graphies (choix, actuellement) ?
- Production du contenu : écriture assistée par Claude puis relecture
  humaine, avec quelle grille de validation ?
- Hébergement (Vercel comme Onirologos ou simple fichier local).
