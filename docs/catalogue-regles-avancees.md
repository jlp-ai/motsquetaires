# Catalogue des règles avancées pour Trouve l'erreur (Difficile et Expert)

Recherche du 16/11/2026. Objet : sortir les phrases à erreur des niveaux `maitre` (Difficile) et `grand-scribe` (Expert) du trio pronominal, COD antéposé, *quelque* et *quel que*. Le catalogue donne des **types de règles** : chacun peut porter une phrase à **une seule faute**, sur **un seul mot**, sans contestation possible.

Ce fichier complète deux références d'Onirologos sans les répéter :
[mecanismes.md](../../Onirologos/.claude/skills/creer-dictee/references/mecanismes.md) (identifiants `ONI`) et
[etalon-grand-scribe.md](../../Onirologos/.claude/skills/creer-dictee/references/etalon-grand-scribe.md), ainsi que les analyses privées de `docs/pivot/` (code `PIV`). Quand un type recoupe un mécanisme d'Onirologos, la colonne Sûreté le signale (`ONI id`) ; l'angle retenu ici est alors différent (contraste, cas limite, autre déclencheur).

## Mode d'emploi

- **Une faute, un mot.** La colonne « Faute typique » donne la graphie fautive plausible (`wrong`) ; l'exemple correct donne `right`. Les trois choix proposés au joueur restent trois graphies du même mot.
- **Sûreté.** « sans débat » : Larousse, Robert et Académie ne divergent pas, ou les sources normatives consultées concordent. Tout type « débat » (double graphie, tolérance, accord facultatif, désaccord entre ouvrages) est regroupé dans la section **À éviter** et ne sert jamais de piège. Il peut apparaître correctement écrit dans une phrase, jamais comme faute.
- **Contexte.** Plusieurs règles dépendent du sens (homophones, paronymes, genre selon le sens, couleurs distributives). La phrase doit alors fixer le sens sans équivoque, sinon le type bascule dans « débat ».
- **Rectifications de 1990.** Aucun mot touché par les rectifications (circonflexe sur *i* et *u*, soudures, traits d'union des numéraux, pluriels des composés, accents) ne sert de piège. Liste dans la section À éviter.
- **Champ `type`** (`content/types.js`). Correspondance par défaut : famille 1 → `participe` ; famille 2 → `accord` ; famille 3 → `invariable` ; famille 4 → `temps` ; famille 5 → `compose` ou `accord` (genre, pluriel) ; famille 6 → `lexique`, `homophone`, `sens` ou `adverbe` ; famille 7 → `temps` (modes), `homophone` ou `sens` (locutions). Les pronominaux gardent `pronominal` et restent plafonnés à 1 par thème et par niveau (`docs/niveau-expert.md`).

## Codes des sources

| Code | Source |
| --- | --- |
| OQLF n | Office québécois de la langue française, Vitrine linguistique (ex-Banque de dépannage linguistique), fiche n |
| AF QDL, AF DNP, AF 9e | Académie française : Questions de langue, Dire ne pas dire, Dictionnaire 9e édition |
| R90 | Rectifications de l'orthographe de 1990 (annexe du Dictionnaire de l'Académie ; tableau Riverin et Chartrand, Université Laval ; fiches OQLF et CCDMD) |
| LAR | Larousse en ligne, dictionnaire et rubriques « Difficultés » |
| ROB | Le Robert (consulté par citations secondaires) |
| CAN | Gouvernement du Canada : Clés de la rédaction, Juridictionnaire |
| ENS | Consensus des grammaires de référence (Grevisse et Goosse, *Le Bon Usage* ; Bescherelle) : non relu en ligne dans cette recherche, à confirmer avant un usage en série |
| PIV | Analyses privées de `docs/pivot/` (Dicos d'or, finales 1985 à 2005) |
| ONI | Catalogue `mecanismes.md` d'Onirologos (identifiant de mécanisme) |

---

## Famille 1 : participes et accords

Hors pronominaux classiques et COD antéposé simple, déjà saturés. Les types P03 et P04, P12 et P11, P19 forment des paires contrastées utiles dans un même thème.

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| P01 | Participe précédé de *en* COD | *En* (une partie de, une quantité de) n'entraîne pas l'accord : participe invariable. | 1. « Des cèpes, le cuisinier en a ramassé trois paniers. » 2. « Des coulées de lave, j'en ai vu de plus noires à l'Etna. » | ramassés, vues | maitre | sans débat (OQLF 21037 ; AF QDL063) ; ONI `pp-en`. Avec adverbe de quantité placé avant : À éviter X01 |
| P02 | *En* complément et autre COD placé avant | Si *en* n'est pas le COD et qu'un autre COD précède, le participe s'accorde avec ce COD. | 1. « De ce cousin d'Alès, les lettres que j'en ai reçues tiennent dans un coffret. » 2. « De l'Asie, les estampes qu'il en a rapportées ornent le salon. » | reçu, rapporté | grand-scribe | sans débat (OQLF 21037) |
| P03 | Participe + infinitif, le COD fait l'action | *Vu, entendu, senti, regardé* suivis d'un infinitif s'accordent avec le COD placé avant si ce COD fait l'action de l'infinitif. | 1. « Les juments que j'ai vues galoper en Camargue étaient grises. » 2. « Ces sopranos, je les ai entendues chanter Mozart. » | vu, entendu | maitre | sans débat (OQLF 21859 ; AF QDL063) ; ONI `pp-infinitif-accord` |
| P04 | Participe + infinitif, le COD subit l'action | Même construction, mais le COD subit l'action : participe invariable. | 1. « Les platanes que nous avons vu abattre bordaient le cours. » 2. « Les sonates qu'il a entendu jouer par sa fille l'ont ému. » | vus, entendues | grand-scribe | sans débat (OQLF 21859) |
| P05 | *Fait* + infinitif | *Fait* suivi d'un infinitif est toujours invariable, y compris à la forme pronominale. | 1. « Elle s'est fait construire une forge. » 2. « Les fleurets qu'il a fait affûter brillent. » | faite, faits | maitre | sans débat (AF QDL063 ; R90 le confirme) ; ONI `pp-fait-infinitif` |
| P06 | *Se voir* + infinitif | *Vu* s'accorde si le sujet fait l'action de l'infinitif, reste invariable s'il la subit. | 1. « Elle s'est vue glisser sur la glace. » 2. « Elles se sont vu refuser l'entrée du tournoi. » | vu (ex. 1), vues (ex. 2) | grand-scribe | sans débat (AF QDL069 ; OQLF 25181) |
| P07 | Infinitif sous-entendu | *Pu, dû, voulu, cru, su, permis, prévu* dont le complément est un infinitif sous-entendu restent invariables. | 1. « Il a goûté toutes les sauces qu'il a pu. » 2. « Elle a lu tous les mangas qu'elle a voulu. » | voulus | grand-scribe | sans débat (OQLF 21861 ; AF QDL063) ; ONI `pp-infinitif-sous-entendu` |
| P08 | Accent de *dû* | Seul le masculin singulier *dû* porte l'accent ; *due, dus, dues* n'en ont pas. | 1. « La somme due au haras est réglée. » 2. « Ces égards lui sont dus depuis longtemps. » | dûe, dûs | maitre | sans débat (LAR ; R90 maintient *dû*) |
| P09 | Verbe impersonnel | Le participe d'un verbe impersonnel ou employé impersonnellement est invariable. | 1. « Les orages qu'il a fait cet été ont couché les vignes. » 2. « Les trois heures qu'il a fallu pour gravir le puy l'ont épuisé. » | faits, fallues | maitre | sans débat (OQLF 21544) ; ONI `pp-impersonnel` |
| P10 | Impersonnel pronominal | Avec *il s'est produit, il s'est créé*, le sujet réel pluriel ne commande pas l'accord. | 1. « Il s'est produit des éboulements sur la route du volcan. » 2. « Il s'est ouvert trois salles d'armes dans le quartier. » | produits, ouvertes | grand-scribe | sans débat (CAN, Clés de la rédaction ; OQLF 21544) |
| P11 | Attribut du COD | Participe suivi d'un attribut du COD : accord avec le COD placé avant. | 1. « Ces cavalières, le jury les a jugées dignes de la finale. » 2. « La sauce, je l'ai trouvée trop salée. » | jugé, trouvé | maitre | sans débat (AF QDL063 ; OQLF 25185) |
| P12 | Attribut du COD suivi d'un infinitif | Si l'attribut est suivi d'un infinitif complément, participe et attribut restent invariables. | 1. « Ces révisions, le jury a jugé utile de les publier. » 2. « Ces précautions, l'alpiniste a cru bon de les doubler. » | jugées | grand-scribe | sans débat (OQLF 25185) |
| P13 | Participe présent ou adjectif verbal | Le participe présent (complément, adverbe, action) est invariable ; l'adjectif verbal (état) s'accorde. | 1. « Les coulées, descendant lentement vers la mer, fumaient encore. » 2. « Des coulées brûlantes barraient la route. » | descendantes | maitre | sans débat (OQLF 22915) |
| P14 | Graphie distincte en *-quant / -cant*, *-guant / -gant* | Le participe garde le radical du verbe (*convainquant, naviguant, fatiguant*) ; l'adjectif ou le nom le perd (*convaincant, navigant, fatigant*). | 1. « En convainquant le jury, l'avocat sauva son client. » 2. « Le personnel navigant attend l'embarquement. » | convaincant (ex. 1), naviguant (ex. 2) | grand-scribe | sans débat (OQLF 22915 ; LAR) |
| P15 | Graphie distincte en *-geant / -gent* | Participe en *-geant*, adjectif en *-gent* (*divergeant / divergent, négligeant / négligent, convergeant / convergent*) ; *exigeant* garde son *e* partout. | 1. « Les sentiers, divergeant après le col, rejoignent la crête. » 2. « Les experts ont rendu des avis divergents. » | divergents (ex. 1), divergeants (ex. 2) | grand-scribe | sans débat (LAR ; OQLF 22915) |
| P16 | *Ci-joint* en tête ou après le nom | Invariable en tête de phrase ou devant un nom sans déterminant ; accordé après le nom. | 1. « Ci-joint les relevés de la séance. » 2. « Les photocopies ci-jointes complètent le dossier. » | ci-joints, ci-joint | maitre | sans débat pour ces deux positions (OQLF ; LAR). Position médiane devant déterminant : À éviter X05 |
| P17 | *Excepté, passé, vu, y compris* | Placés devant le nom : invariables (valeur de préposition) ; placés après : accordés. | 1. « Excepté les deux pouliches, tout le haras a voyagé. » 2. « Les deux pouliches exceptées, tout le haras a voyagé. » | exceptées (ex. 1) | maitre | sans débat (LAR ; OQLF) ; ONI `excepte-passe`. *Étant donné* : À éviter X06 |
| P18 | *S'arroger* | *Se* est COI : accord avec le COD seulement s'il précède. | 1. « Les privilèges que les mousquetaires se sont arrogés fâchèrent le cardinal. » 2. « Les mousquetaires se sont arrogé des privilèges. » | arrogés (ex. 2), arrogé (ex. 1) | grand-scribe | sans débat (CAN, Juridictionnaire ; OQLF 22942). Compte dans le plafond `pronominal` |
| P19 | *Se faire* + attribut ou + infinitif | *Se faire* + adjectif attribut : accord ; *se faire* + infinitif : *fait* invariable. | 1. « Elle s'est faite discrète pendant le concert. » 2. « Elle s'est fait accompagner au piano. » | fait discrète, faite accompagner | grand-scribe | sans débat (LAR ; AF QDL063) |
| P20 | *Entendu dire, entendu raconter* | Le *que* placé avant est COD de l'infinitif : participe invariable. | 1. « Les rumeurs que j'ai entendu dire sur ce sabreur sont fausses. » 2. « Les légendes qu'elle a entendu raconter au village la hantent. » | entendues | grand-scribe | sans débat (OQLF 21859) |
| P21 | Participe + préposition + infinitif | *Oublié de, essayé de, commencé à* : si le *que* est COD de l'infinitif, participe invariable. | 1. « La facture qu'il a oublié de régler est arrivée. » 2. « Les gammes qu'elle a commencé à travailler sont ardues. » | oubliée, commencées | grand-scribe | sans débat (OQLF 21859, même principe). *Eu à, donné à* : À éviter X02 |
| P22 | *Vous* de politesse | Avec un seul destinataire, l'attribut et le participe restent au singulier. | 1. « Madame, vous êtes arrivée la première au relais. » 2. « Monsieur, vous serez récompensé de votre patience. » | arrivées, récompensés | grand-scribe | sans débat (OQLF ; ENS) |
| P23 | *Nous* de modestie | *Nous* désignant l'auteur seul : attribut et participe au singulier, genre de l'auteur. | 1. « Dans cet essai, nous sommes restée fidèle aux sources, écrit l'historienne. » 2. « Nous sommes persuadé, conclut le chroniqueur, que le volcan s'éveillera. » | restées, persuadés | grand-scribe | sans débat (ENS) |

## Famille 2 : accord du verbe et du sujet

Les cas où l'accord est facultatif (collectifs, *un des qui*, *l'un et l'autre*, *ni l'un ni l'autre*, fractions) sont dans À éviter.

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| A01 | Sujet inversé dans une relative | Après *que, où, dont*, le sujet placé après le verbe commande l'accord. | 1. « Les chants que fredonnent les bergers montent du vallon. » 2. « Le haras dont s'occupent mes cousins est à Uzès. » | fredonne, s'occupe | maitre | sans débat (ENS ; PIV Douce France) |
| A02 | Inversion après un complément en tête | Complément de lieu ou adverbe en tête, sujet postposé : accord avec ce sujet. | 1. « Au pied du volcan s'étendent des vignes. » 2. « Ainsi naquirent les premières salles d'armes. » | s'étend, naquit | maitre | sans débat (ENS) |
| A03 | Attribut ou participe passif en tête | *Sont admis, seront récompensés* en tête : accord avec le sujet postposé. | 1. « Sont exclus du tournoi les tireurs blessés. » 2. « Seront récompensées les trois meilleures cavalières. » | Est (ex. 1), récompensés (ex. 2) | maitre | sans débat (ENS). *Reste, restent* : À éviter X16 |
| A04 | Sujet réel d'un impersonnel | Le verbe impersonnel s'accorde avec *il*, jamais avec le sujet réel pluriel. | 1. « Il est tombé des cendres toute la nuit. » 2. « Il manque deux cordes à ce violon. » | tombées, manquent | maitre | sans débat (OQLF 21544 ; ENS) |
| A05 | Sujets de personnes différentes | La 1re personne l'emporte sur la 2e, la 2e sur la 3e. | 1. « Ma sœur et moi partirons à l'aube. » 2. « Toi et ton cheval serez les derniers à passer. » | partiront, seront | maitre | sans débat (OQLF 25402) |
| A06 | *Moi qui, vous qui, nous qui* | Après *qui*, le verbe prend la personne de l'antécédent. | 1. « C'est moi qui ai réservé les places. » 2. « Vous qui connaissez la Camargue, guidez-nous. » | a réservé, connaissent | maitre | sans débat (OQLF ; AF) ; ONI `sujet-qui` (angle personne) |
| A07 | *Plus d'un* + nom singulier | Verbe au singulier, malgré le sens pluriel. | 1. « Plus d'un fleurettiste a tremblé avant la finale. » 2. « Plus d'une soprano redoute ce contre-ut. » | ont tremblé, redoutent | maitre | sans débat avec complément singulier (OQLF 21701) |
| A08 | *Moins de deux* | Verbe au pluriel, malgré le sens inférieur à deux. | 1. « Moins de deux heures ont suffi pour atteindre le cratère. » 2. « Moins de deux semaines se sont écoulées. » | a suffi, s'est écoulée | maitre | sans débat (OQLF 21699) |
| A09 | *La plupart* | Verbe au pluriel, avec ou sans complément au pluriel. | 1. « La plupart des volcans d'Auvergne sont éteints. » 2. « La plupart pensent que le puy dort. » | est éteint, pense | maitre | sans débat (OQLF 21650 ; LAR) |
| A10 | *Nombre de* ou *le nombre de* | Sans article (*nombre de, bon nombre de*) : pluriel ; avec article défini (*le nombre de*) : singulier. | 1. « Bon nombre de cavaliers ont renoncé. » 2. « Le nombre des inscrits a doublé. » | a renoncé, ont doublé | maitre | sans débat (OQLF 24143) |
| A11 | Adverbes de quantité | *Beaucoup de, peu de, trop de, combien de, tant de* : accord avec le complément. | 1. « Peu de sopranos atteignent cette note. » 2. « Trop de sel gâte la sauce. » | atteint, gâtent | maitre | sans débat (OQLF 24463, 21685, 23834). *Le peu de* : À éviter X03 |
| A12 | Sujet résumé par *tout, rien, personne* | Un mot qui résume une énumération devient seul sujet : singulier. | 1. « Les fleurets, les masques, les plastrons, tout était rangé. » 2. « Ses partitions, son pupitre, son métronome, rien ne manquait. » | étaient, manquaient | grand-scribe | sans débat (ENS) |
| A13 | Deux noms pour un même être | Deux noms coordonnés qui désignent la même personne : singulier. | 1. « Ce cavalier et dresseur hors pair a fondé le haras. » 2. « Le compositeur et pianiste vient de s'éteindre. » | ont fondé, viennent | grand-scribe | sans débat (ENS) |
| A14 | Interrogative ou exclamative inversée | Après *que, où, combien*, le sujet postposé commande l'accord. | 1. « Que valent ces promesses de victoire ? » 2. « Où dorment les marmottes en hiver ? » | vaut, dort | maitre | sans débat (ENS) |
| A15 | Incise inversée | Dans l'incise (*dit-il, répondirent-elles*), le verbe s'accorde avec le sujet postposé. | 1. « Partons, dirent les mousquetaires, avant l'aube. » 2. « Rien ne presse, répondirent les deux sœurs. » | dit, répondit | maitre | sans débat (ENS) |
| A16 | *Aucun, pas un, nul* … *ne* | Sujet négatif : verbe au singulier. | 1. « Aucune de ces coulées n'atteignit le village. » 2. « Pas un spectateur ne bougea pendant l'adagio. » | n'atteignirent, bougèrent | maitre | sans débat (OQLF 24123 ; LAR) |
| A17 | *C'est nous, c'est vous* | Devant *nous* et *vous*, toujours *c'est* (jamais *ce sont*). | 1. « C'est nous qui gagnerons le relais. » 2. « C'est vous, les anciens, qui ouvrirez le bal. » | Ce sont | maitre | sans débat (OQLF 21603 ; LAR). *C'est* ou *ce sont* devant un nom pluriel : À éviter X17 |

## Famille 3 : invariables et accords pièges

Hors *quelque*, *quel que* et *tout* devant voyelle, déjà au catalogue d'Onirologos (`quelque-que`, `quel-que`, `tout-adverbe`).

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| I01 | *Tout* devant consonne ou *h* aspiré | *Tout* adverbe varie devant un adjectif féminin commençant par une consonne ou un *h* aspiré, reste invariable devant voyelle ou *h* muet. | 1. « La pianiste revint toute honteuse de sa fausse note. » 2. « Elle arriva tout essoufflée au relais. » | tout honteuse, toute essoufflée | grand-scribe | sans débat (OQLF ; LAR) ; angle *h* aspiré absent d'ONI `tout-adverbe` |
| I02 | *Tout autre* | Adverbe (complètement) : invariable ; déterminant (n'importe quel) : accordé. | 1. « C'est une tout autre affaire. » 2. « Toute autre réponse serait fausse. » | toute autre (ex. 1) | grand-scribe | sans débat (LAR ; OQLF) |
| I03 | *Tout-puissant* | *Tout* ne varie qu'au féminin : *toute-puissante, toutes-puissantes*, mais *tout-puissants*. | 1. « Les reines toutes-puissantes de la saga se défient. » 2. « Les dieux tout-puissants de l'Olympe se querellent. » | tous-puissants | grand-scribe | sans débat (OQLF 21731 ; LAR) |
| I04 | *Même* lié au pronom | *Vous-même* (politesse, une personne), *vous-mêmes* (plusieurs), *eux-mêmes*. | 1. « Madame, vérifiez-le vous-même. » 2. « Les escrimeurs eux-mêmes ont salué l'arbitre. » | vous-mêmes, eux-même | grand-scribe | sans débat (LAR ; OQLF) ; ONI `meme` (angle politesse) |
| I05 | *Même* adverbe | Placé devant le déterminant (*même les*) ou après un verbe : adverbe, invariable. | 1. « Même les plus jeunes ont tenu la distance. » 2. « Il a même oublié son masque. » | Mêmes | maitre | sans débat (LAR) ; *même* après plusieurs noms : À éviter X26 |
| I06 | *Quelque temps, quelquefois, quelques fois* | *Quelque temps* au singulier ; *quelquefois* (parfois) contre *quelques fois* (plusieurs fois). | 1. « Il resta quelque temps à Montpellier. » 2. « Je l'ai croisé quelques fois cette année ; il passe quelquefois au club. » | quelques temps | maitre | sans débat (LAR ; AF) |
| I07 | *Tel quel* | *Tel quel* (sans changement) s'accorde ; *tel qu'il* n'est pas la même tournure. | 1. « Le luthier rendit le violon tel quel. » 2. « Laissez la pièce telle quelle. » | telle qu'elle | maitre | sans débat (AF DNP ; LAR) |
| I08 | *Tel que* | *Tel que* s'accorde avec le nom qui précède. | 1. « Des cépages tels que la syrah poussent ici. » 2. « Des armes telles que l'épée et le sabre exigent un masque. » | tel que | maitre | sans débat (OQLF ; LAR). *Tel* comparatif sans *que* : ONI `tel` |
| I09 | *Nue-propriété* | Exception à *nu* devant le nom : *la nue-propriété, les nus-propriétaires*. | 1. « Elle a gardé la nue-propriété du mas. » 2. « Les nus-propriétaires ont signé l'acte. » | nu-propriété | grand-scribe | sans débat (OQLF 21712) ; ONI `nu` (exception absente) |
| I10 | *Mi-* et *à demi* | *Mi-* et *demi-* invariables avec trait d'union devant l'adjectif ; *à demi* sans trait d'union devant l'adjectif. | 1. « Les paupières mi-closes, le chat guettait. » 2. « La porte, à demi ouverte, grinçait. » | à demie | maitre | sans débat (LAR) ; ONI `demi` |
| I11 | *Se faire fort de* | *Fort* reste invariable (se croire capable de). | 1. « Elles se font fort de gagner le relais. » 2. « Les juges se sont fait fort de trancher vite. » | fortes, forts | grand-scribe | sans débat (OQLF 23461 ; LAR) |
| I12 | *Fort* adverbe | *Fort* (très) devant un adjectif ou un adverbe est invariable. | 1. « Des sauces fort relevées accompagnaient le gibier. » 2. « Ces juments sont fort dociles. » | fortes, forts | maitre | sans débat (OQLF 21032) |
| I13 | *Plein* préposition | *Plein* devant un déterminant (*plein les poches*) est une préposition invariable. | 1. « Il avait de la cendre plein les cheveux. » 2. « Elle revint des billes plein les poches. » | pleine, pleins | maitre | sans débat (OQLF 22896 ; LAR) |
| I14 | *Haut, bas, court* devant un participe | Employés comme adverbes devant un participe ou un adjectif, invariables. | 1. « Des personnalités haut placées assistaient au gala. » 2. « Des fillettes court vêtues dansaient sur la place. » | hautes, courtes | grand-scribe | sans débat (OQLF 21605, 21731). *Frais, grand, large* : À éviter X25 |
| I15 | *Nouveau* devant un participe | *Nouveau* varie devant un participe pris comme nom (*nouveaux venus, nouveaux mariés*), sauf dans *nouveau-né*. | 1. « Les nouveaux venus ont été accueillis au club. » 2. « Des agneaux nouveau-nés tétaient leur mère. » | nouveau venus, nouveaux-nés | grand-scribe | sans débat (OQLF 21731 ; LAR) |
| I16 | *Dernier-né, mort-né* | *Premier* et *dernier* varient (*derniers-nés*) ; *mort* reste invariable (*mort-nés*). | 1. « Les derniers-nés de la portée dorment. » 2. « Ces projets mort-nés ont coûté cher. » | dernier-nés, morts-nés | grand-scribe | sans débat (LAR) |
| I17 | *D'aucuns* | Pronom pluriel littéraire (certains) : verbe au pluriel. | 1. « D'aucuns prétendent que le volcan dort. » 2. « D'aucuns ont quitté la salle avant la fin. » | D'aucun prétend | grand-scribe | sans débat (LAR ; PIV finale 1985) |
| I18 | *Chaque* ou *chacun* | *Chaque* est un déterminant, jamais un pronom : *dix euros chacun*. | 1. « Ces billets coûtent dix euros chacun. » 2. « Chaque fleuret est vérifié avant l'assaut. » | chaque (ex. 1) | maitre | sans débat (AF DNP ; LAR, emploi critiqué) |
| I19 | *Quasi* | Trait d'union devant un nom (*quasi-totalité*), aucun devant un adjectif ou un adverbe (*quasi parfait*). | 1. « La quasi-totalité des tireurs a validé. » 2. « Son interprétation fut quasi parfaite. » | quasi-parfaite | maitre | sans débat (OQLF 23577) |
| I20 | *Non* | Trait d'union devant un nom (*non-lieu*), aucun devant un adjectif (*non négligeable*). | 1. « Le juge prononça un non-lieu. » 2. « Une part non négligeable du public s'est levée. » | non-négligeable | maitre | sans débat (OQLF 21613) |
| I21 | *Témoin* en tête de proposition | *Témoin* (comme le prouve) placé en tête reste invariable. | 1. « Témoin les fissures du rempart, la terre a tremblé. » 2. « La crue fut violente, témoin les barques retournées. » | Témoins, témoins | grand-scribe | sans débat (LAR) |
| I22 | *Bon marché* | *Bon marché, meilleur marché* : invariables. | 1. « Des sabres bon marché encombraient l'étal. » 2. « Ces partitions sont meilleur marché en ligne. » | bons marché, meilleurs marché | maitre | sans débat (LAR) |
| I23 | *Exprès, expresse, express* | *Exprès* adverbe (volontairement) invariable ; *exprès, expresse* adjectif (formel) ; *express* (rapide). | 1. « Il a fait exprès de rater la note. » 2. « Défense expresse d'entrer dans l'arène. » | exprès (ex. 2), express (ex. 2) | grand-scribe | sans débat (LAR) |
| I24 | *Grand-chose, à grand-peine* | *Grand* ancien invariable au féminin dans ces composés. | 1. « Il n'a pas dit grand-chose. » 2. « Ils gravirent le puy à grand-peine. » | grande-peine, grand chose | grand-scribe | sans débat (LAR) |
| I25 | *Leur* pronom | *Leur* devant un verbe est un pronom invariable ; *leurs* déterminant prend la marque du pluriel. | 1. « Je leur ai rendu leurs fleurets. » 2. « Ces juments, on leur donne du foin. » | leurs (pronom) | maitre | sans débat (ENS). *Leur* distributif : À éviter X29 |

## Famille 4 : conjugaison difficile

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| C01 | *Fut* ou *fût*, *eut* ou *eût* | Passé simple sans accent ; subjonctif imparfait avec circonflexe. | 1. « Bien que le soir fût tombé, l'assaut continua. » 2. « Le soir fut long et froid. » | fut (ex. 1), fût (ex. 2) | maitre | sans débat (ENS ; R90 maintient le circonflexe) ; ONI `subjonctif-imparfait` (angle contraste) |
| C02 | Passé antérieur | Après *dès que, quand, lorsque, après que* au passé, passé antérieur sans circonflexe (*eut fini*). | 1. « Dès qu'il eut fini sa sonate, il salua. » 2. « Quand elle eut sellé la jument, elle partit. » | eût fini, eût sellé | grand-scribe | sans débat (ENS) |
| C03 | Conditionnel passé 2e forme | *Il eût fallu, c'eût été* : forme du plus-que-parfait du subjonctif, avec circonflexe. | 1. « Il eût fallu partir avant l'éruption. » 2. « C'eût été un triomphe. » | eut | grand-scribe | sans débat (ENS ; PIV finale 1985) |
| C04 | Subjonctif imparfait du 1er groupe | 3e personne en *-ât* avec circonflexe (*qu'elle répétât*). | 1. « Le maître exigeait qu'elle répétât chaque gamme. » 2. « On attendit qu'il tranchât. » | répéta, trancha | grand-scribe | sans débat (ENS) |
| C05 | *Ayons, soyons, qu'il ait* | Le subjonctif d'*avoir* et *être* n'a pas de *i* (*ayons, ayez, soyons, soyez*) ; 3e personne *qu'il ait*. | 1. « Il faut que nous ayons fini avant midi. » 2. « Pourvu qu'il ait son billet ! » | ayions, aie | maitre | sans débat (ENS) |
| C06 | Impératif de *avoir, savoir, vouloir* | *Aie, sache, veuille* sans *s*. | 1. « Aie confiance en ta jument. » 2. « Sache que le jury est souverain. » | Aies, Saches | maitre | sans débat (ENS) |
| C07 | Impératif + *en* ou *y* | Le *s* euphonique apparaît devant *en* et *y* pronoms (*cueilles-en, vas-y*), pas devant *en* préposition. | 1. « Des cerises, cueilles-en pour la tarte. » 2. « Ce concours, penses-y avant de t'inscrire. » | cueille-en, pense-y | grand-scribe | sans débat (LAR ; OQLF) |
| C08 | *Va-t'en* | Le *t* est le pronom *te* élidé : apostrophe, jamais trait d'union seul. | 1. « Va-t'en avant que la lave n'arrive. » 2. « Retourne-t'en à Cherbourg. » | Va-t-en | grand-scribe | sans débat (LAR ; OQLF 23353) |
| C09 | Impératif + deux pronoms | Traits d'union entre tous les éléments (*rends-le-moi*) ; *m'* élidé devant *en* (*donne-m'en*). | 1. « Ce fleuret, rends-le-moi. » 2. « Des crêpes ? Donne-m'en deux. » | rends-le moi, donne-moi-en | maitre | sans débat (OQLF 23353) |
| C10 | Passés simples irréguliers | *Vainquit, naquit, vécut, résolut, cousit, moulut, mut*. | 1. « Les légions vainquirent les Gaulois. » 2. « Il naquit à Montpellier. » | vainquèrent, naissa | grand-scribe | sans débat (ENS) |
| C11 | *Vaincre* au présent | *Il vainc* (sans *t*), *nous vainquons*, *ils convainquent*. | 1. « Le champion vainc tous ses adversaires. » 2. « Nous vainquons à chaque tournoi. » | vainct, vaincons | grand-scribe | sans débat (ENS ; LAR conjugaison) |
| C12 | *-indre* et *-soudre* | Ils perdent le *d* au singulier (*il craint, il résout*), à la différence de *prendre, coudre, moudre* (*il prend, il coud*). | 1. « Il résout l'énigme du sphinx. » 2. « Le meunier moud le grain et craint l'orage. » | résoud, craind | maitre | sans débat (ENS ; LAR) ; ONI `radical-verbal` (angle *d* et *t*) |
| C13 | *-indre* avec *-gn-* et *-ions* | *Nous craignions* (imparfait), *que vous peigniez* (subjonctif) : *gn* suivi du *i* de la terminaison. | 1. « Autrefois, nous craignions les éruptions. » 2. « Il faut que vous peigniez la fresque. » | craignons, peignez | grand-scribe | sans débat (ENS) |
| C14 | *-cevoir* | Cédille devant *o* et *u* (*il reçut, nous aperçûmes, qu'ils reçoivent*). | 1. « Ils aperçurent le cratère. » 2. « Il faut qu'ils reçoivent leurs diplômes. » | apercurent, recoivent | maitre | sans débat (ENS) |
| C15 | *Haïr* | Pas de tréma aux trois personnes du singulier du présent (*je hais*) ni à l'impératif (*hais*) ; tréma ailleurs, d'où le passé simple sans circonflexe (*nous haïmes*). | 1. « Je hais les fausses notes. » 2. « Ils se haïrent jusqu'au duel. » | haïs (ex. 1), haîrent | grand-scribe | sans débat (ENS ; LAR) |
| C16 | *Croître* | Circonflexe là où *croire* a la même forme (*il croît, il crût, ils crûrent, crû*). | 1. « La rivière croît à chaque orage. » 2. « Les eaux crûrent toute la nuit. » | croit, crurent | grand-scribe | sans débat (AF 9e ; R90 maintient ces circonflexes) |
| C17 | *Clore* | *Il clôt* avec circonflexe ; participe *clos*. | 1. « Le président clôt la séance. » 2. « L'affaire est close. » | clot | grand-scribe | sans débat (AF 9e ; R90 ne touche pas le *o*) |
| C18 | *Acquérir, conquérir* | *J'acquiers, qu'il acquière, j'acquerrai* (deux *r*), *acquis*. | 1. « Il acquerra ce violon l'an prochain. » 2. « Il faut qu'elle acquière de l'endurance. » | acquérira, acquiert | grand-scribe | sans débat (ENS ; LAR) |
| C19 | Futurs à double *r* | *Courra, mourra, pourra, verra* contre l'imparfait *courait*. | 1. « Le favori courra dimanche. » 2. « Je ne mourrai pas de faim. » | coura, mourerai | maitre | sans débat (ENS) |
| C20 | *E* muet du futur | *Oublier, continuer, créer, jouer* gardent le *e* au futur et au conditionnel. | 1. « Il oubliera vite cette défaite. » 2. « Elle continuera ses gammes. » | oublira, continura | maitre | sans débat (ENS) |
| C21 | *-eler, -eter* sans débat | *Appeler, jeter* et leurs composés doublent (*il appelle, il jette*) ; *acheter, geler, peler, harceler, modeler, ciseler, haleter* prennent *è*. | 1. « Le moniteur harcèle les retardataires. » 2. « Elle appelle sa jument par son nom. » | harcelle, appèle | grand-scribe | sans débat (R90 ne touche ni ces deux modèles ni les verbes déjà en *è*). Autres verbes : À éviter X33 |
| C22 | *-é-er* au présent | *È* devant syllabe muette finale (*il cède, ils possèdent*), *é* devant syllabe prononcée (*nous cédons*). | 1. « Il cède sa place au plus jeune. » 2. « Qu'ils possèdent ou non un cheval, ils viendront. » | céde, possédent | maitre | sans débat (ENS). Futur *cèdera, cédera* : À éviter X34 |
| C23 | *Dépecer, rapiécer, assiéger* | Deux alternances à la fois : accent et cédille ou *e* après *g*. | 1. « Le boucher dépèce le gibier ; nous dépeçons le reste. » 2. « Les troupes assiégeaient la ville. » | dépecons, assiégaient | grand-scribe | sans débat (AF 9e, conjugaison) |
| C24 | *-oyer, -uyer* et *envoyer* | *Y* devient *i* devant *e* muet (*il nettoie, il s'ennuie*) ; futur *enverra*. | 1. « Il nettoie les lames avant l'assaut. » 2. « Il enverra les invitations demain. » | nettoye, envoiera | maitre | sans débat (ENS). *-ayer* : À éviter X35 |
| C25 | Défectifs | *Il sied* (seoir), *il faillit* (faillir), *ils gisent* (gésir), *il échoit*. | 1. « Cette veste lui sied à merveille. » 2. « Le vieux chêne faillit tomber sous l'orage. » | soit, faillut | grand-scribe | sans débat (ENS ; LAR). *Ci-gît, il paît* : À éviter X36 |
| C26 | *Vêtir* | Verbe du 3e groupe : *il vêt, ils vêtent, vêtu, il vêtit* (passé simple). | 1. « Le valet vêt son maître chaque matin. » 2. « Ils vêtent les mannequins de soie. » | vêtit (présent), vêtissent | grand-scribe | sans débat (ENS) |
| C27 | *Bouillir, fuir* au présent | *L'eau bout*, *ils fuient* (sans *y*). | 1. « L'eau bout dans le chaudron. » 2. « Les marmottes fuient devant l'aigle. » | bouille, fuyent | maitre | sans débat (ENS) |
| C28 | Participes en *-us* ou en *-u* | *Inclus, perclus, reclus* (féminin *-use*) contre *exclu, conclu* (féminin *-ue*). | 1. « Les frais de port sont inclus. » 2. « Cette hypothèse est exclue. » | inclu, excluse | grand-scribe | sans débat (OQLF 21093 ; LAR). *Dissous, absous* : À éviter X37 |
| C29 | *Surseoir* | Le futur garde le *e* : *je surseoirai*. | 1. « Le tribunal surseoira à statuer. » 2. « Je surseoirai à ma décision. » | sursoira | grand-scribe | sans débat (LAR conjugaison). *Asseoir* : À éviter X38 |
| C30 | *Prévoir, pourvoir* | Futurs en *-oirai* (*prévoira, pourvoira*) ; passés simples *il prévit* mais *il pourvut*. | 1. « Elle prévoira tout pour le voyage. » 2. « Il pourvut aux besoins de la troupe. » | prévera, pourvit | grand-scribe | sans débat (ENS) |
| C31 | *T* euphonique après *c* et *d* | Pas de *t* écrit après un verbe terminé par *d* ou *c* (*vainc-il, prend-elle*) ; *t* entre traits d'union après voyelle (*a-t-il*). | 1. « Vainc-il toujours au premier assaut ? » 2. « Prend-elle le train de Cherbourg ? » | vainc-t-il, prend-t-elle | grand-scribe | sans débat (ENS) |
| C32 | Passé simple, 1re et 2e personnes du pluriel | Circonflexe sur *-âmes, -âtes, -îmes, -ûmes* (*nous partîmes, vous fûtes*). | 1. « Nous partîmes à l'aube et vîmes le cratère. » 2. « Vous fûtes les premiers au sommet. » | partimes, futes | maitre | sans débat (R90 maintient ces circonflexes) |

## Famille 5 : noms et adjectifs

Les genres trompeurs ont leur propre liste dans [genres-trompeurs.md](../../Onirologos/.claude/skills/creer-dictee/references/genres-trompeurs.md) ; N22 et N23 n'en donnent que le principe.

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| N01 | Composé nom + nom en apposition | Les deux noms varient. | 1. « Des choux-fleurs gratinés suivirent. » 2. « Des oiseaux-mouches butinaient l'hibiscus. » | chou-fleurs, oiseau-mouches | maitre | sans débat (LAR ; OQLF) |
| N02 | Composé nom + complément sans préposition | Seul le premier nom varie (*timbres-poste, pauses-café*). | 1. « Il collectionne les timbres-poste rares. » 2. « Les pauses-café rythment la répétition. » | timbres-postes | maitre | sans débat (LAR) ; ONI `compose-pluriel` |
| N03 | Composé nom + préposition + nom à sens global | Invariable (*des pot-au-feu, des tête-à-tête, des pied-à-terre*). | 1. « Deux pot-au-feu mijotaient en cuisine. » 2. « Ces tête-à-tête discrets intriguaient la cour. » | pots-au-feu, têtes-à-têtes | grand-scribe | sans débat (LAR ; R90 ne touche pas ce modèle) |
| N04 | Adverbe ou préposition + nom | Seul le nom varie (*haut-parleurs, arrière-pensées, avant-postes*). | 1. « Les haut-parleurs grésillaient. » 2. « Il agissait sans arrière-pensées. » | hauts-parleurs | maitre | sans débat (LAR). *Sans-abri, après-midi* : À éviter X44 |
| N05 | *Ayants droit, ayants cause* | *Ayant* varie, *droit* et *cause* invariables, sans trait d'union. | 1. « Les ayants droit du compositeur ont signé. » 2. « Les ayants cause héritent du contrat. » | ayant droits, ayants-droit | grand-scribe | sans débat (LAR ; étalon E d'ONI) |
| N06 | *Laissés-pour-compte* | Le participe *laissé* varie dans le nom composé. | 1. « Les laissés-pour-compte du progrès se rassemblent. » 2. « Ces marchandises sont des laissés-pour-compte. » | laissé-pour-compte (pluriel) | grand-scribe | sans débat (LAR) |
| N07 | *Terre-pleins* | *Terre* invariable, *plein* variable. | 1. « Les terre-pleins de la digue ont cédé. » 2. « On planta des pins sur les terre-pleins. » | terres-pleins | grand-scribe | sans débat (LAR) |
| N08 | Mots invariables pris comme noms | *Les pourquoi, des on-dit, les qu'en-dira-t-on, des oui*. | 1. « Les pourquoi d'un enfant n'ont pas de fin. » 2. « Il méprise les on-dit du village. » | pourquois | maitre | sans débat (LAR) |
| N09 | Pluriels doubles selon le sens | *Aïeuls* (grands-parents) / *aïeux* (ancêtres) ; *ciels* (peinture, climat, lit) / *cieux* ; *œils-de-bœuf* / *yeux*. | 1. « Les peintres flamands ont peint des ciels tourmentés. » 2. « Ses deux aïeuls l'attendaient au relais. » | cieux (ex. 1), aïeux (ex. 2) | grand-scribe | sans débat (OQLF 23917 ; AF DNP0952) |
| N10 | Pluriels en *-aux* des noms en *-ail* | *Vantaux, soupiraux, baux, émaux, coraux* contre *chandails, éventails, gouvernails*. | 1. « Les vantaux de la porte de l'église grincent. » 2. « Les émaux de Limoges brillaient. » | vantails, émails | grand-scribe | sans débat (LAR). *Ail, travail* au sens technique : À éviter X45 |
| N11 | Pluriels en *-als* | *Bals, carnavals, chacals, festivals, récitals, régals* ; adjectifs *navals, fatals, natals, bancals*. | 1. « Elle donna trois récitals à Montpellier. » 2. « Les chantiers navals de Cherbourg tournent à plein. » | récitaux, navaux | maitre | sans débat (LAR). *Idéals, finals, glacials, banals* : À éviter X46 |
| N12 | *Lieus* (poisson) | Le poisson fait *lieus*, le lieu fait *lieux* ; de même *émeus, landaus, pneus*. | 1. « Le chalutier débarqua des lieus jaunes. » 2. « Deux émeus couraient dans l'enclos. » | lieux, émeux | grand-scribe | sans débat (LAR) |
| N13 | Noms sans singulier et leur genre | *Arrhes, affres, agapes, entrailles* (féminins), *décombres, vivres* (masculins) : accord au pluriel et au bon genre. | 1. « Les arrhes versées seront rendues. » 2. « Les décombres fumants barraient la rue. » | versés, fumantes | grand-scribe | sans débat (LAR) ; ONI `pluriel-particulier` (angle genre) |
| N14 | *Un* dans les nombres | *Un* s'accorde en genre (*trente et une pages, quatre-vingt-une cavalières*), sauf en emploi ordinal (*page vingt et un*). | 1. « Le livret compte trente et une pages. » 2. « Quatre-vingt-une cavalières ont pris le départ. » | trente et un pages | grand-scribe | sans débat (ENS ; Le Robert, aide « nombres »). Trait d'union des numéraux : À éviter X41 |
| N15 | *Cent, vingt* devant *million, milliard* | *Million* et *milliard* sont des noms : *quatre-vingts millions, trois cents milliards* ; devant *mille*, pas de *s* (*deux cent mille*). | 1. « Le film attira quatre-vingts millions de spectateurs. » 2. « Le domaine valait deux cent mille écus. » | quatre-vingt millions, deux cents mille | grand-scribe | sans débat (LAR ; ENS) ; ONI `nombres` (angle million) |
| N16 | Numéral à valeur ordinale | *Page quatre-vingt, l'an deux cent* : pas de *s*. | 1. « Ouvrez à la page quatre-vingt. » 2. « La charte date de l'an trois cent. » | quatre-vingts, trois cents | grand-scribe | sans débat (LAR ; ENS). *L'an mil* : À éviter X42 |
| N17 | *Mille* nom de mesure | *Mille* marin est un nom : *trois milles*. | 1. « Le cotre mouilla à trois milles des côtes. » 2. « Ils parcoururent vingt milles sous la tempête. » | trois mille | grand-scribe | sans débat (LAR) |
| N18 | Couleurs venues de noms qui s'accordent | *Rose, mauve, pourpre, écarlate, fauve, incarnat* s'accordent. | 1. « Les cardinaux portaient des capes pourpres. » 2. « Ses joues devinrent écarlates. » | pourpre, écarlate | maitre | sans débat (LAR ; OQLF) ; ONI `couleur-simple` (liste) |
| N19 | Deux couleurs liées par un trait d'union | *Bleu-vert, gris-bleu* : invariables. | 1. « Elle avait des yeux bleu-vert. » 2. « Des reflets gris-bleu couraient sur la mer. » | bleus-verts | grand-scribe | sans débat (OQLF) |
| N20 | Couleurs distributives | *Des écharpes rouge et bleu* (chacune bicolore) ; *des roses rouges et blanches* (les unes rouges, les autres blanches). | 1. « Chaque supporter agitait des écharpes rouge et bleu. » 2. « Dans le vase, des roses rouges et des roses blanches se mêlaient. » | rouges et bleues (ex. 1) | grand-scribe | sans débat si le contexte tranche (ENS ; OQLF) |
| N21 | Genre qui change le sens | *La voile / le voile, la manche / le manche, la poêle / le poêle, la mousse / le mousse, la vase / le vase, la crêpe / le crêpe*. | 1. « La voile du dériveur claquait. » 2. « Le mousse grimpa au mât. » | le voile, la mousse | maitre | sans débat (LAR) |
| N22 | Masculins en *-e* faits féminins | *Un astérisque, un armistice, un apogée, un tentacule, un pétale, un hémisphère, un intervalle, un interstice*. | 1. « Un tentacule énorme surgit de l'eau. » 2. « L'armistice fut signé à l'aube. » | une tentacule, signée | maitre | sans débat (LAR) ; ONI `genre-trompeur` |
| N23 | Féminins faits masculins | *Une oasis, une épithète, une échappatoire, une écritoire, une anicroche, une alcôve, une espèce de*. | 1. « Une vaste oasis bordait la piste. » 2. « C'est une espèce de grand chien. » | un oasis, un espèce | grand-scribe | sans débat (LAR ; AF DNP « un espèce de ») ; ONI `genre-trompeur` |
| N24 | Féminins irréguliers d'adjectifs | *Bénigne, maligne, favorite, coite, tierce, caduque, grecque, andalouse*. | 1. « La tumeur était bénigne. » 2. « Les deux sœurs restèrent coites. » | bénine, cois | grand-scribe | sans débat (LAR) |
| N25 | Féminins en *-eresse* | *Vengeresse, enchanteresse, pécheresse, devineresse, défenderesse* ; ne pas confondre *pécheresse* (péché) et *pêcheuse* (pêche). | 1. « Une main vengeresse frappa le traître. » 2. « La pêcheuse de crevettes rentra avant la marée. » | vengeuse, pécheuse | grand-scribe | sans débat (LAR) |
| N26 | *Franche* ou *franque* | *Franque* pour le peuple franc et sa langue ; *franche* pour la sincérité. | 1. « Les marchands parlaient une langue franque. » 2. « Elle donna une réponse franche. » | franche (ex. 1) | grand-scribe | sans débat (LAR) |
| N27 | Adjectifs composés de deux adjectifs | Les deux éléments varient (*aigres-douces, sourds-muets*). | 1. « Des sauces aigres-douces nappaient le canard. » 2. « Les enfants sourds-muets signaient en silence. » | aigre-douces, sourd-muets | grand-scribe | sans débat (OQLF 21731) |

## Famille 6 : mots et graphies

Famille la plus riche pour le type `lexique`, que `docs/niveau-expert.md` impose à 3 ou 4 phrases par thème et par niveau. Les mots rectifiés en 1990 (familles harmonisées, circonflexes sur *i* et *u*) sont exclus : voir X47 à X52.

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| G01 | *Fond, fonds, fonts* | *Le fond* (partie basse), *un fonds* (capital, terre), *les fonts baptismaux*. | 1. « L'enfant fut porté sur les fonts baptismaux. » 2. « Il vendit son fonds de commerce. » | fonds baptismaux, fond de commerce | grand-scribe | sans débat (LAR) |
| G02 | *Censé, sensé* | *Censé* (supposé) contre *sensé* (raisonnable). | 1. « Il est censé arriver à midi. » 2. « Voilà une remarque sensée. » | sensé (ex. 1) | maitre | sans débat (LAR ; OQLF) |
| G03 | *Martyr, martyre ; satire, satyre* | *Le martyr* (personne), *le martyre* (supplice) ; *la satire* (texte), *le satyre* (créature). | 1. « Il souffrit le martyre pendant l'ascension. » 2. « La pièce est une satire de la cour. » | martyr, satyre | grand-scribe | sans débat (LAR) |
| G04 | *Cahot, chaos* | *Cahot* (secousse) contre *chaos* (désordre). | 1. « Les cahots de la diligence secouaient les voyageurs. » 2. « Après l'éruption régnait le chaos. » | chaos (ex. 1) | maitre | sans débat (LAR) |
| G05 | *Tribu, tribut ; golf, golfe* | *Payer un tribut*, *une tribu* ; *le golfe du Lion*, *un parcours de golf*. | 1. « Le village paya un lourd tribut à la guerre. » 2. « Le golfe du Lion s'étend devant Montpellier. » | tribu, golf | maitre | sans débat (LAR) |
| G06 | *Dessein, dessin* | *Dessein* (projet, *à dessein*) contre *dessin*. | 1. « Il agit dans le dessein de nuire. » 2. « Elle oublia sa carte à dessein. » | dessin | maitre | sans débat (LAR) |
| G07 | *Haler, hâler ; pécher, pêcher* | *Haler* (tirer), *hâler* (bronzer) ; *pécher* (faute), *pêcher* (poisson). | 1. « Les chevaux halaient la péniche le long du canal. » 2. « Il péchait par excès de confiance. » | hâlaient, pêchait | grand-scribe | sans débat (LAR) |
| G08 | *Recouvrer, recouvrir* | *Recouvrer* (retrouver, percevoir) contre *recouvrir* (couvrir). | 1. « Elle a recouvré la vue après l'opération. » 2. « La neige a recouvert le puy. » | recouvert (ex. 1) | grand-scribe | sans débat (LAR ; AF DNP) |
| G09 | *Prémices, prémisses* | *Prémices* (débuts), *prémisses* (propositions d'un raisonnement). | 1. « Les prémices du printemps fleurissent l'amandier. » 2. « Les prémisses de son raisonnement sont fausses. » | prémisses (ex. 1) | grand-scribe | sans débat (LAR) |
| G10 | *Différend, différent* | *Un différend* (désaccord) contre *différent* (adjectif). | 1. « Un différend oppose les deux clubs. » 2. « Ces deux lames sont différentes. » | différent (ex. 1) | grand-scribe | sans débat (LAR) |
| G11 | *Exaucer, exhausser* | *Exaucer* (satisfaire un vœu), *exhausser* (surélever). | 1. « Son vœu fut exaucé. » 2. « On exhaussa la digue d'un mètre. » | exhaussé (ex. 1) | grand-scribe | sans débat (LAR) |
| G12 | *Repaire, repère* | *Repaire* (refuge de bêtes ou de brigands) contre *repère* (marque). | 1. « La grotte servait de repaire aux contrebandiers. » 2. « Le phare sert de point de repère. » | repère (ex. 1) | maitre | sans débat (LAR) |
| G13 | *Héraut, héros* | *Héraut* (messager officiel) contre *héros*. | 1. « Le héraut lut la proclamation du roi. » 2. « Il se fit le héraut de la réforme. » | héros | grand-scribe | sans débat (LAR) |
| G14 | *Cuisseau, cuissot* | *Cuisseau* de veau, *cuissot* de gibier. | 1. « Le chef rôtit un cuissot de chevreuil. » 2. « Un cuisseau de veau mijotait. » | cuisseau (ex. 1), cuissot (ex. 2) | grand-scribe | sans débat (LAR ; étalon E d'ONI) |
| G15 | Homophone savant contre homophone courant | *Krak* (forteresse) / *crac* ; *lacs* (nœuds coulants) / *las* ; *raiponce* (plante) / *réponse*. | 1. « Les croisés tenaient un krak sur la colline. » 2. « Le braconnier tendit des lacs dans le taillis. » | crac, las | grand-scribe | sans débat si le contexte tranche (LAR ; PIV finales 1995, 1996, 1999) |
| G16 | *Éminent, imminent* | *Éminent* (remarquable) contre *imminent* (très proche). | 1. « Un éminent volcanologue dirige la mission. » 2. « L'éruption est imminente. » | imminent (ex. 1) | maitre | sans débat (LAR) |
| G17 | *Inclinaison, inclination* | *Inclinaison* (pente), *inclination* (penchant). | 1. « L'inclinaison de la piste effraie les skieurs. » 2. « Il n'a aucune inclination pour la musique. » | inclination (ex. 1) | grand-scribe | sans débat (LAR) |
| G18 | *Conjecture, conjoncture* | *Conjecture* (hypothèse), *conjoncture* (situation). | 1. « Ce ne sont que des conjectures. » 2. « La conjoncture économique est mauvaise. » | conjonctures (ex. 1) | maitre | sans débat (LAR) |
| G19 | *Acception, acceptation* | *Acception* (sens d'un mot), *acceptation* (fait d'accepter). | 1. « Le mot est pris dans son acception ancienne. » 2. « Il attend l'acceptation de son dossier. » | acceptation (ex. 1) | grand-scribe | sans débat (LAR) |
| G20 | *Éruption, irruption ; effraction, infraction* | *Éruption* (sortie), *irruption* (entrée brusque) ; *effraction* (bris), *infraction* (violation). | 1. « La police fit irruption dans la salle. » 2. « Les voleurs entrèrent par effraction. » | éruption, infraction | maitre | sans débat (LAR) |
| G21 | *Collision, collusion ; perpétrer, perpétuer* | *Collusion* (entente secrète), *perpétrer* (commettre). | 1. « Le juge soupçonne une collusion entre les deux clubs. » 2. « Le crime fut perpétré la nuit. » | collision, perpétué | grand-scribe | sans débat (LAR) |
| G22 | *Vénéneux, venimeux* | *Vénéneux* (qui empoisonne si on l'ingère), *venimeux* (qui injecte un venin). | 1. « L'amanite est un champignon vénéneux. » 2. « La vipère aspic est venimeuse. » | venimeux (ex. 1) | maitre | sans débat (LAR) |
| G23 | *Luxuriant, luxueux ; infecter, infester* | *Luxuriant* (abondant), *infester* (envahir). | 1. « Une végétation luxuriante couvre les pentes. » 2. « Les rats infestaient la cale. » | luxueuse, infectaient | maitre | sans débat (LAR) |
| G24 | Doublements stables dans une famille | *Honneur / honorer, honoraire, honorable* ; *consonne / consonance* ; *sonner / sonore* ; *résonner / résonance* ; *donner / donation* ; *rationnel / rationalité*. | 1. « Il fut honoré par l'Académie. » 2. « La résonance de la nef impressionne. » | honnoré, résonnance | grand-scribe | sans débat (familles non touchées par R90 ; LAR). Familles rectifiées : À éviter X47 |
| G25 | Doublements savants | *Occurrence, succinct, acquiescer, ressusciter, accommoder, mappemonde, parallèle, agression* (un *g*, deux *s*). | 1. « Il fit un exposé succinct. » 2. « Le maître d'armes acquiesça d'un signe. » | succint, aquiesça | grand-scribe | sans débat (LAR) |
| G26 | *H* aspiré et élision | Pas d'élision devant *h* aspiré : *le hamac, le hangar, la harpe, le héron, le hérisson, la hernie, la hiérarchie, le héros* (mais *l'héroïne*). | 1. « Le héron guettait au bord de l'étang. » 2. « La harpe ouvrit le concert. » | l'héron, l'harpe | maitre | sans débat (LAR). *Hiatus, hyène, ouate* : À éviter X53 |
| G27 | Élision de *quoique, presque, entre* | *Quoique* ne s'élide que devant *il, elle, on, un, une* ; *presque* seulement dans *presqu'île* ; *entre* jamais dans *entre autres*. | 1. « Quoique étonnés, ils applaudirent. » 2. « Le travail est presque achevé, entre autres tâches. » | Quoiqu'étonnés, presqu'achevé | grand-scribe | sans débat (PIV finale 1998 ; LAR). *Lorsque* devant un nom : À éviter X54 |
| G28 | *Le onze, le oui* | Pas d'élision devant *onze, onzième, oui*. | 1. « Le onze de départ entre sur la pelouse. » 2. « Elle répondit par un oui franc ; le oui l'emporta. » | l'onze, l'oui | grand-scribe | sans débat (LAR) |
| G29 | Tréma sans débat | *Maïs, capharnaüm, inouï, faïence, baïonnette, caïman, coïncidence, païen, ouïe, stoïque, canoë, aïeul*. | 1. « La faïence de Moustiers orne le buffet. » 2. « Son grenier est un vrai capharnaüm. » | faience, capharnaum | maitre | sans débat (LAR). *Ambiguë, aigüe* : À éviter X50 |
| G30 | *S* ou *x* final dès le singulier | *Aurochs, legs, remords, rets, puits, pouls, poids, mets, frimas, cadenas, fatras, galetas, débours, lacs*. | 1. « Un aurochs paissait dans la clairière. » 2. « Il fit un legs à la commune. » | auroch, leg | grand-scribe | sans débat (LAR ; PIV finale régionale 2002). *Relais* : À éviter X51 |
| G31 | Consonnes muettes étymologiques | Finales (*hareng, faubourg, joug, étang, accroc, caoutchouc, escroc, estomac, acabit*) et internes (*sceptre, sculpteur, baptême, dompteur*). | 1. « Le dompteur entra dans la cage. » 2. « Un hareng saur pendait à la poutre. » | domteur, harent | maitre | sans débat (LAR) |
| G32 | *Ph, th* savants | *Apophtegme, phtisie, ophtalmologie, diphtérie, naphtaline, aphte, isthme, asthme, rythme, labyrinthe, luth, zénith*. | 1. « Il cita un apophtegme de Diogène. » 2. « L'isthme relie la presqu'île au continent. » | apophtègme, istme | grand-scribe | sans débat (LAR) |
| G33 | *Rh, rrh* | *Rhétorique, rhizome, rhapsodie, arrhes, diarrhée, logorrhée, catarrhe, myrrhe, cirrhose*, mais *hémorragie* sans *h* après les *r*. | 1. « L'orateur abusait de la rhétorique. » 2. « L'hémorragie fut vite stoppée. » | rétorique, hémorrhagie | grand-scribe | sans débat (LAR) |
| G34 | *Y* savant et hypercorrection | *Dithyrambe, ecchymose, idylle, abyssal, acolyte, cyprès* ; *ichtyologie* sans *h* après le *t*. | 1. « La critique fut dithyrambique. » 2. « Il étudie l'ichtyologie à Banyuls. » | dithirambique, ichthyologie | grand-scribe | sans débat (LAR) |
| G35 | *-ance* ou *-ence* | Les dérivés de *-ister* finissent en *-istance* (*résistance, persistance, insistance*), sauf *existence*. | 1. « Son existence fut paisible. » 2. « La persistance des fumerolles inquiète. » | existance, persistence | maitre | sans débat (LAR) |
| G36 | Nom ou adjectif en *-ent* contre participe en *-ant* | *Excédent / excédant, fabricant / fabriquant, adhérent / adhérant, affluent / affluant, équivalent / équivalant, précédent / précédant*. | 1. « Il paya un excédent de bagages. » 2. « L'Allier est un affluent de la Loire. » | excédant, affluant | grand-scribe | sans débat (LAR ; OQLF) |
| G37 | *-amment, -emment* | L'adverbe suit l'adjectif (*savant / savamment, prudent / prudemment*) ; cas sans adjectif : *nuitamment, sciemment* ; exceptions *lentement, présentement, véhémentement*. | 1. « Les voleurs entrèrent nuitamment. » 2. « Il mentit sciemment. » | nuitemment, sciamment | grand-scribe | sans débat (LAR) |
| G38 | *-ément* ou *-ment* | *Aveuglément, énormément, précisément, impunément, expressément, conformément* contre *vraiment, poliment, absolument, résolument, ingénument*. | 1. « Il obéit aveuglément à son maître d'armes. » 2. « Elle refusa résolument. » | aveuglement, résoluement | maitre | sans débat (LAR). *Assidûment, dûment* : À éviter X49 |
| G39 | Adverbes irréguliers | *Gentiment, brièvement* (bref), *grièvement* (grief), *traîtreusement*. | 1. « Il répondit brièvement. » 2. « Le cavalier fut grièvement blessé. » | brèvement, grièvemment | maitre | sans débat (LAR) |
| G40 | Locutions latines figées | *Statu quo* (sans *s*), *in extremis, sine die, ad hoc, de visu*, sans trait d'union. | 1. « Les deux clubs maintiennent le statu quo. » 2. « Il attrapa le train in extremis. » | status quo, in-extremis | grand-scribe | sans débat (LAR ; AF 9e). Emprunts à pluriel variable : À éviter X55 |
| G41 | Circonflexes distinctifs maintenus | *Mûr, sûr, jeûne, dû, crû* gardent l'accent pour se distinguer d'un homographe. | 1. « Le raisin est mûr. » 2. « Il est sûr de sa botte. » | mur, sur | maitre | sans débat (R90 les maintient) |
| G42 | Circonflexe et sens sur *a, e, o* | *Tâche / tache, châsse / chasse, côte / cote / cotte, rôder / roder* (non touchés par R90). | 1. « Le chevalier portait une cotte de mailles. » 2. « Le moteur neuf doit être rodé. » | côte, rôdé | maitre | sans débat (LAR ; R90 ne vise que *i* et *u*) |
| G43 | Familles où le circonflexe disparaît | *Grâce / gracieux, infâme / infamie, jeûner / déjeuner, extrême / extrémité, pôle / polaire, cône / conique, fantôme / fantomatique, arôme / aromatique, diplôme / diplomatique, symptôme / symptomatique*. | 1. « Elle salua d'un geste gracieux. » 2. « Une lueur fantomatique flottait sur l'étang. » | grâcieux, fantômatique | grand-scribe | sans débat (LAR) |
| G44 | *-ème* ou *-ême* | *Problème, emblème, système, poème* contre *baptême, carême, extrême, blême, suprême*. | 1. « Le carême commence demain. » 2. « Ce système de poulies est ingénieux. » | carème, systême | maitre | sans débat (LAR) |
| G45 | *-ome* ou *-ôme* | *Atome, axiome, idiome, majordome* sans accent ; *arôme, diplôme, fantôme, symptôme* avec. | 1. « Cet axiome fonde la démonstration. » 2. « Le majordome ouvrit la porte. » | axiôme, majordôme | grand-scribe | sans débat (LAR) |
| G46 | Finales en *-ée* masculines, *-té* et *-tié* sans *e* | *Lycée, musée, apogée, trophée, mausolée, scarabée, caducée* ; *bonté, amitié* sans *e*, sauf *dictée, portée, montée, jetée, pâtée*. | 1. « Le trophée trône dans la vitrine. » 2. « La jetée de Cherbourg brave la houle. » | trophé, jeté | maitre | sans débat (LAR) |
| G47 | Masculins en *-oire* ou *-oir* | *Laboratoire, observatoire, réfectoire, répertoire, territoire, grimoire, ivoire* contre *couloir, comptoir, manoir, dortoir*. | 1. « L'observatoire domine le pic. » 2. « Le grimoire reposait sur le comptoir. » | observatoir, grimoir | maitre | sans débat (LAR) |
| G48 | *-euil* ou *-euille* | Masculins en *-il* (*fauteuil, seuil, écureuil*), sauf *chèvrefeuille, portefeuille, millefeuille*. | 1. « Le chèvrefeuille grimpe sur le mur. » 2. « Il oublia son portefeuille sur le fauteuil. » | chèvrefeuil | maitre | sans débat (LAR) |
| G49 | *-cueil, -gueil* | Après *c* et *g*, *ue* : *accueil, recueil, écueil, cercueil, orgueil*. | 1. « Le navire évita l'écueil. » 2. « Son orgueil l'empêcha de céder. » | éceuil, orgeuil | maitre | sans débat (LAR) |
| G50 | *-ciel* ou *-tiel* | *-ciel* quand la base finit en *-ce* (*circonstance / circonstanciel, tendance / tendanciel*), *-tiel* sur une base en *-t* (*président / présidentiel*). | 1. « Le complément circonstanciel de lieu est souligné. » 2. « La campagne présidentielle s'ouvre. » | circonstantiel | grand-scribe | sans débat (LAR) |
| G51 | *-xion* | *Connexion, réflexion, flexion, complexion, crucifixion* (et non *-ction*). | 1. « La connexion fut coupée pendant l'orage. » 2. « Après réflexion, il renonça. » | connection | maitre | sans débat (LAR) |

## Famille 7 : grammaire fine

| id | Type | Règle | Exemples corrects | Faute typique | Niveau | Sûreté et source |
| --- | --- | --- | --- | --- | --- | --- |
| S01 | *Après que* + indicatif | *Après que* introduit un fait accompli : indicatif (passé antérieur sans circonflexe au récit). | 1. « Après qu'il eut salué le jury, il dégaina. » 2. « Après que la lave a refroidi, on peut marcher dessus. » | eût, ait | grand-scribe | sans débat (AF ; ROB ; LAR) |
| S02 | *Avant que* + subjonctif | *Avant que* exige le subjonctif. | 1. « Rentrez les juments avant que l'orage n'éclate. » 2. « Il partit avant que le jour soit levé. » | éclatera, est levé | maitre | sans débat (LAR). Le *ne* explétif reste facultatif : jamais piège |
| S03 | *Si* de condition ou *si* interrogatif | Le *si* de condition refuse futur et conditionnel ; le *si* interrogatif indirect les admet. | 1. « Si tu venais, nous jouerions à quatre mains. » 2. « Je me demande s'il viendrait sans invitation. » | viendrais (ex. 1) | maitre | sans débat (LAR ; ENS) |
| S04 | *Quand bien même* + conditionnel | La concession hypothétique *quand bien même* appelle le conditionnel. | 1. « Quand bien même il pleuvrait, nous partirions. » 2. « Quand bien même elle gagnerait, rien ne changerait. » | pleuvait, gagne | grand-scribe | sans débat (LAR) |
| S05 | *Il me semble que* + indicatif | Opinion personnelle : indicatif (le subjonctif suit *il semble que* d'incertitude ou la forme négative). | 1. « Il me semble que tu as grandi. » 2. « Il me semble que le volcan est plus actif. » | aies, soit | grand-scribe | sans débat pour *il me semble que* affirmatif (LAR, *sembler*) |
| S06 | *Espérer que* + indicatif | Affirmatif, *espérer que* veut l'indicatif. | 1. « J'espère qu'il viendra au tournoi. » 2. « Elle espère que vous serez prêts. » | vienne, soyez | maitre | sans débat (LAR ; AF) |
| S07 | Conjonctions de subjonctif | *Bien que, quoique, pour que, afin que, à moins que, pourvu que, de peur que, jusqu'à ce que* + subjonctif. | 1. « Bien qu'il pleuve, la course aura lieu. » 2. « Ils attendirent jusqu'à ce que la brume soit levée. » | pleut, est | maitre | sans débat (LAR) |
| S08 | *Si bien que* + indicatif | Conséquence réalisée : indicatif. | 1. « Il plut toute la nuit, si bien que la course fut annulée. » 2. « Elle a répété, si bien qu'elle sait la sonate. » | fût, sache | grand-scribe | sans débat (LAR ; ENS) |
| S09 | *Dont* sans redondance | *Dont* contient déjà *de* : ni *en* ni possessif en plus. | 1. « Le volcan dont on voit le cratère est éteint. » 2. « Voici l'affaire dont je vous ai parlé. » | son cratère, dont je vous en ai parlé | maitre | sans débat (AF DNP ; OQLF) |
| S10 | *Ce dont, ce à quoi* | La construction du verbe fixe le relatif : *avoir besoin de* → *ce dont* ; *penser à* → *ce à quoi*. | 1. « Voilà ce dont j'ai besoin. » 2. « C'est ce à quoi je pensais. » | ce que | maitre | sans débat (AF DNP ; OQLF) |
| S11 | *Lequel* accordé | *Lequel, auquel, duquel* prennent le genre et le nombre de l'antécédent. | 1. « Les raisons pour lesquelles il a renoncé sont obscures. » 2. « Les tournois auxquels elle participe sont réputés. » | lesquels, auxquelles | maitre | sans débat (ENS) |
| S12 | *Pallier* transitif direct | *Pallier quelque chose*, sans *à*. | 1. « Il faut pallier le manque d'eau. » 2. « Ces mesures pallient les défaillances. » | pallier au manque | maitre | sans débat (AF DNP) |
| S13 | *Davantage, d'avantage* | Adverbe *davantage* (plus) contre *d'avantage* (nom). | 1. « Il n'en dit pas davantage. » 2. « Je ne vois pas d'avantage à partir si tôt. » | d'avantage (ex. 1) | maitre | sans débat (LAR) |
| S14 | *Parce que, par ce que* | *Par ce que* (par la chose que) se distingue de la cause. | 1. « Il fut ému par ce que le jury déclara. » 2. « Il gagna parce qu'il était le plus rapide. » | parce que (ex. 1) | grand-scribe | sans débat (LAR) |
| S15 | *Sitôt, si tôt ; bientôt, bien tôt* | Adverbe soudé (aussitôt, dès que) contre *si* ou *bien* + *tôt* (de bonne heure). | 1. « Sitôt arrivé, il sella la jument. » 2. « Pourquoi partir si tôt ? » | si tôt (ex. 1), sitôt (ex. 2) | grand-scribe | sans débat (LAR) |
| S16 | *On n'* devant voyelle | La négation *n'* ne s'entend pas après *on* devant voyelle, mais s'écrit. | 1. « On n'a rien vu venir. » 2. « On n'en conclura rien. » | On a rien, On en conclura (sans *n'*) | maitre | sans débat (ENS ; PIV finale 1985) |
| S17 | *Ni... ni* avec *ne* | La coordination négative *ni... ni* exige *ne* devant le verbe. | 1. « Il ne boit ni vin ni cidre. » 2. « Ni la pluie ni le vent ne l'arrêtèrent. » | Il boit ni vin | maitre | sans débat (ENS) |
| S18 | *Saint* : personne, fête, lieu | *Saint Jean* (le saint) sans majuscule ni trait d'union ; *la Saint-Jean* (fête), *rue Saint-Jean* (lieu) avec les deux. | 1. « Les feux de la Saint-Jean illuminent la plage. » 2. « Le tableau représente saint Jean au désert. » | Saint Jean (fête), Saint-Jean (personne) | grand-scribe | sans débat (OQLF 22668 ; AF QDL047) |
| S19 | Nationalité : nom, langue, adjectif | Majuscule au nom d'habitant (*les Français*), minuscule à la langue et à l'adjectif. | 1. « Les Coréens adorent ce groupe. » 2. « Elle apprend le coréen avec un manuel coréen. » | Coréen (langue), coréens (habitants) | maitre | sans débat (OQLF ; LAR) |
| S20 | *Mont Blanc, Mont-Blanc* | *Le mont Blanc* (sommet, générique en minuscule) contre *le massif du Mont-Blanc, le tunnel du Mont-Blanc* (nom composé de lieu). | 1. « Ils gravirent le mont Blanc en deux jours. » 2. « Le tunnel du Mont-Blanc fut fermé. » | Mont-Blanc (ex. 1) | grand-scribe | sans débat (OQLF, majuscules des noms géographiques ; ENS) |
| S21 | Points cardinaux | Majuscule pour une région (*le Midi, le Nord*), minuscule pour une direction (*au nord de Lyon*). | 1. « Il passa l'hiver dans le Midi. » 2. « Le puy se dresse au nord de Clermont. » | midi (ex. 1), Nord (ex. 2) | maitre | sans débat (OQLF) |
| S22 | *État / état, Église / église* | Majuscule pour l'institution, minuscule pour la condition ou le bâtiment. | 1. « L'État finance la restauration de l'église. » 2. « Le pont est en mauvais état. » | état (institution), Église (bâtiment) | maitre | sans débat (OQLF ; LAR) |
| S23 | Majuscule accentuée | Les capitales gardent leurs accents (*État, Éole, À*). | 1. « Écoutez le vent qui monte. » 2. « Évian borde le Léman. » | Ecoutez, Evian | maitre | sans débat (AF, recommandation sur l'accentuation des majuscules) |
| S24 | *Sur-le-champ* | Locution adverbiale (immédiatement) à deux traits d'union ; *sur le champ* désigne un lieu. | 1. « Il signa le contrat sur-le-champ. » 2. « Les chevaux paissent sur le champ voisin. » | sur le champ (ex. 1) | grand-scribe | sans débat (LAR) |
| S25 | *Sens dessus dessous* | Le nom *sens*, sans trait d'union. | 1. « L'éruption mit la vallée sens dessus dessous. » 2. « Après la fête, la salle d'armes était sens dessus dessous. » | sans dessus dessous | grand-scribe | sans débat (OQLF 22259 ; LAR) |
| S26 | *Au-delà, au-dessus* contre *en deçà, en dessous* | Trait d'union après *au, par, là, ci* (*au-delà, par-dessus, là-haut, ci-dessous*) ; aucun après *en* (*en deçà, en dessous, en dedans*). | 1. « La lave s'arrêta en deçà du village. » 2. « Les nuages passaient par-dessus le puy. » | en-deçà, par dessus | grand-scribe | sans débat (LAR) |
| S27 | Locutions adverbiales sans trait d'union | *Tout à fait, tout à coup, tout à l'heure, à peu près, peu à peu* ; trait d'union seulement pour le nom (*un à-peu-près, un face-à-face*). | 1. « C'est tout à fait exact. » 2. « Ce n'est qu'un à-peu-près. » | tout-à-fait, à peu près (nom) | maitre | sans débat (LAR) |
| S28 | *Peut-être, peut être* | Adverbe à trait d'union contre verbe *pouvoir* + *être*. | 1. « Il viendra peut-être. » 2. « Cette lame peut être affûtée. » | peut être (ex. 1) | maitre | sans débat (LAR) |
| S29 | *Par acquit de conscience* | *Acquit* (de *acquitter*) et non *acquis*. | 1. « Il vérifia les sangles par acquit de conscience. » 2. « Par acquit de conscience, elle relut la partition. » | acquis | grand-scribe | sans débat (AF ; LAR) |
| S30 | *Bayer aux corneilles* | *Bayer* (rester bouche bée), sans rapport avec *bâiller*. | 1. « Au lieu de réviser, il bayait aux corneilles. » 2. « Ne reste pas à bayer aux corneilles. » | bâillait | grand-scribe | sans débat (OQLF 22022 ; LAR) |
| S31 | *À l'envi* | *À l'envi* (à qui mieux mieux), sans rapport avec *envie*. | 1. « Les critiques louèrent la soprano à l'envi. » 2. « Les enfants imitaient à l'envi le cri du paon. » | à l'envie | grand-scribe | sans débat (LAR) |
| S32 | *For intérieur* | *For* (tribunal de la conscience), sans *t*. | 1. « En son for intérieur, il doutait. » 2. « Elle savait, dans son for intérieur, qu'il mentait. » | fort | grand-scribe | sans débat (LAR) |
| S33 | *Rebattre les oreilles* | *Rebattre* (répéter) et non *rabattre*. | 1. « Il nous rebat les oreilles de ses exploits. » 2. « Une histoire rebattue n'amuse plus. » | rabat | grand-scribe | sans débat (LAR ; AF DNP) |
| S34 | *Avoir maille à partir* | *Partir* au sens ancien de partager. | 1. « Il eut maille à partir avec l'arbitre. » 2. « Les deux clubs ont maille à partir. » | à partie | grand-scribe | sans débat (LAR) |
| S35 | *Sans coup férir, à cor et à cri* | *Férir* (frapper) invariable ; *cor* (instrument de chasse). | 1. « La place fut prise sans coup férir. » 2. « Ils réclamaient à cor et à cri un rappel. » | sans coups férir, à corps | grand-scribe | sans débat (LAR) |
| S36 | *Tomber des nues* | *Nues* (nuages), féminin pluriel. | 1. « Elle tomba des nues en lisant le verdict. » 2. « Il est tombé des nues. » | nus | maitre | sans débat (LAR) |
| S37 | Locutions à trait d'union | *De pied en cap, à brûle-pourpoint, à tue-tête, à tire-larigot*. | 1. « Il lui demanda à brûle-pourpoint son âge. » 2. « Les supporters chantaient à tue-tête. » | à brûle pourpoint, à tue tête | grand-scribe | sans débat (LAR) |
| S38 | *En butte à, de but en blanc* | *Butte* (tertre servant de cible) dans *en butte à*, *but* dans *de but en blanc*. | 1. « Le ministre est en butte aux critiques. » 2. « Il lui annonça de but en blanc son départ. » | en but | grand-scribe | sans débat (LAR) |
| S39 | *S* figés des locutions | *Faire florès, sans ambages, aux abois, tous azimuts*. | 1. « Ce style fit florès au XVIIIe siècle. » 2. « Il refusa sans ambages. » | floré, sans ambage | grand-scribe | sans débat (LAR) |
| S40 | *En définitive, au demeurant* | Locutions figées au féminin (*définitive*) et au masculin (*demeurant*). | 1. « En définitive, le jury trancha. » 2. « Un homme au demeurant aimable. » | en définitif | maitre | sans débat (LAR) |
| S41 | *Sans tambour ni trompette* | Locution au singulier, avec *ni*. | 1. « Il quitta le club sans tambour ni trompette. » 2. « Elle partit sans tambour ni trompette. » | trompettes | grand-scribe | sans débat (PIV finale 2001 ; LAR) |
| S42 | *Chercher noise, faire fi, qui-vive* | *Noise* (querelle), *fi* (mépris), *qui-vive* à trait d'union. | 1. « Il cherche noise à tout le monde. » 2. « La sentinelle restait sur le qui-vive. » | noix, qui vive | maitre | sans débat (LAR) |

Note S05 et S07 : le présent de nombreux verbes du 1er groupe est identique à l'indicatif et au subjonctif (*fume, dissipe*). Pour une phrase à erreur, choisir un verbe à subjonctif distinct (*faire, être, avoir, pouvoir, savoir, aller, venir*).

---

## À éviter (types débattus, jamais comme piège)

Chaque type ci-dessous admet deux formes chez au moins une source de référence. Il peut figurer correctement écrit dans une phrase, jamais comme faute ni comme choix fautif.

| id | Type | Point de débat | Source |
| --- | --- | --- | --- |
| X01 | *En* + adverbe de quantité placé avant (*combien en a-t-il cueilli(es)*) | accord toléré | OQLF 21037 (« généralement ») ; ENS |
| X02 | *Eu, donné, laissé* + *à* + infinitif (*les difficultés qu'elles ont eu(es) à surmonter*) | accord facultatif | OQLF 25201 ; ROB |
| X03 | *Le peu de* (verbe, participe) | accord selon le sens perçu | OQLF 21685 |
| X04 | *Laissé* + infinitif | invariable (R90) ou accordé (tradition) | R90 ; OQLF 23173 |
| X05 | *Ci-joint* au milieu de la phrase devant un nom déterminé | deux accords admis | OQLF ; LAR |
| X06 | *Étant donné* devant le nom | accord admis par Larousse | LAR |
| X07 | Participe en tête de phrase averbale (*Fini, les vacances*) | litige jury et grammairiens | PIV finale 2004 |
| X08 | Collectif + complément (*une foule de supporters criait / criaient*) | accord selon le sens | OQLF 21443 |
| X09 | *Avoir l'air* + adjectif | accord avec *air* ou avec le sujet | ENS ; LAR |
| X10 | *Des plus* + adjectif | singulier admis | ENS |
| X11 | *Un des... qui* | accord selon le sens | OQLF 21601 |
| X12 | *L'un et l'autre* | singulier ou pluriel | OQLF 23839 |
| X13 | *Ni l'un ni l'autre*, *ni... ni* en général | singulier ou pluriel si le verbe suit | OQLF 21490 |
| X14 | Sujets unis par *ou*, *ainsi que, comme, avec* | accord selon le sens et la ponctuation | OQLF 21460, 21444, 23833 |
| X15 | Fractions, pourcentages, *une dizaine*, *un million de*, *la majorité de* | accord selon le sens | OQLF 21597, 22933, 21682 |
| X16 | *Reste, restent ; qu'importe, qu'importent ; vive, vivent ; soit, soient* | les deux admis | OQLF 22607, 22771, 21583 |
| X17 | *C'est* ou *ce sont* devant un nom pluriel | registre, les deux admis | OQLF 21603 |
| X18 | *N'eût été, n'eussent été* | invariabilité attestée | OQLF 24117 ; ENS |
| X19 | Accord avec *on* = *nous* (*on est arrivés*) | accord facultatif | ENS |
| X20 | *Qui* précédé d'un attribut (*vous êtes le seul qui sache / sachiez*) | deux accords | OQLF 23397 |
| X21 | Titre d'œuvre, nom d'entreprise sujet | accord flottant | OQLF 23125, 23393 |
| X22 | *Chacun* + *son* ou *leur* | deux possessifs admis | OQLF 21717 |
| X23 | *Maint, mainte, maints* | singulier et pluriel admis | OQLF 24590 ; LAR |
| X24 | *Fin prêt(s)* | accord rencontré | PIV finale 1985 |
| X25 | *Frais, grand, large* + participe (*fraîches cueillies, grandes ouvertes*) | accord ou invariabilité | OQLF 24719, 21609, 24718 ; LAR |
| X26 | *Même* après plusieurs noms ou après un nom (*les enfants même(s)*) | adverbe ou adjectif | ENS |
| X27 | *Tout* devant un nom attribut (*elle est tout yeux*), *toute à son travail*, *tout Rome* | usages divergents | ENS |
| X28 | *Tel* comparatif (*tel un*) accordé avec le premier ou le second terme | deux analyses | ENS ; ONI `tel` |
| X29 | *Leur* distributif (*ils ôtèrent leur chapeau / leurs chapeaux*) | les deux | ENS |
| X30 | *De toute sorte, de toutes sortes ; en tout cas, en tous cas* | les deux | LAR |
| X31 | *Quoique* ou *quoi que* sans contexte univoque | sens ambigu à l'oral | ONI `quoi-que` |
| X32 | Inversion en *-é-je* ou *-è-je* (*dussé-je, puissé-je*) | accent grave admis par R90 | R90 |
| X33 | Autres verbes en *-eler, -eter* (*ruisseler, étiqueter, épousseter*) | *è* admis par R90 | R90 ; OQLF |
| X34 | Futur et conditionnel des verbes en *-é-er* (*cédera, cèdera*) | R90 | R90 |
| X35 | Verbes en *-ayer* (*il paie, il paye*) | deux conjugaisons | LAR |
| X36 | *Ci-gît, il paît, il plaît, il connaît* | circonflexe facultatif (R90) | R90 |
| X37 | *Dissous, absous* ou *dissout, absout* | R90 | AF 9e ; OQLF 21735 |
| X38 | *Asseoir* (*assieds, assois* ; *assoir*) | deux conjugaisons et R90 | LAR ; R90 |
| X39 | *Mû, mue* ou *mu* | R90 | R90 |
| X40 | Circonflexe sur *i* et *u* (*faîte, maître, boîte, île, coût, goût, piqûre, flûte*) | supprimé par R90 hors cas distinctifs | R90 ; AF annexes |
| X41 | Trait d'union des numéraux (*vingt et un, vingt-et-un*) | R90 | R90 |
| X42 | *L'an mil, l'an mille* | deux graphies | LAR |
| X43 | Soudures (*portemonnaie, weekend, millepatte, contrecourant*) | R90 | R90 |
| X44 | Pluriel des composés verbe + nom ou préposition + nom (*gratte-ciel(s), après-midi(s), sans-abri(s), garde-chasse(s)*) | R90 et dictionnaires | R90 ; LAR |
| X45 | *Ails, aulx ; travails, travaux* au sens technique | deux pluriels ou source non confirmée | LAR (non vérifié pour *travails*) |
| X46 | *Idéals, idéaux ; finals, finaux ; glacials, glaciaux ; banals, banaux* | deux pluriels admis selon les ouvrages | LAR ; AF 8e (banal) |
| X47 | Familles harmonisées par R90 (*combatif, boursouflé, chariot, persifler, imbécillité, bonhomie, chausse-trape*) | ancienne et nouvelle graphies admises | OQLF 23174 ; tableau Laval |
| X48 | *Évènement, événement ; règlementaire, réglementaire* | R90 | R90 |
| X49 | *Assidûment, dûment, goulûment, crûment* (circonflexe facultatif) | R90 | R90 |
| X50 | *Ambiguë, aigüe, exiguë, contigüe* | place du tréma (R90) | R90 ; PIV 1985 |
| X51 | *Relais, relai ; clé, clef ; ognon, oignon* | deux graphies | R90 ; LAR |
| X52 | Accents ajoutés aux emprunts (*référendum, à priori, révolver*) | R90 | R90 |
| X53 | *H* de *hiatus, hyène, ouate* | élision variable | LAR |
| X54 | Élision de *lorsque, puisque* devant un nom (*lorsqu'Antoine*) | usage partagé | ENS |
| X55 | Pluriel des emprunts (*scénarios, scenarii ; maximums, maxima ; lieds, lieder ; sandwichs, sandwiches ; raviolis*) | deux pluriels | LAR ; R90 |
| X56 | *Après-midi, Pâques, délice, amour, orgue, hymne, effluve* (genre) | genre flottant | LAR ; PIV (effluve) |
| X57 | Pluriel des noms propres (*les Bourbons, les Dupont, deux Picasso*) | usages divergents | ENS |
| X58 | *C'est de lui dont je parle ; le fait que* + mode ; *le seul qui* + mode ; *si... et que* + mode | condamné ou admis selon l'ouvrage | AF DNP ; ENS |
| X59 | *Malgré que* (hors *malgré que j'en aie*) ; *au temps pour moi* ; *battre son plein* | position de l'Académie discutée | AF ; ENS |
| X60 | *Sans que... ne* ; *ne* explétif | facultatif | ENS |

---

## Les 30 types à privilégier

Sélection des types absents du catalogue d'Onirologos ou qui n'y figurent que sous un autre angle, et qui ne touchent ni au pronominal, ni au COD antéposé simple, ni à *quelque*. Ils sont sûrs, variés, et se glissent dans presque tous les thèmes.

1. P04 participe + infinitif dont le COD subit l'action (contraste avec P03)
2. P10 impersonnel pronominal (*il s'est produit des*)
3. P12 attribut du COD suivi d'un infinitif
4. P14 *convainquant / convaincant*, *naviguant / navigant*
5. P20 *entendu dire*
6. P22 *vous* de politesse
7. A04 sujet réel d'un impersonnel
8. A12 sujet résumé par *tout, rien*
9. A15 incise inversée
10. I02 *tout autre*
11. I03 *tout-puissant*
12. I09 *nue-propriété*
13. I14 *haut placées, court vêtues*
14. I21 *témoin* en tête
15. C02 passé antérieur contre plus-que-parfait du subjonctif
16. C07 *cueilles-en, penses-y*
17. C08 *va-t'en*
18. C16 *croître* (*croît, crûrent*)
19. C21 *harcèle, appelle*
20. C28 *inclus* contre *exclu*
21. N03 *pot-au-feu, tête-à-tête* invariables
22. N09 *ciels, aïeuls, œils-de-bœuf*
23. N14 *trente et une pages*
24. N15 *quatre-vingts millions, deux cent mille*
25. N20 couleurs distributives
26. G27 *quoique étonnés, presque achevé, entre autres*
27. G37 *nuitamment, sciemment*
28. G43 *grâce / gracieux, fantôme / fantomatique*
29. S18 *saint Jean, la Saint-Jean*
30. S26 *au-delà* contre *en deçà*

---

## Sources consultées

Analyses du projet : `docs/pivot/dicos-d-or.md`, `docs/pivot/television-1985-1992.md`, `docs/pivot/recueils-et-analyses.md`, `docs/pivot/douce-france-sommant.md` ; Onirologos : `mecanismes.md`, `etalon-grand-scribe.md`.

Office québécois de la langue française, Vitrine linguistique :
- [Accord du participe passé avec le pronom en](https://vitrinelinguistique.oqlf.gouv.qc.ca/21037/la-grammaire/le-verbe/accord-du-participe-passe/cas-particuliers-daccord-du-participe-passe/accord-du-participe-passe-avec-le-pronom-en)
- [Participe passé suivi d'un infinitif](https://vitrinelinguistique.oqlf.gouv.qc.ca/21859/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-suivi-dun-infinitif)
- [Infinitif sous-entendu](https://vitrinelinguistique.oqlf.gouv.qc.ca/index.php?id=21861)
- [Participe suivi d'un attribut du complément direct](https://vitrinelinguistique.oqlf.gouv.qc.ca/25185/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/accord-du-participe-passe-suivi-dun-attribut-du-complement-direct)
- [Verbes impersonnels](https://vitrinelinguistique.oqlf.gouv.qc.ca/21544/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-avoir/invariabilite-du-participe-passe-des-verbes-impersonnels)
- [Eu, donné, laissé suivis de à](https://vitrinelinguistique.oqlf.gouv.qc.ca/25201/la-grammaire/le-verbe/accord-du-participe-passe/cas-particuliers-daccord-du-participe-passe/accord-des-participes-passes-eu-donne-et-laisse-suivis-de-a-et-dun-infinitif)
- [Pronominal, cas particuliers (se voir)](https://vitrinelinguistique.oqlf.gouv.qc.ca/25181/la-grammaire/le-verbe/accord-du-participe-passe/cas-particuliers-daccord-du-participe-passe/accord-particulier-du-participe-passe-dun-verbe-pronominal)
- [Verbes occasionnellement pronominaux](https://vitrinelinguistique.oqlf.gouv.qc.ca/22942/la-grammaire/le-verbe/accord-du-participe-passe/avec-lauxiliaire-etre/accord-du-participe-passe-des-verbes-occasionnellement-pronominaux)
- [Se faire fort de](https://vitrinelinguistique.oqlf.gouv.qc.ca/23461/la-grammaire/le-verbe/accord-du-participe-passe/cas-particuliers-daccord-du-participe-passe/accord-du-participe-passe-de-se-faire-fort-de)
- [Participe présent et adjectif participe](https://vitrinelinguistique.oqlf.gouv.qc.ca/22915/la-grammaire/le-verbe/modes/distinction-entre-le-participe-present-et-ladjectif-participe)
- [Accord du verbe avec le sujet, index des cas](https://vitrinelinguistique.oqlf.gouv.qc.ca/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet)
- [Le peu de](https://vitrinelinguistique.oqlf.gouv.qc.ca/21685/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-est-une-expression-de-quantite/accord-du-verbe-avec-peu-peu-de-le-peu-de)
- [Plus d'un](https://vitrinelinguistique.oqlf.gouv.qc.ca/21701/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-est-une-expression-de-quantite/accord-du-verbe-avec-plus-dun-plus-dune)
- [Moins de deux](https://vitrinelinguistique.oqlf.gouv.qc.ca/21699/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-est-une-expression-de-quantite/accord-du-verbe-avec-moins-de-deux)
- [Un des qui](https://vitrinelinguistique.oqlf.gouv.qc.ca/21601/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujet-qui-est-un-pronom-relatif/accord-du-verbe-avec-un-des-qui-un-de-ceux-qui)
- [L'un et l'autre](https://vitrinelinguistique.oqlf.gouv.qc.ca/23839/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujets-joints-par-une-conjonction/accord-du-verbe-avec-lun-et-lautre)
- [Sujets unis par ni](https://vitrinelinguistique.oqlf.gouv.qc.ca/21490/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/sujets-joints-par-une-conjonction/accord-du-verbe-avec-des-sujets-unis-par-ni)
- [N'eût été](https://vitrinelinguistique.oqlf.gouv.qc.ca/24117/la-grammaire/le-verbe/accord-du-verbe-avec-le-sujet/cas-particuliers-daccord-du-verbe/accord-et-emploi-de-neut-ete-et-neussent-ete)
- [Plein](https://vitrinelinguistique.oqlf.gouv.qc.ca/22896/la-grammaire/ladjectif/accord-de-ladjectif/cas-particuliers-daccord-de-ladjectif/accord-du-mot-plein-selon-sa-categorie-grammaticale)
- [Quasi](https://vitrinelinguistique.oqlf.gouv.qc.ca/23577/lorthographe/emploi-du-trait-dunion/mots-composes/mots-composes-avec-preposition-ou-adverbe/emploi-du-trait-dunion-dans-les-mots-composes-avec-quasi)
- [Non](https://vitrinelinguistique.oqlf.gouv.qc.ca/21613/lorthographe/emploi-du-trait-dunion/mots-composes/mots-composes-avec-preposition-ou-adverbe/emploi-du-trait-dunion-dans-les-mots-composes-avec-non)
- [Maint](https://vitrinelinguistique.oqlf.gouv.qc.ca/24590/la-grammaire/les-determinants/determinants-indefinis/accord-du-determinant-indefini-maint)
- [Adjectifs composés](https://vitrinelinguistique.oqlf.gouv.qc.ca/21731/la-grammaire/ladjectif/accord-de-ladjectif/accord-des-adjectifs-composes)
- [Nu](https://vitrinelinguistique.oqlf.gouv.qc.ca/21712/la-grammaire/ladjectif/accord-de-ladjectif/cas-particuliers-daccord-de-ladjectif/accord-de-ladjectif-nu)
- [Court](https://vitrinelinguistique.oqlf.gouv.qc.ca/21605/la-grammaire/ladjectif/adjectif-employe-comme-adverbe/court-employe-comme-adjectif-ou-adverbe), [Fort](https://vitrinelinguistique.oqlf.gouv.qc.ca/21032/la-grammaire/ladjectif/adjectif-employe-comme-adverbe/fort-employe-comme-adjectif-ou-adverbe), [Frais](https://vitrinelinguistique.oqlf.gouv.qc.ca/24719/la-grammaire/ladjectif/adjectif-employe-comme-adverbe/accord-de-frais-employe-comme-adverbe), [Grand](https://vitrinelinguistique.oqlf.gouv.qc.ca/21609/la-grammaire/ladjectif/adjectif-employe-comme-adverbe/accord-de-grand-employe-comme-adverbe), [Large](https://vitrinelinguistique.oqlf.gouv.qc.ca/24718/la-grammaire/ladjectif/adjectif-employe-comme-adverbe/accord-de-large-employe-comme-adverbe)
- [Aïeuls et aïeux](https://vitrinelinguistique.oqlf.gouv.qc.ca/23917/la-grammaire/le-nom/pluriel-des-noms/pluriel-et-sens-du-nom/sens-de-aieuls-et-aieux)
- [Inclure, exclure, conclure](https://vitrinelinguistique.oqlf.gouv.qc.ca/21093/la-grammaire/le-verbe/conjugaison/conjugaison-des-verbes-inclure-exclure-et-conclure)
- [Absous, dissous, résolu](https://vitrinelinguistique.oqlf.gouv.qc.ca/21735/la-grammaire/ladjectif/formation-particuliere-de-ladjectif-au-masculin-ou-au-feminin/formation-du-feminin-des-adjectifs-absous-dissous-et-resolu)
- [Familles harmonisées (R90)](https://vitrinelinguistique.oqlf.gouv.qc.ca/23174/lorthographe/rectifications-de-lorthographe/rectifications-liees-aux-anomalies/rectifications-liees-a-lharmonisation-de-familles-de-mots)
- [Saint, majuscule et trait d'union](https://vitrinelinguistique.oqlf.gouv.qc.ca/22668/la-typographie/majuscules/emploi-de-la-majuscule-pour-des-noms-particuliers/emploi-de-la-majuscule-et-de-la-minuscule-pour-le-mot-saint)
- [Sens dessus dessous](https://vitrinelinguistique.oqlf.gouv.qc.ca/22259/le-vocabulaire/alterations-dexpressions-figees/les-expressions-sens-dessus-dessous-et-sens-devant-derriere)
- [Bâiller, bailler, bayer](https://vitrinelinguistique.oqlf.gouv.qc.ca/22022/lorthographe/homophones-lexicaux/les-homophones-bailler-bailler-et-bayer)
- [Trait d'union comme lien grammatical](https://vitrinelinguistique.oqlf.gouv.qc.ca/23353/la-ponctuation/trait-dunion/le-trait-dunion-comme-lien-grammatical)

Académie française :
- [Questions de langue, accord du participe passé (QDL063)](https://dictionnaire-academie.fr/article/QDL063)
- [Questions de langue, se voir + infinitif (QDL069)](https://dictionnaire-academie.fr/article/QDL069)
- [Questions de langue, saint (QDL047)](https://dictionnaire-academie.fr/article/QDL047)
- [Dire, ne pas dire, ciel (DNP0952)](https://dictionnaire-academie.fr/article/DNP0952)
- [Les rectifications de l'orthographe](https://www.dictionnaire-academie.fr/annexes/rectifications-orthographe.html)
- [Dictionnaire 9e édition, conjugaison de dépecer](https://dictionnaire-academie.fr/conjuguer/A9D1455) ; [dissoudre](https://dictionnaire-academie.fr/article/A9D2778)
- [Dictionnaire 8e édition, banal](https://dictionnaire-academie.fr/article/A8B0201)

Larousse en ligne : [plein](https://www.larousse.fr/dictionnaires/francais/plein_pleine/61592), [témoin](https://www.larousse.fr/dictionnaires/francais/t%c3%a9moin/77204), [maints](https://www.larousse.fr/dictionnaires/francais/maints), [sembler](https://www.larousse.fr/dictionnaires/francais/semble), [frais](https://www.larousse.fr/dictionnaires/francais/frais_fra%c3%aeche/34968/locution), [bayer](https://www.larousse.fr/dictionnaires/francais/bayer), [surseoir](https://www.larousse.fr/conjugaison/francais/surseoir/8802), [inclure](https://www.larousse.fr/conjugaison/francais/inclure/5448), [sur-le-champ](https://www.larousse.fr/dictionnaires/francais-anglais/sur-le-champ/74897), [Pâques](https://www.larousse.fr/dictionnaires/francais/paques).

Gouvernement du Canada : [Clés de la rédaction, participe passé des verbes impersonnels](https://www.noslangues-ourlanguages.gc.ca/en/cles-de-la-redaction/participe-passe-des-verbes-impersonnels.html) ; [Juridictionnaire, arroger](https://nos-langues.canada.ca/en/juridictionnaire/arroger).

Rectifications de 1990 : [tableau Riverin et Chartrand, Université Laval](https://www.enseignementdufrancais.fse.ulaval.ca/fichiers/site_ens_francais/modules/document_section_fichier/fichier__8847728cbe8d__Tableau_synthese_des_Rectifications_orthographiques_de_1990_Riverin_et_Chartrand_VD2.pdf) ; [CCDMD](https://ameliofrancais.ccdmd.qc.ca/storage/amelioration-du-francais/ressources/1697480130-ortho_rect_12Rectific_V2.pdf) ; [Le Robert, aide orthographe](https://college.lerobert.com/helpclg/pdf/orthographe.pdf) ; [Le Robert, aide nombres](https://petitrobert.lerobert.com/AidePR/Pages/pdf/nombres.pdf) ; [AFEF, David 2016](https://www.afef.org/system/files/2019-01/2016-02-David-Rectifications-orthographiques.pdf) ; [Ministère de la Culture, Langues et cité n° 7](https://www.culture.gouv.fr/content/download/93529/file/lc_7_nouvelle_orthographe_def.pdf).

Autres : [Guide de style de l'OCDE, trait d'union](https://www.oecd.org/fr/publications/2025/08/oecd-style-guide-fourth-edition_c090cd0c/full-report/component-9.html) ; [Quae, Petit mémento](https://www.quae.com/asset_ref/83e1eb6a0cce44698c8809d4a4afe3470b7499321a1aa4b9/petit_memento.pdf) ; [Brut, après que](https://www.brut.media/fr/articles/apres-quil-a-ou-apres-quil-ait) ; [Académie royale de Belgique, bulletin 1976](https://www.arllfb.be/bulletin/bulletinsnumerises/bulletin_1976_liv_01.pdf) ; [Projet Voltaire, programme Excellence](https://dev1-sitepv.projet-voltaire.fr/wp-content/uploads/2024/04/Projet-Voltaire-WAE9M-Renforcer-son-expertise-en-orthographe-et-en-grammaire.pdf) ; [La langue française, inclus ou inclu](https://www.lalanguefrancaise.com/orthographe/inclu-ou-inclus) ; [La langue française, banals ou banaux](https://www.lalanguefrancaise.com/orthographe/banals-ou-banaux-pluriel/) ; [Topito et L'Étudiant, expressions mal orthographiées](https://www.letudiant.fr/quiz/culture-generale/orthographe-et-grammaire/saurez-vous-ecrire-correctement-les-expressions-suivantes.html) (repérage seulement).

## Limites

- Grevisse (*Le Bon Usage*), le Bescherelle et le Robert n'ont pas été consultés directement en ligne : les types marqués ENS reposent sur le consensus des grammaires d'enseignement et sont à vérifier dans un ouvrage papier avant un usage en série.
- Projet Voltaire et Orthodidacte ne publient pas leur liste de règles du niveau Excellence ; seul le programme (200 règles, 14 niveaux, 39 % de grammaire) a été lu. Les épreuves du DELF C1 et C2 n'évaluent pas l'orthographe par règles isolées : aucun type n'en vient.
- La page de l'Académie sur *après que* n'a été lue qu'au travers de citations secondaires.
- *Travails* (appareil de maréchal-ferrant) n'a pas été confirmé dans une source lexicographique en ligne : classé à éviter.
