import { ref } from 'vue'
import { createView, filter, sort, uid, type Property, type View } from '@tymotheusz/atelier'
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
function jeuDeDonnees() {
  const schema: Property<Tache>[] = [
    { key: 'title', name: 'Nom', type: 'title', width: 260 },
    { key: 'statut', name: 'Statut', type: 'status', options: OPT_STATUT, width: 130 },
    { key: 'priorite', name: 'Priorité', type: 'select', options: OPT_PRIO, width: 120 },
    { key: 'due', name: 'Échéance', type: 'date', width: 120, overdue: r => !!r.due && r.due < iso(0) && r.statut !== 'done' },
    { key: 'estimate', name: 'Estimation', type: 'number', suffix: ' h', width: 110 },
    { key: 'tags', name: 'Étiquettes', type: 'multi', options: OPT_TAGS, width: 170 },
    { key: 'fait', name: 'Fait', type: 'checkbox', width: 70 }
  ]
  const rows = ref<Tache[]>([
    { id: 't1', title: 'Écran de connexion', statut: 'doing', priorite: 'high', due: iso(3), estimate: 10, tags: ['front'], fait: false },
    { id: 't2', title: 'Tests utilisateurs', statut: 'done', priorite: 'med', due: iso(-6), estimate: 2, tags: ['design'], fait: true },
    { id: 't3', title: 'Formulaire de contact', statut: 'blocked', priorite: 'high', due: iso(-2), estimate: 8, tags: ['back'], fait: false },
    { id: 't4', title: 'Page tarifs', statut: 'todo', priorite: 'low', due: iso(12), estimate: 3, tags: ['front', 'design'], fait: false }
  ])
  return { schema, rows }
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
      '`lockViews` garde la barre de vues mais fige leur liste : ni ajout, ni duplication, ni suppression. Les vues restent renommables et paramétrables.',
      '`iconTools` réduit Filtrer, Trier, Grouper et Propriétés à leur pictogramme quand la place manque ; le libellé reste en infobulle et en `aria-label`, les compteurs restent visibles.',
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
      { name: 'lockViews', type: 'boolean', desc: 'Interdit l’ajout, la duplication et la suppression de vues.' },
      { name: 'iconTools', type: 'boolean', desc: 'Boutons Filtrer, Trier, Grouper, Propriétés sans libellé, pictogramme seul.' }
    ],
    events: [
      { name: 'update', type: '(row: R, key: string, value: unknown)', desc: 'Une valeur a été modifiée : au parent de l’écrire.' },
      { name: 'create', type: '(defaults: Partial<R>)', desc: 'Création demandée, avec les valeurs induites par les filtres et le groupe courant.' },
      { name: 'open', type: '(row: R)', desc: 'Ouverture d’une ligne (panneau de détail ou page).' },
      { name: 'delete', type: '(rows: R[])', desc: 'Suppression demandée.' }
    ],
    classes: ['at-dv-viewsbar', 'at-dv-toolbar', 'at-dv-table', 'at-dv-board', 'at-dv-list', 'at-dv-calwrap', 'at-dv-card', 'at-dv-chip'],
    related: ['at-property-list', 'at-property-editor', 'at-table', 'at-drawer'],
    examples: [
      {
        title: 'Quatre vues sur les mêmes tâches',
        desc: 'Changer de vue, filtrer, trier, grouper, modifier une cellule : tout est actif. Les lignes restent au parent.',
        frame: 'plain',
        open: true,
        code: `
          <AtDataView
            v-model:views="vues" v-model:active-view="active"
            :rows="rows" :schema="schema" new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
            @create="defaults => rows.push({ id: uid(), title: '', statut: 'todo', priorite: 'med',
              due: null, estimate: null, tags: [], fait: false, ...defaults })"
            @open="row => (ouverte = row.title || 'Sans titre')"
            @delete="liste => (rows = rows.filter(r => !liste.includes(r)))"
          />
          <p v-if="ouverte" class="at-muted">Ligne ouverte : {{ ouverte }} — dans une vraie app, un AtDrawer s’ouvrirait ici.</p>
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          const vues = ref<View[]>([
            createView('Tableau', 'table', { hidden: ['fait'] }),
            createView('Kanban', 'board', { groupBy: 'statut', hidden: ['statut', 'estimate', 'fait'] }),
            createView('Calendrier', 'calendar', { dateProp: 'due' }),
            createView('En retard', 'list', { filters: [filter('due', 'past'), filter('statut', 'isnot', 'done')], sorts: [sort('due')], hidden: ['tags', 'fait'] })
          ])
          return { schema, rows, vues, active: ref(vues.value[0].id), ouverte: ref(''), uid }
        }
      },
      {
        title: 'Vues figées, outils en pictogrammes',
        desc: '`lock-views` retire l’ajout et la suppression de vues ; `icon-tools` ne garde que les pictogrammes de la barre d’outils.',
        frame: 'plain',
        code: `
          <AtDataView
            v-model:views="vues" v-model:active-view="active"
            :rows="rows" :schema="schema" lock-views icon-tools new-label="Nouvelle tâche"
            @update="(row, key, value) => (row[key] = value)"
          />
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          const vues = ref<View[]>([
            createView('Tableau', 'table', { hidden: ['fait'] }),
            createView('Kanban', 'board', { groupBy: 'statut', hidden: ['statut', 'estimate', 'fait'] })
          ])
          return { schema, rows, vues, active: ref(vues.value[0].id) }
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
      'Choisit son éditeur selon le type : liste d’options pour un statut, un select, une relation ou une personne ; cases à cocher pour un multi ; champ date avec « Aujourd’hui » et « Effacer » ; champ texte ou nombre sinon. Une propriété `required` perd l’action « Effacer ».',
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
    events: [{ name: 'update', type: '(value: unknown)', desc: 'Nouvelle valeur choisie.' }],
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
      'La propriété `title` est exclue d’office : dans un panneau, le titre est édité en haut, à même le texte.'
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
    events: [{ name: 'update', type: '(key: string, value: unknown)', desc: 'Valeur modifiée.' }],
    classes: ['at-proplist', 'at-proplist__value'],
    related: ['at-property-editor', 'at-drawer', 'at-data-view'],
    examples: [
      {
        title: 'Propriétés d’une tâche',
        desc: 'Cliquer une valeur pour la modifier : statut, priorité, échéance, étiquettes, estimation.',
        frame: 'plain',
        code: `
          <div style="max-width: 420px">
            <AtPropertyList :schema="schema" :row="ligne" :exclude="['fait']"
              @update="(k, v) => (ligne[k] = v)" />
          </div>
        `,
        setup: () => {
          const { schema, rows } = jeuDeDonnees()
          return { schema, ligne: rows.value[0] }
        }
      }
    ]
  }
]
