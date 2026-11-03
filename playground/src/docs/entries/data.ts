import { computed, onBeforeUnmount, ref } from 'vue'
import { createView, filter, sort, uid, ME, type ChecklistGroup, type ChecklistItem, type Property, type PropertyOption, type StreakDay, type View } from '@tymotheusz/atelier'
import type { ComponentDoc } from '../types'

interface Tache { id: string; title: string; statut: string; priorite: string; due: string | null; estimate: number | null; tags: string[]; fait: boolean }

const OPT_STATUT = [
  { value: 'todo', label: 'À faire' },
  { value: 'doing', label: 'En cours', tone: 'info' as const },
  { value: 'blocked', label: 'Bloqué', tone: 'danger' as const },
  { value: 'done', label: 'Terminé', tone: 'success' as const }
]
const OPT_PRIO = [
  { value: 'low', label: 'Basse', color: 'gray' as const },
  { value: 'med', label: 'Moyenne', color: 'yellow' as const },
  { value: 'high', label: 'Haute', color: 'orange' as const }
]
const OPT_TAGS = [
  { value: 'front', label: 'Front', color: 'blue' as const },
  { value: 'back', label: 'Back', color: 'purple' as const },
  { value: 'design', label: 'Design', color: 'pink' as const }
]

const iso = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }

/** Schéma et lignes communs aux exemples de propriétés et de vue de données. */
function jeuDeDonnees(creatable = false) {
  const tags = ref<PropertyOption[]>(OPT_TAGS.map(o => ({ ...o })))
  const schema: Property<Tache>[] = [
    { key: 'title', name: 'Nom', type: 'title', width: 260 },
    { key: 'statut', name: 'Statut', type: 'status', options: OPT_STATUT, width: 130 },
    { key: 'priorite', name: 'Priorité', type: 'select', options: OPT_PRIO, width: 120 },
    { key: 'due', name: 'Échéance', type: 'date', width: 120, overdue: r => !!r.due && r.due < iso(0) && r.statut !== 'done' },
    { key: 'estimate', name: 'Estimation', type: 'number', suffix: ' h', width: 110 },
    { key: 'tags', name: 'Étiquettes', type: 'multi', options: () => tags.value, creatable, width: 170 },
    { key: 'fait', name: 'Fait', type: 'checkbox', width: 70 }
  ]
  const rows = ref<Tache[]>([
    { id: 't1', title: 'Écran de connexion', statut: 'doing', priorite: 'high', due: iso(3), estimate: 10, tags: ['front'], fait: false },
    { id: 't2', title: 'Tests utilisateurs', statut: 'done', priorite: 'med', due: iso(-6), estimate: 2, tags: ['design'], fait: true },
    { id: 't3', title: 'Formulaire de contact', statut: 'blocked', priorite: 'high', due: iso(-2), estimate: 8, tags: ['back'], fait: false },
    { id: 't4', title: 'Page tarifs', statut: 'todo', priorite: 'low', due: iso(12), estimate: 3, tags: ['front', 'design'], fait: false }
  ])
  /** Gestion des options créées depuis les cellules (exemples avec `creatable`). */
  const options = {
    create: (o: PropertyOption) => { tags.value.push(o) },
    update: (v: string, patch: Partial<PropertyOption>) => { const o = tags.value.find(x => x.value === v); if (o) Object.assign(o, patch) },
    remove: (v: string) => { tags.value = tags.value.filter(o => o.value !== v); rows.value.forEach(r => { r.tags = r.tags.filter(t => t !== v) }) }
  }
  return { schema, rows, options }
}


/* ---------- Routine du matin (AtChecklist, AtStreak) ---------- */
type Etape = ChecklistItem & { minutes: number; heure: string }
const TEMPS: ChecklistGroup[] = [
  { id: 'collecter', label: 'Collecter', hint: 'Tout ce qui demande une action part dans l’inbox.' },
  { id: 'planifier', label: 'Planifier' },
  { id: 'traiter', label: 'Traiter', hint: 'Jusqu’à la première réunion.' }
]
const routine = (): Etape[] => [
  { id: 'pro', title: 'Mail pro', group: 'collecter', state: 'done', href: 'https://mail.example.com', minutes: 5, heure: '8 h 33' },
  { id: 'perso', title: 'Mail perso', group: 'collecter', state: 'done', href: 'https://mail.example.org', minutes: 2, heure: '8 h 34' },
  { id: 'missel', title: 'Mail missel', group: 'collecter', state: 'skipped', minutes: 2, heure: '' },
  { id: 'teams', title: 'Teams', group: 'collecter', state: 'todo', href: 'https://teams.example.com', minutes: 1, heure: '',
    note: 'Canaux d’équipe et conversations privées.\nUne demande = une idée dans l’inbox.' },
  { id: 'whatsapp', title: 'WhatsApp', group: 'collecter', state: 'todo', href: 'https://web.whatsapp.example', minutes: 1, heure: '' },
  { id: 'inbox', title: 'Trier l’inbox', group: 'planifier', state: 'todo', minutes: 5, heure: '',
    note: 'Chaque idée : une tâche datée, un projet, ou la corbeille.' },
  { id: 'agenda', title: 'Agenda du jour', group: 'planifier', state: 'todo', minutes: 2, heure: '' },
  { id: 'trois', title: 'Choisir les trois tâches du jour', group: 'planifier', state: 'todo', minutes: 3, heure: '' },
  { id: 'premiere', title: 'Première tâche', group: 'traiter', state: 'todo', minutes: 25, heure: '' }
]
/** 30 jours jusqu'au 3 novembre 2026, niveaux fixes pour une doc stable. */
const trenteJours = (): StreakDay[] => {
  const niveaux = '222220022221022202100122220021'
  return [...niveaux].map((n, i) => {
    const d = new Date(2026, 9, 5 + i)
    const date = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return { date, level: Number(n) as StreakDay['level'] }
  })
}

export const data: ComponentDoc[] = [
  {
    name: 'AtStat',
    slug: 'at-stat',
    family: 'Données',
    tagline: 'Tuile de chiffre clé, avec variation et sparkline.',
    about: [
      'La valeur arrive déjà formatée en français : espace fine pour les milliers, virgule décimale, unité. La variation arrive déjà signée, et `trend` dit son **sens métier** — une baisse du taux de rebond est une bonne nouvelle, donc `up`.',
      '`color` ajoute une barre de 4 px à gauche du libellé (`at-stat--striped`) et donne sa teinte à la sparkline. Sans elle, la sparkline reste en `chart-1`.'
    ],
    rules: [
      '3 ou 4 tuiles par ligne au plus, en tête de page.',
      'La sparkline montre la tendance, sans axes ni valeurs ; le point final marque la valeur affichée.',
      '`foot` dit la période, toujours la même sur une rangée.',
      'Pas de tuile sans contexte : un chiffre seul ne dit rien.',
      'Dans une rangée, les couleurs suivent l’ordre `chart-1`, `chart-2`… Un état (`danger`) seulement si le libellé dit déjà de quoi il s’agit.'
    ],
    props: [
      { name: 'label', type: 'string', required: true, desc: 'Ce qui est mesuré.' },
      { name: 'value', type: 'string | number', required: true, desc: 'Valeur déjà formatée.' },
      { name: 'delta', type: 'string', desc: 'Variation déjà signée, ex. `+12,4 %`.' },
      { name: 'trend', type: `'up' | 'down'`, desc: 'Sens métier de la variation : `up` = bonne nouvelle.' },
      { name: 'spark', type: 'number[]', desc: 'Série de la sparkline, 2 points au minimum.' },
      { name: 'foot', type: 'string', desc: 'Période ou précision.' },
      { name: 'color', type: `'chart-1' … 'chart-5' | 'success' | 'warning' | 'danger' | 'info'`, desc: 'Barre de couleur à gauche du libellé ; la sparkline prend la même teinte.' }
    ],
    slots: [
      { name: 'value', type: '—', desc: 'Valeur, pour un rendu composé.' },
      { name: 'foot', type: '—', desc: 'Pied de tuile.' }
    ],
    classes: ['at-stat', 'at-stat--striped', 'at-tone-*', 'at-stat__label', 'at-stat__row', 'at-stat__value', 'at-stat__delta', 'at-stat__delta--up|--down', 'at-stat__spark', 'at-stat__foot'],
    related: ['at-card', 'at-icon-tile', 'at-progress'],
    examples: [
      {
        title: 'Rangée de tuiles',
        frame: 'plain',
        code: `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: var(--space-4)">
            <AtStat label="Visiteurs uniques" value="3 482" delta="+12,4 %" trend="up" color="chart-1"
              :spark="[210, 240, 228, 260, 251, 290, 302, 288, 330, 345, 338, 372]" foot="30 derniers jours" />
            <AtStat label="Temps moyen" value="2 min 41" delta="+8 s" trend="up" color="chart-2"
              :spark="[140, 150, 148, 152, 149, 155, 158, 154, 160, 161, 159, 161]" foot="30 derniers jours" />
            <AtStat label="Taux de rebond" value="46,2 %" delta="−3,1 pts" trend="up" color="chart-3"
              :spark="[52, 51, 52, 50, 49, 50, 48, 49, 47, 47, 46, 46]" foot="30 derniers jours" />
            <AtStat label="Erreurs signalées" value="7" delta="+3" trend="down" color="danger" foot="Cette semaine" />
          </div>
        `
      },
      {
        title: 'Sans bande',
        desc: 'Sans `color`, pas de barre et la sparkline reste en `chart-1`. C’est le bon choix quand les tuiles ne se rattachent à rien.',
        frame: 'plain',
        code: `
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: var(--space-4)">
            <AtStat label="Projets actifs" value="3" foot="5 projets au total" />
            <AtStat label="Tâches ouvertes" value="11" foot="4 à rendre cette semaine" />
          </div>
        `
      }
    ]
  },

  {
    name: 'AtTable',
    slug: 'at-table',
    family: 'Données',
    tagline: 'Tableau simple et typé, pour des données qu’on ne manipule pas.',
    about: [
      'Colonnes typées, alignement, formatage, et un slot par colonne : `#cell-<clé>="{ row, value }"`. Pour des vues enregistrées, des filtres, du tri ou de l’édition en place, c’est `AtDataView`.'
    ],
    rules: [
      'Montants, durées et quantités alignés à droite (`align: "right"` pose aussi les chiffres tabulaires), unités dans la cellule.',
      'Valeurs vides : « — » en `ink-muted`, jamais une cellule blanche ambiguë.',
      'Grille verticale et horizontale en `border` ; pas de lignes zébrées.',
      '`empty` dit ce qui manque quand il n’y a aucune ligne.'
    ],
    props: [
      { name: 'columns', type: 'TableColumn<T>[]', required: true, desc: '`{ key, label, align?, width?, format? }`.' },
      { name: 'rows', type: 'T[]', required: true, desc: 'Lignes à afficher.' },
      { name: 'rowKey', type: 'keyof T', desc: 'Clé stable d’une ligne ; l’index sinon.' },
      { name: 'empty', type: 'string', default: `'Aucune donnée'`, desc: 'Message quand `rows` est vide.' }
    ],
    events: [{ name: 'rowClick', type: '(row: T)', desc: 'Ligne cliquée.' }],
    slots: [{ name: 'cell-<clé>', type: '{ row: T; value: any }', desc: 'Rendu d’une cellule.' }],
    classes: ['at-table-wrap', 'at-table', 'at-num'],
    related: ['at-data-view', 'at-stat'],
    examples: [
      {
        title: 'Pages les plus vues',
        frame: 'plain',
        code: `
          <AtTable :columns="colonnes" :rows="lignes" row-key="page">
            <template #cell-source="{ value }">
              <AtTag :color="value === 'Recherche' ? 'blue' : value === 'Direct' ? 'green' : 'purple'">{{ value }}</AtTag>
            </template>
          </AtTable>
        `,
        setup: () => ({
          colonnes: [
            { key: 'page', label: 'Page' },
            { key: 'vues', label: 'Vues', align: 'right', format: (v: number) => v.toLocaleString('fr-FR') },
            { key: 'temps', label: 'Temps moyen', align: 'right' },
            { key: 'source', label: 'Source' }
          ],
          lignes: [
            { page: '/accueil', vues: 8214, temps: '3 min 05', source: 'Recherche' },
            { page: '/tarifs', vues: 2960, temps: '1 min 48', source: 'Direct' },
            { page: '/blog/nouveautes', vues: 1127, temps: '4 min 12', source: 'Newsletter' }
          ]
        })
      }
    ]
  },

  {
    name: 'AtDataView',
    slug: 'at-data-view',
    family: 'Données',
    tagline: 'Vue de données à la Notion : vues enregistrées, filtres, tris, groupes, édition en place.',
    about: [
      'Quatre dispositions sur les mêmes lignes — tableau, board, liste, calendrier — avec des vues nommées que l’on peut enregistrer telles quelles : une `View` est du JSON.',
      '**Le composant ne modifie jamais `rows`.** Il émet `update`, `create`, `open` et `delete`, et le parent applique. Les vues, elles, sont modifiées en place via `v-model:views` : filtres, tris, colonnes masquées, largeurs et mois affiché y sont écrits directement.',
      'Les propriétés sont décrites par un `Property[]` : type, options (fixes ou calculées par ligne), valeur calculée, retard, suffixe, largeur. C’est ce même schéma que réutilisent `AtPropertyList` et `AtPropertyEditor`.'
    ],
    rules: [
      'Une propriété `title` par schéma : c’est la colonne principale, toujours première et jamais masquable.',
      'Une propriété avec `compute` est en lecture seule : la calculer dans le schéma, pas dans les lignes.',
      '`options` peut être une fonction de la ligne, pour une relation qui dépend d’une autre colonne (la milestone dépend du projet).',
      '`hideViews` impose une vue unique : à utiliser dans un panneau ou un onglet, pas sur une page de liste.',
      '`lockViews` garde la barre de vues mais fige leur liste : le bouton « + » et les entrées Dupliquer et Supprimer disparaissent. Tout le reste reste libre et écrit dans `views` : passer d’une vue à l’autre, la renommer (sauf vue système), changer sa disposition, son groupe ou sa date, ses filtres, ses tris, les propriétés affichées, leur ordre et leur largeur.',
      '`resettable` ajoute « Réinitialiser les vues » en bas des paramètres de la vue, y compris avec `lockViews` (sans effet avec `hideViews`, qui retire ces paramètres). Le clic ferme le menu et émet `reset-views` ; le composant ne touche pas aux vues : l’app demande confirmation puis remplace `views` par ses vues par défaut.',
      'Une vue `locked: true` est une **vue système** (« Mes tâches ») : ni renommée ni supprimée, ses filtres s’affichent mais ne se modifient pas ; disposition, tri, colonnes et groupes restent libres. Elle se crée avec un identifiant fixe : `createView(\'Mes tâches\', \'list\', { id: \'mine\', locked: true, filters: [filter(\'assignee\', \'is\', ME)] })`.',
      'Filtre « Moi » : la valeur `ME` (`\'@me\'`) est remplacée par `context.me` au filtrage et à la création (une tâche créée depuis « Mes tâches » est assignée à l’utilisateur courant). L’éditeur de filtre la propose en tête des propriétés personne. Sans `context.me`, la règle ne retient rien.',
      '`creatable` sur une propriété select ou multi : on crée une option en tapant son nom, « ⋯ » la renomme, la recolore ou la supprime. Le composant émet `create-option`, `update-option`, `delete-option`, avec la ligne éditée en dernier argument ; l’app enregistre l’option et, à la suppression, la retire de ses lignes.',
      'Étiquettes : `select` pour **une seule** par ligne (une catégorie), `multi` pour plusieurs. Les deux se saisissent de la même façon, avec `creatable`. Seule l’étiquette unique se **groupe** (menu Grouper, colonnes du board, glisser une carte change sa valeur) : une ligne à plusieurs étiquettes n’a pas de groupe à elle.',
      'Options propres à une partie des lignes (les catégories d’un projet) : `options` est une fonction de la ligne, et appelée sans ligne (filtres, groupes) elle rend toutes les options. La ligne transmise par `create-option` dit où enregistrer la nouvelle.',
      'Par défaut, Filtrer, Trier, Grouper et Propriétés n’affichent que leur pictogramme ; le libellé reste en infobulle et en `aria-label`, les compteurs restent visibles. `:icon-tools="false"` remet les libellés, quand la place ne manque pas et que la barre doit se lire d’un coup d’œil.',
      'En densité compacte, les lignes passent de 36 à 30 px : c’est le réglage des vues de données.'
    ],
    models: [
      { name: 'views', type: 'View[]', default: '[createView(…)]', desc: 'Vues enregistrées, modifiées en place.' },
      { name: 'activeView', type: 'string', desc: 'Identifiant de la vue courante.' }
    ],
    props: [
      { name: 'rows', type: 'R[]', required: true, desc: 'Lignes. Jamais modifiées par le composant.' },
      { name: 'schema', type: 'Property<R>[]', required: true, desc: 'Propriétés typées.' },
      { name: 'rowKey', type: 'string', default: `'id'`, desc: 'Clé stable d’une ligne.' },
      { name: 'newLabel', type: 'string', default: `'Nouveau'`, desc: 'Libellé du bouton de création.' },
      { name: 'hideViews', type: 'boolean', desc: 'Masque la barre de vues.' },
      { name: 'lockViews', type: 'boolean', desc: 'Interdit l’ajout, la duplication et la suppression de vues ; renommage et réglages restent possibles.' },
      { name: 'resettable', type: 'boolean', desc: 'Affiche « Réinitialiser les vues » dans les paramètres de la vue, même avec `lockViews`. Émet `reset-views`.' },
      { name: 'iconTools', type: 'boolean', default: 'true', desc: 'Boutons Filtrer, Trier, Grouper, Propriétés en pictogramme seul. `false` affiche les libellés.' },
      { name: 'context', type: '{ me?: string }', desc: 'Valeurs des filtres de contexte : `me`, l’utilisateur courant, remplace `ME` (« Moi »).' }
    ],
    events: [
      { name: 'update', type: '(row: R, key: string, value: unknown)', desc: 'Une valeur a été modifiée : au parent de l’écrire.' },
      { name: 'create', type: '(defaults: Partial<R>)', desc: 'Création demandée, avec les valeurs induites par les filtres et le groupe courant.' },
      { name: 'open', type: '(row: R)', desc: 'Ouverture d’une ligne (panneau de détail ou page).' },
      { name: 'delete', type: '(rows: R[])', desc: 'Suppression demandée.' },
      { name: 'createOption', type: '(prop: Property<R>, option: PropertyOption, row: R)', desc: 'Option créée depuis la cellule de `row` (`creatable`) : l’ajouter aux options de la propriété. La valeur choisie suit dans un `update`.' },
      { name: 'updateOption', type: '(prop: Property<R>, value: string, patch: Partial<PropertyOption>, row: R)', desc: 'Option renommée (`label`) ou recolorée (`color`) depuis la cellule de `row`.' },
      { name: 'deleteOption', type: '(prop: Property<R>, value: string, row: R)', desc: 'Option supprimée depuis la cellule de `row` : la retirer des options et des lignes qui la portent.' },
      { name: 'resetViews', type: '()', desc: 'Réinitialisation demandée (`resettable`) : confirmer, puis remplacer `views`. Le composant ne modifie rien.' }
    ],
    classes: ['at-dv-viewsbar', 'at-dv-toolbar', 'at-dv-table', 'at-dv-board', 'at-dv-list', 'at-dv-calwrap', 'at-dv-card', 'at-dv-chip'],
    related: ['at-property-list', 'at-property-editor', 'at-table', 'at-drawer'],
    examples: [
      {
        title: 'Quatre vues sur les mêmes tâches',
        desc: 'Changer de vue, filtrer, trier, grouper, modifier une cellule : tout est actif. Les étiquettes sont `creatable` : tapez un nom nouveau pour en créer une. Les lignes restent au parent.',
        frame: 'plain',
        open: true,
        code: `
          <AtDataView
            v-model:views="vues" v-model:active-view="active"
            :rows="rows" :schema="schema" new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
            @create-option="(p, o) => options.create(o)" @update-option="(p, v, patch) => options.update(v, patch)" @delete-option="(p, v) => options.remove(v)"
            @create="defaults => rows.push({ id: uid(), title: '', statut: 'todo', priorite: 'med',
              due: null, estimate: null, tags: [], fait: false, ...defaults })"
            @open="row => (ouverte = row.title || 'Sans titre')"
            @delete="liste => (rows = rows.filter(r => !liste.includes(r)))"
          />
          <p v-if="ouverte" class="at-muted">Ligne ouverte : {{ ouverte }} — dans une vraie app, un AtDrawer s’ouvrirait ici.</p>
        `,
        setup: () => {
          const { schema, rows, options } = jeuDeDonnees(true)
          const vues = ref<View[]>([
            createView('Tableau', 'table', { hidden: ['fait'] }),
            createView('Kanban', 'board', { groupBy: 'statut', hidden: ['statut', 'estimate', 'fait'] }),
            createView('Calendrier', 'calendar', { dateProp: 'due' }),
            createView('En retard', 'list', { filters: [filter('due', 'past'), filter('statut', 'isnot', 'done')], sorts: [sort('due')], hidden: ['tags', 'fait'] })
          ])
          return { schema, rows, options, vues, active: ref(vues.value[0].id), ouverte: ref(''), uid }
        }
      },
      {
        title: 'Catégorie : une étiquette unique, groupée',
        desc: 'La catégorie est un `select` `creatable` : une seule par tâche, créée en tapant. Le board est groupé par catégorie ; glisser une carte d’une colonne à l’autre change sa catégorie.',
        frame: 'plain',
        code: `
          <AtDataView
            v-model:views="vues" v-model:active-view="active"
            :rows="rows" :schema="schema" new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
            @create-option="(p, o) => categories.push(o)"
            @update-option="(p, v, patch) => Object.assign(categories.find(o => o.value === v), patch)"
            @delete-option="(p, v) => { categories = categories.filter(o => o.value !== v); rows.forEach(r => { if (r.categorie === v) r.categorie = null }) }"
            @create="defaults => rows.push({ id: uid(), title: '', statut: 'todo', categorie: null, ...defaults })"
          />
        `,
        setup: () => {
          const categories = ref<PropertyOption[]>(OPT_TAGS.map(o => ({ ...o })))
          const schema: Property[] = [
            { key: 'title', name: 'Nom', type: 'title', width: 260 },
            { key: 'statut', name: 'Statut', type: 'status', options: OPT_STATUT, width: 130 },
            { key: 'categorie', name: 'Catégorie', type: 'select', options: () => categories.value, creatable: true, width: 150 }
          ]
          const rows = ref([
            { id: 'c1', title: 'Écran de connexion', statut: 'doing', categorie: 'front' },
            { id: 'c2', title: 'Formulaire de contact', statut: 'todo', categorie: 'back' },
            { id: 'c3', title: 'Maquette de l’accueil', statut: 'done', categorie: 'design' },
            { id: 'c4', title: 'Page tarifs', statut: 'todo', categorie: 'front' },
            { id: 'c5', title: 'Idée à classer', statut: 'todo', categorie: null }
          ])
          const vues = ref<View[]>([
            createView('Par catégorie', 'board', { groupBy: 'categorie', hidden: ['categorie'] }),
            createView('Tableau', 'table', { groupBy: 'categorie' })
          ])
          return { schema, rows, categories, vues, active: ref(vues.value[0].id), uid }
        }
      },
      {
        title: 'Mes tâches : vue système filtrée sur moi',
        desc: 'La première vue est `locked` et filtre `Assigné à est Moi` ; `context.me` dit qui est « moi ». Changer d’utilisateur, ou créer une tâche depuis la vue : elle vous est assignée.',
        frame: 'plain',
        code: `
          <AtSegment v-model="moi" label="Utilisateur courant" :items="[{ value: 'alice', label: 'Je suis Alice' }, { value: 'bruno', label: 'Je suis Bruno' }]" />
          <AtDataView
            v-model:views="vues" v-model:active-view="active" :context="{ me: moi }"
            :rows="rows" :schema="schema" new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
            @create="defaults => rows.push({ id: uid(), title: 'Nouvelle tâche', statut: 'todo', assignee: null, ...defaults })"
          />
        `,
        setup: () => {
          const schema: Property[] = [
            { key: 'title', name: 'Nom', type: 'title', width: 260 },
            { key: 'statut', name: 'Statut', type: 'status', options: OPT_STATUT, width: 130 },
            { key: 'assignee', name: 'Assigné à', type: 'person', width: 150, options: [{ value: 'alice', label: 'Alice Martin' }, { value: 'bruno', label: 'Bruno Petit' }] }
          ]
          const rows = ref([
            { id: 'm1', title: 'Relire la maquette', statut: 'doing', assignee: 'alice' },
            { id: 'm2', title: 'Préparer la démo', statut: 'todo', assignee: 'bruno' },
            { id: 'm3', title: 'Corriger le formulaire', statut: 'todo', assignee: 'alice' },
            { id: 'm4', title: 'Écrire le compte rendu', statut: 'todo', assignee: null }
          ])
          const vues = ref<View[]>([
            createView('Mes tâches', 'list', { id: 'mine', locked: true, filters: [filter('assignee', 'is', ME)] }),
            createView('Toutes', 'table')
          ])
          return { schema, rows, vues, active: ref('mine'), moi: ref('alice'), uid }
        }
      },
      {
        title: 'Vues figées, réinitialisables, outils avec libellés',
        desc: '`lock-views` retire l’ajout, la duplication et la suppression de vues ; `resettable` ajoute « Réinitialiser les vues » aux paramètres de la vue, et l’app remplace les vues sur `reset-views`. `:icon-tools="false"` affiche les libellés de la barre d’outils.',
        frame: 'plain',
        code: `
          <AtDataView
            v-model:views="vues" v-model:active-view="active"
            :rows="rows" :schema="schema" lock-views resettable :icon-tools="false" new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
            @reset-views="reinitialiser"
          />
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          const parDefaut = () => [
            createView('Tableau', 'table', { hidden: ['fait'] }),
            createView('Kanban', 'board', { groupBy: 'statut', hidden: ['statut', 'estimate', 'fait'] })
          ]
          const vues = ref<View[]>(parDefaut())
          const active = ref(vues.value[0].id)
          // In a real app, confirm first (AtModal), then save the defaults.
          const reinitialiser = () => { vues.value = parDefaut(); active.value = vues.value[0].id }
          return { schema, rows, vues, active, reinitialiser }
        }
      },
      {
        title: 'Vue imposée',
        desc: '`hideViews` retire la barre de vues : une seule disposition, dans un onglet ou un panneau.',
        frame: 'plain',
        code: `
          <AtDataView
            :rows="rows" :schema="schema" hide-views new-label="Nouvelle tâche"
            :views="vues" :active-view="vues[0].id"
            @update="(row, key, value) => (row[key] = value)"
          />
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          return { schema, rows, vues: ref<View[]>([createView('Liste', 'list', { hidden: ['tags', 'estimate', 'fait'] })]) }
        }
      }
    ]
  },

  {
    name: 'AtPropertyValue',
    slug: 'at-property-value',
    family: 'Données',
    tagline: 'Affiche la valeur d’une propriété selon son type.',
    about: [
      'Un badge pour un statut, un tag pour un select, des tags pour un multi, un avatar pour une personne, une pastille pour une relation, une date en rouge si elle est en retard, un nombre tabulaire avec son suffixe, une barre pour un avancement, « — » pour le vide.',
      'C’est la brique d’affichage commune au tableau, au board, à la liste, au calendrier et aux panneaux de détail : utiliser ce composant plutôt que de refaire le rendu d’un statut à la main.'
    ],
    rules: [
      'Lecture seule : pour modifier, c’est `AtPropertyEditor` (ou `AtPropertyList`, qui assemble les deux).',
      'Le composant lit `compute` : une propriété calculée s’affiche sans que la ligne la porte.',
      '`overdue` est un prédicat sur la ligne, pas sur la valeur : il peut dépendre du statut.'
    ],
    props: [
      { name: 'prop', type: 'Property', required: true, desc: 'Propriété à afficher.' },
      { name: 'row', type: 'any', required: true, desc: 'Ligne portant la valeur.' }
    ],
    classes: ['at-pv-title', 'at-pv-empty', 'at-pv-multi', 'at-pv-person', 'at-pv-rel', 'at-pv-date', 'at-pv-over', 'at-pv-text'],
    related: ['at-property-editor', 'at-property-list', 'at-data-view'],
    examples: [
      {
        title: 'Tous les types',
        frame: 'plain',
        code: `
          <dl class="at-proplist">
            <template v-for="p in schema" :key="p.key">
              <dt><AtIcon :name="p.type === 'date' ? 'calendar' : p.type === 'number' ? 'hash' : 'text'" />{{ p.name }}</dt>
              <dd style="padding: 0 6px"><AtPropertyValue :prop="p" :row="rows[2]" /></dd>
            </template>
          </dl>
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          return { schema, rows }
        }
      }
    ]
  },

  {
    name: 'AtPropertyEditor',
    slug: 'at-property-editor',
    family: 'Données',
    tagline: 'Éditeur flottant d’une propriété, ancré sur une cellule ou une valeur.',
    about: [
      'Choisit son éditeur selon le type. Select et multi s’éditent en place : un champ se pose sur la cellule, on tape et les options se filtrent dessous (↑↓, Entrée, Retour arrière retire la dernière valeur, Échap ferme). Statut, relation et personne gardent une liste d’options ; date : champ et raccourcis (Aujourd’hui, Demain, Lundi prochain, Dans une semaine, Effacer) ; texte ou nombre sinon. Une propriété `required` perd l’action « Effacer ».',
      'Avec `creatable`, « Créer … » apparaît tant que la saisie n’est pas exactement une option (la couleur suivante de la palette est prise), et « ⋯ » à droite de chaque option ouvre renommer, couleur et supprimer.',
      'Il n’écrit pas : il émet `update`. La fermeture valide le champ texte en cours.'
    ],
    rules: [
      'Dans un panneau de détail, passer par `AtPropertyList` : il gère l’ancre et le va-et-vient.',
      'L’ancre est l’élément cliqué : une cellule, une valeur, un bouton.',
      'Une propriété calculée ou `readonly` ne s’édite pas : `isEditable(p)` le dit.'
    ],
    models: [{ name: 'open', type: 'boolean', default: 'false', desc: 'Ouverture.' }],
    props: [
      { name: 'prop', type: 'Property | null', required: true, desc: 'Propriété en cours d’édition.' },
      { name: 'row', type: 'any', required: true, desc: 'Ligne concernée.' },
      { name: 'anchor', type: 'HTMLElement | null', required: true, desc: 'Élément d’ancrage.' }
    ],
    events: [
      { name: 'update', type: '(value: unknown)', desc: 'Nouvelle valeur choisie.' },
      { name: 'createOption', type: '(option: PropertyOption)', desc: 'Option créée en tapant (`creatable`). Émis avant l’`update` qui la choisit.' },
      { name: 'updateOption', type: '(value: string, patch: Partial<PropertyOption>)', desc: 'Option renommée ou recolorée.' },
      { name: 'deleteOption', type: '(value: string)', desc: 'Option supprimée.' }
    ],
    related: ['at-property-value', 'at-property-list', 'at-popover'],
    examples: [
      {
        title: 'Édition d’un statut',
        code: `
          <button ref="ancre" type="button" class="at-proplist__value" @click="ouvert = true">
            <AtPropertyValue :prop="schema[1]" :row="ligne" />
          </button>
          <AtPropertyEditor
            v-model:open="ouvert" :prop="schema[1]" :row="ligne" :anchor="ancre"
            @update="v => (ligne.statut = v)"
          />
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          return { schema, ligne: rows.value[0], ouvert: ref(false), ancre: ref<HTMLElement | null>(null) }
        }
      }
    ]
  },

  {
    name: 'AtPropertyList',
    slug: 'at-property-list',
    family: 'Données',
    tagline: 'Liste libellé / valeur éditable d’une ligne, pour un panneau de détail.',
    about: [
      'Rend un `<dl>` : à gauche l’icône du type et le nom, à droite la valeur cliquable. Un clic ouvre `AtPropertyEditor` ancré sur la valeur ; une case à cocher bascule directement.',
      'La propriété `title` est exclue d’office : dans un panneau, le titre est édité en haut, à même le texte.',
      'Avec une `ref`, `edit(key)` ouvre l’éditeur d’un champ comme un clic : c’est la porte des raccourcis clavier (`#` pour le projet, `D` pour l’échéance). Sans effet sur un champ en lecture seule, masqué ou inconnu.'
    ],
    rules: [
      'Même schéma que la vue de données : les deux restent d’accord sans effort.',
      '`exclude` masque ce qui est déjà visible ailleurs dans le panneau (la description, une relation déjà affichée).',
      'Le composant émet `update(key, value)` : au parent d’écrire, comme pour `AtDataView`.'
    ],
    props: [
      { name: 'schema', type: 'Property[]', required: true, desc: 'Propriétés à lister.' },
      { name: 'row', type: 'any', required: true, desc: 'Ligne affichée.' },
      { name: 'exclude', type: 'string[]', desc: 'Clés à ne pas afficher.' }
    ],
    events: [
      { name: 'update', type: '(key: string, value: unknown)', desc: 'Valeur modifiée.' },
      { name: 'createOption', type: '(key: string, option: PropertyOption)', desc: 'Option créée (`creatable`), comme pour `AtDataView`.' },
      { name: 'updateOption', type: '(key: string, value: string, patch: Partial<PropertyOption>)', desc: 'Option renommée ou recolorée.' },
      { name: 'deleteOption', type: '(key: string, value: string)', desc: 'Option supprimée.' }
    ],
    exposes: [{ name: 'edit', type: '(key: string) => void', desc: 'Ouvre l’éditeur du champ `key`, comme un clic ; sans effet s’il est en lecture seule ou absent.' }],
    classes: ['at-proplist', 'at-proplist__value'],
    related: ['at-property-editor', 'at-drawer', 'at-data-view'],
    examples: [
      {
        title: 'Propriétés d’une tâche',
        desc: 'Cliquer une valeur pour la modifier : statut, priorité, échéance, étiquettes, estimation. Les étiquettes sont `creatable`.',
        frame: 'plain',
        code: `
          <div style="max-width: 420px">
            <AtPropertyList :schema="schema" :row="ligne" :exclude="['fait']"
              @update="(k, v) => (ligne[k] = v)"
              @create-option="(k, o) => options.create(o)" @update-option="(k, v, patch) => options.update(v, patch)" @delete-option="(k, v) => options.remove(v)" />
          </div>
        `,
        setup: () => {
          const { schema, rows, options } = jeuDeDonnees(true)
          return { schema, ligne: rows.value[0], options }
        }
      },
      {
        title: 'Ouvrir un champ depuis le code',
        desc: '`edit(key)` ouvre l’éditeur comme un clic. Ici des boutons ; dans une app, un raccourci (`useShortcut(\'d\', () => liste.value?.edit(\'due\'))`).',
        frame: 'plain',
        code: `
          <div class="at-toolbar" style="margin-bottom: var(--space-3)">
            <AtButton size="sm" icon="calendar" @click="liste.edit('due')">Échéance</AtButton>
            <AtButton size="sm" icon="status" @click="liste.edit('statut')">Statut</AtButton>
          </div>
          <div style="max-width: 420px">
            <AtPropertyList ref="liste" :schema="schema" :row="ligne" :exclude="['fait', 'tags']" @update="(k, v) => (ligne[k] = v)" />
          </div>
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          return { schema, ligne: rows.value[1], liste: ref() }
        }
      }
    ]
  },

  {
    name: 'AtList',
    slug: 'at-list',
    family: 'Données',
    tagline: 'Liste sélectionnable au clavier : J / K pour parcourir, Entrée pour ouvrir.',
    about: [
      'Un `listbox` dont l’élément actif est une clé (`v-model:active`). ↓ / J et ↑ / K le déplacent, Début et Fin vont aux extrémités, Entrée ou le double-clic émettent `open` ; un clic sélectionne. La liste défile pour garder l’élément actif visible, et pose `aria-activedescendant`.',
      'Par défaut, les touches marchent quand la liste a le focus. Avec `global`, elles marchent partout sur la page tant que la liste est montée (via `useShortcut` : pas pendant la saisie dans un champ, ni avec un menu ou une modale ouverts). `global` est lu au montage.',
      'Si l’élément actif disparaît de `items` (classé, supprimé), la liste ne choisit rien à la place : l’app décide quel élément devient actif.'
    ],
    rules: [
      'Pour un écran de tri (inbox, cadrage) : la liste à gauche, le détail de l’élément actif à droite.',
      '`global` sur un seul composant par écran, sinon J / K hésitent (le dernier monté gagne).',
      'Le contenu d’un élément reste sur une ligne : titre, puis une ou deux valeurs en `at-muted`.',
      'Pour des données tabulaires à filtrer et trier, c’est `AtDataView`.'
    ],
    models: [{ name: 'active', type: 'string | null', default: 'null', desc: 'Clé de l’élément actif.' }],
    props: [
      { name: 'items', type: 'T[]', required: true, desc: 'Éléments, dans l’ordre affiché.' },
      { name: 'rowKey', type: 'string | ((item: T) => string)', required: true, desc: 'Clé d’un élément : nom de champ ou fonction.' },
      { name: 'global', type: 'boolean', default: 'false', desc: 'Touches actives sur toute la page, pas seulement au focus.' },
      { name: 'label', type: 'string', desc: '`aria-label` de la liste.' }
    ],
    events: [
      { name: 'update:active', type: '(key: string | null)', desc: 'Nouvel élément actif.' },
      { name: 'open', type: '(item: T)', desc: 'Entrée ou double-clic sur un élément.' }
    ],
    slots: [
      { name: 'item', type: '{ item: T; active: boolean; index: number }', desc: 'Rendu d’un élément (par défaut : `label`, `title` ou `name`).' },
      { name: 'empty', type: '—', desc: 'Contenu quand la liste est vide.' }
    ],
    exposes: [
      { name: 'focus', type: '() => void', desc: 'Donne le focus à la liste.' },
      { name: 'move', type: '(step: number) => void', desc: 'Déplace l’élément actif.' }
    ],
    classes: ['at-list', 'at-list__item', 'is-active', 'at-list__empty'],
    related: ['use-shortcut', 'at-property-list', 'at-data-view'],
    examples: [
      {
        title: 'Inbox : parcourir et ouvrir',
        desc: 'Cliquer dans la liste puis J / K ou ↓ / ↑, Entrée pour ouvrir.',
        frame: 'plain',
        code: `
          <div style="display: grid; grid-template-columns: 280px 1fr; gap: var(--space-4); align-items: start">
            <AtList v-model:active="active" :items="idees" row-key="id" label="Idées" style="max-height: 240px; border: 1px solid var(--border)"
              @open="i => (ouverte = i.title)">
              <template #item="{ item }">
                <span class="at-ellipsis" style="flex: 1">{{ item.title }}</span><span class="at-muted">{{ item.age }}</span>
              </template>
              <template #empty>Inbox vide.</template>
            </AtList>
            <p class="at-muted">Active : {{ active ?? 'aucune' }}<br>Ouverte : {{ ouverte || '—' }}</p>
          </div>
        `,
        setup: () => ({
          idees: [
            { id: 'i1', title: 'Newsletter mensuelle', age: '2 j' },
            { id: 'i2', title: 'Refaire la page tarifs', age: '3 j' },
            { id: 'i3', title: 'Mode hors-ligne', age: '1 sem.' },
            { id: 'i4', title: 'Export CSV des contacts', age: '2 sem.' },
            { id: 'i5', title: 'Thème sombre de l’admin', age: '1 mois' }
          ],
          active: ref<string | null>('i1'),
          ouverte: ref('')
        })
      }
    ]
  },

  {
    name: 'AtChecklist',
    slug: 'at-checklist',
    family: 'Données',
    tagline: 'Déroulé d’étapes ordonnées à cocher : routine du matin, onboarding, procédure de mise en production.',
    about: [
      'Une liste `ol` numérotée en continu, avec des intertitres quand `groups` est fourni (groupes dans l’ordre de `groups`, étapes sans groupe connu à la fin ; dans un groupe, l’ordre du tableau). Chaque ligne : numéro, case, titre, slot `meta` à droite, bouton « Ouvrir » si l’étape a un `href`.',
      '**Le composant ne modifie jamais `items`.** Cocher émet `check(id, \'done\')`, décocher `check(id, \'todo\')` ; le parent change l’état. Quand l’étape courante passe à faite ou passée, `current` avance à la prochaine étape à faire après elle (sinon la première, sinon `null`).',
      'L’étape courante (`v-model:current`, `aria-current="step"`) a un fond pâle et se déplie : sa `note` (texte simple, retours à la ligne gardés) puis le slot `actions`. Un clic sur un titre la choisit. Après chaque coche, une zone `aria-live` annonce « 3 sur 13 ».',
      'Avec `keyboard`, les touches marchent partout sur la page : J / K ou ↓ / ↑ changent d’étape, Espace coche ou décoche, Entrée ouvre le lien, S passe l’étape. Elles se taisent pendant la saisie dans un champ, avec un menu ou une modale ouverts, et avec Ctrl, ⌘ ou Alt enfoncés. Espace et Entrée sur un bouton ou une case qui a le focus gardent leur effet propre.',
      'Sur écran étroit (≤ 640 px), la case passe à 20 px et chaque ligne fait au moins 44 px de haut.'
    ],
    rules: [
      'Un titre court par étape, à l’infinitif ou en un nom : « Mail pro », « Trier l’inbox ».',
      '`meta` reçoit une seule valeur discrète : l’heure de la coche, une durée prévue, ou `AtTimer` sur l’étape courante.',
      '`actions` reprend les touches de clavier dans les boutons (`AtKbd`) : « Fait Espace », « Passer S ».',
      '`collapseDone` sur mobile ou pour une longue liste : seules les N dernières étapes faites restent visibles avant l’étape courante.',
      '`keyboard` sur un seul composant par écran.',
      'Pour une liste à parcourir sans rien cocher, c’est `AtList`.'
    ],
    models: [{ name: 'current', type: 'string | null', default: 'null', desc: 'Identifiant de l’étape courante.' }],
    props: [
      { name: 'items', type: 'ChecklistItem[]', required: true, desc: '`{ id, title, href?, note?, group?, state: \'todo\' | \'done\' | \'skipped\' }`. Jamais modifiés par le composant.' },
      { name: 'groups', type: 'ChecklistGroup[]', desc: 'Intertitres `{ id, label, hint? }`, dans l’ordre affiché.' },
      { name: 'numbered', type: 'boolean', default: 'true', desc: 'Numéro devant chaque étape, continu sur toute la liste.' },
      { name: 'collapseDone', type: 'number', desc: 'Ne garde visibles que les N dernières étapes faites ou passées avant l’étape courante ; les autres se replient derrière « N faites masquées », qui les déplie.' },
      { name: 'keyboard', type: 'boolean', default: 'false', desc: 'J / K, ↓ / ↑, Espace, Entrée et S au niveau de la page.' }
    ],
    events: [
      { name: 'update:current', type: '(id: string | null)', desc: 'Nouvelle étape courante : clic sur un titre, J / K, ou avance après une coche.' },
      { name: 'check', type: `(id: string, state: 'todo' | 'done' | 'skipped')`, desc: 'Nouvel état demandé pour une étape.' },
      { name: 'open', type: '(item: ChecklistItem)', desc: 'Bouton « Ouvrir » ou Entrée sur une étape qui a un `href` : l’app ouvre le lien (dans l’app ou dans un onglet).' }
    ],
    slots: [
      { name: 'meta', type: '{ item: ChecklistItem; current: boolean }', desc: 'À droite de la ligne : heure, durée, minuteur.' },
      { name: 'actions', type: '{ item: ChecklistItem }', desc: 'Boutons sous la note de l’étape courante.' },
      { name: 'empty', type: '—', desc: 'Contenu quand il n’y a aucune étape (par défaut « Aucune étape »).' }
    ],
    exposes: [{ name: 'move', type: '(step: number) => void', desc: 'Déplace l’étape courante, comme J / K.' }],
    imports: `import { AtChecklist, type ChecklistItem, type ChecklistGroup } from '@tymotheusz/atelier'`,
    classes: [
      'at-checklist', 'at-checklist--plain', 'at-checklist__list', 'at-checklist__group', 'at-checklist__group-label', 'at-checklist__group-hint',
      'at-checklist__item', 'at-checklist__item--todo|--done|--skipped|--current', 'at-checklist__line', 'at-checklist__num', 'at-checklist__check',
      'at-checklist__title', 'at-checklist__text', 'at-checklist__skipped', 'at-checklist__meta', 'at-checklist__open', 'at-checklist__body',
      'at-checklist__note', 'at-checklist__actions', 'at-checklist__more', 'at-checklist__more-btn', 'at-checklist__empty'
    ],
    related: ['at-timer', 'at-streak', 'at-list', 'use-shortcut'],
    examples: [
      {
        title: 'Routine du matin',
        desc: 'Les touches marchent sur toute la page : J / K, Espace pour cocher, S pour passer, Entrée pour ouvrir. Le minuteur de l’étape courante repart à chaque coche.',
        frame: 'plain',
        code: `
          <AtCard style="padding: var(--space-2) var(--space-2) var(--space-3); gap: var(--space-2); max-width: 640px">
            <AtChecklist v-model:current="courante" :items="etapes" :groups="temps" keyboard
              @check="cocher" @open="e => (ouverte = e.title)">
              <template #meta="{ item, current }">
                <AtTimer v-if="current" :seconds="secondes" :target="item.minutes * 60" :paused="pause" @toggle="pause = !pause" />
                <span v-else-if="item.state === 'done'">{{ item.heure }}</span>
                <span v-else>{{ item.minutes }} min</span>
              </template>
              <template #actions="{ item }">
                <AtButton variant="primary" size="sm" icon="check" @click="cocher(item.id, 'done')">Fait <AtKbd>Espace</AtKbd></AtButton>
                <AtButton v-if="item.href" size="sm" icon="arrow" @click="ouverte = item.title">Ouvrir <AtKbd>Entrée</AtKbd></AtButton>
                <AtButton variant="ghost" size="sm" @click="cocher(item.id, 'skipped')">Passer <AtKbd>S</AtKbd></AtButton>
              </template>
            </AtChecklist>
            <p class="at-muted" style="margin: 0 var(--space-3); font-size: 13px">{{ faites }} sur {{ etapes.length }} · Ouverte : {{ ouverte || '—' }}</p>
          </AtCard>
        `,
        setup: () => {
          const etapes = ref(routine())
          const courante = ref<string | null>('teams')
          const secondes = ref(42)
          const pause = ref(false)
          const tic = setInterval(() => { if (!pause.value) secondes.value++ }, 1000)
          onBeforeUnmount(() => clearInterval(tic))
          const cocher = (id: string, state: ChecklistItem['state']) => {
            const e = etapes.value.find(x => x.id === id)
            if (!e) return
            e.state = state
            e.heure = state === 'done' ? '8 h 36' : ''
            secondes.value = 0
          }
          return {
            etapes, courante, secondes, pause, cocher, temps: TEMPS, ouverte: ref(''),
            faites: computed(() => etapes.value.filter(e => e.state !== 'todo').length)
          }
        }
      },
      {
        title: 'Mobile : faites repliées, sans numéros',
        desc: '`collapse-done="1"` ne garde que la dernière étape faite avant l’étape courante.',
        frame: 'plain',
        code: `
          <div style="max-width: 360px; border: 1px solid var(--border); border-radius: var(--radius-lg)">
            <AtChecklist v-model:current="courante" :items="etapes" :numbered="false" :collapse-done="1"
              @check="(id, state) => (etapes.find(e => e.id === id).state = state)">
              <template #meta="{ item }"><span>{{ item.minutes }} min</span></template>
            </AtChecklist>
          </div>
        `,
        setup: () => ({ etapes: ref(routine().slice(0, 6)), courante: ref<string | null>('teams') })
      }
    ]
  },

  {
    name: 'AtStreak',
    slug: 'at-streak',
    family: 'Données',
    tagline: 'Grille de régularité : un carré par jour, trois niveaux, sans notion d’échec.',
    about: [
      'Un carré par jour, dans l’ordre du tableau, sur `columns` colonnes (10 par défaut, 7 pour des semaines). Niveau 0 : neutre (fond enfoncé et contour) ; 1 : fond pâle et contour de la teinte ; 2 : plein. Jamais de rouge : un jour sans rien n’est pas une faute.',
      'Chaque carré est un bouton : son infobulle et son nom accessible disent la date (ou `label`) et le niveau, par exemple « 3 nov. : Terminée ». Un clic émet `select(date)`. La légende et le résumé, sous la grille, portent aussi l’information : la couleur ne la porte jamais seule.'
    ],
    rules: [
      'Un résumé en mots, compté par l’app : « 21 matins sur 30 ».',
      '`success` pour une habitude tenue ; `accent` pour une activité sans idée de réussite (jours d’usage).',
      'Les jours dans l’ordre chronologique, du plus ancien au plus récent.',
      'Pas de série (« 12 jours d’affilée ») : la grille montre la régularité, pas une performance à défendre.'
    ],
    props: [
      { name: 'days', type: 'StreakDay[]', required: true, desc: '`{ date, level: 0 | 1 | 2, label? }`, un par carré.' },
      { name: 'columns', type: 'number', default: '10', desc: 'Nombre de colonnes.' },
      { name: 'tone', type: `'success' | 'accent'`, default: `'success'`, desc: 'Teinte des niveaux 1 et 2.' },
      { name: 'summary', type: 'string', desc: 'Résumé sous la grille ; sert aussi de nom à la grille.' },
      { name: 'legend', type: 'boolean', default: 'true', desc: 'Affiche la légende des trois niveaux.' },
      { name: 'labels', type: '[string, string, string]', default: `['Rien', 'Commencée', 'Terminée']`, desc: 'Libellés des niveaux 0, 1 et 2 : légende et infobulles.' }
    ],
    events: [{ name: 'select', type: '(date: string)', desc: 'Clic sur un jour.' }],
    imports: `import { AtStreak, type StreakDay } from '@tymotheusz/atelier'`,
    classes: ['at-streak', 'at-streak--accent', 'at-streak__grid', 'at-streak__day', 'at-streak__day--1|--2', 'at-streak__foot', 'at-streak__summary', 'at-streak__legend', 'at-streak__swatch'],
    related: ['at-checklist', 'at-stat'],
    examples: [
      {
        title: 'Routine du matin sur 30 jours',
        frame: 'col',
        code: `
          <div style="width: 260px">
            <AtStreak :days="jours" :summary="resume" @select="d => (choisi = d)" />
          </div>
          <p class="at-muted" style="margin: 0">Jour choisi : {{ choisi || '—' }}</p>
        `,
        setup: () => {
          const jours = trenteJours()
          return { jours, choisi: ref(''), resume: `${jours.filter(j => j.level === 2).length} matins sur 30` }
        }
      },
      {
        title: 'Semaines, en accent',
        frame: 'col',
        code: `
          <div style="width: 200px">
            <AtStreak :days="jours.slice(-28)" :columns="7" tone="accent" :labels="['Aucune visite', 'Courte', 'Longue']" summary="4 semaines" />
          </div>
        `,
        setup: () => ({ jours: trenteJours() })
      }
    ]
  }
]
