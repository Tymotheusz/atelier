import { ref } from 'vue'
import type { ComponentDoc } from '../types'

export const actions: ComponentDoc[] = [
  {
    name: 'AtButton',
    slug: 'at-button',
    family: 'Actions',
    tagline: 'Déclenche une action. Une seule action primaire par zone de l’écran.',
    about: [
      'Rend un `<button>`, ou un `<a>` si `href` est fourni. La hauteur suit la densité : le composant lit `--h-sm|md|lg`, jamais les tokens `control-*` directement.'
    ],
    rules: [
      '`primary` : l’action qui fait avancer (créer, enregistrer, publier). Une par zone.',
      '`secondary` : actions de même niveau sans priorité (partager, exporter).',
      '`ghost` : barres d’outils et annulation. C’est la variante la plus fréquente dans un dashboard.',
      '`danger` : uniquement dans une confirmation de suppression, jamais en barre d’outils.',
      '`lg` est réservé aux sites (CTA, formulaires publics). En app : `md` partout, `sm` dans les barres d’outils et les tableaux.',
      'Libellé à l’infinitif, en sentence case : « Publier », « Copier le lien ».',
      '`iconOnly` exige `label` : il devient l’`aria-label` du bouton.'
    ],
    avoid: [
      'Deux boutons primaires côte à côte.',
      'Un libellé en MAJUSCULES.',
      'Un bouton désactivé sans explication à proximité.'
    ],
    props: [
      { name: 'variant', type: `'primary' | 'secondary' | 'ghost' | 'danger'`, default: `'secondary'`, desc: 'Niveau d’importance de l’action.' },
      { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, desc: 'Hauteur du bouton, relative à la densité.' },
      { name: 'icon', type: 'string', desc: 'Pictogramme placé avant le libellé.' },
      { name: 'iconOnly', type: 'boolean', desc: 'Bouton carré sans libellé. `label` devient obligatoire.' },
      { name: 'label', type: 'string', desc: 'Libellé, si le slot par défaut n’est pas utilisé ; `aria-label` quand `iconOnly`.' },
      { name: 'loading', type: 'boolean', desc: 'Remplace l’icône par un indicateur et désactive le bouton (`aria-busy`).' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le bouton.' },
      { name: 'href', type: 'string', desc: 'Rend un `<a>` au lieu d’un `<button>`.' },
      { name: 'type', type: `'button' | 'submit' | 'reset'`, default: `'button'`, desc: 'Type du bouton natif.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Libellé du bouton. Remplace `label`.' }],
    classes: ['at-btn', 'at-btn--primary|--secondary|--ghost|--danger', 'at-btn--sm|--lg', 'at-btn--icon'],
    related: ['at-dropdown', 'at-icon'],
    examples: [
      {
        title: 'Variantes',
        code: `
          <AtButton variant="primary" icon="plus">Nouvelle page</AtButton>
          <AtButton>Partager</AtButton>
          <AtButton variant="ghost">Annuler</AtButton>
          <AtButton variant="danger">Supprimer</AtButton>
        `
      },
      {
        title: 'Tailles',
        desc: 'La hauteur suit aussi la densité choisie en haut à droite.',
        code: `
          <AtButton variant="primary" size="lg">Commencer</AtButton>
          <AtButton variant="primary">Enregistrer</AtButton>
          <AtButton size="sm" icon="filter">Filtrer</AtButton>
          <AtButton variant="ghost" icon="more" icon-only label="Plus d’actions" />
        `
      },
      {
        title: 'États',
        code: `
          <AtButton variant="primary" :loading="busy" @click="run">
            {{ busy ? 'Publication…' : 'Publier' }}
          </AtButton>
          <AtButton variant="primary" disabled>Publier</AtButton>
          <span v-if="done" class="at-muted">Publié à l’instant.</span>
        `,
        setup: () => {
          const busy = ref(false)
          const done = ref(false)
          return {
            busy, done,
            run: () => {
              busy.value = true
              setTimeout(() => { busy.value = false; done.value = true }, 1200)
            }
          }
        }
      },
      {
        title: 'Lien',
        desc: 'Avec `href`, le bouton devient un `<a>` : à utiliser quand l’action est une navigation.',
        code: `<AtButton href="#/doc/fondations/icones" icon="arrow">Voir les pictogrammes</AtButton>`
      }
    ]
  },

  {
    name: 'AtDropdown',
    slug: 'at-dropdown',
    family: 'Actions',
    tagline: 'Un déclencheur et un menu : le cas courant du menu d’actions.',
    about: [
      'Assemble `AtPopover` et `AtMenu`. Le slot `#trigger` reçoit `{ toggle, open }` : tout élément peut servir de déclencheur. Un clic sur un `AtMenuItem` ferme le menu.'
    ],
    rules: [
      'Pour un menu ancré sur autre chose qu’un bouton (une cellule, un clic droit), utiliser `AtPopover` directement.',
      '`align="end"` quand le déclencheur est à droite de l’écran, pour que le menu ne sorte pas du cadre.',
      'L’action destructive est séparée par un `AtMenuSeparator` et placée en dernier.'
    ],
    props: [
      { name: 'label', type: 'string', desc: 'Titre du groupe, affiché en tête du menu et exposé comme `aria-label`.' },
      { name: 'align', type: `'start' | 'end'`, default: `'start'`, desc: 'Bord du déclencheur sur lequel le menu s’aligne.' },
      { name: 'placement', type: `'bottom' | 'right'`, default: `'bottom'`, desc: 'Sous le déclencheur, ou à sa droite (bas contre bas, pour un pied de sidebar).' },
      { name: 'minWidth', type: 'number', default: '220', desc: 'Largeur minimale du menu, en pixels.' }
    ],
    slots: [
      { name: 'trigger', type: '{ toggle: () => void; open: boolean }', desc: 'Le déclencheur. Appeler `toggle` au clic.' },
      { name: 'default', type: '—', desc: 'Contenu du menu : `AtMenuItem`, `AtMenuLabel`, `AtMenuSeparator`.' }
    ],
    related: ['at-menu', 'at-popover', 'at-button'],
    examples: [
      {
        title: 'Menu d’actions',
        code: `
          <AtDropdown label="Page" align="start">
            <template #trigger="{ toggle }">
              <AtButton icon="more" @click="toggle">Actions</AtButton>
            </template>
            <AtMenuItem icon="edit" kbd="F2" @select="last = 'Renommer'">Renommer</AtMenuItem>
            <AtMenuItem icon="copy" kbd="⌘D" @select="last = 'Dupliquer'">Dupliquer</AtMenuItem>
            <AtMenuItem icon="link" @select="last = 'Copier le lien'">Copier le lien</AtMenuItem>
            <AtMenuSeparator />
            <AtMenuItem icon="trash" danger @select="last = 'Supprimer'">Supprimer</AtMenuItem>
          </AtDropdown>
          <span v-if="last" class="at-muted">Action : {{ last }}</span>
        `,
        setup: () => ({ last: ref('') })
      },
      {
        title: 'Déclencheur libre',
        desc: 'Le slot `#trigger` accepte n’importe quel élément : ici une valeur de propriété cliquable.',
        code: `
          <AtDropdown label="Statut" :min-width="180">
            <template #trigger="{ toggle }">
              <button type="button" class="at-dv-chip" @click="toggle">
                <span class="at-badge at-badge--info">{{ statut }}</span>
                <AtIcon name="chevron-down" />
              </button>
            </template>
            <AtMenuItem v-for="s in ['À faire', 'En cours', 'Terminé']" :key="s"
              :checked="s === statut" @select="statut = s">{{ s }}</AtMenuItem>
          </AtDropdown>
        `,
        setup: () => ({ statut: ref('En cours') })
      }
    ]
  },

  {
    name: 'AtMenu',
    slug: 'at-menu',
    family: 'Actions',
    tagline: 'Surface de menu : groupe d’items avec navigation clavier.',
    about: [
      'Pose `at-menu` (`surface-raised` + `shadow-md`) et gère les flèches haut/bas, Début et Fin entre les items. Dans un popover, préférer `AtDropdown` qui assemble les deux.'
    ],
    rules: [
      'Un menu sert à des actions ou à un choix unique, pas à de la navigation principale (voir `AtNavItem`).',
      'Grouper par `AtMenuLabel` au-delà de six items, séparer par `AtMenuSeparator`.',
      'Peut être posé à plat dans la page (barre latérale d’outil, panneau) : il n’a pas besoin d’un popover.'
    ],
    props: [
      { name: 'label', type: 'string', desc: 'Titre affiché en tête du menu, aussi utilisé comme `aria-label`.' },
      { name: 'minWidth', type: 'number', desc: 'Largeur minimale, en pixels.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Items du menu.' }],
    classes: ['at-menu', 'at-menu-label', 'at-menu-sep', 'at-menu-pad', 'at-menu-title', 'at-menu-actions'],
    related: ['at-menu-item', 'at-dropdown', 'at-popover'],
    examples: [
      {
        title: 'Menu posé dans la page',
        code: `
          <AtMenu label="Affichage" :min-width="240">
            <AtMenuItem icon="table" :checked="vue === 'table'" @select="vue = 'table'">Tableau</AtMenuItem>
            <AtMenuItem icon="board" :checked="vue === 'board'" @select="vue = 'board'">Board</AtMenuItem>
            <AtMenuItem icon="calendar" :checked="vue === 'calendar'" @select="vue = 'calendar'">Calendrier</AtMenuItem>
            <AtMenuSeparator />
            <AtMenuLabel>Densité</AtMenuLabel>
            <AtMenuItem icon="sliders" meta="Compact">Lignes serrées</AtMenuItem>
          </AtMenu>
        `,
        setup: () => ({ vue: ref('table') })
      }
    ]
  },

  {
    name: 'AtMenuItem',
    slug: 'at-menu-item',
    family: 'Actions',
    tagline: 'Item de menu : icône, libellé, puis raccourci ou métadonnée.',
    rules: [
      'Libellés à l’infinitif, sans points de suspension — sauf si l’action ouvre une autre étape (« Déplacer vers… »).',
      '`checked` passe l’item en `menuitemcheckbox` : à utiliser pour un réglage, pas pour une action.',
      '`danger` en dernier, après un séparateur.',
      '`kbd` affiche le raccourci réel ; `meta` affiche une valeur courante (« Compact », « 3 »).'
    ],
    props: [
      { name: 'icon', type: 'string', desc: 'Pictogramme à gauche.' },
      { name: 'label', type: 'string', desc: 'Libellé, si le slot par défaut n’est pas utilisé.' },
      { name: 'kbd', type: 'string', desc: 'Raccourci clavier affiché à droite.' },
      { name: 'meta', type: 'string', desc: 'Métadonnée à droite, si pas de `kbd`.' },
      { name: 'danger', type: 'boolean', desc: 'Action destructive.' },
      { name: 'checked', type: 'boolean', desc: 'Rend l’item cochable (`role="menuitemcheckbox"`).' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive l’item ; il est sauté par la navigation clavier.' }
    ],
    events: [{ name: 'select', type: '(e: MouseEvent)', desc: 'Item choisi.' }],
    slots: [{ name: 'default', type: '—', desc: 'Libellé.' }],
    classes: ['at-menu-item', 'at-menu-item--danger', 'at-menu-meta', 'at-menu-check'],
    related: ['at-menu', 'at-kbd'],
    examples: [
      {
        title: 'Tous les cas',
        frame: 'plain',
        code: `
          <AtMenu label="Exemple" :min-width="260">
            <AtMenuItem icon="edit" kbd="F2">Renommer</AtMenuItem>
            <AtMenuItem icon="sliders" meta="Compact">Densité</AtMenuItem>
            <AtMenuItem :checked="abonne" @select="abonne = !abonne">Suivre la page</AtMenuItem>
            <AtMenuItem icon="link" disabled>Copier le lien</AtMenuItem>
            <AtMenuSeparator />
            <AtMenuItem icon="trash" danger>Supprimer</AtMenuItem>
          </AtMenu>
        `,
        setup: () => ({ abonne: ref(true) })
      }
    ]
  },

  {
    name: 'AtMenuLabel',
    slug: 'at-menu-label',
    family: 'Actions',
    tagline: 'Titre de groupe à l’intérieur d’un menu.',
    rules: ['Un ou deux mots, en sentence case : le style met le texte en majuscules.'],
    slots: [{ name: 'default', type: '—', desc: 'Titre du groupe.' }],
    classes: ['at-menu-label'],
    related: ['at-menu', 'at-menu-separator'],
    examples: [
      {
        frame: 'plain',
        code: `
          <AtMenu :min-width="220">
            <AtMenuLabel>Exporter</AtMenuLabel>
            <AtMenuItem icon="doc">PDF</AtMenuItem>
            <AtMenuItem icon="table">CSV</AtMenuItem>
          </AtMenu>
        `
      }
    ]
  },

  {
    name: 'AtMenuSeparator',
    slug: 'at-menu-separator',
    family: 'Actions',
    tagline: 'Filet de séparation entre deux groupes d’items.',
    rules: ['Un seul filet entre deux groupes ; pas de filet en tête ni en pied de menu.'],
    classes: ['at-menu-sep'],
    related: ['at-menu', 'at-menu-label'],
    examples: [
      {
        frame: 'plain',
        code: `
          <AtMenu :min-width="220">
            <AtMenuItem icon="copy">Dupliquer</AtMenuItem>
            <AtMenuSeparator />
            <AtMenuItem icon="trash" danger>Supprimer</AtMenuItem>
          </AtMenu>
        `
      }
    ]
  },

  {
    name: 'AtPopover',
    slug: 'at-popover',
    family: 'Actions',
    tagline: 'Surface flottante ancrée, positionnée et refermée toute seule.',
    about: [
      'Deux usages : avec le slot `#trigger`, le popover gère son déclencheur ; avec la prop `anchor` et `v-model:open`, l’ancrage est externe (cellule de tableau, menu contextuel).',
      'Le contenu est téléporté dans `<body>`, replacé au défilement et au redimensionnement, et retourné au-dessus de l’ancre s’il manque de place en bas. Échap et un clic à l’extérieur ferment ; les popovers imbriqués sont gérés.'
    ],
    rules: [
      'Pour un menu d’actions, `AtDropdown` fait déjà l’assemblage.',
      'Le contenu doit rester court : un popover n’est pas une modale.',
      '`offset` règle la distance à l’ancre, 4 px par défaut.'
    ],
    models: [{ name: 'open', type: 'boolean', default: 'false', desc: 'Ouverture contrôlée.' }],
    props: [
      { name: 'anchor', type: 'HTMLElement | null', desc: 'Élément d’ancrage, quand le déclencheur est extérieur au composant.' },
      { name: 'align', type: `'start' | 'end'`, default: `'start'`, desc: 'Bord de l’ancre sur lequel aligner la surface.' },
      { name: 'placement', type: `'bottom' | 'right'`, default: `'bottom'`, desc: '`bottom` : sous l’ancre, retourné au-dessus s’il manque de place. `right` : à droite de l’ancre, bas contre bas, gardé dans l’écran.' },
      { name: 'offset', type: 'number', default: '4', desc: 'Distance à l’ancre, en pixels.' }
    ],
    events: [{ name: 'close', type: '()', desc: 'Fermé par Échap, par un clic extérieur ou par `close()`.' }],
    slots: [
      { name: 'trigger', type: '{ toggle: () => void; open: boolean }', desc: 'Déclencheur optionnel.' },
      { name: 'default', type: '{ close: () => void }', desc: 'Contenu flottant.' }
    ],
    classes: ['at-pop'],
    related: ['at-dropdown', 'at-menu', 'at-property-editor'],
    examples: [
      {
        title: 'Avec déclencheur',
        code: `
          <AtPopover align="start">
            <template #trigger="{ toggle, open }">
              <AtButton :icon="open ? 'chevron-down' : 'chevron-right'" @click="toggle">Filtrer</AtButton>
            </template>
            <template #default="{ close }">
              <div class="at-menu at-menu-pad" style="min-width: 260px">
                <span class="at-menu-title">Filtrer les tâches</span>
                <AtCheckbox v-model="ouvertes" label="Masquer les tâches terminées" />
                <AtCheckbox v-model="miennes" label="Seulement les miennes" />
                <div class="at-menu-actions">
                  <AtButton size="sm" variant="primary" @click="close">Appliquer</AtButton>
                </div>
              </div>
            </template>
          </AtPopover>
        `,
        setup: () => ({ ouvertes: ref(true), miennes: ref(false) })
      },
      {
        title: 'Ancrage externe',
        desc: 'La cellule sert d’ancre : c’est le mécanisme de l’édition en place d’`AtDataView`.',
        code: `
          <button ref="cellule" type="button" class="at-dv-chip" @click="ouvert = !ouvert">
            <span class="at-pv-date">12 mars 2026</span>
          </button>
          <AtPopover v-model:open="ouvert" :anchor="cellule">
            <div class="at-menu at-menu-pad" style="min-width: 220px">
              <span class="at-menu-title">Échéance</span>
              <input type="date" class="at-input" value="2026-03-12">
            </div>
          </AtPopover>
        `,
        setup: () => ({ ouvert: ref(false), cellule: ref<HTMLElement | null>(null) })
      }
    ]
  }
]
