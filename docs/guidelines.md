# Atelier — règles d'usage

Atelier est le système de Timothée pour ses sites personnels et ses outils : un papier chaud, une encre presque noire, un seul indigo pour agir. Il sert deux registres avec les mêmes tokens : **le site** (lecture, respiration, `t-prose`) et **l'app** (dashboards, bases de données, densité). Les composants existent ici en CSS pur (`components/bundle.css`, classes `at-*`) ; les composants Vue les posent sans les réécrire.

## Principes

- **Le contenu d'abord.** L'interface se retire : fonds chauds et neutres, peu de contours, aucune décoration. La couleur est réservée à l'action (`accent`), à l'état (`success`, `warning`, `danger`, `info`) et aux données (`tag-*`, `chart-*`).
- **Un seul accent.** `accent` ne marque que ce qui est cliquable ou sélectionné. Pas d'indigo décoratif, pas de dégradé.
- **Contours plutôt qu'ombres.** Les surfaces au repos se séparent par `border`. Les ombres sont réservées à ce qui flotte (menus, modales).
- **Deux densités, un système.** Confortable par défaut ; compacte pour les vues de données. Même rythme, hauteurs différentes.

## Contenu et ton

- Français, sentence case partout (« Nouvelle page », pas « Nouvelle Page »). MAJUSCULES seulement via `t-overline`.
- Tutoiement dans les outils perso (« Visible uniquement par toi »), vouvoiement sur les sites publics.
- Boutons et items de menu à l'infinitif : « Publier », « Dupliquer », « Copier le lien ».
- Messages d'erreur : ce qui ne va pas, puis comment corriger. « Adresse incomplète : il manque le domaine. »
- Nombres à la française : espace pour les milliers, virgule décimale, unité après une espace (« 12 480 € », « 46,2 % »).
- Pas d'emoji dans l'interface. Une page peut avoir une icône, jamais un titre décoré.

## Couleur

- Sols : `bg` pour la page, `surface` pour cartes, tableaux et champs, `surface-sunken` pour sidebar, barres d'outils et en-têtes de tableau, `surface-raised` pour tout ce qui flotte.
- États neutres : `surface-hover` au survol, `surface-active` pour l'item pressé ou courant.
- Texte : `ink` (13,9:1), `ink-muted` pour le secondaire (6:1), `ink-subtle` pour placeholders et métadonnées (≥4,5:1), `ink-disabled` hors contraste.
- Contours : `border` décoratif, `border-strong` au survol, `border-control` pour tout contrôle saisissable (≥3:1).
- Action : `accent` + `on-accent` ; `accent-soft` + `accent-ink` pour une sélection.
- États : chaque `success|warning|danger|info` a son `-soft`. Toujours un mot ou une icône avec la couleur.
- Tags : neuf paires `tag-<couleur>-bg` / `tag-<couleur>-fg`, sans signification système.
- Graphiques : `chart-1` à `chart-5`, dans cet ordre. Au-delà de cinq séries, regrouper.
- Entités : une couleur `chart-*` peut identifier une entité (projet). Elle la garde partout : tuile d'icône (version pâle), barre de couleur des widgets et sparkline (`chart-N` plein), marque de relation.
- Le thème sombre n'est pas une inversion : sols brun-noir, accent éclairci, `on-accent` foncé.

## Typographie

- Inter pour tout, JetBrains Mono pour le code et les identifiants. Fichiers variables dans `fonts/`.
- Titres : `t-display` (hero de site, un par page), `t-heading-1` (titre de page), `t-heading-2` (section), `t-heading-3` (carte, modale).
- Texte : `t-prose` pour la lecture longue, sur `measure-prose` au plus ; `t-body` par défaut en app ; `t-small` pour labels et menus ; `t-caption` pour en-têtes de colonne et tags.
- Utilitaires : `t-overline` (labels de groupe, en majuscules), `t-stat` (chiffres clés, tabulaires), `t-code`.
- Les graisses intermédiaires (550, 650) sont voulues : Inter variable les rend nettes.
- Chiffres alignés en colonne : `font-variant-numeric: tabular-nums` (classe `at-num`).

## Espacement, taille et densité

- Grille de 4 px : `space-1` (4) à `space-24` (96). Gaps entre contrôles `space-2`, padding de carte `space-5`, gouttière de page `space-6` (mobile) / `space-8` (desktop), sections de site `space-12` à `space-24`.
- Hauteurs de contrôle : `control-sm` 28, `control-md` 32, `control-lg` 40 ; en compact 24 / 28 / 32. Lignes de tableau `row` 36 / `row-compact` 30.
- Densité : `data-density="compact"` sur un ancêtre bascule les variables `--h-sm`, `--h-md`, `--h-lg`, `--h-row`, `--pad-cell`. Les composants lisent ces variables, jamais les tokens de hauteur directement.
- Gabarits : `sidebar` 240, `topbar` 48, `measure-prose` 720, `measure-page` 1120.

## Rayons, ombres, mouvement

- `radius-xs` tags et cases, `radius-sm` items de menu et de nav, `radius-md` boutons et champs, `radius-lg` cartes, menus et tableaux, `radius-xl` modales et grandes cartes de site, `radius-full` switch et pastilles.
- `shadow-sm` survol de carte et segment actif ; `shadow-md` menus, popovers, toasts ; `shadow-lg` modales et palette de commandes. Rien d'autre n'a d'ombre.
- `duration-fast` pour les couleurs, `duration-base` pour menus et switch, `duration-slow` pour modales et panneaux ; toujours `ease-out`. Respecter `prefers-reduced-motion`.

## États

- Survol neutre : fond `surface-hover`. Survol accent : `accent-hover`.
- Focus clavier : outline 2px plein `focus`, offset 2px (0 sur les champs, dont la bordure passe en `focus`). Contraste ≥3:1 sur tous les sols, dans les deux thèmes.
- Désactivé : fond `surface-sunken`, texte `ink-disabled`, curseur interdit, et une explication à proximité.
- Erreur de champ : bordure `danger` + `at-hint--error`.

## Iconographie

- Jeu de référence : Lucide (open source), 16 px, trait 1,5, `currentColor`, extrémités arrondies. Classe `at-icon`.
- Les aperçus de ce système utilisent des pictos dessinés à la main au même gabarit, en attendant l'intégration de Lucide côté Vue.
- Couleur : `ink-muted` par défaut, `ink-subtle` dans les en-têtes de tableau, jamais l'accent seul.
- Icône seule = bouton `at-btn--icon` avec `aria-label`.
- Tuile d'icône (`at-tile`) pour identifier une entité, à la place d'une initiale. Sur une tuile `chart-*`, l'icône est en `chart-N-ink` sur `chart-N-soft`.

## Canons de mise en page

- **Site** : colonne `measure-page` centrée, texte long sur `measure-prose`, hero en `t-display` sans pleine hauteur, sections séparées par l'espace, pas par des fonds colorés.
- **Dashboard** : voir `DashboardShell`. Sidebar, barre supérieure, titre, rangée de `at-stat`, puis le détail.
- **Base de données** : `at-toolbar` (vues en `at-segment`, filtre, tri, recherche, « Nouveau ») au-dessus d'un `at-table`, en densité compacte.
