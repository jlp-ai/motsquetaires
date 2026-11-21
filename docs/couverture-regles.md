# Couverture des règles d'un concours d'orthographe

Liste de contrôle établie le 21/11/2026 après un constat : des familles entières de règles classiques n'avaient aucune phrase (genre des noms ambigus) et d'autres revenaient trop souvent (« demi » 9 fois, chef-d'œuvre 5 fois, quatre-vingt 5 fois). Ce fichier sert à deux choses :

1. **Liste de contrôle** pour le rédacteur : avant d'écrire un thème, viser d'abord les règles absentes de son niveau.
2. **Source de données** de `node tools/couverture.mjs`, qui lit les tableaux ci-dessous, classe chaque phrase de chaque thème dans une ou plusieurs règles et imprime les trous et les excès.

Complète sans les répéter : `docs/programme-referentiel.md` (notions scolaires, champ `notion`), `docs/catalogue-regles-avancees.md` (types de règles des niveaux Difficile et Expert) et `content/types.js` (champ `type`).

## Mode d'emploi

### Colonnes

- **Identifiant** : stable, `domaine.regle`. Ne jamais renommer un identifiant publié ; en ajouter un nouveau si besoin.
- **Niveaux** : niveaux où la règle est pertinente, de 1 à 4. 1 = `apprenti` (cycle 3), 2 = `compagnon` (cycle 4), 3 = `maitre` (adulte cultivé), 4 = `grand-scribe` (Dicos d'or, Pivot). `1-2` : pertinente aux niveaux 1 et 2 seulement ; `3-4` : à partir du niveau 3.
- **Prio** : A = règle incontournable d'une dictée de concours, à couvrir dans chaque niveau pertinent ; B = règle courante ; C = raffinement, à placer de temps en temps.
- **Portée** : `règle` (règle précise, signalée si surreprésentée) ou `famille` (regroupement large, compté mais jamais signalé comme excès).
- **Exemples-types** : graphie fautive, puis graphie juste.
- **Détection** : mots-clés lus par le script (voir ci-dessous).

### Syntaxe de la colonne Détection

Clauses séparées par ` ; `, éléments séparés par des virgules.

| Clause | Sens |
| --- | --- |
| `n:` | préfixes d'identifiant du champ `notion` (`cm1.homo.a-a`) |
| `r:` | mots-clés cherchés dans la règle expliquée (`rule`), sans casse ni accents, en mots entiers ; un `*` final vaut préfixe (`impersonnel*`) |
| `a:` | idem, mais tous les mots-clés doivent figurer dans la règle |
| `e:` | paires de finales `faute/juste` sur un même radical, dans un sens ou dans l'autre (`er/é` : dessiné et dessiner) |
| `w:` | formes comparées à `wrong` et à `right` (casse ignorée, accents conservés), motif glob avec `*` (`*emment`) |
| `t:` | filtre : la faute doit porter l'un de ces types |
| `x:` | mots-clés excluants dans la règle |

Une phrase relève d'une règle si (`n` ou `r` ou `a` ou `w` ou `e`) correspond, que le filtre `t` est respecté et qu'aucun mot de `x` n'apparaît. Une phrase à plusieurs fautes (`faults`) est classée faute par faute.

### Règles écartées

Aucune règle de ce fichier ne repose sur une double graphie admise. Les cas débattus (rectifications de 1990, tolérances, désaccords entre dictionnaires) sont listés en fin de fichier ; ils peuvent figurer correctement écrits dans une phrase, jamais comme faute.

## Participe passé

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `pp.etre-sujet` | 1-2 | A | règle | Avec être, accord avec le sujet | elles sont arrivé → arrivées | n: cm1.accords.pp-etre, 5e.accords.pp-etre, 6e.accords.pp-etre ; r: auxiliaire etre, avec etre, avec l'auxiliaire etre ; t: participe, accord |
| `pp.avoir-sans-accord-sujet` | 1-2 | A | règle | Avec avoir, jamais d'accord avec le sujet | elles ont mangées → mangé | r: pas avec le sujet, jamais avec le sujet, pas de cod, aucun cod, cod est place apres, cod place apres ; t: participe |
| `pp.avoir-cod-antepose` | 1-4 | A | règle | Avec avoir, accord avec le COD placé avant | la lettre qu'il a écrit → écrite | n: cm2.accords.pp-avoir-cod-antepose, 5e.accords.pp-avoir-cod-antepose ; r: cod place avant, cod antepose, cod est place avant ; a: cod, place avant ; t: participe, accord |
| `pp.avoir-cod-que` | 2-4 | A | règle | COD antéposé repris par le relatif que | les pions que j'ai avancé → avancés | n: 3e.accords.pp-avoir-cod-relatif ; r: que reprend, pronom relatif que, relatif que, cod que ; t: participe |
| `pp.avoir-cod-pronom` | 2-4 | A | règle | COD antéposé pronom personnel (le, la, les, l') | ces cartes, je les ai vu → vues | n: 6e.accords.pp-avoir-cod-pronom ; r: pronom les, pronom la, pronom l', les reprend, la reprend, l' reprend, cod l', cod les, cod la ; t: participe |
| `pp.coi` | 2-4 | B | règle | Pas d'accord avec un complément indirect | elles leur ont parlées → parlé | n: 5e.accords.pp-avoir-coi ; r: coi, complement d'objet indirect, complement indirect ; t: participe |
| `pp.en` | 3-4 | B | règle | Participe invariable quand le COD est en | des fautes, j'en ai faites → fait | a: en, invariable ; t: participe ; x: entierement |
| `pp.mesure-duree-prix` | 3-4 | B | règle | Coûter, valoir, peser, courir, vivre : complément de mesure, pas de COD | les sommes que ça a coûtées → coûté | r: complement de mesure, complement de duree, complement de prix, complement circonstanciel, mesure ; w: coûté, coûtés, coûtées, valu, valus, values, pesé, couru, courues, vécu, vécues ; t: participe |
| `pp.impersonnel` | 2-4 | A | règle | Participe d'un verbe impersonnel invariable | les chaleurs qu'il a faites → fait | r: impersonnel* ; t: participe, accord |
| `pp.suivi-infinitif` | 3-4 | A | règle | Participe suivi d'un infinitif : accord si le COD fait l'action | les musiciens que j'ai entendu jouer → entendus | r: infinitif ; t: participe ; x: fait, laisse |
| `pp.fait-infinitif` | 3-4 | A | règle | Fait suivi d'un infinitif toujours invariable | la maison qu'il a faite construire → fait | a: fait, infinitif ; t: participe, pronominal |
| `pp.infinitif-sous-entendu` | 4 | B | règle | Dû, pu, voulu, cru avec infinitif sous-entendu : invariables | il a fait tous les efforts qu'il a voulus → voulu | r: sous-entendu, ellipse, infinitif sous-entendu ; t: participe |
| `pp.attribut-cod` | 4 | C | règle | Participe suivi d'un attribut du COD | ces gens, je les ai cru honnêtes → crus | r: attribut du cod ; t: participe |
| `pp.le-neutre` | 4 | C | règle | COD le neutre (cela) : participe invariable | elle est plus forte qu'on ne l'avait crue → cru | r: neutre, signifie cela ; t: participe |
| `pp.le-peu` | 4 | C | règle | Le peu de : accord selon le sens (manque ou quantité suffisante) | le peu d'efforts qu'il a fournis → fourni | r: le peu ; t: participe, accord |
| `pp.combien` | 3-4 | C | règle | Combien de + COD antéposé | combien de médailles a-t-il remporté → remportées | r: combien ; t: participe |
| `pp.adjectif` | 1-2 | B | règle | Participe employé comme adjectif : accord avec le nom | une porte fermé → fermée | r: employe comme adjectif, employe comme un adjectif, valeur d'adjectif ; t: participe, accord |
| `pp.forme-finale-muette` | 1-2 | B | règle | Finale du participe : -is, -it, -i, -u (féminin pour l'entendre) | il a pri → pris | n: 4e.conj.participes-consonne-muette, 4e.conj.participes-e-i-u ; r: mettre au feminin, au feminin on entend, pour entendre, participe passe de, se termine par -i, se termine par -is, se termine par -u ; w: pris, mis, prit, mit, assis, acquis, conquis, bouilli ; t: participe, temps, lexique |
| `pp.inclus-exclu` | 3-4 | B | règle | Inclus, reclus (-s) mais exclu, conclu (-u) | une taxe inclue → incluse | w: inclus, incluse, inclue, exclu, exclus, exclue, conclu, conclus, reclus, recluse, perclus, percluse ; r: inclus, exclu |
| `pp.dissous-absous` | 4 | B | règle | Dissous, absous ; féminin dissoute, absoute | une société dissolue → dissoute | w: dissous, dissoute, dissout, absous, absoute, absout, résous, dissolue ; r: dissous, absous, dissoute |
| `pp.autres` | 1-4 | B | famille | Accord du participe passé, autres cas (règle expliquée sans mot-clé reconnu) | | t: participe |

## Verbes pronominaux

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `pron.essentiellement` | 2-4 | A | règle | Verbe essentiellement pronominal : accord avec le sujet | elles se sont évanoui → évanouies | r: essentiellement pronominal*, toujours pronominal*, n'existe qu'a la forme pronominale, n'existe pas sans se, uniquement pronominal* ; t: pronominal, participe |
| `pron.se-cod` | 2-4 | A | règle | Se COD : accord avec se, donc le sujet | elles se sont salué → saluées | r: se est cod, se est complement d'objet direct, se est le cod, pronom se est cod, se cod, cod se ; t: pronominal, participe |
| `pron.se-coi` | 3-4 | A | règle | Se COI (parler à, plaire à, succéder à) : invariable | elles se sont parlées → parlé | r: se est coi, se est complement d'objet indirect, se est complement indirect, se est le coi ; w: parlé, succédé, plu, ri, souri, nui, menti, suffi, ressemblé, téléphoné, écrit, répondu ; t: pronominal |
| `pron.cod-apres` | 3-4 | A | règle | COD placé après le verbe : invariable | elles se sont lavées les mains → lavé | r: cod est place apres, cod place apres, cod est apres, cod suit ; t: pronominal |
| `pron.cod-avant` | 3-4 | B | règle | COD antéposé d'un pronominal | les mains qu'elle s'est lavé → lavées | a: que, cod ; t: pronominal ; x: apres |
| `pron.sens-passif` | 3-4 | B | règle | Pronominal de sens passif : accord avec le sujet | ces romans se sont bien vendu → vendus | r: sens passif, valeur passive ; t: pronominal, participe |
| `pron.rendre-compte` | 3-4 | A | règle | Se rendre compte : rendu invariable | elles se sont rendues compte → rendu | r: rendre compte ; w: rendu, rendue, rendus, rendues ; t: pronominal |
| `pron.se-faire-laisser` | 4 | B | règle | Se faire suivi d'un infinitif : fait invariable | elles se sont faites opérer → fait | a: se faire, infinitif ; t: pronominal |
| `pron.s-arroger` | 4 | C | règle | S'arroger : accord avec le COD, jamais avec le sujet | elles se sont arrogées le droit → arrogé | r: arroge* ; t: pronominal, participe |
| `pron.se-plaire-rire` | 4 | C | règle | Se plaire, se complaire, se rire, se déplaire : invariables | elles se sont plues ici → plu | r: se plaire, se complaire, se rire, se deplaire ; w: plu, complu, déplu ; t: pronominal |
| `pron.reciproque` | 3-4 | B | règle | Pronominal réciproque : accord si se est COD | ils se sont battu → battus | r: reciproque*, l'un l'autre, les uns les autres ; t: pronominal |
| `pron.autres` | 2-4 | B | famille | Pronominaux, autres cas (règle expliquée sans mot-clé reconnu) | | n: 4e.accords.pp-pronominaux ; t: pronominal |

## Accord du verbe avec le sujet

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `sv.terminaisons` | 1 | A | famille | Marque du pluriel du verbe (-ent, -aient, -ont) | les enfants joue → jouent | n: cm1.accords.sujet-verbe-pronom, cm1.conj.marques-personne ; r: 3e personne du pluriel, 3e personne du singulier, -ent, -aient ; a: le sujet, pluriel ; t: accord, temps |
| `sv.nom-noyau` | 1-3 | A | règle | Sujet éloigné ou suivi d'un complément du nom | le bruit des vagues bercent → berce | n: cm1.accords.sujet-verbe-nom-noyau, 3e.accords.sujet-gn-complement-du-nom, 5e.accords.sujet-separe ; r: nom noyau, sujet eloigne, separe du verbe, et non avec ; t: accord, temps |
| `sv.sujet-inverse` | 1-3 | A | règle | Sujet inversé placé après le verbe | où courait les enfants → couraient | n: cm2.accords.sujet-inverse ; r: inverse*, place apres le verbe, apres le verbe ; t: accord, temps |
| `sv.qui-antecedent` | 2-4 | A | règle | Qui sujet : accord avec l'antécédent | c'est moi qui a gagné → ai | n: 4e.accords.qui-relatif-sujet ; r: antecedent, qui reprend ; t: accord, temps |
| `sv.un-des-qui` | 3-4 | C | règle | Un des ... qui : accord selon le sens | c'est un des rares joueurs qui sait → savent | r: un des, une des ; t: accord |
| `sv.plusieurs-sujets` | 1-3 | A | règle | Plusieurs sujets coordonnés : pluriel | le cor et le violon joue → jouent | n: 5e.accords.sujet-plusieurs-noms ; r: plusieurs sujets, deux sujets, sujets coordonnes, coordonnes par et, sujet multiple ; t: accord |
| `sv.personnes-differentes` | 2-4 | B | règle | Sujets de personnes différentes : la 1re l'emporte | toi et moi irons, toi et lui irez | n: 4e.accords.sujet-plusieurs-personnes ; r: toi et moi, lui et moi, personnes differentes, la 1re personne l'emporte ; t: accord |
| `sv.ou-ni` | 3-4 | B | règle | Sujets joints par ou, ni : singulier si exclusion | ni Paul ni Jean ne sera élu (un seul poste) | r: joints par ou, joints par ni, relies par ou, relies par ni, ni l'un ni l'autre ; t: accord |
| `sv.ainsi-que` | 3-4 | B | règle | Ainsi que, de même que, comme comparatifs : accord avec le premier sujet | le capitaine, ainsi que ses hommes, sont → est | r: ainsi que, de meme que, aussi bien que, comparaison ; t: accord, quantite |
| `sv.collectif` | 2-4 | A | règle | Nom collectif suivi d'un complément : accord selon le sens | une nuée d'oiseaux s'envolèrent / s'envola | n: 3e.accords.sujet-collectif-distributif ; r: collectif, une foule, une nuee, une multitude, une bande, une troupe, un groupe de, une horde, un essaim ; t: accord, quantite |
| `sv.la-plupart` | 2-4 | A | règle | La plupart : pluriel | la plupart des joueurs est → sont | r: la plupart ; t: accord, quantite |
| `sv.plus-d-un` | 3-4 | A | règle | Plus d'un : singulier | plus d'un supporter ont → a | r: plus d'un ; t: accord, quantite |
| `sv.moins-de-deux` | 3-4 | B | règle | Moins de deux, plus de deux : pluriel | moins de deux semaines a suffi → ont | r: moins de deux, plus de deux ; t: accord, quantite |
| `sv.adverbes-quantite` | 2-4 | B | règle | Beaucoup de, peu de, bon nombre de, trop de : accord avec le complément | beaucoup de spectateurs applaudit → applaudissent | r: beaucoup de, peu de, bon nombre, nombre de, quantite de, tant de, trop de, assez de, combien de, force ; t: accord, quantite |
| `sv.fraction-pourcentage` | 3-4 | C | règle | La moitié, le quart, un tiers, pourcentage : accord selon le sens | la moitié des places était → étaient | r: moitie, le quart, un tiers, pourcentage, fraction, la majorite ; t: accord, quantite |
| `sv.l-un-et-l-autre` | 3-4 | B | règle | L'un et l'autre (pluriel), l'un ou l'autre (singulier) | l'un et l'autre est venu → sont venus | r: l'un et l'autre, l'un ou l'autre ; t: accord, quantite |
| `sv.c-est-ce-sont` | 2-4 | B | règle | Ce sont devant un pluriel | c'est eux qui → ce sont eux | r: ce sont, c'etaient, ce furent, ce seront ; t: accord, quantite, syntaxe |
| `sv.chacun` | 2-4 | B | règle | Chacun, chaque : singulier | chacun des joueurs ont → a | r: chacun, chacune ; t: accord, quantite |
| `sv.ce-qui` | 3-4 | C | règle | Ce qui, ce que : verbe au singulier | ce qui l'inquiètent → l'inquiète | r: ce qui ; t: accord |
| `sv.vous-politesse` | 2-3 | C | règle | Vous de politesse : verbe au pluriel, attribut au singulier | vous êtes prêts → prêt (une personne) | r: politesse, vouvoie* ; t: accord |
| `sv.titre-nom-propre` | 4 | C | règle | Sujet titre d'œuvre ou nom propre au pluriel | Les Misérables a paru | r: titre de l'oeuvre, titre d'une oeuvre ; t: accord |
| `sv.autres` | 1-4 | B | famille | Accords, autres cas (règle expliquée sans mot-clé reconnu) | | t: accord, quantite |

## Accord de l'adjectif, de l'attribut, de l'apposition

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `adj.epithete` | 1-2 | A | famille | Adjectif épithète accordé avec le nom | des pièces blanche → blanches | n: cm1.accords.gn-regulier, 6e.accords.gn-maitrise, 5e.accords.gn-raisonnement, cm1.accords.gn-donneur ; r: l'adjectif s'accorde, adjectif epithete, epithete ; t: accord |
| `adj.attribut-sujet` | 1-3 | A | règle | Attribut du sujet accordé avec le sujet | les nuits sont longue → longues | n: cm2.accords.attribut-sujet, 3e.accords.adjectif-epithete-attribut ; r: attribut du sujet, l'attribut, attribut ; t: accord |
| `adj.apposition` | 2-4 | B | règle | Adjectif ou participe apposé, détaché | épuisé, les coureuses → épuisées | n: 3e.accords.adjectif-apposition ; r: apposition, appose*, detache* ; t: accord, participe |
| `adj.plusieurs-noms` | 2-4 | A | règle | Adjectif pour plusieurs noms : pluriel, masculin s'ils sont de genres différents | une veste et un pantalon noires → noirs | r: plusieurs noms, deux noms, masculin l'emporte, genres differents, se rapporte a la fois ; t: accord |
| `adj.feminins-irreguliers` | 1-4 | B | règle | Féminins irréguliers (-eux/-euse, -f/-ve, bénigne, maligne, favorite, coite, fraîche, traîtresse) | une tumeur bénine → bénigne | r: feminin de, forme feminine ; w: bénigne, maligne, favorite, coite, fraîche, rousse, sèche, traîtresse, vengeresse, enchanteresse, pécheresse, chasseresse, douce, jalouse, fausse, épaisse, grecque, turque, publique, caduque, franque, longue, oblongue ; t: accord, lexique |
| `adj.pluriels-als` | 2-4 | B | règle | Adjectifs en -al au pluriel en -als (banals, navals, fatals, natals, bancals, finals) | des combats navaux → navals | w: banals, navals, fatals, natals, bancals, finals, tonals, chorals, glacials ; r: -als |
| `adj.adverbial` | 2-4 | B | règle | Adjectif employé comme adverbe : invariable (voler bas, coûter cher, sentir bon) | elles chantent fausses → faux | r: employe comme adverbe, emploi adverbial, adverbialement, valeur d'adverbe, valeur adverbiale, sens adverbial ; t: accord, invariable |
| `adj.avoir-l-air` | 3-4 | C | règle | Avoir l'air : accord avec le sujet ou avec air selon le sens | elle a l'air sérieux → sérieuse | r: avoir l'air, a l'air ; t: accord |
| `adj.possible` | 3-4 | B | règle | Le plus de ... possible : possible invariable | le plus de points possibles → possible | r: possible ; t: accord, invariable |
| `adj.feu` | 4 | C | règle | Feu (défunt) accordé seulement entre déterminant et nom | la feu reine → la feue reine | w: feu, feue, feus, feues ; r: defunt* ; t: accord, invariable |
| `adj.composes` | 3-4 | B | règle | Adjectifs composés : nouveau-nés, court-vêtus, ivres morts, grand ouverts | des enfants nouveaux-nés → nouveau-nés | r: adjectif compose, adjectifs composes ; w: nouveau-nés, nouveau-nées, mort-nés, court-vêtus, court-vêtues, ivres morts, grand ouverts, grand ouvertes, frais émoulus, avant-derniers, tout-puissants |
| `adj.participe-attribut-cod` | 4 | C | règle | Attribut du COD accordé avec le COD | je les trouve charmant → charmants | r: attribut du cod, attribut de l'objet ; t: accord |
| `adj.se-faire-fort` | 4 | C | règle | Se faire fort de : fort invariable | elles se font fortes de → fort | r: se faire fort, se font fort |

## Genre des noms

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `genre.masculins-trompeurs` | 2-4 | A | règle | Noms masculins pris pour féminins (un effluve, un haltère, un armistice, un apogée, un astérisque, un tentacule, un pétale, un antidote, un hémisphère, un éloge, un emblème, un pore, un ovule, un intervalle, un obélisque, un opprobre, un tubercule, un viscère, un ulcère, un augure, un entracte, un équinoxe, un esclandre, un hospice, un indice, un isthme, un météore, un planisphère, un amalgame, un anathème, un chrysanthème, un trophée) | de lourdes effluves → lourds | r: nom masculin, est masculin, est un masculin, toujours masculin ; w: effluve*, haltère*, armistice*, apogée*, astérisque*, tentacule*, pétale*, antidote*, hémisphère*, éloge*, emblème*, ovule*, obélisque*, opprobre*, tubercule*, viscère*, ulcère*, entracte*, équinoxe*, esclandre*, isthme*, météore*, planisphère*, amalgame*, anathème*, chrysanthème* ; x: sujet est masculin |
| `genre.feminins-trompeurs` | 2-4 | A | règle | Noms féminins pris pour masculins (une oasis, une atmosphère, une épithète, une apostrophe, une alcôve, une algèbre, une amnistie, une anagramme, une azalée, une écritoire, une égide, une éphéméride, une épigramme, une épitaphe, une équivoque, une icône, une mappemonde, une nacre, une oriflamme, une orbite, une stalactite, une stalagmite, une urticaire, une paroi, une argile, une espèce, une idole, une réglisse, une immondice, une primeur, une acné, une ancre, une câpre) | un oasis feutré → une oasis feutrée | r: nom feminin, est feminin, est un feminin, toujours feminin ; w: oasis, atmosphère*, épithète*, apostrophe*, alcôve*, algèbre, amnistie*, anagramme*, azalée*, écritoire*, égide, éphéméride*, épigramme*, épitaphe*, équivoque*, icône*, mappemonde*, oriflamme*, orbite*, stalactite*, stalagmite*, urticaire, paroi*, argile*, idole*, immondice*, câpre* ; x: sujet est feminin |
| `genre.selon-sens` | 3-4 | B | règle | Genre qui change avec le sens (le/la manche, le/la tour, le/la voile, le/la poste, le/la mémoire, le/la mousse, le/la vase, le/la livre, le/la moule, le/la critique, le/la solde, le/la greffe) | un voile gonflé par le vent → une voile gonflée | r: selon le sens, change de genre, change de sens selon, genre different, au masculin designe, au feminin designe |
| `genre.amour-delice-orgue` | 4 | B | règle | Amour, délice, orgue : masculins au singulier, féminins au pluriel | de grands orgues → de grandes orgues | r: amour*, delice*, orgue* ; w: délices, orgues, amours ; t: accord |
| `genre.gens` | 4 | B | règle | Gens : féminin pour l'adjectif placé avant | de vieux gens → de vieilles gens | r: gens ; t: accord |
| `genre.chose-personne` | 3-4 | C | règle | Quelque chose, personne, rien (pronoms) : masculin | quelque chose de belle → beau | r: quelque chose, pronom personne, pronom rien ; t: accord |
| `genre.epicenes` | 1-2 | B | règle | Noms épicènes : le déterminant porte le genre (une élève, une adversaire, une partenaire) | un élève (une fille) → une élève | r: epicene*, meme forme au masculin et au feminin, meme forme aux deux genres ; t: accord |
| `genre.feminin-noms-animes` | 1-2 | B | règle | Féminin des noms (-eur/-euse, -teur/-trice, -esse) | une directeuse → directrice | n: cm1.accords.feminin ; r: feminin du nom, -trice, -euse, -esse, -resse ; t: accord, lexique |

## Pluriel des noms

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `plur.s-regulier` | 1 | A | famille | Pluriel en -s après un déterminant pluriel | les arbitre → arbitres | n: cm1.accords.variations-determinants ; r: on ajoute un s, prend un s, le nom est au pluriel, le nom se met au pluriel ; t: accord |
| `plur.al-aux` | 1-2 | A | règle | Noms en -al : -aux | des chevals → chevaux | n: cm1.accords.pluriels-x-aux ; r: -al, en -aux ; x: -als, -ail |
| `plur.al-als` | 2-3 | B | règle | Exceptions en -als (bals, carnavals, chacals, festivals, récitals, régals) | des festivaux → festivals | w: bals, carnavals, chacals, festivals, récitals, régals, narvals, cérémonials ; r: -als |
| `plur.ail-aux` | 2-3 | B | règle | Noms en -ail en -aux (travaux, vitraux, coraux, émaux, soupiraux, vantaux, baux) | des vitrails → vitraux | w: travaux, vitraux, coraux, émaux, soupiraux, vantaux, baux, vitrails, corails, émails ; r: -ail |
| `plur.ou-oux` | 1-2 | A | règle | Les sept noms en -ou qui prennent x | des bijous → bijoux | w: bijoux, cailloux, choux, genoux, hiboux, joujoux, poux, bijous, caillous, genous, hibous ; r: -ou, -oux |
| `plur.eu-au-eau` | 1-2 | B | règle | -eau, -au, -eu en x ; exceptions landaus, sarraus, bleus, pneus, émeus | des pneux → pneus | w: landaus, sarraus, bleus, pneus, émeus, lieus, feux, jeux, cheveux, tuyaux, noyaux, joyaux, boyaux, pneux ; r: -eu, -eau, -au, en -x |
| `plur.s-x-z-invariables` | 1-2 | B | règle | Noms en -s, -x, -z : invariables au pluriel | des nez, des prix, des repas | r: ne change pas au pluriel, se termine deja par, finit deja par, invariable au pluriel ; t: accord, lexique |
| `plur.aieux-cieux-yeux` | 3-4 | C | règle | Doubles pluriels selon le sens (aïeux/aïeuls, cieux/ciels, yeux/œils) | les ciels de lit, les œils-de-bœuf | w: aïeux, aïeuls, cieux, ciels, œils*, yeux ; r: aieux, aieuls, ciels, cieux |
| `plur.toujours-pluriel` | 3-4 | B | règle | Noms sans singulier (arrhes, funérailles, obsèques, ténèbres, mœurs, prémices, condoléances, fiançailles, vivres, entrailles, affres, armoiries, pourparlers, décombres, sévices) | verser une arrhe → des arrhes | r: toujours au pluriel, que pluriel, que le pluriel, s'emploie au pluriel, pas de singulier, sans singulier ; w: arrhes, funérailles, obsèques, ténèbres, mœurs, prémices, condoléances, fiançailles, vivres, entrailles, affres, armoiries, pourparlers, décombres, sévices, annales, alentours, agissements, représailles, vêpres ; x: le plus souvent |
| `plur.noms-propres` | 4 | C | règle | Pluriel des noms propres (les Dupont, les Bourbons, des Molières) | les Bourbon → les Bourbons | r: nom propre, noms propres, nom de famille, dynastie* ; t: accord |
| `plur.complement-singulier` | 2-4 | B | règle | Complément du nom ou après sans : nombre selon le sens (des pots de confiture, sans faute, des coups de pied) | des confitures de fraise → fraises | r: reste au singulier, reste au pluriel, apres sans, complement du nom reste, se met au pluriel par le sens, au singulier car ; t: accord, compose |
| `plur.distributif` | 3-4 | C | règle | Singulier distributif (ils ont levé la main, ôté leur chapeau) | ils ont levé les mains → la main | r: distributi* ; t: accord |
| `plur.notes-lettres` | 3-4 | C | règle | Lettres, notes de musique, mots pris comme noms : invariables | des dos → des do | r: note de musique, notes de musique, lettre de l'alphabet, mot pris comme nom ; t: accord, invariable |

## Noms composés

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `comp.nom-nom` | 2-4 | A | règle | Nom + nom apposé : les deux au pluriel (choux-fleurs, wagons-lits, oiseaux-mouches) | des chou-fleurs → choux-fleurs | r: deux noms, nom + nom, noms apposes, deux elements sont des noms ; w: choux-fleurs, wagons-lits, oiseaux-mouches, bateaux-mouches, chefs-lieux, loups-garous, cafés-concerts ; t: compose |
| `comp.adjectif-adjectif` | 3-4 | C | règle | Adjectif + adjectif : les deux variables (sourds-muets, chauds-froids, aigres-doux) | des chaud-froids → chauds-froids | r: deux adjectifs ; w: sourds-muets, chauds-froids, chaud-froids, aigres-doux, clairs-obscurs ; t: compose |
| `comp.nom-complement` | 2-4 | A | règle | Nom + complément : seul le premier au pluriel (chefs-d'œuvre, arcs-en-ciel, timbres-poste, eaux-de-vie, pots-de-vin) | des chef-d'œuvres → chefs-d'œuvre | r: complement du nom, nom complement, nom et son complement, role d'un complement ; w: chefs-d'œuvre, chef-d'œuvre, chef-d'œuvres, arcs-en-ciel, timbres-poste, eaux-de-vie, pots-de-vin, crocs-en-jambe, hors-d'œuvre, coqs-à-l'âne, pommes de terre, salles à manger ; t: compose |
| `comp.adjectif-nom` | 2-4 | A | règle | Adjectif + nom : les deux au pluriel (coffres-forts, basses-cours, rouges-gorges, plates-bandes, sages-femmes, hauts-fourneaux, beaux-arts, francs-maçons) | des coffre-forts → coffres-forts | r: adjectif et nom, adjectif + nom, nom et adjectif, nom + adjectif, le nom et l'adjectif, l'adjectif et le nom ; w: coffres-forts, basses-cours, rouges-gorges, plates-bandes, sages-femmes, hauts-fourneaux, beaux-arts, belles-lettres, francs-maçons, coffre-forts, basse-cours ; t: compose |
| `comp.verbe-nom` | 2-4 | B | règle | Verbe + nom : le verbe reste invariable ; pluriel du nom seulement là où les deux usages s'accordent (des tire-bouchons, des porte-avions, des couvre-lits) | des tires-bouchons → tire-bouchons | r: verbe et nom, verbe + nom, element verbal, le verbe reste invariable, le verbe ne prend jamais ; a: verbe, ne prend pas ; t: compose |
| `comp.invariable-nom` | 2-4 | B | règle | Mot invariable + nom : seul le nom varie (avant-postes, arrière-boutiques, sous-sols, haut-parleurs, contre-attaques, en-têtes) | des hauts-parleurs → haut-parleurs | r: preposition et nom, adverbe et nom, mot invariable, element invariable, prefixe invariable, seul le nom prend ; w: avant-*, avants-*, arrière-*, arrières-*, haut-parleurs, hauts-parleurs, arrière-boutiques, avant-postes, sous-sols, contre-attaques, en-têtes, avant-gardes, arrière-pensées, arrière-gardes ; t: compose |
| `comp.verbe-verbe-phrase` | 3-4 | B | règle | Composés verbe + verbe ou locutions-phrases : invariables (laissez-passer, va-et-vient, on-dit, savoir-faire, ouï-dire, faire-part, rendez-vous, tête-à-tête, pince-sans-rire) | des va-et-viens → va-et-vient | r: deux verbes, verbe + verbe, locution invariable, groupe de mots invariable ; w: laissez-passer, va-et-vient, va-et-viens, on-dit, savoir-faire, savoir-vivre, ouï-dire, faire-part, rendez-vous, tête-à-tête, pince-sans-rire, cessez-le-feu, sauve-qui-peut, qu'en-dira-t-on, je-ne-sais-quoi ; t: compose |
| `comp.garde` | 4 | C | règle | Garde- : variable si personne (gardes-chasses), invariable si objet (garde-boue) | des garde-malades → gardes-malades | r: garde ; w: gardes-*, garde-* ; t: compose |
| `comp.bonshommes-mesdames` | 2-4 | B | règle | Composés soudés à double marque (bonshommes, gentilshommes, mesdames, messieurs, mesdemoiselles, messeigneurs) | des bonhommes de neige → bonshommes | w: bonshommes, gentilshommes, mesdames, messieurs, mesdemoiselles, messeigneurs, bonhommes, gentilhommes |
| `comp.structure` | 2-4 | A | famille | Pluriel des composés, raisonnement par nature des éléments | des grands-pères | n: 4e.voc.composition ; r: nom compose, noms composes, mot compose ; t: compose, accord |
| `comp.autres` | 2-4 | B | famille | Composés, nombres, couleurs, autres cas | | t: compose |

## Adjectifs de couleur

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `coul.simple` | 1-2 | B | règle | Adjectif de couleur simple : accord (des robes vertes) | des yeux bleu → bleus | a: couleur, accorde ; t: accord, compose ; x: invariable |
| `coul.nom-invariable` | 2-4 | A | règle | Nom employé comme couleur : invariable (marron, orange, cerise, olive, ivoire, turquoise, émeraude, crème, paille, kaki, saumon, ocre, noisette, acajou) | des yeux marrons → marron | a: couleur, invariable ; w: marron, marrons, orange, oranges, cerise, cerises, olive, olives, ivoire, turquoise, turquoises, émeraude, émeraudes, crème, crèmes, paille, kaki, kakis, saumon, saumons, ocre, ocres, noisette, noisettes, acajou, acajous, chocolat, abricot, prune, safran, indigo, lilas, grenat, corail, sable, ardoise, citron, moutarde, bordeaux ; t: compose, accord, invariable |
| `coul.exceptions-accordees` | 3-4 | B | règle | Exceptions qui s'accordent : rose, mauve, pourpre, écarlate, fauve, incarnat | des rubans rose → roses | w: roses, mauves, pourpres, écarlates, fauves, incarnats, incarnates ; a: couleur, exception ; t: compose, accord |
| `coul.composes` | 3-4 | A | règle | Couleur composée ou nuancée : invariable (bleu marine, vert foncé, gris perle, bleu-vert) | des vestes bleues marine → bleu marine | a: couleur, compose* ; w: bleu marine, vert foncé, bleu clair, vert pomme, gris perle, bleu-vert, bleu nuit, jaune paille, gris-bleu, rouge sang, vert bouteille, bleu ciel, vert d'eau, bleues marine, vertes foncées ; t: compose, accord, invariable |
| `coul.distributif` | 4 | C | règle | Couleurs distributives (des drapeaux bleu, blanc, rouge : chacun tricolore) | des drapeaux bleus, blancs, rouges (tricolores) → bleu, blanc, rouge | a: couleur, chacun ; t: compose, accord |

## Nombres

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `nb.vingt-cent` | 2-4 | A | règle | Vingt et cent prennent s multipliés et non suivis d'un autre nombre | quatre-vingt marins → quatre-vingts ; deux cents trois → deux cent trois | r: vingt, cent, cents, vingts ; w: quatre-vingts, quatre-vingt, cents, cent, vingts ; x: centaine, pour cent, pourcentage |
| `nb.vingt-cent-ordinal` | 4 | B | règle | Vingt, cent à valeur ordinale (page, année) : invariables | la page quatre-vingts → quatre-vingt | a: ordinal, vingt ; r: valeur ordinale, sens ordinal, numero d'ordre |
| `nb.mille` | 2-4 | A | règle | Mille (nombre) invariable | trois milles ans → mille | w: mille, milles ; r: mille ; x: millier, mille marin |
| `nb.million-millier` | 2-4 | B | règle | Millier, million, milliard : noms, variables | deux million → millions | w: millions, milliards, milliers, million, milliard, millier ; r: million*, milliard*, millier* |
| `nb.vingt-et-un` | 2-3 | C | règle | Vingt et une, cent un : accord en genre de un | vingt et un pages → une | r: vingt et une, et une, trente et une ; w: vingt et une, trente et une |
| `nb.cardinaux-invariables` | 1-2 | B | règle | Les adjectifs numéraux cardinaux sont invariables (sauf vingt, cent, un) | les quatres saisons → quatre | r: cardinal, cardinaux, numeral, numeraux, adjectif numeral ; w: quatre, quatres, trois, troiss, deux, deuxs ; t: compose, accord, invariable |
| `nb.ordinaux-abreges` | 2-3 | C | règle | Abréviations des ordinaux : 1er, 1re, 2e (pas 2ème) | le 2ème étage → 2e | r: abreviation*, ordinal abrege, -eme ; w: 1er, 1re, 2e, 2ème, 2nd, 3e, 3ème ; t: typographie, compose |

## Déterminants et indéfinis

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `det.tous-toutes` | 1-2 | A | règle | Tout déterminant ou pronom : tous, toutes | tout les jours → tous | r: tous les, toutes les, determinant tout, pronom tous, tout determinant ; w: tous, toutes ; t: invariable, accord, homophone |
| `det.tout-adverbe` | 2-4 | A | règle | Tout adverbe (tout à fait) invariable devant voyelle ou masculin | ils sont tous émus → tout émus | r: tout adverbe, tout est adverbe, tout est ici adverbe, signifie entierement, signifie tout a fait, signifie completement, tout est invariable ; t: invariable, accord |
| `det.tout-adverbe-euphonie` | 3-4 | A | règle | Tout adverbe variable devant adjectif féminin à consonne ou h aspiré | elle est tout honteuse → toute honteuse | a: tout, consonne ; r: h aspire ; t: invariable, accord ; x: participe |
| `det.tout-locutions` | 3-4 | C | règle | Tout dans les locutions (de tout temps, en tout cas, de toutes parts, tout autre, à tout prix) | en tous cas → en tout cas | r: tout autre, en tout cas, de toutes parts, a tout prix, de tout temps, en tous sens, tous azimuts, tout entier* ; t: invariable, accord |
| `det.quelque-determinant` | 2-3 | A | règle | Quelque(s) déterminant : accord avec le nom | quelque jours → quelques jours | a: quelque, determinant ; r: quelques ; t: invariable, accord ; x: quel que, environ |
| `det.quelque-adverbe` | 3-4 | A | règle | Quelque adverbe (environ ; quelque + adjectif + que) invariable | quelques cinquante joueurs → quelque cinquante | r: environ, quelque adverbe, quelque est adverbe, quelque est ici adverbe, aussi devant un adjectif ; t: invariable |
| `det.quel-que` | 3-4 | A | règle | Quel que (+ être) : quel accordé avec le sujet | quelque soit le temps → quel que soit | r: quel que, quelle que, quels que, quelles que ; w: quel que, quelle que, quels que, quelles que ; t: invariable, homophone, accord |
| `det.quelquefois` | 2-3 | C | règle | Quelquefois (parfois) ou quelques fois (plusieurs fois) | quelque fois → quelquefois | w: quelquefois, quelques fois, quelque fois ; r: quelquefois |
| `det.meme` | 2-4 | A | règle | Même adjectif (variable) ou adverbe (invariable) | même les enfants, eux-mêmes, les mêmes | r: meme, memes ; w: même, mêmes, *-même, *-mêmes ; t: invariable, accord, typographie |
| `det.tel` | 3-4 | B | règle | Tel, tel que, tel quel : accord | tel les vagues → telles les vagues | r: tel, telle, tels, telles, tel que, tel quel ; w: tel, telle, tels, telles ; t: invariable, accord |
| `det.chaque` | 1-2 | B | règle | Chaque : toujours singulier | chaques joueurs → chaque joueur | r: chaque ; w: chaque, chaques ; t: invariable, accord, quantite |
| `det.leur` | 1-3 | A | règle | Leur pronom (invariable) ou déterminant (leur, leurs) | il leurs parle → leur | n: 5e.gram.determinants-vs-pronoms ; w: leur, leurs |
| `det.aucun-nul` | 2-4 | B | règle | Aucun, nul : singulier sauf noms sans singulier (aucuns frais) | aucunes nouvelles → aucune nouvelle | a: aucun, singulier ; r: nul, nulle ; w: aucun, aucune, aucuns, aucunes, nul, nulle |
| `det.maint-divers` | 4 | C | règle | Maint, divers, différents, certains : accord | maintes fois | r: maint*, divers, differents ; w: maint, maints, mainte, maintes |

## Invariables et mots à accord piège

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `inv.demi` | 2-4 | A | règle | Demi invariable devant (demi-heure), accordé en genre après (et demie) | une demie-heure → demi-heure | r: demi, demie ; w: demi, demie, demis, demies, demi-*, demie-* |
| `inv.semi-mi` | 3-4 | C | règle | Semi, mi : invariables et liés par un trait d'union | à la mi-temps | r: semi, mi ; w: mi-*, semi-* |
| `inv.nu` | 3-4 | B | règle | Nu invariable devant le nom (nu-pieds), accordé après (pieds nus) | nus-pieds → nu-pieds | r: nu ; w: nu, nus, nue, nues, nu-* |
| `inv.excepte-vu-compris` | 3-4 | B | règle | Excepté, vu, compris, passé, ci-joint, étant donné invariables placés avant le nom | ci-jointes les pièces → ci-joint | r: excepte, y compris, non compris, etant donne, ci-joint, ci-inclus ; w: ci-joint, ci-jointe, ci-jointes, ci-inclus, ci-incluse, excepté, exceptés, étant donné ; t: invariable, participe, accord |
| `inv.adverbes` | 1-2 | A | famille | Adverbes invariables (souvent, toujours, longtemps, beaucoup) | souvents → souvent | n: cm1.gram.adverbes-invariables ; r: adverbe est invariable, adverbe invariable, est un adverbe, adverbes sont invariables ; t: invariable, lexique |
| `inv.adverbes-graphie` | 2-4 | B | règle | Graphie des adverbes et prépositions (volontiers, jadis, désormais, parmi, guère, naguère, hormis, certes) | parmis → parmi | w: volontiers, volontier, jadis, désormais, parmi, parmis, guère, guères, naguère, hormis, certes, alentour, alors, toutefois, quelquefois, néanmoins, dorénavant, aussitôt, sitôt, tantôt ; r: parmi, volontiers, guere |
| `inv.locutions-adverbiales` | 3-4 | B | règle | Locutions figées (à l'envi, d'ores et déjà, à bon escient, à brûle-pourpoint, d'arrache-pied, à tue-tête, au fur et à mesure, à l'instar) | à l'envie → à l'envi | r: locution adverbiale, locution figee, locution ; w: envi, ores, escient, tue-tête, brûle-pourpoint, arrache-pied, califourchon, instar, sur-le-champ, fur ; t: invariable, lexique, sens, homophone |
| `inv.participe-present` | 3-4 | B | règle | Participe présent invariable (les joueurs, sachant que) | les enfants courants → courant | r: participe present est invariable, participe present ne s'accorde, participe present, gerondif ; t: accord, invariable, participe |
| `inv.soi-disant` | 3-4 | C | règle | Soi-disant toujours invariable | des soi-disants experts → soi-disant | w: soi-disant, soi-disants, soi-disante, soi-disantes ; r: soi-disant |
| `inv.autres` | 1-4 | B | famille | Invariables, autres cas | | t: invariable |

## Adverbes en -ment

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `adv.emment-amment` | 2-4 | A | règle | -ant donne -amment, -ent donne -emment | prudament → prudemment | r: -emment, -amment, emment, amment ; w: *emment, *amment, *ament, *ement ; t: adverbe ; x: e accent aigu, -ement |
| `adv.formation-feminin` | 1-2 | B | règle | Adverbe formé sur le féminin de l'adjectif | lentment → lentement | a: feminin, adverbe ; t: adverbe |
| `adv.voyelle-ment` | 2-4 | B | règle | Adjectif en voyelle : -ment sans e (vraiment, éperdument, résolument, absolument, gaiement) | vraiement → vraiment | r: sans e, pas de e, voyelle ; w: vraiment, vraiement, éperdument, éperduement, résolument, résoluement, absolument, ingénument, gaiement, joliment, poliment, hardiment, infiniment ; t: adverbe |
| `adv.ement` | 3-4 | B | règle | -ément (énormément, précisément, aveuglément, profondément, communément, confusément, intensément, expressément, obscurément, impunément) | énormement → énormément | r: -ement, e accent aigu, ement ; w: énormément, précisément, aveuglément, profondément, communément, confusément, intensément, expressément, obscurément, impunément, opiniâtrément, uniformément, conformément, immensément ; t: adverbe ; x: -emment |
| `adv.irreguliers` | 3-4 | C | règle | Formations irrégulières (gentiment, brièvement, grièvement, traîtreusement, nuitamment, sciemment, notamment) | gentillement → gentiment | w: gentiment, brièvement, grièvement, nuitamment, sciemment, notamment, précipitamment, traîtreusement ; t: adverbe |
| `adv.famille` | 1-4 | B | famille | Adverbes en -ment, autres cas | | t: adverbe |

## Homophones grammaticaux

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `homo.a-a` | 1 | A | règle | a / à | il à gagné → a | n: cm1.homo.a-a ; w: a, à, as ; t: homophone |
| `homo.et-est` | 1 | A | règle | et / est | il et parti → est | n: cm1.homo.et-est ; w: et, est, es ; t: homophone |
| `homo.on-ont` | 1 | A | règle | on / ont / on n' | ils on fini → ont | n: cm1.homo.on-ont ; w: on, ont, on n'a, on a ; t: homophone |
| `homo.son-sont` | 1 | A | règle | son / sont | ils son prêts → sont | n: cm1.homo.son-sont ; w: son, sont ; t: homophone |
| `homo.ou-ou` | 1-2 | A | règle | ou / où | là ou il va → où | n: cm1.homo.ou-ou ; w: ou, où ; t: homophone |
| `homo.ce-se-c-est-s-est` | 1-2 | A | règle | ce / se ; c'est / s'est / sait | il c'est levé → s'est | n: cm1.homo.ce-se ; w: ce, se, c'est, s'est, sait, ses, ces ; r: pronom se ; t: homophone ; x: ces, ses |
| `homo.ces-ses` | 1-2 | A | règle | ces / ses / c'est / s'est | il range ces affaires (les siennes) → ses | n: cm1.homo.ces-ses ; w: ces, ses ; t: homophone |
| `homo.la-la-l-a` | 1-2 | A | règle | la / là / l'a / l'as | il la vu → l'a | w: la, là, l'a, l'as ; t: homophone |
| `homo.mais-mes-met` | 1-2 | B | règle | mais / mes / met / mets | mes la tour → mais | n: 4e.homo.mais-mes ; w: mais, mes, met, mets ; t: homophone |
| `homo.peu-peut` | 1-2 | B | règle | peu / peut / peux | il peu jouer → peut | w: peu, peut, peux ; t: homophone |
| `homo.dans-d-en` | 1-2 | B | règle | dans / d'en | il revient dans haut → d'en haut | w: dans, d'en ; t: homophone |
| `homo.sans-s-en-c-en` | 2-3 | B | règle | sans / s'en / c'en / sent | il sans va → s'en | w: sans, s'en, c'en, sent ; t: homophone |
| `homo.quand-quant-qu-en` | 2-3 | A | règle | quand / quant à / qu'en | quand à lui → quant | n: 4e.homo.quand-quant-quen ; w: quand, quant, qu'en, camp ; t: homophone |
| `homo.si-s-y-ci` | 2-3 | B | règle | si / s'y / ci | il si rend → s'y | n: 4e.homo.si-sy ; w: si, s'y, ci, scie ; t: homophone |
| `homo.ni-n-y` | 2-3 | B | règle | ni / n'y | il ni va pas → n'y | n: 4e.homo.ni-ny ; w: ni, n'y, nie ; t: homophone |
| `homo.quel-qu-elle` | 2-3 | B | règle | quel(le) / qu'elle | quelle vienne → qu'elle | n: 4e.homo.que-quelle ; w: qu'elle, qu'elles, quelle, quelles ; t: homophone |
| `homo.qui-qu-il` | 2-3 | C | règle | qui / qu'il / qu'ils | ce qui lui faut → ce qu'il lui faut | w: qu'il, qu'ils, qui ; t: homophone, syntaxe |
| `homo.plutot-plus-tot` | 2-4 | B | règle | plutôt / plus tôt | il est arrivé plutôt → plus tôt | w: plutôt, plus tôt ; r: plutot, plus tot ; t: homophone, sens |
| `homo.quoique-quoi-que` | 3-4 | A | règle | quoique (bien que) / quoi que (quelle que soit la chose que) | quoique tu fasses → quoi que | w: quoique, quoi que ; r: quoique, quoi que ; t: homophone, temps, syntaxe |
| `homo.parce-que-par-ce-que` | 3-4 | C | règle | parce que / par ce que | par ce que (cause) → parce que | w: parce que, par ce que ; t: homophone |
| `homo.davantage` | 3-4 | B | règle | davantage (plus) / d'avantage (de profit) | il n'en dit pas d'avantage → davantage | w: davantage, d'avantage, d'avantages ; t: homophone, sens |
| `homo.sitot-bientot` | 3-4 | C | règle | sitôt / si tôt ; bientôt / bien tôt | si tôt arrivé → sitôt | w: sitôt, si tôt, bientôt, bien tôt, aussitôt, aussi tôt ; t: homophone |
| `homo.tant-temps` | 2-3 | C | règle | tant / temps / t'en / tend | il a tellement de tant → temps | w: tant, temps, t'en, tend, tends, taon ; t: homophone |
| `homo.notre-notre` | 2-3 | B | règle | notre / le nôtre ; votre / le vôtre | c'est le notre → nôtre | w: notre, nôtre, votre, vôtre, nôtres, vôtres ; t: homophone, euphonie, lexique |
| `homo.du-du` | 3-4 | B | règle | du / dû (circonflexe au seul masculin singulier : due, dus) | le respect du → dû | w: dû, du, due, dus, dûe ; t: homophone, participe, lexique, euphonie |
| `homo.sur-sur` | 2-3 | B | règle | sur / sûr ; mur / mûr | j'en suis sur → sûr | w: sûr, sûre, sûrs, sûres, sur, mûr, mûre, mûrs, mûres, mur ; t: homophone, lexique, euphonie |
| `homo.pres-pret` | 2-3 | B | règle | près de / prêt à | il est près à partir → prêt | w: près, prêt, prêts, prête, prêtes, pré, prés ; t: homophone, sens |
| `homo.infinitif-participe` | 1-2 | A | règle | -er / -é / -ez (remplacer par vendre / vendu) | il va chanté → chanter | r: par vendre, par vendu, par prendre, par pris, par mordre, par mordu, remplacer par un verbe du 3e groupe ; e: er/é, er/ée, er/és, er/ées, er/ez, ez/é, ez/er ; t: homophone, temps, participe ; x: subjonctif |
| `homo.acquis-acquit` | 3-4 | C | règle | acquis (acquérir) / acquit (acquitter : par acquit de conscience) | par acquis de conscience → acquit | w: acquis, acquit, acquits ; r: acquit, acquis |
| `homo.grammaticaux-autres` | 2-4 | B | famille | Autres homophones grammaticaux | | n: 3e.homo.homophones-grammaticaux, 4e.homo.conjonctions ; t: homophone |

## Homophones lexicaux

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `homl.cours-court-cour` | 1-2 | B | règle | cours / court / cour / courre | le cour du mardi → cours | w: cours, court, cour, courre, courts ; t: homophone, sens |
| `homl.compte-conte-comte` | 1-3 | B | règle | compte / conte / comte | un compte de fées → conte | w: compte, comptes, conte, contes, comte, comtes ; t: homophone, sens |
| `homl.verre-vert-ver-vers` | 1-2 | B | règle | verre / vert / ver / vers / vair | un vers d'eau → verre | w: verre, vert, ver, vers, vair ; t: homophone, sens |
| `homl.voix-voie` | 1-3 | B | règle | voix / voie / voit / vois | une voix ferrée → voie | w: voix, voie, voies, voit, vois ; t: homophone, sens |
| `homl.foi-foie-fois` | 1-3 | B | règle | foi / foie / fois | une foie de plus → fois | w: foi, foie, fois ; t: homophone, sens |
| `homl.tache-tache` | 2-3 | B | règle | tâche (travail) / tache (salissure) | une lourde tache → tâche | w: tâche, tâches, tache, taches ; t: homophone, sens, lexique |
| `homl.pate-patte` | 1-2 | C | règle | pâte / patte | une patte à crêpes → pâte | w: pâte, pâtes, patte, pattes ; t: homophone, sens, lexique |
| `homl.dessin-dessein` | 3-4 | B | règle | dessin / dessein (intention) | à dessin → à dessein | w: dessin, dessein, desseins ; t: homophone, sens |
| `homl.cense-sense` | 3-4 | A | règle | censé (supposé) / sensé (raisonnable) | il est sensé venir → censé | w: censé, censée, censés, censées, sensé, sensée, sensés, sensées ; t: homophone, sens |
| `homl.repaire-repere` | 3-4 | B | règle | repaire (refuge) / repère (marque) | un repère de brigands → repaire | w: repaire, repaires, repère, repères ; t: homophone, sens |
| `homl.differend-different` | 3-4 | B | règle | différend (désaccord) / différent | un différent les oppose → différend | w: différend, différends, différent, différents ; t: homophone, sens |
| `homl.cahot-chaos` | 4 | C | règle | cahot (secousse) / chaos (désordre) | les chaos de la route → cahots | w: cahot, cahots, chaos ; t: homophone, sens, lexique |
| `homl.faite-fete` | 3-4 | C | règle | faîte (sommet) / fête / faite | le fête du toit → faîte | w: faîte, faîtes, fête, faite ; t: homophone, sens, lexique |
| `homl.chair-chaire-cher` | 2-4 | B | règle | chair / chaire / chère / cher | monter en chair → chaire ; faire bonne chair → chère | w: chair, chairs, chaire, chaires, chère, cher ; t: homophone, sens |
| `homl.coeur-choeur` | 2-3 | C | règle | cœur / chœur | le cœur des chanteurs → chœur | w: cœur, cœurs, chœur, chœurs ; t: homophone, sens, lexique |
| `homl.golf-golfe` | 2-3 | C | règle | golf (sport) / golfe (mer) | le golf du Lion → golfe | w: golf, golfe, golfes ; t: homophone, sens, lexique |
| `homl.pecher-pecher` | 3-4 | C | règle | pêcher / pécher | pêcher par orgueil → pécher | w: pêcher, pécher, pêché, péché, pêchés, péchés ; t: homophone, sens, lexique |
| `homl.balade-ballade` | 3-4 | B | règle | balade (promenade) / ballade (poème, morceau) | une ballade en forêt → balade | w: balade, balades, ballade, ballades ; t: homophone, sens, lexique |
| `homl.martyr-martyre` | 4 | C | règle | martyr (victime) / martyre (supplice) | souffrir le martyr → martyre | w: martyr, martyrs, martyre ; t: homophone, sens |
| `homl.filtre-philtre` | 4 | C | règle | filtre / philtre (breuvage magique) | un filtre d'amour → philtre | w: filtre, filtres, philtre, philtres ; t: homophone, sens, lexique |
| `homl.satire-satyre` | 4 | C | règle | satire (critique) / satyre (divinité) | une satyre des mœurs → satire | w: satire, satires, satyre, satyres ; t: homophone, sens, lexique |
| `homl.resonner-raisonner` | 3-4 | B | règle | résonner (son) / raisonner (pensée) | la salle raisonne → résonne | w: résonner, résonne, résonnent, résonnait, raisonner, raisonne, raisonnent, raisonnait ; t: homophone, sens |
| `homl.exaucer-exhausser` | 4 | C | règle | exaucer (un vœu) / exhausser (élever) | son vœu fut exhaussé → exaucé | w: exaucer, exaucé, exaucée, exaucés, exhausser, exhaussé, exhaussée ; t: homophone, sens |
| `homl.session-cession` | 3-4 | C | règle | session (séance) / cession (vente) | une cession d'examen → session | w: session, sessions, cession, cessions ; t: homophone, sens |
| `homl.statut-statue` | 2-4 | C | règle | statut (situation) / statue / statu quo | le statu de joueur → statut | w: statut, statuts, statue, statues, statu ; t: homophone, sens, lexique |
| `homl.voire-voir` | 3-4 | B | règle | voire (et même) / voir | des heures, voir des jours → voire | w: voire, voir ; t: homophone, sens |
| `homl.plain-plein` | 3-4 | C | règle | plain-pied, de plain-chant / plein | de plein-pied → de plain-pied | w: plain-pied, plein-pied, plain-chant ; t: homophone, sens, lexique |
| `homl.sceau-seau-sot` | 2-4 | C | règle | sceau / seau / sot / saut | sous le seau du secret → sceau | w: sceau, sceaux, seau, seaux, sot, saut ; t: homophone, sens, lexique |
| `homl.pause-pose` | 1-3 | C | règle | pause (arrêt) / pose (attitude) | faire une pose → pause | w: pause, pauses, pose, poses ; t: homophone, sens |
| `homl.ancre-encre` | 1-3 | C | règle | ancre (navire) / encre (écriture) | jeter l'encre → l'ancre | w: ancre, ancres, encre, encres ; t: homophone, sens |
| `homl.cou-coup-cout` | 1-3 | B | règle | cou / coup / coût | un cou de pinceau → coup | w: cou, cous, coup, coups, coût, coûts ; t: homophone, sens |
| `homl.pair-paire-pere` | 1-3 | C | règle | pair / paire / père / perd | une pair de gants → paire | w: pair, pairs, paire, paires, père, perd ; t: homophone, sens |
| `homl.amande-amende` | 2-3 | C | règle | amande (fruit) / amende (sanction) | une crème d'amendes → amandes | w: amande, amandes, amende, amendes ; t: homophone, sens |
| `homl.cote-cote` | 3-4 | C | règle | cote (valeur, cotation) / côte (rivage, pente) / cotte (vêtement) | | w: cote, cotes, côte, côtes, cotte, cottes ; t: homophone, sens |
| `homl.fond-fonds-fonts` | 3-4 | B | règle | fond (dessous) / fonds (capital, ensemble) / fonts (baptismaux) | un fond d'archives → fonds | w: fond, fonds, fonts ; t: homophone, sens |
| `homl.renne-rene-reine` | 1-2 | C | règle | renne (animal) / rêne (bride) / reine | tenir les rennes → rênes | w: renne, rennes, rêne, rênes, reine, reines ; t: homophone, sens |
| `homl.teint-tain-thym` | 3-4 | C | règle | teint (visage) / tain (miroir) / thym (plante) | | w: teint, tain, thym, teints ; t: homophone, sens |
| `homl.mors-mort-maure` | 2-4 | C | règle | mors (bride) / mort / maure | prendre le mort aux dents → mors | w: mors, mort, morts, maure ; t: homophone, sens |
| `homl.autres` | 1-4 | B | famille | Homophones et paronymes, autres cas (règle expliquée sans mot-clé reconnu) | | t: homophone, sens |
| `homl.famille` | 2-4 | B | famille | Autres homophones lexicaux | | n: 3e.homo.lexicaux ; t: homophone |

## Paronymes et pièges de sens

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `par.affleurer-effleurer` | 4 | C | règle | affleurer (apparaître à la surface) / effleurer (toucher à peine) | la roche effleure → affleure | w: affleurer, affleure, affleurent, effleurer, effleure, effleurent, effleura, affleura ; t: sens, homophone |
| `par.eminent-imminent` | 3-4 | B | règle | éminent (remarquable) / imminent (proche) | un départ éminent → imminent | w: éminent, éminente, éminents, imminent, imminente, imminents ; t: sens |
| `par.collision-collusion` | 4 | C | règle | collision (choc) / collusion (entente secrète) | une collusion de deux trains → collision | w: collision, collisions, collusion ; t: sens |
| `par.conjecture-conjoncture` | 4 | C | règle | conjecture (supposition) / conjoncture (situation) | se perdre en conjonctures → conjectures | w: conjecture, conjectures, conjoncture, conjonctures ; t: sens |
| `par.acception-acceptation` | 4 | C | règle | acception (sens d'un mot) / acceptation (accord) | dans toutes les acceptations du terme → acceptions | w: acception, acceptions, acceptation, acceptations ; t: sens |
| `par.inclinaison-inclination` | 4 | C | règle | inclinaison (pente) / inclination (penchant) | l'inclination du toit → inclinaison | w: inclinaison, inclination, inclinations ; t: sens |
| `par.infraction-effraction` | 3-4 | C | règle | infraction (faute) / effraction (bris) | vol par infraction → effraction | w: infraction, infractions, effraction ; t: sens |
| `par.prodige-prodigue` | 3-4 | C | règle | prodige (merveille) / prodigue (dépensier) | l'enfant prodige / le fils prodigue | w: prodige, prodiges, prodigue, prodigues ; t: sens |
| `par.recouvrer-recouvrir` | 4 | B | règle | recouvrer (retrouver) / recouvrir (couvrir) | recouvrir la vue → recouvrer | w: recouvrer, recouvré, recouvrée, recouvra, recouvrir, recouvert, recouvrit ; t: sens |
| `par.perpetrer-perpetuer` | 4 | C | règle | perpétrer (commettre) / perpétuer (faire durer) | perpétuer un crime → perpétrer | w: perpétrer, perpétré, perpétrée, perpétuer, perpétué, perpétuée ; t: sens |
| `par.emigrer-immigrer` | 3-4 | C | règle | émigrer (quitter) / immigrer (arriver) | immigrer vers l'Amérique → émigrer | w: émigrer, émigré, émigrés, immigrer, immigré, immigrés ; t: sens |
| `par.eruption-irruption` | 3-4 | B | règle | éruption (volcan) / irruption (entrée brusque) | faire éruption dans la salle → irruption | w: éruption, éruptions, irruption ; t: sens |
| `par.avenement-evenement` | 4 | C | règle | avènement (arrivée au pouvoir) / événement | l'événement du roi → avènement | w: avènement, événement ; t: sens |
| `par.colorer-colorier` | 2-3 | C | règle | colorer (donner une couleur) / colorier (crayons) | le soleil colorie le ciel → colore | w: colorer, colore, colorent, colorié, colorier, colorie, colorient ; t: sens |
| `par.luxuriant-luxueux` | 3-4 | C | règle | luxuriant (abondant) / luxueux (riche) | une végétation luxueuse → luxuriante | w: luxuriant, luxuriante, luxuriants, luxuriantes, luxueux, luxueuse, luxueuses ; t: sens |
| `par.original-originel` | 3-4 | C | règle | original (nouveau) / originel (des origines) | le péché original → originel | w: original, originale, originel, originelle, originels ; t: sens |
| `par.oppresser-opprimer` | 4 | C | règle | oppresser (gêner la respiration) / opprimer (tyranniser) | un peuple oppressé → opprimé | w: oppresser, oppressé, oppressée, opprimer, opprimé, opprimés ; t: sens |
| `par.venimeux-veneneux` | 3-4 | B | règle | venimeux (animal) / vénéneux (plante) | un champignon venimeux → vénéneux | w: venimeux, venimeuse, venimeuses, vénéneux, vénéneuse, vénéneuses ; t: sens |
| `par.notable-notoire` | 4 | C | règle | notable (digne d'être noté) / notoire (connu de tous) | | w: notable, notables, notoire, notoires ; t: sens |
| `par.consommer-consumer` | 4 | C | règle | consommer (utiliser) / consumer (détruire par le feu) | le feu consomme la forêt → consume | w: consommer, consomme, consommait, consumer, consume, consumait, consumé ; t: sens |
| `par.denouement-denuement` | 4 | C | règle | dénouement (fin) / dénuement (misère) | vivre dans le dénouement → dénuement | w: dénouement, dénuement ; t: sens, lexique |
| `par.habilete-habilite` | 4 | C | règle | habileté (adresse) / habilité (habilitation) | | w: habileté, habilité ; t: sens |
| `par.allocution-allocation` | 3-4 | C | règle | allocution (discours) / allocation (somme versée) | | w: allocution, allocutions, allocation, allocations ; t: sens |
| `par.evoquer-invoquer` | 4 | C | règle | évoquer (rappeler) / invoquer (appeler à l'aide, alléguer) | | w: évoquer, évoque, évoqua, invoquer, invoque, invoqua ; t: sens |
| `par.precepteur-percepteur` | 4 | C | règle | précepteur (maître) / percepteur (impôts) | | w: précepteur, percepteur ; t: sens |
| `par.vocabulaire` | 1-4 | B | famille | Mot pris pour un autre, sens en contexte | | n: 4e.voc.sens-en-contexte, cm2.voc, 6e.voc, 4e.voc.glissements-locutions, cm1.voc ; t: sens |

## Conjugaison

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `conj.present-g1` | 1 | A | règle | Présent du 1er groupe : -e, -es, -e (tu chantes) | tu chante → chantes | r: present, 1er groupe ; t: temps ; x: subjonctif, participe present, imperatif |
| `conj.present-dre-indre-soudre` | 2-4 | B | règle | Présent des verbes en -dre, -indre, -soudre (il prend, il peint, il résout) | il peind → peint ; il résoud → résout | r: -dre, -indre, -soudre, -oudre ; w: peint, craint, joint, éteint, atteint, plaint, feint, résout, dissout, absout, coud, moud, prend, rend, peind, craind, résoud ; t: temps |
| `conj.vaincre` | 3-4 | C | règle | Vaincre, convaincre : il vainc, nous vainquons | il vainq → vainc | w: vainc, convainc, vainquit, convainquit, vainquirent, vainquons, vaint, convaint ; r: vaincre, convaincre |
| `conj.cer-ger` | 1-2 | A | règle | Verbes en -cer, -ger : ç, ge devant a, o | nous mangons → mangeons | n: cm1.conj.radical-cer-ger ; r: cedille, -ger, -cer, e apres le g ; t: temps, lexique |
| `conj.yer` | 1-2 | B | règle | Verbes en -yer : y devient i devant e muet | il nettoye → nettoie | n: cm1.conj.radical-yer ; r: -yer, y devient i, -oyer, -uyer ; t: temps |
| `conj.eler-eter` | 2-3 | B | règle | Appeler, jeter et composés : ll, tt devant e muet | il appele → appelle | n: cm1.conj.radical-eler-eter ; r: -eler, -eter, appeler, jeter ; w: appelle, appellent, jette, jettent, rappelle, rejette ; t: temps |
| `conj.e-accent-grave` | 1-2 | B | règle | Lever, mener, céder : è devant syllabe muette | il leve → lève | r: accent grave, e devient e ; w: lève, mène, achète, cède, amène, promène, soulève ; t: temps |
| `conj.imparfait` | 1-2 | A | règle | Imparfait : -ais, -ait, -aient | il jouais → jouait | n: cm1.conj.imparfait-g1, cm1.conj.imparfait-g3-liste ; r: imparfait ; t: temps ; x: subjonctif |
| `conj.iions-yions` | 2-4 | B | règle | Imparfait et subjonctif en -iions, -yions (nous criions, nous voyions) | nous crions (imparfait) → criions | r: -iions, -yions, deux i, i du radical ; w: criions, payions, voyions, riions, essuyions, appuyions, souriions, croyions, envoyions, oubliions, étudiions, *yiez, *iiez |
| `conj.futur` | 1-2 | A | famille | Futur simple : radical et terminaisons | ils serons → seront | n: cm1.conj.futur-g1, cm1.conj.futur-g3-liste, cm1.conj.etre-avoir-4-temps ; r: futur ; t: temps ; x: conditionnel, anterieur |
| `conj.futur-e-muet` | 2-4 | B | règle | Futur des verbes en -ier, -uer, -ouer, -éer : e muet conservé (il criera, il jouera) | il crira → criera | r: e muet, conserve le e, garde le e ; w: *iera, *ieront, *iera, *uera, *ueront, *ouera, *oueront, *éera, *éeront ; t: temps |
| `conj.futur-rr` | 2-4 | B | règle | Futurs en rr (courra, mourra, enverra, acquerra, pourra, verra) | il coura → courra | r: deux r, double r, rr ; w: courra*, mourra*, enverra*, acquerra*, conquerra*, pourra*, verra*, courrai*, mourrai* ; t: temps |
| `conj.futur-conditionnel-je` | 2-3 | A | règle | Je serai (futur) / je serais (conditionnel) | si je pouvais, je viendrai → viendrais | a: futur, conditionnel ; e: rai/rais, rais/rai ; t: temps, homophone |
| `conj.si-imparfait` | 2-4 | A | règle | Si d'hypothèse : jamais de conditionnel après si | si j'aurais su → si j'avais su | r: apres si, si +, si hypothetique, si d'hypothese, jamais de conditionnel ; t: temps, syntaxe |
| `conj.conditionnel` | 2-3 | B | famille | Conditionnel présent et emplois | | n: 3e.conj.conditionnel-emplois, 6e.conj.conditionnel ; r: conditionnel ; t: temps |
| `conj.conditionnel-passe` | 3-4 | B | règle | Conditionnel passé (il aurait fallu) | | n: 4e.conj.conditionnel-passe ; r: conditionnel passe ; t: temps |
| `conj.passe-simple-g1` | 1-2 | A | règle | Passé simple du 1er groupe : il chanta, ils chantèrent | il chantat → chanta | n: cm2.conj.passe-simple-g1 ; a: passe simple, 1er groupe ; t: temps |
| `conj.passe-simple-irreguliers` | 2-4 | A | règle | Passé simple irrégulier (il vint, il prit, il naquit, il vécut, il résolut, il cousit, il conclut, il mourut) | il naissa → naquit | n: cm2.conj.passe-simple-g3-liste, cm2.conj.passe-simple-g2, cm2.conj.passe-simple-etre-avoir ; r: passe simple ; w: naquit, naquirent, vécut, vécurent, résolut, cousit, conclut, mourut, moulut, vainquit, tint, vint, prit, mit, fit, dut, sut, put, crut, plut, parut, émut, s'assit ; t: temps ; x: 1er groupe, subjonctif |
| `conj.ai-ais` | 2-4 | B | règle | Je + passé simple (-ai) / imparfait (-ais) | hier, je marchais (action ponctuelle) → je marchai | a: passe simple, imparfait ; e: ai/ais ; t: temps, homophone ; x: subjonctif |
| `conj.passe-simple-circonflexe` | 3-4 | B | règle | Nous -âmes, vous -âtes, -îmes, -ûmes au passé simple | nous chantames → chantâmes | w: *âmes, *âtes, *îmes, *îtes, *ûmes, *ûtes ; r: -ames, -imes, -umes ; t: temps, lexique, euphonie |
| `conj.fut-fut` | 3-4 | A | règle | Il fut (passé simple) / qu'il fût (subjonctif imparfait) ; il eut / il eût | bien qu'il fut tard → fût | w: fut, fût, eut, eût, furent, eussent, fussent ; r: fut, eut ; t: temps, homophone, euphonie |
| `conj.imperatif` | 1-2 | A | règle | Impératif : 1er groupe sans s (mange, va), autres verbes (prends, sois, aie, sache) | manges ta soupe → mange | n: 6e.conj.imperatif-g1, 6e.conj.imperatif-g3-liste, 6e.conj.imperatif-etre-avoir ; r: imperatif ; t: temps ; x: euphoni*, trait d'union |
| `conj.subjonctif-present` | 2-4 | A | règle | Formes du subjonctif présent (qu'il croie, qu'il voie, qu'il rie, qu'il fuie, qu'il conclue, qu'il ait, qu'il soit) | qu'il croit → croie | n: 3e.conj.subjonctif-present ; a: subjonctif, present ; w: croie, croies, voie, voies, rie, ries, fuie, fuies, conclue, aie, aies, ait, soit, soient, sois, aille, veuille, puisse, sache ; t: temps |
| `conj.apres-que-indicatif` | 3-4 | A | règle | Après que + indicatif (fait accompli) | après qu'il soit parti → était | r: apres que ; t: temps, syntaxe |
| `conj.bien-que-subjonctif` | 2-4 | A | règle | Bien que, quoique, encore que + subjonctif | bien qu'il est fatigué → soit | r: bien que, quoique, encore que ; t: temps ; x: quoi que |
| `conj.avant-que-subjonctif` | 2-4 | B | règle | Avant que + subjonctif (et ne explétif facultatif) | avant qu'il part → parte | r: avant que ; t: temps, syntaxe |
| `conj.but-condition-subjonctif` | 2-4 | B | règle | Pour que, afin que, sans que, à moins que, de peur que, pourvu que, jusqu'à ce que, en attendant que + subjonctif | pour qu'il vient → vienne | r: pour que, afin que, sans que, de crainte que, de peur que, a moins que, en attendant que, jusqu'a ce que, pourvu que, de sorte que, a condition que ; t: temps |
| `conj.subjonctif-volonte-sentiment` | 2-4 | B | règle | Subjonctif après un verbe de volonté, de crainte, de doute, il faut que | il faut qu'il vient → vienne | r: il faut que, volonte, souhait*, crainte, craindre, regret*, doute, douter, ordre, desir*, sentiment, exiger, exige, vouloir que, demander que, il se peut que ; t: temps |
| `conj.subjonctif-superlatif` | 4 | C | règle | Subjonctif après le seul, le premier, le meilleur qui | le seul qui sait → sache | r: superlatif, le seul, le premier, l'unique, le dernier qui ; t: temps |
| `conj.indicatif-esperer` | 3-4 | B | règle | Espérer, penser, croire (affirmatif), il me semble que + indicatif | j'espère qu'il vienne → viendra | r: esperer, espere, il me semble, penser que, croire que, indicatif apres ; t: temps |
| `conj.subjonctif-conjonctions` | 2-4 | A | famille | Subjonctif après une conjonction, autres cas | | n: 3e.conj.subjonctif-apres-conjonctions ; r: subjonctif ; t: temps |
| `conj.subjonctif-passe` | 3-4 | C | règle | Subjonctif passé (qu'il ait fini) | | n: 3e.conj.subjonctif-passe ; r: subjonctif passe ; t: temps |
| `conj.subjonctif-imparfait` | 4 | A | règle | Subjonctif imparfait après un verbe principal au passé simple ou à l'imparfait (qu'il fût, qu'il vînt, qu'il prît) | il fallait qu'il vint → vînt | r: subjonctif imparfait, imparfait du subjonctif ; w: vînt, tînt, prît, fît, dît, mît, pût, sût, dût, eût, fût, allât, chantât, aimât, vinssent, fissent, prissent, pussent, eussent, fussent ; t: temps, euphonie |
| `conj.subjonctif-plus-que-parfait` | 4 | B | règle | Subjonctif plus-que-parfait et conditionnel passé 2e forme (qu'il eût été, j'eusse aimé) | | r: plus-que-parfait du subjonctif, subjonctif plus-que-parfait, conditionnel passe deuxieme forme, 2e forme ; t: temps |
| `conj.passe-anterieur` | 3-4 | C | règle | Passé antérieur (quand il eut fini) | quand il eût fini → eut | n: 5e.conj.passe-anterieur ; r: passe anterieur ; t: temps |
| `conj.futur-anterieur` | 2-4 | C | règle | Futur antérieur | | n: 5e.conj.futur-anterieur ; r: futur anterieur ; t: temps |
| `conj.concordance` | 3-4 | B | règle | Concordance des temps, futur dans le passé | il disait qu'il viendra → viendrait | r: concordance, futur dans le passe, dans le passe ; t: temps |
| `conj.irreguliers-present` | 2-4 | A | règle | Présents irréguliers (vous dites, vous faites, ils font, il hait, ils haïssent, il bout, il assied) | vous disez → dites | n: 5e.conj.irreguliers-principaux, 4e.conj.irreguliers-principaux ; w: dites, faites, font, hait, haïssent, bout, assied, assieds, maudissent, contredisez, médisez ; t: temps |
| `conj.croitre-croire` | 4 | C | règle | Croître (il croît, crû) / croire (il croit, cru) | la rivière a cru → crû | r: croitre, accroitre, decroitre ; w: croît, crû, crûs, crue, crues, croissent, accru, décrû, décru |
| `conj.defectifs` | 4 | C | règle | Verbes défectifs (gésir, clore, éclore, choir, ouïr, braire, frire) | ci-gisent, il gît | r: defectif*, gesir, clore, eclore, choir, ouir, braire ; w: gît, gisent, gisait, éclot, éclosent, clos, ouï, chu |
| `conj.voix-passive` | 2-3 | C | règle | Voix passive | | n: 4e.conj.voix-passive ; r: voix passive, forme passive, passif ; t: temps, participe |
| `conj.auxiliaire` | 2-4 | B | règle | Choix de l'auxiliaire selon le sens (il a monté la valise / il est monté) | | r: choix de l'auxiliaire, se conjugue avec ; t: temps |
| `conj.adjectif-verbal` | 3-4 | A | règle | Participe présent / adjectif verbal (convainquant/convaincant, fatiguant/fatigant, négligeant/négligent, précédant/précédent, différant/différent, excellant/excellent, provoquant/provocant, communiquant/communicant, somnolant/somnolent, équivalant/équivalent, naviguant/navigant, intriguant/intrigant, suffoquant/suffocant, vaquant/vacant, influant/influent, adhérant/adhérent, divergeant/divergent, fabriquant/fabricant, résidant/résident) | un argument convainquant → convaincant | r: adjectif verbal, participe present ; w: convaincant*, convainquant, fatigant*, fatiguant, négligent*, négligeant, précédent*, précédant, différent*, différant, excellent*, excellant, provocant*, provoquant, communicant*, communiquant, somnolent*, somnolant, équivalent*, équivalant, navigant*, naviguant, intrigant*, intriguant, suffocant*, suffoquant, vacant*, vaquant, influent*, influant, adhérent*, adhérant, divergent*, divergeant, fabricant*, fabriquant, résident*, résidant, extravagant*, extravaguant, émergent*, émergeant, convergent*, convergeant, zigzagant, zigzaguant |
| `conj.temps-composes` | 2-3 | C | famille | Temps composés, radicaux et identification des temps | | n: 4e.conj.temps-composes, 4e.conj.radicaux-indicatif-imperatif, 3e.conj.identifier-tous-temps, 5e.conj.morphologie-temps-simples, cm1.gram.verbe-conjugue ; t: temps |
| `conj.autres` | 1-4 | B | famille | Conjugaison, autres cas | | t: temps |

## Syntaxe et constructions

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `syn.dont` | 2-4 | A | règle | Dont (complément introduit par de) ; pas de pléonasme dont ... en | le livre que je parle → dont ; dont il en parle → dont il parle | r: dont ; t: syntaxe, homophone, sens |
| `syn.ce-dont` | 3-4 | B | règle | Ce dont j'ai besoin (pas ce que) | ce que j'ai besoin → ce dont | r: ce dont ; t: syntaxe |
| `syn.ou-relatif` | 2-4 | B | règle | Le jour où (pas le jour que), là où | au moment que → où | r: ou relatif, pronom relatif ou, le jour ou, moment ou ; t: syntaxe |
| `syn.lequel` | 3-4 | B | règle | Lequel, auquel, duquel, à laquelle : accord avec l'antécédent | la raison pour lequel → laquelle | n: 3e.gram.pronom-relatif ; r: auquel, duquel, lesquels, lesquelles, laquelle, lequel, auxquels, auxquelles, desquels ; w: auquel, auxquels, auxquelles, duquel, desquels, desquelles, laquelle, lequel, lesquels, lesquelles |
| `syn.mise-en-relief` | 3-4 | B | règle | C'est ... que (gallicisme) : pas de double relatif (c'est à lui à qui → c'est à lui que) | c'est à toi à qui je parle → que | r: c'est que, mise en relief, gallicisme, c'est a qui ; t: syntaxe |
| `syn.ne-expletif` | 3-4 | B | règle | Ne explétif (avant qu'il ne parte, je crains qu'il ne vienne) : il ne nie pas | | r: ne expletif ; t: syntaxe, temps |
| `syn.negation` | 1-3 | B | règle | Négation complète (ne ... pas, ne ... que) ; on n'a (liaison) | on a rien vu → on n'a rien vu | r: negation, ne ... pas, ne pas, n' de la negation, on n'a, on n' ; t: syntaxe, homophone |
| `syn.sans-ni` | 4 | C | règle | Sans ... ni ; ni ... ni ne | sans pain et sans eau / sans pain ni eau | r: sans ni, sans ... ni ; t: syntaxe |
| `syn.malgre-que` | 3-4 | A | règle | Malgré que fautif : bien que | malgré qu'il pleuve → bien qu'il pleuve | r: malgre que, malgre ; t: syntaxe |
| `syn.se-rappeler` | 3-4 | A | règle | Se rappeler quelque chose (sans de) | il se rappelle de son enfance → se rappelle son enfance | r: se rappeler, se rappelle, rappeler ; t: syntaxe |
| `syn.pallier` | 4 | B | règle | Pallier quelque chose (sans à) | pallier à un manque → pallier un manque | r: pallier ; t: syntaxe, sens |
| `syn.de-facon-que` | 4 | C | règle | De façon que, de manière que (pas à ce que) | de façon à ce que → de façon que | r: de facon a ce que, de maniere a ce que, de facon que ; t: syntaxe |
| `syn.pleonasme` | 3-4 | C | règle | Pléonasmes (monter en haut, prévoir à l'avance, au jour d'aujourd'hui) | | r: pleonasme* ; t: syntaxe, sens |
| `syn.pronoms-en-y` | 2-3 | C | règle | Pronoms en et y (j'en ai, vas-y, penses-y) | | r: pronom en, pronom y ; t: syntaxe, euphonie |
| `syn.le-plus-invariable` | 4 | C | règle | Le plus, le moins invariable quand il marque un degré (c'est là qu'elle est le plus heureuse) | la plus heureuse (degré) → le plus | a: le plus, invariable ; t: syntaxe, accord |
| `syn.interrogation` | 1-2 | C | règle | Tournures interrogatives (est-ce que, inversion) | | n: cm1.gram.interrogation-tournures ; r: interrogati* ; t: syntaxe, typographie |
| `syn.comparatif-que` | 1-2 | B | règle | Après un comparatif (plus, moins, mieux, autre), que et non comme | il joue mieux comme moi → que | r: comparatif ; t: syntaxe |
| `syn.aussi-autant` | 2-3 | C | règle | Aussi devant un adjectif ou un adverbe, autant avec un verbe ou un nom | autant efficace que → aussi | w: aussi, autant ; t: syntaxe |
| `conj.au-cas-ou` | 3-4 | B | règle | Au cas où + conditionnel | au cas où il viendra → viendrait | r: au cas ou ; t: syntaxe, temps |
| `syn.autres` | 2-4 | B | famille | Autres constructions fautives | | t: syntaxe |

## Accents et signes

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `acc.circonflexe-s-disparu` | 2-4 | A | règle | Circonflexe sur a, e, o d'un s disparu (forêt, hôpital, fenêtre, château, bête, côte, hâte) | une foret → forêt | r: s disparu, ancien s, s qui a disparu, s ancien, le s tombe, forestier, hospitalier, s du latin, s de l'ancien francais ; w: forêt, hôpital, fenêtre, château, bête, hâte ; t: lexique, euphonie |
| `acc.circonflexe-distinctif` | 2-4 | B | règle | Circonflexe distinctif conservé en 1990 (sûr, mûr, dû, jeûne, crû) | il est sur de lui → sûr | r: distingu* ; a: circonflexe, distingue ; w: jeûne, jeûner, crû ; t: lexique, euphonie, homophone |
| `acc.circonflexe-famille` | 3-4 | B | règle | Circonflexe qui disparaît dans la famille (grâce/gracieux, infâme/infamie, diplôme/diplomate, cône/conique, pôle/polaire, arôme/aromatique, fantôme, symptôme) | gracieux avec ^ → gracieux | a: circonflexe, famille ; r: perd son accent, perd son circonflexe, perd le circonflexe, sans circonflexe ; w: grâce, gracieux, infâme, infamie, diplôme, diplomate, diplomatie, cône, conique, pôle, polaire, arôme, aromatique, fantôme, symptôme, symptomatique ; t: lexique, euphonie |
| `acc.circonflexe` | 2-4 | A | famille | Accent circonflexe, autres cas | | r: circonflexe ; t: lexique, euphonie, temps |
| `acc.pas-d-accent-double-consonne` | 2-3 | B | règle | Pas d'accent sur e devant une consonne double ou x (effet, ennemi, erreur, exercice, exact) | éffet → effet | r: pas d'accent devant, devant une consonne double, devant deux consonnes, devant x, devant un x, sans accent devant ; t: lexique, euphonie |
| `acc.aigu-grave` | 1-4 | B | famille | Accent aigu ou grave sur e | | r: accent aigu, accent grave ; t: lexique, euphonie |
| `acc.trema` | 2-4 | B | règle | Tréma (naïf, maïs, aïeul, ouïe, héroïne, haïr, faïence, païen, égoïste, coïncidence, caïman, Noël) | naif → naïf | r: trema ; w: naïf, naïve, naïfs, maïs, aïeul, aïeux, ouïe, héroïne, héroïque, haïr, haï, haïssent, faïence, païen, païenne, égoïste, égoïsme, coïncidence, caïman, inouï, inouïe, ambiguïté, exiguïté ; t: lexique, euphonie |
| `acc.cedille` | 1-2 | B | règle | Cédille devant a, o, u (reçu, façade, garçon, leçon, maçon, aperçu) | recu → reçu | r: cedille ; w: reçu, reçue, façade, garçon, leçon, maçon, aperçu, aperçut, commençons, lançons ; t: lexique, temps, euphonie |

## Orthographe lexicale

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `lex.double-consonne` | 1-4 | A | famille | Consonne doublée (frapper, attraper, honneur, ballon) | échaper → échapper | r: deux p, deux t, deux l, deux m, deux n, deux r, deux s, deux f, deux c, deux g, deux b, deux d, double consonne, consonne double, consonne doublee, double l, double t, double p, double n, double m, double r, double s, double f, double c, redoubl* ; t: lexique |
| `lex.consonne-simple` | 1-4 | A | famille | Consonne simple là où on la double (un seul l, un seul n) | diagonnale → diagonale | r: un seul, une seule consonne, consonne simple, pas de double ; t: lexique |
| `lex.prefixe-a` | 2-4 | B | règle | Doublement après a- (attraper, accrocher, apporter, affoler) et exceptions (apercevoir, apaiser, aplatir, acompte, alourdir) | aporter → apporter ; appercevoir → apercevoir | r: prefixe a, prefixe ad, apres a, apres le prefixe a, ad- ; w: apercevoir, aperçu, apaiser, aplatir, apeuré, acompte, acolyte, alourdir, appercevoir, appaiser, applatir, accompte ; t: lexique |
| `lex.prefixe-in` | 2-4 | B | règle | Préfixe in- assimilé (illisible, immense, irréel, innombrable, inné) | inombrable → innombrable | r: prefixe in, prefixe im, prefixe il, prefixe ir, in- devant, im- devant, il-, ir- ; t: lexique |
| `lex.m-devant-mbp` | 1-2 | A | règle | m devant m, b, p (sauf bonbon, embonpoint, néanmoins) | ensemble → ensemble ; tanpis → tant pis | r: devant m, devant b, devant p, m devant, n devant ; w: bonbon, bonbonnière, embonpoint, néanmoins ; t: lexique |
| `lex.h-muet` | 1-4 | B | règle | h initial muet ou aspiré (hiver, habile, hormis, hagard, hiérarchie) | abile → habile | r: h muet, h initial, h aspire, commence par un h, h du latin ; t: lexique, euphonie |
| `lex.h-interieur` | 2-4 | B | règle | h intérieur (bonheur, véhément, inhérent, cohue, souhait, trahison, enhardir, ébahi, prohiber, dehors) | véément → véhément | r: h interieur, h au milieu, h intercal*, h entre, h muet au milieu ; w: véhément, véhémence, inhérent, cohue, souhait, trahison, enhardir, ébahi, envahir, prohiber, cahier, dehors, appréhender, cohérent, cohésion, adhérer, posthume ; t: lexique |
| `lex.grec` | 2-4 | A | famille | Graphies grecques (th, ph, rh, ch [k], y) | | n: 5e.voc.etymologie-latin-grec ; r: grec, du grec ; t: lexique |
| `lex.y-grec` | 2-4 | B | règle | y d'origine grecque (rythme, cycle, hypothèse, mystère, lyre, style, physique, tympan, labyrinthe, pyramide, sympathie, hydre, polygone) | rithme → rythme | r: y grec, avec un y, s'ecrit avec y, avec y, un y ; t: lexique |
| `lex.ph` | 2-4 | B | règle | ph pour [f] (phare, photographie, amphithéâtre, sphère, triomphe, strophe) | sfère → sphère | r: ph ; t: lexique |
| `lex.th-rh-ch` | 2-4 | B | règle | th, rh, ch [k] (théâtre, rhume, rhinocéros, chœur, orchestre, chronique, chrysalide) | téâtre → théâtre | r: th, rh, ch se prononce, ch prononce, ch qui se prononce ; t: lexique |
| `lex.latin-etymologie` | 2-4 | B | famille | Graphie expliquée par le latin | | n: 5e.lex.etymologie-radical ; r: latin, du latin ; t: lexique |
| `lex.finale-muette` | 1-3 | A | famille | Consonne finale muette retrouvée par un dérivé ou le féminin (bavard, début, tapis, galop, sirop, rang, poing) | un débu → début | r: lettre muette, finale muette, consonne muette, ne se prononce pas, lettre finale, on l'entend dans, on l'entend au feminin, comme dans, de la famille de, s final, s muet, x final, se termine par un x, se termine par un s, t final, d final ; t: lexique |
| `lex.e-muet-interieur` | 3-4 | B | règle | e muet intérieur des noms en -ment (dévouement, remerciement, éternuement, aboiement, dénouement, engouement, balbutiement, ralliement, tutoiement) | dévoument → dévouement | r: e muet, e qui ne s'entend pas, e intercal* ; w: dévouement, remerciement, éternuement, aboiement, dénouement, engouement, enrouement, balbutiement, ralliement, maniement, tutoiement, flamboiement, rudoiement, licenciement, dévoument, remerciment ; t: lexique |
| `lex.noms-te-tie` | 2-4 | B | règle | Noms féminins en -té, -tié sans e (beauté, amitié, moitié) sauf dictée, montée, jetée, portée, pâtée, butée | la beautée → beauté | r: -te, -tie, ne prennent pas de e, sans e final ; w: dictée, montée, jetée, portée, pâtée, butée, beautée, amitiée, moitiée ; t: lexique |
| `lex.feminins-i-u` | 2-3 | C | règle | Noms féminins en -i, -u sans e (fourmi, brebis, souris, perdrix, nuit, tribu, vertu, glu, bru) | une fourmie → fourmi | w: fourmi, fourmie, brebis, souris, perdrix, tribu, tribut, vertu, glu, bru, fourmis ; t: lexique |
| `lex.masculins-ee` | 3-4 | B | règle | Noms masculins en -ée (lycée, musée, apogée, trophée, mausolée, scarabée, caducée, camée, coryphée, périgée, hyménée, empyrée) | un musé → musée | r: masculin en -ee, masculins en -ee ; w: lycée, musée, apogée, trophée, mausolée, scarabée, caducée, camée, coryphée, périgée, hyménée, empyrée, macchabée, pygmée, athée, gynécée, protée ; t: lexique |
| `lex.finale-oir-oire` | 2-4 | B | règle | Noms masculins en -oir et -oire (couloir, mais réfectoire, laboratoire, observatoire, répertoire, territoire, conservatoire, promontoire) | un laboratoir → laboratoire | r: -oir, -oire ; w: réfectoire, laboratoire, observatoire, répertoire, territoire, conservatoire, promontoire, auditoire, accessoire, interrogatoire, purgatoire, ciboire, réquisitoire, oratoire ; t: lexique |
| `lex.finale-ail-eil-euil` | 1-3 | B | règle | -ail/-aille, -eil/-eille, -euil/-euille, -ueil (accueil, orgueil, recueil, cercueil, écueil) | un acceuil → accueil | r: -ail, -eil, -euil, -ueil, ueil ; w: accueil, orgueil, recueil, cercueil, écueil, acceuil, orgeuil, receuil, cerceuil ; t: lexique |
| `lex.finale-ance-ence-ant-ent` | 2-4 | B | règle | -ance/-ence, -ant/-ent (indépendant, permanent, compétent, existence, résistance) | indépendent → indépendant | r: -ance, -ence, -ant, -ent, -anse, -ense ; t: lexique |
| `lex.voyelles-nasales` | 1-3 | B | règle | Graphies des nasales (-in, -ain, -ein, -en, -an, -on, -um) | un chanfrain → chanfrein | r: -ein, -ain, -in, -en, -an, -aon, nasale ; t: lexique |
| `lex.finale-tion-ssion-xion` | 2-4 | B | règle | -tion, -ssion, -sion, -xion, -cion (connexion, réflexion, suspicion, passion, version) | connection → connexion | r: -tion, -ssion, -xion, -cion, -sion ; w: connexion, réflexion, flexion, complexion, suspicion, crucifixion, annexion, fluxion ; t: lexique |
| `lex.c-t-devant-i` | 3-4 | B | règle | -tiel/-ciel, -tieux/-cieux (essentiel, confidentiel, logiciel, superficiel, ambitieux, minutieux, consciencieux, captieux) | essenciel → essentiel | r: -tiel, -ciel, -tieux, -cieux, t se prononce s, t qui se prononce ; w: essentiel*, confidentiel*, partiel*, providentiel*, logiciel*, superficiel*, ambitieux, minutieux, consciencieux, captieux, factieux, prétentieux, séditieux, facétieux ; t: lexique |
| `lex.sc` | 2-4 | B | règle | sc (sceau, scène, conscience, susceptible, discipline, ascension, fascination, piscine, descendre, adolescent, sceptre, faisceau) | asension → ascension | r: sc ; w: scène, conscience, susceptible, discipline, ascension, fascination, fasciner, piscine, descendre, descente, adolescent*, sceptre, faisceau, ascenseur, sceptique, sceller, scintiller, scinder, obscène, plébiscite, condescendant ; t: lexique |
| `lex.s-ss-c` | 1-3 | B | famille | s / ss / c / ç pour [s] | | r: entre deux voyelles, s se prononce z, s simple, ss, c devant, -sse, avec c ; t: lexique |
| `lex.cqu-cc` | 2-4 | B | règle | cqu, cc (acquérir, acquitter, acquiescer, grecque, accident, succès, accès, vaccin, succinct) | aquérir → acquérir | r: cqu, cq, cc, avec qu ; w: acquérir, acquitter, acquiescer, acquis, grecque, accident, succès, accès, vaccin, succinct, occident, accent, accessoire, accessible ; t: lexique |
| `lex.g-ge-gu` | 2-3 | B | règle | ge devant a, o (bourgeon, geôle, pigeon, plongeon, nageoire, mangeoire, orangeade) ; gu | bourgon → bourgeon | r: ge devant, g doux, e apres le g, gu devant, eo ; w: bourgeon, geôle, geôlier, pigeon, plongeon, esturgeon, nageoire, mangeoire, orangeade, gageure, badigeon, sauvageon, bougeoir ; t: lexique |
| `lex.oe-ae` | 3-4 | B | règle | œ et æ (œsophage, œnologie, cœlacanthe, fœtus, œcuménique, ex æquo, curriculum vitæ) | ésophage → œsophage | r: oe, ae, e dans l'o ; w: *œ*, *æ* ; t: lexique |
| `lex.emprunts` | 2-4 | C | famille | Mots empruntés (graphie d'origine conservée) | | r: emprunt*, anglais, italien, arabe, espagnol, allemand, japonais, coreen, portugais, neerlandais ; t: lexique |
| `lex.familles-irregulieres` | 3-4 | A | règle | Anti-analogies de famille (chariot/charrette, honorer/honneur, sonore/sonner, combatif/combattre, imbécillité/imbécile, consonance/consonne, résonance/résonner, nominal/nommer, donation/donner, patronage/patronner, traditionaliste, rationalité) | charriot → chariot | r: exception, contrairement a, bien que de la meme famille, a la difference de, anti-analogie, perd une consonne ; w: chariot, honorer, honorable, honoraire, honorifique, sonore, combatif, combativité, imbécillité, consonance, résonance, nominal, donation, patronage, traditionaliste, rationalité, siffler, persifler, persiflage, courrier, millionième ; t: lexique |
| `lex.mots-frequents` | 1 | A | famille | Mots fréquents à mémoriser | | n: cm1.lex.mots-frequents, cm2.lex.mots-frequents, 6e.lex.mots-frequents-autonomie ; t: lexique |
| `lex.morphologie-derivation` | 1-4 | A | famille | Graphie par la famille de mots, dérivation, préfixes et suffixes | | n: 5e.lex.derivation, 3e.lex.morphologie, 4e.lex.morphologie, cm1.lex.morphologie, 6e.lex.simples-derives-composes, 5e.voc.prefixe-radical-suffixe, 5e.voc.prefixes-suffixes-frequents, 4e.voc.prefixes-suffixes-justifier, cm2.voc.contexte-morphologie, cm1.voc.relations-morpho-semantiques ; r: famille, meme famille, derive* ; t: lexique |
| `lex.ecart-oral-ecrit` | 2-4 | B | famille | Écart entre l'oral et l'écrit (lettres non prononcées, graphies opaques) | | n: 3e.lex.ecart-oral-ecrit, 4e.lex.evolution-graphies ; t: lexique |
| `lex.vocabulaire-rare` | 3-4 | B | famille | Mots rares du champ lexical, graphie à mémoriser | | n: 5e.lex.vocabulaire-rencontre ; t: lexique |
| `lex.regularites` | 2-4 | B | famille | Régularités et exceptions de l'orthographe lexicale (notion scolaire large) | | n: 4e.lex.regularites-exceptions, 5e.lex.regularites ; t: lexique |
| `lex.autres` | 1-4 | B | famille | Autres graphies lexicales | | t: lexique |

## Traits d'union

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `trait.inversion` | 1-2 | B | règle | Trait d'union du sujet inversé (dit-il, viens-tu) | dit il → dit-il | a: trait d'union, inverse* ; t: typographie, euphonie, syntaxe |
| `trait.imperatif-pronom` | 2-3 | B | règle | Impératif + pronom (prends-le, donne-moi, dis-le-lui) | prends le → prends-le | a: imperatif, trait d'union ; t: typographie, euphonie, temps |
| `trait.ci-la` | 1-2 | B | règle | -ci, -là, là-bas, ci-dessous, celui-ci | ce jour là → ce jour-là | r: -ci, -la ; w: *-là, *-ci, là-bas, ci-dessous, ci-dessus, ci-contre ; t: typographie, compose, homophone |
| `trait.peut-etre` | 2-3 | B | règle | Peut-être (adverbe) / peut être (verbe) | il viendra peut être → peut-être | w: peut-être, peut être ; r: peut-etre |
| `trait.pronom-meme` | 2-3 | B | règle | Pronom + même (lui-même, eux-mêmes) | eux mêmes → eux-mêmes | a: meme, trait d'union ; w: lui-même, eux-mêmes, elle-même, elles-mêmes, nous-mêmes, vous-même, vous-mêmes, soi-même, moi-même, toi-même |
| `trait.sans-trait` | 2-4 | B | règle | Composés sans trait d'union (pomme de terre, chemin de fer, salle à manger, tout à fait, au fur et à mesure) | tout-à-fait → tout à fait | r: sans trait d'union, pas de trait d'union, jamais de trait d'union ; t: typographie, compose |
| `trait.saint` | 3-4 | C | règle | Saint- dans un nom de lieu ou de fête (rue Saint-Honoré, la Saint-Jean) ; saint Jean (personne) | la Saint Jean → la Saint-Jean | r: saint ; w: saint-*, sainte-* ; t: typographie, compose |
| `trait.prefixes` | 3-4 | C | règle | ex-, vice-, non-, quasi- devant un nom | la quasi totalité → quasi-totalité | r: ex-, vice-, non-, quasi- ; w: ex-*, vice-*, non-*, quasi-* ; t: typographie, compose |
| `trait.locutions` | 2-4 | B | règle | Locutions à traits d'union (c'est-à-dire, au-dessus, au-delà, vis-à-vis, sur-le-champ, pêle-mêle, par-dessus, avant-hier) | au dessus → au-dessus | w: c'est-à-dire, au-dessus, au-dessous, au-delà, vis-à-vis, sur-le-champ, pêle-mêle, par-dessus, par-dessous, là-dessus, au-devant, avant-hier, après-demain, par-ci, par-là, ci-après ; t: typographie, compose, invariable |
| `trait.points-cardinaux` | 2-3 | C | règle | Points cardinaux composés (sud-ouest, nord-est) | sud ouest → sud-ouest | w: sud-ouest, nord-est, nord-ouest, sud-est ; t: typographie, compose |
| `trait.famille` | 1-4 | B | famille | Traits d'union, autres cas | | r: trait d'union, traits d'union ; t: typographie, compose, euphonie |

## Majuscules et typographie

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `typo.mois-jours` | 1-2 | B | règle | Mois et jours sans majuscule | en Septembre → septembre | r: noms de mois, jours de la semaine, mois, jours ; w: janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre, lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche ; t: typographie |
| `typo.gentiles` | 1-3 | A | règle | Nom d'habitant avec majuscule, adjectif et langue sans (les Français, le peuple français, parler français) | les français → les Français | r: gentile*, habitant*, nom d'habitant, adjectif de nationalite, nationalite, langue ; t: typographie |
| `typo.institutions` | 3-4 | C | règle | Institutions et organismes uniques (l'État, l'Assemblée nationale, le Sénat) | l'état → l'État | r: etat, institution*, organisme* ; t: typographie |
| `typo.points-cardinaux` | 2-3 | C | règle | Point cardinal : majuscule s'il désigne une région (le Nord), minuscule sinon (au nord de) | | r: point cardinal, points cardinaux, region ; t: typographie |
| `typo.noms-geographiques` | 2-4 | C | règle | Terme générique en minuscule, spécifique en majuscule (la mer Méditerranée, le mont Blanc) | la Mer Méditerranée → mer | r: nom geographique, terme generique, generique, mer, mont, ocean, fleuve ; t: typographie |
| `typo.epoques-evenements` | 3-4 | C | règle | Périodes et événements historiques (le Moyen Âge, la Renaissance, la Révolution) | le moyen âge → Moyen Âge | r: periode historique, epoque, evenement historique, moyen age, renaissance, revolution ; t: typographie |
| `typo.fetes` | 1-3 | C | règle | Fêtes avec majuscule (Noël, Pâques, la Toussaint) | noël → Noël | r: fete, fetes, paques, noel, toussaint ; t: typographie |
| `typo.siecles` | 2-4 | C | règle | Siècles en chiffres romains, petites capitales (XIXe siècle) | le 19ème siècle → XIXe | r: siecle, chiffres romains ; t: typographie |
| `typo.famille` | 1-4 | B | famille | Majuscules et typographie, autres cas | | r: majuscule ; t: typographie |

## Euphonie et élision

| Identifiant | Niveaux | Prio | Portée | Règle | Exemples-types | Détection |
| --- | --- | --- | --- | --- | --- | --- |
| `eupho.t-euphonique` | 1-3 | B | règle | t euphonique entre traits d'union (a-t-il, va-t-on), jamais d'apostrophe | va-t'on → va-t-on | r: t euphonique ; w: *-t-il, *-t-elle, *-t-on, *-t-ils, *-t'il, *-t'elle, *-t'on |
| `eupho.imperatif-s` | 2-4 | B | règle | Impératif + en, y : s euphonique (vas-y, penses-y, cueilles-en), mais va-t'en | va-y → vas-y | r: s euphonique, euphoni*, vas-y ; w: vas-y, va-y, *s-en, *s-y, va-t'en ; t: euphonie, temps, typographie |
| `eupho.elision` | 2-4 | B | règle | Élision (lorsqu'il, puisqu'on, quelqu'un, presqu'île ; mais presque achevé) | presque île → presqu'île | r: elision, elide*, apostrophe ; w: presqu'île, quelqu'un, quelqu'une, entr'*, aujourd'hui, lorsqu'*, puisqu'*, quoiqu'* ; t: euphonie, typographie, lexique |
| `eupho.h-aspire` | 2-4 | C | règle | h aspiré : ni élision ni liaison (le héros, la hache, les haricots) | l'héros → le héros | r: h aspire ; t: euphonie, typographie |
| `eupho.l-on` | 4 | C | règle | L'on après et, si, ou, où, que | | r: l'on ; t: euphonie |

## Règles écartées (doubles graphies admises, jamais comme faute)

Liste établie à partir de la règle 3 de `docs/redaction-contenu.md` et de la section « À éviter » de `docs/catalogue-regles-avancees.md`. Ces cas peuvent apparaître correctement écrits ; ils ne portent jamais la faute.

| Cas | Raison |
| --- | --- |
| Circonflexe sur i et u (paraître, île, goût, coût, maîtresse, traîner, août, assidûment) | rectifications de 1990 : les deux graphies sont admises, hors dû, mûr, sûr, jeûne, crû |
| Soudures (portemonnaie, weekend, piquenique, extraterrestre) et numéraux à traits d'union (vingt-et-un, deux-cent-trois) | rectifications de 1990 |
| Pluriel régulier des composés verbe + nom au singulier (un compte-goutte, des gratte-ciels, des après-midis) | rectifications de 1990 |
| Pluriel des mots latins et étrangers (des maximums, des scénarios, des matchs) | rectifications de 1990 et usage |
| Verbes en -eler, -eter autres qu'appeler et jeter (il ruissèle, il étiquète) | rectifications de 1990 |
| Accents réformés (évènement, crèmerie, sècheresse, règlementaire) | rectifications de 1990 |
| Tréma déplacé (aigüe, ambigüe, gageüre, argüer) | rectifications de 1990 |
| Laissé suivi d'un infinitif | rectifications de 1990 : invariable admis |
| Genre de après-midi, hymne (religieux), orge (perlé, mondé) | usage et dictionnaires divergent |
| Accord de on = nous (on est partis) | syllepse admise par les grammaires |
| Grand-mère au pluriel (grand-mères, grands-mères), châtain au féminin | deux graphies admises |
| Futur et conditionnel de payer, essayer (paiera, payera), asseoir (assoit, assied) | deux conjugaisons admises |
| Clé, clef ; cuiller, cuillère ; ognon, oignon | doubles graphies |
| Couleurs dérivées d'un nom passées dans l'usage comme adjectifs (marron foncé pluriel) | n'utiliser que les cas tranchés de `coul.nom-invariable` |
