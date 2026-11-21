---
name: juger-difficulte
description: Juge indépendamment la difficulté orthographique (D, devinabilité) des mots et des pièges du jeu Trouve l'erreur, à côté de la rareté mesurée (R), et remplace les mots trop transparents. Utiliser quand on ajoute des phrases lexique, quand un niveau paraît trop facile ou trop dur, ou pour vérifier la difficulté des pièges (« estafette » est plus dur à écrire que « bretteur »).
---

# Juger la difficulté d'un piège

La rareté (R, `node tools/rarete.mjs words <mots>`) dit si le mot est connu. La devinabilité (D) dit si on peut l'écrire à l'oreille. Un mot rare n'est pas forcément difficile à écrire. Grille complète : `../Onirologos/.claude/skills/creer-dictee/references/mesure-difficulte.md` (à lire avant de juger).

## Méthode D (0 à 4)

1. Transcrire le mot en phonèmes.
2. Lister les 3 à 5 graphies d'un scripteur qui applique les correspondances son-lettre courantes.
3. Regarder où tombe la bonne graphie : D0 transparent ; D1 une hésitation courante ; D2 piège connu (la bonne graphie est dans les trois premiers essais) ; D3 graphie opaque mais retrouvable par une famille de mots ou une étymologie ; D4 irréductible (anti-analogie ou cumul d'au moins trois points opaques indépendants).
4. Noter l'étiquette courte des points d'hésitation (ex. « s muet, f simple, tt »).

La longueur, la rareté et le caractère savant sont des symptômes, pas des critères.

## Attendus par niveau

Facile : mots courants. Moyen : mots assez courants, notion du cycle 4. Difficile : mots rares, au moins D2. Expert : mots très rares, D3 ou plus (contrôle de fréquence : `node tools/rarete-erreurs.mjs`).

Un mot qui hésite entre deux graphies admises n'est pas un bon piège. Aux niveaux Facile et Moyen, une notion testée doit être au programme du cycle (`docs/programme-referentiel.md`).

## Marche à suivre

1. Juger le mot juste de chaque phrase `lexique` du thème.
2. Si le niveau est trop facile, remplacer un mot D0 ou D1 par un mot du même champ lexical vraiment piégeux, en retouchant minimalement la phrase.
3. Contrôler : `node tools/rarete-erreurs.mjs`, puis passer `relire-orthographe` sur les phrases modifiées.

## Rapport

Mots jugés par niveau D, remplacements (avant et après), cas douteux.
