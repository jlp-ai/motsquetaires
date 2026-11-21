---
name: relire-orthographe
description: Relecture orthographique indépendante, niveau correcteur de championnat, des fichiers de contenu du jeu Trouve l'erreur (content/*.js). Utiliser après toute rédaction ou extension de thème, avant publication, ou quand une phrase paraît douteuse (accord, concordance des temps, double graphie).
---

# Relire l'orthographe d'un thème

Un relecteur ne fait pas confiance au rédacteur. Il corrige directement dans le fichier et rapporte ce qu'il a changé.

## Référence orthographique (décidée le 21/11/2026)

Le **dictionnaire de l'Académie française, 9e édition** (dictionnaire-academie.fr) fait référence. Les autres dictionnaires (Larousse, Robert, TLFi) sont inaccessibles aux agents ou divergent : ils ne servent pas d'arbitre.
- Une phrase dont la règle repose sur un genre, un pluriel de nom composé, une graphie rare ou une étymologie est gardée seulement si l'Académie 9e la confirme sans ambiguïté (page lue avec WebFetch, pas un simple résumé de recherche).
- Si l'Académie donne deux graphies (traditionnelle et rectifiée de 1990), ou si le mot est absent, la phrase est remplacée.
- Le Wiktionnaire n'est qu'une piste, jamais une preuve.
- Les doutes qui restent sont remontés à l'utilisateur dans une courte liste (il a un Robert ou un Larousse sous la main).

## Contrôles, fichier par fichier

1. Chaque phrase à erreur, une fois `wrong` remplacé par `right`, est irréprochable : orthographe, accords, ponctuation, élisions, traits d'union. Aucune autre faute dans la phrase.
2. Les règles (`rule`) sont exactes et bien formulées.
3. **Zéro débat** : remplacer l'item plutôt que l'expliquer quand deux graphies sont admises (rectifications de 1990 ou usage : marron/marrons, paraît/parait, entraîneur, maîtriser, laissé suivi d'un infinitif, accord de proximité). Circonflexes traditionnels conservés.
4. Concordance : pas de subjonctif imparfait après un passé composé ; il reste admis après un passé simple, un imparfait ou un plus-que-parfait.
5. Choix (`choices`) : chaque leurre est une graphie plausible qu'un joueur écrirait vraiment ; `right` figure dans `choices`.
6. Faits : aucun fait douteux, score ou statistique ; noms propres sous forme de marqueurs `{{Nom|périphrase}}` pour les personnes réelles, personnages et marques ; orthographe des noms propres vérifiée.
7. Ancrage : un thème de ville nomme des lieux célèbres ; une phrase interchangeable est à réécrire.
8. Technique : `wrong` apparaît une seule fois comme mot entier  ; pas de tiret cadratin ni demi-cadratin, pas d'emoji ; UTF-8 sans BOM.

Terminer par `node tools/rarete-erreurs.mjs`, `node tools/erreurs.mjs` et `node tools/noms.mjs`.

## Rapport

Pour chaque correction : fichier, avant, après, raison. Puis les points encore discutables laissés tels quels.

## Modèle

Opus quand il est disponible (l'orthographe y est critique), sinon Sonnet avec une seconde passe. Jamais Fable.

## Densité des phrases Trouve l'erreur

Contrôler aussi la densité de chaque phrase à erreur selon le niveau (tableau « Densité des phrases Trouve l'erreur » de `docs/redaction-contenu.md` et `docs/niveau-expert.md`) : longueur, nombre de difficultés correctes autour de la faute, choix plausibles, mécanismes variés. Une phrase trop courte ou à une seule règle pour son niveau est réécrite, la faute restant unique et sans débat.

## Phrases « Trouve l'erreur » intéressantes, sans divulgâchage (décidé le 15/11/2026)

**Intéressantes.** Chaque phrase doit valoir la peine d'être lue pour elle-même, indépendamment de la faute :
- elle apprend ou raconte quelque chose de concret : un fait établi, un geste de métier, un détail de coulisses, une anecdote plausible, une image précise, une petite tension ou un trait d'humour ;
- elle a un sujet et un décor identifiables (un lieu, un objet, un personnage, un moment), pas une généralité (« Le sport est un domaine passionnant ») ni une tournure de manuel (« Les élèves font des exercices ») ;
- deux phrases d'un même thème et d'un même niveau ne racontent pas la même scène et n'ouvrent pas sur la même formule ; le registre varie (récit, description, consigne, dialogue indirect, énumération, question rhétorique) ;
- la phrase se lit comme une phrase vraie de journal, de roman ou de guide, jamais comme un exercice fabriqué ; les mots du thème y apparaissent naturellement.

**Sans divulgâchage.** Aucune phrase ne révèle un élément important d'une œuvre (roman, film, série, jeu, bande dessinée, épopée) : ni dénouement, ni mort, ni trahison, ni identité cachée, ni retournement, ni élément de la seconde moitié de l'intrigue. On s'en tient à la situation de départ connue de tous, au décor, aux gestes, aux objets, aux univers, aux personnages tels qu'on les rencontre au début (ex. pour Les Trois Mousquetaires : le duel, les gardes du cardinal, la devise, jamais le sort de Milady ni de Constance ; pour l'Odyssée : le voyage, les monstres rencontrés, jamais le retour déguisé ni le massacre des prétendants). En cas de doute, la phrase est générique ou retirée.
