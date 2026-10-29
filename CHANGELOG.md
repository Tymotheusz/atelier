# Changelog

## [0.6.0] - 2026-10-29

- Filtre « Moi » dans les vues de données : une règle sur l'utilisateur courant, proposée en tête des propriétés
  personne, qui vaut aussi pour la création depuis la vue.
- Vues système : ni renommées ni supprimées, filtres affichés mais fixes ; identifiant fixe possible à la création.
- Raccourcis clavier au niveau de la page, en pile, muets pendant la saisie et quand un menu ou une modale est ouvert.
- Toasts : file en bas à droite, action « Annuler » ou « Ouvrir », pause au survol, utilisables hors composant.
- `AtList` : liste parcourue au clavier (J / K, flèches, Entrée), au focus ou sur toute la page.
- `AtPropertyList` : ouverture d'un champ depuis le code, pour les raccourcis.
- Éditeur de date : Aujourd'hui, Demain, Lundi prochain, Dans une semaine, Effacer.
- Pictogramme `lock`.

## [0.5.0] - 2026-10-27

- **À savoir en mettant à jour** : dans `AtDataView`, Filtrer, Trier, Grouper et Propriétés n'affichent plus que leur
  pictogramme par défaut (`iconTools` vaut `true` ; libellé en infobulle et `aria-label`, compteurs visibles).
  `:icon-tools="false"` remet les libellés.
- `AtUserMenu` : menu utilisateur du pied de sidebar. Bouton deux lignes (avatar en initiales teinté indigo, nom,
  e-mail) ouvrant un menu à droite : profil, paramètres, items libres, thème et densité (branchés sur `useTheme` et
  `useDensity`), déconnexion. Profil, Paramètres et Se déconnecter n'apparaissent que si leur événement est écouté.
- Tags saisis dans la cellule : select et multi s'éditent en tapant, les options se filtrent dessous (casse et accents
  ignorés), ↑↓ / Entrée / Retour arrière / Échap. Avec `creatable: true` sur la propriété, « Créer … » ajoute une
  option (couleur suivante de la palette) et « ⋯ » la renomme, la recolore ou la supprime. `AtDataView`,
  `AtPropertyList` et `AtPropertyEditor` émettent `create-option`, `update-option` et `delete-option`.
- `AtComments` : fil d'activité. Commentaires et changements (`kind: 'event'`) mêlés par date, saisie en bas
  (⌘/Ctrl Entrée), mentions `@` avec suggestions, modification et suppression de ses propres messages. Émet `post`,
  `edit`, `delete` ; type `CommentItem`.
- `AtPopover` et `AtDropdown` : `placement` (`'bottom'`, `'right'`, et `'over'` pour l'édition en place).
- `AtAvatar` : `tone` (`'neutral'`, `'accent'`).
- Fonctions exportées : `matchOptions`, `canCreate`, `nextTagColor`, `splitMatch`, `normalize`, `TAG_ROTATION`,
  `formatRelative`, `splitMentions`, `mentionAt`.
- Pictogramme `logout`.
- Playground : dans Pilote, menu utilisateur, Catégorie et Étiquettes créables, fil d'activité des tâches qui consigne
  les changements de statut, priorité et assignation.

## [0.4.0] - 2026-10-27

- Marque : le logo Atelier (un compas d'atelier dans une tuile au coin d'équerre) et une famille de logos pour les
  apps — `dashboard`, `admin`, `tasks`, `mail`, `agenda`, `docs`, `files`, `contacts` — sur une construction commune
  (grille de 24, trait 2, glyphe en `bg` sur une couleur de token). Composant `AtLogo`, `registerLogoApps` pour en
  ajouter, fichiers SVG monochromes et en couleur dans `brand/` (générés par `npm run build:brand`, exportés en
  `@tymotheusz/atelier/brand/*`), page Fondations › Marque, favicon du playground.

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
