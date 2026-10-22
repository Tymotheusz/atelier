# Atelier — consignes pour les agents

Paquet `@tymotheusz/atelier` : design system (tokens, CSS `at-*`, composants Vue 3). Distribué depuis GitHub avec `dist/` versionné.

## Structure
- `tokens/tokens.json` : source unique des valeurs. Ne jamais écrire une couleur, une taille ou un rayon en dur ailleurs.
- `scripts/build-tokens.mjs` : génère `src/styles/tokens.css` et `src/tokens.ts` (fichiers générés, ne pas éditer).
- `src/styles/components.css` : toutes les classes `at-*`. Les composants Vue n'ont pas de `<style>` : ils posent ces classes.
- `src/components/At*.vue` : composants, `<script setup lang="ts">`, props typées, textes d'interface en français.
- `src/dataview/` : types et logique pure de `AtDataView` (testée dans `tests/logic.test.ts`).
- `playground/` : galerie + app d'exemple, `npm run dev`.

## Règles
- Couleurs via variables (`var(--accent)`) ; vérifier le contraste dans les deux thèmes (texte ≥ 4,5:1, contours de contrôles et focus ≥ 3:1).
- Hauteurs de contrôle via `--h-sm|md|lg` et `--h-row` (densité), pas les tokens `control-*` directement.
- Un composant ajouté : l'exporter dans `src/index.ts` (liste + plugin + `GlobalComponents`), l'ajouter à la galerie du playground et au tableau du README.
- `AtDataView` n'écrit jamais dans `rows` : il émet `update`, `create`, `open`, `delete`.
- Avant de commiter : `npm run typecheck && npm test && npm run build`, puis commiter `dist/`.
