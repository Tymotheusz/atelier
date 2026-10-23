# Atelier

Design system personnel pour les sites et outils de Timothée : papier chaud, encre presque noire, un seul indigo pour agir. Il fournit :

- **des tokens** (couleurs clair/sombre, typographie, espacements, rayons, ombres, densités) en CSS et en JSON ;
- **une couche CSS** de composants (`at-*`), utilisable sur n'importe quel site, avec ou sans framework ;
- **des composants Vue 3** typés qui posent ces classes, dont `AtDataView`, une vue de données à la Notion (tableau, board, liste, calendrier, filtres, tris, groupes, propriétés).

Le paquet est distribué **directement depuis GitHub** : `dist/` est versionné, rien n'est compilé à l'installation.

## Installation

```bash
npm install github:Tymotheusz/atelier#v0.1.0
# ou la branche principale
npm install github:Tymotheusz/atelier
```

Vue `^3.4` est une dépendance pair. Si le dépôt est privé, la machine qui installe doit avoir un accès Git au dépôt (clé SSH ou `gh auth login`).

Pour mettre à jour une app : changer le tag dans `package.json`, puis `npm install`.

## Utilisation avec Vue

```ts
// main.ts
import { createApp } from 'vue'
import Atelier from '@tymotheusz/atelier'
import '@tymotheusz/atelier/style.css' // polices + tokens + composants
import App from './App.vue'

createApp(App).use(Atelier).mount('#app') // enregistre tous les composants At*
```

Ou import à la carte, sans plugin :

```vue
<script setup lang="ts">
import { AtButton, AtDataView } from '@tymotheusz/atelier'
</script>
```

### Thème et densité

```ts
import { useTheme, useDensity } from '@tymotheusz/atelier'

const { mode, resolved, toggle } = useTheme() // mode : 'system' | 'light' | 'dark', mémorisé
const { density } = useDensity()               // 'comfortable' | 'compact'
```

Les deux posent `data-theme` et `data-density` sur `<html>`. On peut aussi les poser sur n'importe quel conteneur pour une zone différente.

### Canon d'application

```vue
<AtAppShell :route-key="route.fullPath">
  <template #sidebar>
    <AtSidebar>
      <template #header><div class="at-workspace"><span class="at-workspace__mark">A</span>Mon outil</div></template>
      <AtNavGroup>
        <AtNavItem icon="home" active>Accueil</AtNavItem>
        <AtNavItem icon="inbox" :count="3">Boîte de réception</AtNavItem>
      </AtNavGroup>
    </AtSidebar>
  </template>
  <template #topbar>
    <AtBreadcrumbs :items="[{ label: 'Projets', href: '/' }, { label: 'Statistiques' }]" />
  </template>
  <AtPage title="Statistiques" description="Trafic et engagement sur la période.">
    …
  </AtPage>
</AtAppShell>
```

### AtDataView

Le composant ne modifie jamais les lignes : il émet, le parent applique. Les vues (filtres, tris, colonnes…) sont modifiées en place via `v-model:views` et peuvent être persistées telles quelles (JSON).

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { createView, filter, type Property } from '@tymotheusz/atelier'

interface Task { id: string; title: string; status: string; due: string | null; estimate: number | null }

const tasks = ref<Task[]>([/* … */])
const schema: Property<Task>[] = [
  { key: 'title', name: 'Nom', type: 'title', width: 300 },
  { key: 'status', name: 'Statut', type: 'status', options: [
    { value: 'todo', label: 'À faire' },
    { value: 'doing', label: 'En cours', tone: 'info' },
    { value: 'done', label: 'Terminé', tone: 'success' }
  ] },
  { key: 'due', name: 'Échéance', type: 'date', overdue: t => !!t.due && t.due < new Date().toISOString().slice(0, 10) },
  { key: 'estimate', name: 'Estimation', type: 'number', suffix: ' h' }
]
const views = ref([
  createView('Tableau', 'table'),
  createView('Kanban', 'board', { groupBy: 'status' }),
  createView('Calendrier', 'calendar', { dateProp: 'due' }),
  createView('À faire', 'list', { filters: [filter('status', 'isnot', 'done')] })
])
const active = ref(views.value[0].id)
</script>

<template>
  <AtDataView
    v-model:views="views" v-model:active-view="active"
    :rows="tasks" :schema="schema" new-label="Nouvelle tâche"
    @update="(row, key, value) => (row[key] = value)"
    @create="defaults => tasks.push({ id: crypto.randomUUID(), title: '', status: 'todo', due: null, estimate: null, ...defaults })"
    @open="row => (selected = row)"
    @delete="rows => (tasks = tasks.filter(t => !rows.includes(t)))"
  />
</template>
```

Types de propriété : `title`, `text`, `number`, `select`, `status`, `multi`, `person`, `relation`, `date`, `progress`, `checkbox`. Une propriété avec `compute` est calculée et en lecture seule. `options` peut être une fonction de la ligne (relation dépendante d'une autre colonne).

Pour un panneau de détail : `AtDrawer` + `AtPropertyList` (même schéma, même événement `update`).

## Utilisation sans Vue (CSS seul)

```html
<link rel="stylesheet" href="node_modules/@tymotheusz/atelier/dist/atelier.css">
<button class="at-btn at-btn--primary">Publier</button>
<span class="at-badge at-badge--success">En ligne</span>
```

Si le dépôt est public, la même feuille est servie par jsDelivr : `https://cdn.jsdelivr.net/gh/Tymotheusz/atelier@v0.1.0/dist/atelier.css`.

| Fichier | Contenu |
| --- | --- |
| `@tymotheusz/atelier/style.css` | polices + tokens + composants |
| `@tymotheusz/atelier/tokens.css` | polices + variables CSS + classes typographiques `t-*` |
| `@tymotheusz/atelier/components.css` | classes `at-*` seules (à charger après les tokens) |
| `@tymotheusz/atelier/tokens.json` | source des tokens (outillage, graphiques) |

En JS : `import { tokens, cssVar, chartColors } from '@tymotheusz/atelier'`.

## Composants

| Famille | Composants |
| --- | --- |
| Actions | `AtButton`, `AtDropdown`, `AtMenu`, `AtMenuItem`, `AtMenuLabel`, `AtMenuSeparator`, `AtPopover` |
| Formulaires | `AtField`, `AtInput`, `AtTextarea`, `AtSelect`, `AtCheckbox`, `AtSwitch` |
| Statut | `AtTag`, `AtBadge`, `AtAvatar`, `AtProgress`, `AtKbd` |
| Contenu | `AtCard`, `AtEmpty`, `AtModal`, `AtDrawer` |
| Navigation | `AtTabs`, `AtSegment`, `AtBreadcrumbs`, `AtSidebar`, `AtNavGroup`, `AtNavItem` |
| Données | `AtStat`, `AtTable`, `AtDataView`, `AtPropertyValue`, `AtPropertyEditor`, `AtPropertyList` |
| Mise en page | `AtAppShell`, `AtPage` |
| Pictogrammes | `AtIcon` (jeu intégré, extensible avec `registerIcons`), `AtIconTile` |

Règles d'usage : [docs/guidelines.md](docs/guidelines.md) (couleur, typo, densité, ton) et [docs/components.md](docs/components.md) (quand utiliser quoi).

## Documentation

`npm run dev` ouvre le playground, qui contient **deux apps** et un sélecteur pour passer de l'une à l'autre :

- **Atelier** (`#/doc`) — la documentation du système, bâtie avec le système lui-même : fondations (couleurs,
  typographie, espacement, formes, densité, mouvement, états, pictogrammes, ton), une page par composant
  (exemples vivants, règles d'usage, API complète : props, `v-model`, événements, slots, classes `at-*`),
  et les trois canons de mise en page.
- **Pilote** (`#/demo`) — une app d'exemple complète (projets, milestones, tâches, vues enregistrées,
  panneau de détail), pour voir le système en service plutôt qu'expliqué.

Les exemples de la documentation sont compilés à l'exécution : l'aperçu affiché et le code copié sont le même
texte, ils ne peuvent pas diverger. Le contenu se modifie dans `playground/src/docs/` — `entries/` pour les
composants, `pages/` pour les fondations et les canons.

## Développement

```bash
npm install
npm run dev          # playground : documentation du système + app d'exemple
npm test             # tests unitaires (logique de vue, composants)
npm run typecheck
npm run build        # tokens → dist/ (JS, types, CSS, polices)
```

Les tokens se modifient dans `tokens/tokens.json` ; `npm run build:tokens` régénère `src/styles/tokens.css` et `src/tokens.ts`.

### Publier une version

1. `npm run build` puis commiter `dist/` (la CI échoue si `dist/` n'est pas à jour).
2. Monter `version` dans `package.json`, compléter `CHANGELOG.md`.
3. `git tag v0.x.y && git push --tags`.

## Licence

MIT
