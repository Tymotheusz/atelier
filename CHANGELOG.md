# Changelog

## [0.3.0] - 2026-10-26

- `AtLogin` : écran de connexion (marque, carte centrée, identifiant et mot de passe, « Rester connecté »,
  bouton passkey en option). Il émet `submit` et `passkey` sans appeler de service : le parent branche son
  authentification (Authelia, API maison) et repasse `loading` et `error`. Classes `at-login*` utilisables sans Vue.
- `AtDataView` : `lock-views` interdit d'ajouter, dupliquer ou supprimer une vue ; `icon-tools` réduit Filtrer,
  Trier, Grouper et Propriétés à leur pictogramme.
- Pictogramme `key`.
- `AtButton` avec `href` : le lien n'est plus souligné.
- Playground : le playground devient **deux apps** avec un sélecteur, à la place de l'ancienne page « Composants ».
  `#/doc` est la documentation du design system, bâtie avec le design system (fondations, une page par composant
  avec exemples vivants et API complète, canons de mise en page) ; `#/demo` reste l'app d'exemple.
- `AtMenuItem` : `checked` redevient à trois états. Vue castait le booléen absent à `false`, si bien que tous les
  items portaient `role="menuitemcheckbox"` et `aria-checked="false"` — et qu'`AtDropdown`, qui ne ferme que sur
  `role="menuitem"`, ne se refermait jamais au clic sur une action.

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
