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


## Volume cible par sous-thème (décidé le 15/11/2026)

L'utilisateur veut du volume : un joueur ne doit pas revoir la même phrase après quelques parties. Cible par sous-thème et par niveau : **20 phrases à erreur** et **6 dictées** (80 phrases à erreur et 24 dictées par sous-thème). Les règles de répartition passent en proportions pour n phrases : `lexique` au moins 25 % (Facile), 37,5 % (Moyen et Difficile), 50 % (Expert) ; `pronominal` au plus 12,5 % ; `participe` et `homophone` chacun au plus 25 % ; au moins 5 types. Chaque nouvelle phrase respecte la densité et le niveau (tableau de densité), les marqueurs, l'ancrage local pour les villes, et ne répète ni une phrase, ni un mot fautif, ni une règle déjà présents dans le thème. Contrôle : `node tools/erreurs.mjs`.

## Phrases « Trouve l'erreur » intéressantes, sans divulgâchage (décidé le 15/11/2026)

**Intéressantes.** Chaque phrase doit valoir la peine d'être lue pour elle-même, indépendamment de la faute :
- elle apprend ou raconte quelque chose de concret : un fait établi, un geste de métier, un détail de coulisses, une anecdote plausible, une image précise, une petite tension ou un trait d'humour ;
- elle a un sujet et un décor identifiables (un lieu, un objet, un personnage, un moment), pas une généralité (« Le sport est un domaine passionnant ») ni une tournure de manuel (« Les élèves font des exercices ») ;
- deux phrases d'un même thème et d'un même niveau ne racontent pas la même scène et n'ouvrent pas sur la même formule ; le registre varie (récit, description, consigne, dialogue indirect, énumération, question rhétorique) ;
- la phrase se lit comme une phrase vraie de journal, de roman ou de guide, jamais comme un exercice fabriqué ; les mots du thème y apparaissent naturellement.

**Sans divulgâchage.** Aucune phrase ne révèle un élément important d'une œuvre (roman, film, série, jeu, bande dessinée, épopée) : ni dénouement, ni mort, ni trahison, ni identité cachée, ni retournement, ni élément de la seconde moitié de l'intrigue. On s'en tient à la situation de départ connue de tous, au décor, aux gestes, aux objets, aux univers, aux personnages tels qu'on les rencontre au début (ex. pour Les Trois Mousquetaires : le duel, les gardes du cardinal, la devise, jamais le sort de Milady ni de Constance ; pour l'Odyssée : le voyage, les monstres rencontrés, jamais le retour déguisé ni le massacre des prétendants). En cas de doute, la phrase est générique ou retirée.

## Diversité des mécanismes aux niveaux Difficile et Expert (décidé le 15/11/2026)

Constat sur les 316 phrases `maitre` et `grand-scribe` : hors vocabulaire, trois mécanismes dominent (verbes pronominaux 21 %, COD antéposé 16 %, « quelque » et « quel que » 14 % au niveau Expert), puis le subjonctif. Le type `participe` ou `invariable` ne suffit pas : à l'intérieur d'un type, un même mécanisme se répète. Règles :

- **Plafonds par mécanisme** (sur les 20 phrases d'un niveau) : verbes pronominaux 2, COD antéposé 2, « quelque » et « quel que » 2, subjonctif ou conditionnel 3, « tout » 1, « demi » ou « même » 1 chacun. Un même mot fautif ou une même règle ne revient pas deux fois dans le thème.
- **Catalogue à exploiter** (au moins 8 mécanismes différents sur 20 phrases) : participe présent ou adjectif verbal (différent/différant, équivalent/équivalant, négligent/négligeant) ; pluriel des noms composés (pause-café, chefs-d'œuvre, après-midi) ; nombres (quatre-vingts, deux cent un) ; couleurs (gris perle, rouge sang) ; verbes à conjugaison rare au passé simple ou au subjonctif (vaincre, haïr, battre, résoudre, clore, croître/crû) ; impératif et trait d'union (vas-y, manges-en, rends-toi) ; accord avec un sujet collectif (une foule de, la plupart, plus d'un, ni l'un ni l'autre) ; « a-t-il » et t euphonique ; homophones de sens rares (cession/session, censé/sensé, différend/différent, conjecture/conjoncture, acception/acceptation, éminent/imminent) ; verbes en -guer, -quer, -ger, -cer, -yer, -eler ; majuscules (noms de peuples, d'habitants) ; accents, tréma, cédille (ambiguïté, aigüe écartée) ; locutions (à tort et à travers, tout à coup/tout d'un coup, quand même, davantage/d'avantage écarté) ; paronymes et faux amis.
- La règle de chaque phrase nomme son mécanisme précis ; le contrôle `node tools/erreurs.mjs` signale les dépassements de plafond.

## Couverture des programmes aux niveaux Facile et Moyen (décidé le 15/11/2026)

Les niveaux `apprenti` (CM1, CM2, 6e) et `compagnon` (5e, 4e, 3e) doivent tester un large éventail de règles du programme, pas seulement des homophones et des accords simples. Constat actuel : au niveau Facile, 41 % des phrases portent sur un homophone et 37 % sur un accord ; au niveau Moyen, 24 % sur un homophone, 19 % sur un participe, 17 % sur un temps.

- **Champ `notion`** : chaque phrase à erreur de ces deux niveaux porte l'identifiant d'une notion de `docs/programme-referentiel.md` (colonne « testable en dictée » = oui ou partiellement), du niveau scolaire correspondant (CM1, CM2, 6e pour `apprenti` ; 5e, 4e, 3e pour `compagnon`).
- **Largeur** : sur les 20 phrases d'un sous-thème et d'un niveau, au moins 14 notions différentes ; aucune notion plus de 2 fois. À l'échelle du jeu, chaque notion testable en dictée du référentiel doit être couverte par au moins 3 phrases de sous-thèmes différents.
- **Exemples de règles à exploiter** (liste non exhaustive, à puiser dans le référentiel) : conjugaison des temps du programme (imparfait, passé simple, futur, conditionnel, plus-que-parfait, impératif, subjonctif présent au cycle 4), verbes en -cer, -ger, -yer, -eler, -eter, accord du participe avec être et avec avoir (COD antéposé), accord du verbe avec sujet éloigné ou inversé, accord de l'attribut, pluriel et féminin des noms et adjectifs irréguliers, pluriel des noms composés au cycle 4, homophones grammaticaux (a/à, ou/où, et/est, on/ont, son/sont, ce/se, ces/ses/c'est/s'est, leur/leurs, quel(le)(s)/qu'elle(s), la/là/l'a, ni/n'y, mais/mes/met), mots invariables, formation des mots (préfixes, suffixes, familles), accents et tréma, lettres finales muettes par la famille de mots, ponctuation (virgule, deux-points, guillemets), registres et sens des mots (paronymes), accord de tout, même, quelque au cycle 4.

## Le vocabulaire reste central aux niveaux Difficile et Expert (précisé le 16/11/2026)

La grammaire et la conjugaison ne remplacent pas le vocabulaire : les phrases `lexique` gardent leur part (au moins 37,5 % en Difficile, 50 % en Expert) et ne se limitent pas à « un mot rare mal écrit ». Pour les phrases `lexique` d'un même niveau et d'un même thème :
- **Variété des mécanismes graphiques** : au moins 6 mécanismes différents parmi : doublement ou simplification de consonne (famille de mots), lettre muette intérieure ou finale, `ph`, `th`, `rh`, `y`, `h` aspiré ou muet, accent (circonflexe écarté si double graphie), tréma, cédille, finales `-ance` ou `-ence`, `-ant` ou `-ent`, adverbes en `-amment` ou `-emment`, pluriels en `-aux`, `-als`, `-s` ou `-x` dès le singulier, genre d'un mot, mots d'origine étrangère francisés (graphie unique).
- **Vocabulaire de sens** (type `sens`) : au moins 2 phrases sur 20 à l'Expert et 1 à 2 en Difficile : paronymes, homophones lexicaux rares, faux amis, mots employés à contresens (acception, conjecture, éminent, différend, ...), choisis dans le catalogue (famille « Mots et graphies »).
- **Précision du lexique** : le mot du thème est précis et de registre soutenu à partir du niveau Difficile (verbes, adjectifs et noms de métier, pas seulement des noms d'objets).
