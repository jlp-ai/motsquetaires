---
name: juger-difficulte
description: Juge indépendamment la difficulté orthographique (D, devinabilité) des mots rares et des pièges du jeu Dictées, à côté de la rareté mesurée (R), et remplace les mots trop transparents. Utiliser quand on ajoute des mots rares, quand un niveau paraît trop facile ou trop dur, ou pour vérifier le quota de difficulté (« estafette » est plus dur à écrire que « bretteur »).
---

# Juger la difficulté d'un piège

La rareté (R, `node tools/rarete.mjs words <mots>`) dit si le mot est connu. La devinabilité (D) dit si on peut l'écrire à l'oreille. Un mot rare n'est pas forcément difficile à écrire. Grille complète : `../Onirologos/.claude/skills/creer-dictee/references/mesure-difficulte.md` (à lire avant de juger).

## Méthode D (0 à 4)

1. Transcrire le mot en phonèmes.
2. Lister les 3 à 5 graphies d'un scripteur qui applique les correspondances son-lettre courantes.
3. Regarder où tombe la bonne graphie : D0 transparent ; D1 une hésitation courante ; D2 piège connu (la bonne graphie est dans les trois premiers essais) ; D3 graphie opaque mais retrouvable par une famille de mots ou une étymologie ; D4 irréductible (anti-analogie ou cumul d'au moins trois points opaques indépendants).
4. Écrire dans la note `d` (nombre) et `piege` (étiquette courte des points d'hésitation, ex. « s muet, f simple, tt »).

La longueur, la rareté et le caractère savant sont des symptômes, pas des critères.

## Quotas par dictée (rareté et difficulté)

| Niveau | Mots rares (R < 5 par million) | Difficulté D |
| --- | --- | --- |
| `apprenti` | 0 | aucune exigence |
| `compagnon` | 1 | au moins 1 mot D≥2 |
| `maitre` | 2 | au moins 2 mots D≥2 dont 1 mot D≥3 |
| `grand-scribe` | 3 dont 1 très rare (< 0,5) | au moins 3 mots D≥3 |

Un mot qui hésite entre deux graphies admises n'est pas un bon piège. Aux niveaux Facile et Moyen, une notion testée doit être au programme du cycle (`docs/programme-referentiel.md`).

## Marche à suivre

1. Juger chaque note `rare: true` du thème et renseigner `d` et `piege`.
2. Si le quota D n'est pas atteint, remplacer un mot D0 ou D1 par un mot du même champ lexical vraiment piégeux, en retouchant minimalement la phrase, puis l'annoter.
3. Contrôler : `node tools/rarete.mjs check <id>`, puis passer `relire-orthographe` sur les textes modifiés.

## Rapport

Mots jugés par niveau D, remplacements (avant et après), cas douteux, dictées dont le texte a changé (clips à régénérer).
