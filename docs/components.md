# Composants — consignes

Consignes d'usage par composant (issues de la référence du design system). Les noms de classes `at-*` sont communs au CSS et aux composants Vue.

## Button

Déclenche une action ; une seule `at-btn--primary` par zone de l'écran.

**Classes** : `at-btn` + une variante `--primary` · `--secondary` · `--ghost` · `--danger`, une taille optionnelle `--sm` · `--lg`, et `--icon` pour un bouton carré sans libellé.

**Le consommateur fournit** : le libellé (verbe à l'infinitif : « Publier », « Exporter »), une icône optionnelle en premier enfant (`at-icon`, 16 px), `aria-label` obligatoire sur `--icon`.

- `--primary` : l'action qui fait avancer (créer, enregistrer, publier).
- `--secondary` : actions de même niveau sans priorité (partager, exporter).
- `--ghost` : actions de barre d'outils et d'annulation ; c'est la variante la plus fréquente dans un dashboard.
- `--danger` : uniquement dans une confirmation de suppression, jamais en barre d'outils.
- `--lg` est réservé aux sites (CTA, formulaires publics). En app, `md` partout, `sm` dans les barres d'outils et tableaux.
- La hauteur suit la densité (`data-density="compact"` sur un ancêtre).

À éviter : deux primaires côte à côte, un libellé en MAJUSCULES, un bouton désactivé sans explication à côté.

## Field, Input, Select, Textarea

Champ de saisie avec label, aide et erreur : `at-field` > `at-label` + contrôle + `at-hint`.

**Contrôles** : `at-input` (input, textarea), `at-select` (wrapper autour d'un `<select>` natif + icône chevron), `at-input-wrap` pour une icône à gauche (`at-icon`) et/ou un raccourci à droite (`at-kbd`).

**Le consommateur fournit** : un `id` relié au `for` du label, le texte d'aide, `aria-invalid="true"` et un `at-hint--error` qui dit quoi corriger.

- Le label est toujours visible ; le placeholder donne un exemple, jamais la consigne.
- Message d'erreur : ce qui ne va pas + comment le corriger, sans « Erreur : ».
- Largeur : celle de la donnée attendue (un code postal n'occupe pas toute la ligne).
- Formulaires de site : ajouter `data-density="comfortable"` et préférer `--lg` pour le bouton d'envoi.

## Checkbox et Switch

Case à cocher (`at-check`) et interrupteur (`at-switch`), tous deux sur un `<input type="checkbox">` natif dans un `<label class="at-toggle">`.

- `at-check` : choix dans une liste, sélection de lignes, consentement. Gère `:indeterminate` (sélection partielle).
- `at-switch` (+ `role="switch"`) : réglage qui s'applique immédiatement, sans bouton Enregistrer.
- Le libellé décrit l'état activé (« Mode compact », pas « Désactiver le mode étendu »).
- Le libellé est cliquable : ne jamais poser le contrôle seul sans `<label>` ou `aria-label`.

## Tag et Badge

Étiquettes (`at-tag`) et badges de statut (`at-badge`).

**`at-tag`** : valeur d'une propriété de type select / multi-select, catégorie, mot-clé. Neuf couleurs : par défaut (gris), `--brown`, `--orange`, `--yellow`, `--green`, `--blue`, `--purple`, `--pink`, `--red`. La couleur est attribuée à l'option une fois pour toutes et ne porte aucun sens système.

**`at-badge`** : état d'un objet, avec pastille. `--success`, `--warning`, `--danger`, `--info`, et neutre (brouillon, archivé). Le texte dit toujours l'état : la couleur ne suffit jamais.

- Texte court : un ou deux mots, sentence case.
- Un badge par ligne au plus ; plusieurs tags possibles.

## Card

Conteneur `at-card` : surface blanche, contour `border`, `radius-lg`, padding `space-5`.

**Parties** : `at-card__head` (titre `at-card__title` + `at-card__desc`, action ou badge à droite), contenu libre, `at-card__foot` pour les actions.
**Variante** : `at-card--link` sur un `<a>` quand toute la carte mène ailleurs (articles, projets) : survol = `border-strong` + `shadow-sm`.

- Pas d'ombre au repos : la séparation vient du contour.
- Ne pas imbriquer de cartes ; à l'intérieur, séparer par `border` ou par l'espacement.
- Dans une grille de dashboard, gap `space-4` ; sur un site, `space-6`.
- Prop `color` (`chart-1…5` ou un état) : barre de 4 px à gauche du titre, dans la carte (`at-card--striped`), pour rattacher la carte à une entité (projet) ou à une série.

## Tabs et Segment

Deux contrôles de navigation locale.

**`at-tabs` / `at-tab`** (soulignement `ink`) : sections d'une même page (Aperçu, Activité, Paramètres). `role="tablist"`, `role="tab"`, `aria-selected`. Compteur optionnel `at-count`.

**`at-segment`** : changement de vue sur les mêmes données (Tableau, Board, Calendrier), boutons avec `aria-pressed`. Icône + libellé court.

- 2 à 6 onglets ; au-delà, un menu.
- L'onglet actif ne change pas de graisse (évite le saut de largeur).

## Menu, MenuItem, Dropdown, Popover

Menu contextuel ou déroulant : `at-menu` sur `surface-raised` + `shadow-md`.

**Parties** : `at-menu-label` (titre de groupe en majuscules), `at-menu-item` (icône, libellé, puis `at-kbd` ou `at-menu-meta` poussés à droite), `at-menu-sep`, `at-menu-item--danger` en dernier.

**Le consommateur fournit** : le positionnement (popover ancré, via Floating UI côté Vue), la navigation clavier (flèches, Entrée, Échap) et `data-highlighted` sur l'item actif.

- Libellés à l'infinitif, sans points de suspension sauf si l'action ouvre une autre étape (« Déplacer vers… »).
- L'action destructive est séparée et en bas.

## DataView et Table

Vue base de données à la Notion / Airtable : `at-table-wrap` > `table.at-table`, précédée d'une `at-toolbar`.

**Cellules** : `at-cell-check` (sélection), `at-cell-title` (colonne principale, graisse 500), `at-num` (alignement droite, chiffres tabulaires). En-têtes : `at-th` avec l'icône du type de propriété (texte, select, date, nombre, personne).
**États** : survol de ligne `surface-hover`, sélection `aria-selected="true"` → `accent-soft`.
**Densité** : `data-density="compact"` sur un ancêtre passe les lignes de 36 à 30 px.

**Le consommateur fournit** : colonnes typées, tri/filtre, sélection. Le composant Vue ajoutera redimensionnement de colonnes, en-tête collant et édition en ligne.

- Valeurs vides : « — » en `ink-muted`, jamais une cellule blanche ambiguë.
- Montants et durées toujours à droite, unités dans la cellule (« 1 200 € »).
- Grille verticale + horizontale en `border` ; pas de lignes zébrées.

## Stat

Tuile de chiffre clé pour dashboard : `at-stat`.

**Parties** : `at-stat__label`, `at-stat__row` (valeur `at-stat__value` + variation `at-stat__delta--up|--down`), sparkline optionnelle `at-stat__spark` (SVG avec `.area`, `.line`, `.end`), `at-stat__foot` pour la période.

**Le consommateur fournit** : la valeur formatée en français (espace fine pour les milliers, virgule décimale, unité), la variation déjà signée et sa direction *selon le sens métier* (une baisse du taux de rebond est `--up`).

- 3 ou 4 tuiles par ligne au plus, en tête de page.
- La sparkline montre la tendance, sans axes ni valeurs ; le point final marque la valeur affichée.
- Prop `color` (`chart-1…5` ou un état) : barre de 4 px à gauche du libellé (`at-stat--striped`) ; la sparkline prend la même couleur. Dans une rangée, suivre l'ordre `chart-1`, `chart-2`… ; un état (`danger`) seulement si le libellé dit déjà de quoi il s'agit.

## IconTile

Icône en couleur forte sur un aplat pâle de la même teinte, sans dégradé ni ombre : `at-tile` (20 px), `at-tile--md` (32 px), `at-tile--lg` (48 px). Remplace les monogrammes (lettre sur fond coloré).

**Couleurs** : `chart-1…5` (fond `chart-N-soft`, icône `chart-N-ink`, ≥ 4,5:1), `ink` (aplat `ink`, logo de l'espace de travail), `neutral` (contour `border-strong`, par défaut).

- Une icône de préférence ; le contraste permet aussi une lettre.
- `lg` dans l'en-tête d'une page d'entité, centrée verticalement sur le titre et la description ; `sm` dans la navigation (`AtNavItem` avec `icon` + `tile`).
- Une entité garde la même icône et la même couleur partout.

## Sidebar, NavGroup, NavItem

Barre latérale d'application : `at-sidebar` (largeur `sidebar`, fond `surface-sunken`).

**Parties** : `at-workspace` (sélecteur d'espace avec `at-workspace__mark`), groupes `at-nav` avec `at-nav-label` optionnel, items `at-nav-item` (icône 16 px, libellé, `at-nav-count` ou `at-kbd` à droite). Page courante : `aria-current="page"`.

- 4 à 7 items par groupe ; libellés d'un ou deux mots.
- L'item actif se distingue par le fond `surface-active` et la graisse, jamais par l'accent.
- Sur mobile, la sidebar devient un drawer (composant Vue).

## AppShell (canon dashboard)

Canon de page de dashboard : sidebar + barre supérieure + contenu. Gabarit à copier, pas un composant unique.

**Structure** : `at-sidebar` à gauche ; colonne principale avec une barre de `topbar` px (fil d'Ariane à gauche, période et export à droite, bordure basse `border`) ; contenu en padding `space-8`, largeur max `measure-page`, sections espacées de `space-6`.

**Ordre du contenu** : titre `t-heading-1` + une ligne de contexte → rangée de `at-stat` → détail (tableau, graphiques en `at-card`).

- Le résumé avant le détail.
- Les graphiques utilisent `chart-1` à `chart-5` dans l'ordre.
- Fond de page `bg`, contenus sur `surface`.
