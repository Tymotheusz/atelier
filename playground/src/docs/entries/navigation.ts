import { ref } from 'vue'
import type { ComponentDoc } from '../types'

export const navigation: ComponentDoc[] = [
  {
    name: 'AtTabs',
    slug: 'at-tabs',
    family: 'Navigation',
    tagline: 'Onglets : sections d’une même page.',
    about: ['Soulignement `ink`, `role="tablist"` et `aria-selected`. Un compteur optionnel par onglet.'],
    rules: [
      '2 à 6 onglets. Au-delà, un menu.',
      'L’onglet actif ne change pas de graisse : cela éviterait un saut de largeur.',
      'Pour changer de vue sur les mêmes données (tableau, board, calendrier), c’est `AtSegment`.',
      'L’ordre des onglets est stable : du plus consulté au plus rare, jamais réordonné dynamiquement.'
    ],
    models: [{ name: 'modelValue', type: 'V', desc: 'Valeur de l’onglet actif.' }],
    props: [
      { name: 'items', type: 'TabItem<V>[]', required: true, desc: '`{ value, label, count?, icon?, disabled? }`.' },
      { name: 'label', type: 'string', desc: '`aria-label` de la liste d’onglets.' }
    ],
    classes: ['at-tabs', 'at-tab', 'at-count'],
    related: ['at-segment', 'at-page'],
    examples: [
      {
        frame: 'col',
        code: `
          <AtTabs v-model="onglet" label="Sections du projet" :items="[
            { value: 'apercu', label: 'Aperçu' },
            { value: 'activite', label: 'Activité', count: 12 },
            { value: 'reglages', label: 'Paramètres' }
          ]" />
          <p class="at-muted">Section affichée : {{ onglet }}</p>
        `,
        setup: () => ({ onglet: ref('apercu') })
      }
    ]
  },

  {
    name: 'AtSegment',
    slug: 'at-segment',
    family: 'Navigation',
    tagline: 'Contrôle segmenté : changer de vue sur les mêmes données.',
    about: ['Boutons avec `aria-pressed`, sur fond `surface-sunken`. `iconOnly` ne garde que le pictogramme, le libellé devenant `aria-label` et `title`.'],
    rules: [
      '2 à 4 segments, libellés d’un mot.',
      'Les segments ne filtrent pas : ils changent la représentation. Un filtre est un filtre.',
      '`iconOnly` seulement quand l’icône est sans ambiguïté (thème clair/sombre, orientation).'
    ],
    models: [{ name: 'modelValue', type: 'V', desc: 'Segment actif.' }],
    props: [
      { name: 'items', type: '(TabItem<V> & { iconOnly?: boolean })[]', required: true, desc: '`{ value, label, icon?, iconOnly?, disabled? }`.' },
      { name: 'label', type: 'string', desc: '`aria-label` du groupe.' }
    ],
    classes: ['at-segment'],
    related: ['at-tabs', 'at-data-view'],
    examples: [
      {
        frame: 'col',
        code: `
          <AtSegment v-model="vue" label="Vue" :items="[
            { value: 'table', label: 'Tableau', icon: 'table' },
            { value: 'board', label: 'Board', icon: 'board' },
            { value: 'calendar', label: 'Calendrier', icon: 'calendar' }
          ]" />
          <AtSegment v-model="theme" label="Thème" :items="[
            { value: 'system', label: 'Système', icon: 'monitor', iconOnly: true },
            { value: 'light', label: 'Clair', icon: 'sun', iconOnly: true },
            { value: 'dark', label: 'Sombre', icon: 'moon', iconOnly: true }
          ]" />
        `,
        setup: () => ({ vue: ref('table'), theme: ref('system') })
      }
    ]
  },

  {
    name: 'AtBreadcrumbs',
    slug: 'at-breadcrumbs',
    family: 'Navigation',
    tagline: 'Fil d’Ariane de la barre supérieure.',
    about: ['Le dernier élément porte `aria-current="page"` et n’est pas un lien. Chaque élément accepte soit un `href`, soit un `onClick` pour un routeur maison.'],
    rules: [
      'Trois niveaux au plus ; au-delà, garder le premier et les deux derniers.',
      'Le fil dit où l’on est, pas comment on y est arrivé : pas d’historique.',
      'Il se tronque par la fin (`at-ellipsis`) plutôt que de passer à la ligne.'
    ],
    props: [{ name: 'items', type: '{ label: string; href?: string; onClick?: () => void }[]', required: true, desc: 'Du plus général au plus précis.' }],
    classes: ['at-breadcrumbs'],
    related: ['at-app-shell', 'at-nav-item'],
    examples: [
      {
        frame: 'col',
        code: `
          <AtBreadcrumbs :items="[
            { label: 'Projets', onClick: () => (ou = 'Projets') },
            { label: 'Atelier DS', onClick: () => (ou = 'Atelier DS') },
            { label: 'Composants Vue' }
          ]" />
          <p class="at-muted">Dernier clic : {{ ou || '—' }}</p>
        `,
        setup: () => ({ ou: ref('') })
      }
    ]
  },

  {
    name: 'AtSidebar',
    slug: 'at-sidebar',
    family: 'Navigation',
    tagline: 'Barre latérale d’application : espace de travail, groupes de navigation, pied.',
    about: [
      'Largeur `--sidebar` (240 px), fond `surface-sunken`. Dans `AtAppShell`, elle devient un tiroir sous 860 px. Le slot `header` accueille le sélecteur d’espace (`at-workspace`), le slot `footer` reste collé en bas.'
    ],
    rules: [
      '4 à 7 items par groupe, libellés d’un ou deux mots.',
      'L’item actif se distingue par le fond `surface-active` et la graisse, jamais par l’accent.',
      'Les groupes de contenu (projets, dossiers) viennent après les groupes d’outils.',
      'Le logo de l’espace de travail est une tuile d’icône en `ink`, pas une initiale.'
    ],
    slots: [
      { name: 'header', type: '—', desc: 'Sélecteur d’espace de travail.' },
      { name: 'default', type: '—', desc: 'Groupes de navigation.' },
      { name: 'footer', type: '—', desc: 'Pied, collé en bas.' }
    ],
    classes: ['at-sidebar', 'at-sidebar__foot', 'at-workspace', 'at-workspace__mark', 'at-tile'],
    related: ['at-nav-group', 'at-nav-item', 'at-app-shell'],
    examples: [
      {
        title: 'Barre latérale complète',
        frame: 'plain',
        code: `
          <div style="height: 320px; display: flex; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden">
            <AtSidebar>
              <template #header>
                <div class="at-workspace"><AtIconTile name="blocks" color="ink" />Studio</div>
              </template>
              <AtNavGroup>
                <AtNavItem icon="home" :active="page === 'accueil'" @click="page = 'accueil'">Accueil</AtNavItem>
                <AtNavItem icon="inbox" :count="3" :active="page === 'boite'" @click="page = 'boite'">Boîte de réception</AtNavItem>
                <AtNavItem icon="check-square" :count="12" :active="page === 'taches'" @click="page = 'taches'">Tâches</AtNavItem>
              </AtNavGroup>
              <AtNavGroup label="Projets">
                <AtNavItem icon="bolt" tile="chart-1" :active="page === 'app'" @click="page = 'app'">Application mobile</AtNavItem>
                <AtNavItem icon="globe" tile="chart-2" :active="page === 'site'" @click="page = 'site'">Refonte du site</AtNavItem>
              </AtNavGroup>
              <template #footer>Connecté comme Alice</template>
            </AtSidebar>
          </div>
        `,
        setup: () => ({ page: ref('accueil') })
      }
    ]
  },

  {
    name: 'AtNavGroup',
    slug: 'at-nav-group',
    family: 'Navigation',
    tagline: 'Groupe d’items de navigation, avec titre optionnel.',
    rules: [
      'Le premier groupe n’a pas de titre : ce sont les destinations principales.',
      'Les groupes suivants sont titrés par ce qu’ils contiennent (« Projets », « Archives »).',
      'Le titre est posé en sentence case : le style le met en majuscules.'
    ],
    props: [{ name: 'label', type: 'string', desc: 'Titre du groupe, aussi utilisé comme `aria-label`.' }],
    slots: [{ name: 'default', type: '—', desc: 'Items.' }],
    classes: ['at-nav', 'at-nav-label'],
    related: ['at-nav-item', 'at-sidebar'],
    examples: [
      {
        frame: 'plain',
        code: `
          <div style="width: 240px; background: var(--surface-sunken); padding: 8px; border-radius: var(--radius-lg)">
            <AtNavGroup label="Réglages">
              <AtNavItem icon="person">Profil</AtNavItem>
              <AtNavItem icon="settings" active>Préférences</AtNavItem>
              <AtNavItem icon="tags">Étiquettes</AtNavItem>
            </AtNavGroup>
          </div>
        `
      }
    ]
  },

  {
    name: 'AtNavItem',
    slug: 'at-nav-item',
    family: 'Navigation',
    tagline: 'Entrée de navigation : icône ou pastille, libellé, compteur.',
    about: [
      'Rend un `<a>`. Sans `href`, le clic est intercepté (`preventDefault`) et seul l’événement `click` est émis : à brancher sur le routeur. `active` pose `aria-current="page"`.',
      'Trois façons de marquer l’item à gauche, par ordre de priorité : `mark` (une pastille de couleur), `icon` + `tile` (l’icône sur une tuile de couleur, pour une entité), ou `icon` seul.'
    ],
    rules: [
      '`icon` + `tile` est la convention pour une entité (projet, dossier) : même icône et même couleur que partout ailleurs.',
      '`mark` seul, une pastille de couleur, reste possible quand l’entité n’a pas d’icône.',
      '`count` ne montre que ce qui demande une action (non lus, ouvertes), jamais un total décoratif.',
      'Le libellé se tronque par la fin : les noms longs ne cassent pas la largeur.'
    ],
    props: [
      { name: 'icon', type: 'string', desc: 'Pictogramme.' },
      { name: 'mark', type: 'string', desc: 'Pastille de couleur (valeur CSS), à la place de l’icône.' },
      { name: 'tile', type: `'chart-1' … 'chart-5' | 'ink' | 'neutral'`, desc: 'Pose `icon` sur une tuile de couleur (`AtIconTile`).' },
      { name: 'label', type: 'string', desc: 'Libellé, si le slot par défaut n’est pas utilisé.' },
      { name: 'href', type: 'string', desc: 'Lien réel. Sans `href`, seul l’événement est émis.' },
      { name: 'active', type: 'boolean', desc: 'Page courante.' },
      { name: 'count', type: 'number | string', desc: 'Compteur à droite.' }
    ],
    events: [{ name: 'click', type: '(e: MouseEvent)', desc: 'Item activé.' }],
    slots: [{ name: 'default', type: '—', desc: 'Libellé.' }],
    classes: ['at-nav-item', 'at-nav-count', 'at-nav-mark', 'at-tile'],
    related: ['at-nav-group', 'at-sidebar', 'at-icon-tile'],
    examples: [
      {
        frame: 'plain',
        code: `
          <div style="width: 240px; background: var(--surface-sunken); padding: 8px; border-radius: var(--radius-lg)">
            <AtNavGroup>
              <AtNavItem icon="home" :active="actif === 'accueil'" @click="actif = 'accueil'">Accueil</AtNavItem>
              <AtNavItem icon="inbox" :count="3" :active="actif === 'boite'" @click="actif = 'boite'">Boîte de réception</AtNavItem>
              <AtNavItem icon="globe" tile="chart-2" :active="actif === 'site'" @click="actif = 'site'">Refonte du site</AtNavItem>
              <AtNavItem mark="var(--chart-3)" :active="actif === 'archives'" @click="actif = 'archives'">Archives, brouillons et notes de travail</AtNavItem>
              <AtNavItem icon="link" href="#/doc/composants">Un lien réel</AtNavItem>
            </AtNavGroup>
          </div>
        `,
        setup: () => ({ actif: ref('accueil') })
      }
    ]
  }
]
