# Changelog

## Non publié

- Playground : le playground devient **deux apps** avec un sélecteur, à la place de l'ancienne page « Composants ».
  `#/doc` est la documentation du design system, bâtie avec le design system (fondations, une page par composant
  avec exemples vivants et API complète, canons de mise en page) ; `#/demo` reste l'app d'exemple.
- `AtMenuItem` : `checked` redevient à trois états. Vue castait le booléen absent à `false`, si bien que tous les
  items portaient `role="menuitemcheckbox"` et `aria-checked="false"` — et qu'`AtDropdown`, qui ne ferme que sur
  `role="menuitem"`, ne se refermait jamais au clic sur une action.

## 0.1.0 — 2026-10-22

Première version.

- Tokens : 52 couleurs (clair et sombre), 12 styles typographiques, espacements, rayons, tailles, ombres, durées ; Inter et JetBrains Mono variables incluses.
- CSS : classes `at-*` pour tous les composants, densités confortable et compacte.
- Vue 3 : 37 composants dont `AtDataView` (tableau, board, liste, calendrier ; filtres, tris, groupes, propriétés, redimensionnement, édition en place, glisser-déposer), `AtAppShell`, `AtDrawer`, `AtModal`, `AtPopover`.
- Composables `useTheme` et `useDensity`.
