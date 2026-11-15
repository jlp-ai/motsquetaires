---
name: publier
description: Contrôle, régénère les clips vocaux et publie le jeu Dictées sur GitHub (et Vercel). Utiliser après toute modification de contenu ou d'interface quand l'utilisateur dit « publie », « déploie », « pousse » ou « mets à jour le site ».
---

# Publier le jeu

Dépôt : `https://github.com/jlp-ai/motsquetaires` (branche `main`). Site : `https://motsquetaires-m744.vercel.app/`, reconstruit par Vercel à chaque push (`vercel.json` : seul l'application est servie, ni `docs/`, ni `CLAUDE.md`, ni `tools/`). Le workflow GitHub Pages (`.github/workflows/pages.yml`) publie la même sélection de fichiers.

## Étapes

1. **Contrôles** : `node tools/rarete.mjs check` (rareté, et difficulté D quand elle est en place), `node tools/noms.mjs` (structure dans les deux modes, noms non marqués).
2. **Clips** : `node tools/clips.mjs` en simple dry run pour compter ce qui manque ; si des textes ont changé, `node tools/clips.mjs --generate` (Azure Speech, clé lue dans `../Onirologos/.env`, jamais affichée ; environ 64 000 caractères pour tout régénérer, bien sous le palier gratuit). Les clips orphelins d'un texte modifié sont signalés, pas supprimés.
3. **Mode des noms propres** : lire `config.js`. En `perso`, les noms marqués sont affichés ; avant monétisation, passer à `commercial` puis refaire les étapes 1 et 2.
4. **Commit et push** : sur le poste Git n'a pas d'identité ; utiliser les variables `GIT_AUTHOR_NAME=jlp-ai`, `GIT_AUTHOR_EMAIL=jlp-ai@users.noreply.github.com`, `GIT_COMMITTER_NAME`, `GIT_COMMITTER_EMAIL` identiques, `GIT_TERMINAL_PROMPT=0`, et `git -c credential.interactive=never push`. Ne jamais mettre l'adresse e-mail personnelle dans un commit. Pas de push forcé.
5. **Vérifier** : `curl -s -o /dev/null -w "%{http_code}"` sur `/`, `/manifest.webmanifest`, `/icons/icon-192.png` (200) et `/CLAUDE.md`, `/docs/redaction-contenu.md` (404).

## Garde-fous

- `docs/pivot/` est ignoré par git (analyses de textes protégés) : ne jamais le forcer.
- Ne pas publier `.env`, ni les fichiers d'Onirologos.
- La publication est une action visible de l'extérieur : la lancer seulement quand l'utilisateur l'a demandée, ou pour une suite directe de ce qu'il vient de demander.
