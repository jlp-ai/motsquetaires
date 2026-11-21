# Consigne de la relecture orthographique indépendante (avant publication)

Applique le skill `.claude/skills/relire-orthographe/SKILL.md` (lis-le en entier) et `docs/redaction-contenu.md` (zéro débat orthographique, noms propres en marqueurs), ainsi que `docs/niveau-expert.md` pour le standard championnat. Relecteur indépendant, niveau correcteur de championnat : ne fais confiance à aucun rédacteur. Corrige directement dans les fichiers.

## Ce qu'il faut relire, pour chaque thème demandé

1. **Toutes les phrases à erreur** : une fois `wrong` remplacé par `right`, la phrase est irréprochable ; une seule faute ; `wrong` unique comme mot entier (avec ou sans élision collée) ; `right` dans `choices` ; trois choix distincts et plausibles ; règle exacte en deux phrases au plus ; champ `type` présent et juste (lexique, pronominal, participe, homophone, invariable, temps, accord, adverbe, compose, sens). **Priorité aux phrases Expert (`grand-scribe`)** : 18 à 35 mots, 4 difficultés correctes autour de la faute, 4 phrases `lexique` sur 8, au moins 5 types, au plus 1 pronominal, 2 participe, 2 homophone. Les graphies rares des phrases `lexique` doivent être exactes (dictionnaire de référence) ; remplace tout mot dont la graphie est incertaine ou admet une variante.
2. **Marqueurs** `{{Nom|périphrase}}` : lire les deux versions (perso et commercial) ; genre, nombre, élision et contractions corrects dans les deux. `node tools/noms.mjs` doit rester OK.
3. **Faits** : rien de douteux, aucun chiffre ni date contestée ; en cas de doute, rendre générique ou retirer.

## Contrôles finaux

`node tools/rarete-erreurs.mjs` (tout OK), `node tools/erreurs.mjs` (les niveaux Expert OK), `node tools/noms.mjs` (structure OK). Ne touche ni à `app.js`, ni à git, ni à `index.html`, ni à `metas.js`, ni aux thèmes qui ne sont pas les tiens.

## Rapport (court)

Corrections (fichier, avant, après, raison), points discutables laissés.

## Phrases « Trouve l'erreur » intéressantes, sans divulgâchage (décidé le 15/11/2026)

**Intéressantes.** Chaque phrase doit valoir la peine d'être lue pour elle-même, indépendamment de la faute :
- elle apprend ou raconte quelque chose de concret : un fait établi, un geste de métier, un détail de coulisses, une anecdote plausible, une image précise, une petite tension ou un trait d'humour ;
- elle a un sujet et un décor identifiables (un lieu, un objet, un personnage, un moment), pas une généralité (« Le sport est un domaine passionnant ») ni une tournure de manuel (« Les élèves font des exercices ») ;
- deux phrases d'un même thème et d'un même niveau ne racontent pas la même scène et n'ouvrent pas sur la même formule ; le registre varie (récit, description, consigne, dialogue indirect, énumération, question rhétorique) ;
- la phrase se lit comme une phrase vraie de journal, de roman ou de guide, jamais comme un exercice fabriqué ; les mots du thème y apparaissent naturellement.

**Sans divulgâchage.** Aucune phrase ne révèle un élément important d'une œuvre (roman, film, série, jeu, bande dessinée, épopée) : ni dénouement, ni mort, ni trahison, ni identité cachée, ni retournement, ni élément de la seconde moitié de l'intrigue. On s'en tient à la situation de départ connue de tous, au décor, aux gestes, aux objets, aux univers, aux personnages tels qu'on les rencontre au début (ex. pour Les Trois Mousquetaires : le duel, les gardes du cardinal, la devise, jamais le sort de Milady ni de Constance ; pour l'Odyssée : le voyage, les monstres rencontrés, jamais le retour déguisé ni le massacre des prétendants). En cas de doute, la phrase est générique ou retirée.
