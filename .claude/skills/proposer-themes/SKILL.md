---
name: proposer-themes
description: Cherche des thèmes contemporains pour le jeu Dictées (sports, cultures, loisirs, lieux, sagas) et les propose sous forme de fiches à valider par l'utilisateur, sans rien rédiger. Utiliser quand l'utilisateur demande de nouvelles idées de thèmes, veut une veille de tendances, ou veut compléter un méta-thème.
---

# Proposer des thèmes à valider

Cet agent propose, l'utilisateur décide. Il n'écrit aucun contenu de dictée.

## 1. Préparer

- Lire les thèmes existants (`content/metas.js`, `content/*.js`) et la liste « Thèmes à traiter plus tard » du `CLAUDE.md` : ne jamais proposer un doublon.
- Veille web (WebSearch) : centres d'intérêt actuels des 10-17 ans et des adultes (jeux vidéo, vidéo en ligne, manga et anime, K-pop, séries, sport, musique, sagas, lieux, métiers, sciences). Citer les sources et leur date ; marquer « non vérifié » ce qui n'est pas sûr.

## 2. Filtrer (quatre tests)

1. **Champ lexical riche** : assez de mots pour fabriquer des pièges (accords, homophones, participes, mots rares) sans recourir à des noms propres.
2. **Stabilité** : le thème vieillit lentement (éviter scores, dates, actualité brûlante).
3. **Sûreté** : pas de polémique, pas de rumeur sur des personnes réelles.
4. **Désirabilité** : un adolescent ou un adulte s'y reconnaît.

Test de droits : œuvre ou marque sous droits (autorisée en mode perso avec marqueur `{{Nom|périphrase}}`, à périphraser avant monétisation) ; domaine public ; lieu ; sujet grave (ton sobre et sources).

## 3. Rendre un fichier de candidats

Écrire `docs/candidats-themes.md` : une fiche courte par candidat.

- **Nom, méta-thème suggéré, angle** (une phrase).
- **Champ lexical** : 8 à 12 mots du thème, avec fréquence R (`node tools/rarete.mjs words ...`) et 2 ou 3 pièges orthographiques possibles.
- **Risques** : droits, polémique, faits instables.
- **Sources**.
- **Décision** : case vide à remplir par l'utilisateur (Garder, Rejeter, Plus tard).

Maximum 8 candidats par passage, classés du plus au moins prometteur, avec une recommandation en une phrase.

## 4. Après validation

Les « Garder » partent à `ecrire-theme`. Les « Plus tard » vont dans la section « Thèmes à traiter plus tard » du `CLAUDE.md`. Les « Rejeter » sont gardés dans le fichier avec la raison, pour ne pas les reproposer.

## Modèle

Sonnet par défaut (recherche web). Jamais Fable.
