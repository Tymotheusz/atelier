# Changelog

## [0.2.0] - 2026-10-22

- Tuile d'icône pour identifier une entité, à la place des initiales : fond pâle de la couleur, icône en couleur forte
- Couleurs pâles et fortes pour chaque couleur de série, lisibles en thème clair et sombre
- Barre de couleur optionnelle à gauche du titre des tuiles de stat et des cartes ; la sparkline suit la couleur
- Items de navigation avec icône sur tuile de couleur
- Dix nouveaux pictogrammes (dossier, livre, calques, code, palette…)
- Playground : choix de l'icône et de la couleur d'un projet, logo en icône

## 0.1.0 — 2026-10-22

Première version.

- Tokens : 52 couleurs (clair et sombre), 12 styles typographiques, espacements, rayons, tailles, ombres, durées ; Inter et JetBrains Mono variables incluses.
- CSS : classes `at-*` pour tous les composants, densités confortable et compacte.
- Vue 3 : 37 composants dont `AtDataView` (tableau, board, liste, calendrier ; filtres, tris, groupes, propriétés, redimensionnement, édition en place, glisser-déposer), `AtAppShell`, `AtDrawer`, `AtModal`, `AtPopover`.
- Composables `useTheme` et `useDensity`.
