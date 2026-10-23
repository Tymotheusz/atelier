import { computed, ref } from 'vue'
import { icons } from '@tymotheusz/atelier'
import type { ComponentDoc } from '../types'

export const layout: ComponentDoc[] = [
  {
    name: 'AtAppShell',
    slug: 'at-app-shell',
    family: 'Mise en page',
    tagline: 'Canon d’application : barre latérale, barre supérieure, contenu défilant.',
    about: [
      'Le contenu défile seul, la barre supérieure et la barre latérale restent fixes. Sous 860 px, la barre latérale devient un tiroir avec son voile, et le bouton de menu apparaît dans la barre supérieure.',
      '`routeKey` est la clé de la route courante : à chaque changement, le tiroir se referme et le contenu remonte en haut. Sans elle, on garde le défilement de la page précédente.'
    ],
    rules: [
      'Un seul `AtAppShell` par app, à la racine. La page, elle, est un `AtPage`.',
      'Barre supérieure : fil d’Ariane à gauche, réglages et export à droite, séparés par `at-toolbar__spacer`.',
      'Ordre du contenu : titre et une ligne de contexte, puis la rangée de `AtStat`, puis le détail.',
      'Fond de page `bg`, contenus sur `surface`.'
    ],
    props: [{ name: 'routeKey', type: 'string | number', desc: 'Clé de la route : referme le tiroir et remonte le défilement.' }],
    slots: [
      { name: 'sidebar', type: '—', desc: 'La barre latérale (`AtSidebar`).' },
      { name: 'topbar', type: '—', desc: 'Contenu de la barre supérieure.' },
      { name: 'default', type: '—', desc: 'La page.' }
    ],
    classes: ['at-shell', 'at-shell__side', 'at-shell__main', 'at-shell__page', 'at-topbar', 'at-toolbar__spacer'],
    related: ['at-page', 'at-sidebar', 'at-breadcrumbs'],
    examples: [
      {
        title: 'Une app complète en miniature',
        desc: 'C’est la structure des deux apps de ce playground.',
        frame: 'plain',
        open: true,
        code: `
          <div style="height: 420px; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden">
            <AtAppShell :route-key="page">
              <template #sidebar>
                <AtSidebar>
                  <template #header>
                    <div class="at-workspace"><AtIconTile name="blocks" color="ink" />Mon outil</div>
                  </template>
                  <AtNavGroup>
                    <AtNavItem icon="home" :active="page === 'stats'" @click="page = 'stats'">Statistiques</AtNavItem>
                    <AtNavItem icon="table" :active="page === 'pages'" :count="24" @click="page = 'pages'">Pages</AtNavItem>
                  </AtNavGroup>
                </AtSidebar>
              </template>
              <template #topbar>
                <AtBreadcrumbs :items="[{ label: 'Mon outil' }, { label: page === 'stats' ? 'Statistiques' : 'Pages' }]" />
                <span class="at-toolbar__spacer" />
                <AtButton size="sm" icon="doc">Exporter</AtButton>
              </template>
              <AtPage v-if="page === 'stats'" title="Statistiques" description="Trafic sur les 30 derniers jours.">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: var(--space-4)">
                  <AtStat label="Visiteurs" value="3 482" delta="+12,4 %" trend="up" />
                  <AtStat label="Pages vues" value="12 480" delta="+6,1 %" trend="up" />
                </div>
              </AtPage>
              <AtPage v-else title="Pages" description="Toutes les pages publiées.">
                <AtEmpty message="Rien à afficher dans cet aperçu." />
              </AtPage>
            </AtAppShell>
          </div>
        `,
        setup: () => ({ page: ref('stats') })
      }
    ]
  },

  {
    name: 'AtPage',
    slug: 'at-page',
    family: 'Mise en page',
    tagline: 'Gabarit de page : titre, ligne de contexte, sections espacées.',
    about: [
      'Largeur maximale `measure-page` (1120 px), gouttière `space-8` (desktop) ou 16 px (mobile), sections séparées de `space-6`. `wide` rend la page fluide, bornée par `measure-wide` (1920 px) : un tableau ou un board prend toute la largeur utile au lieu de défiler à côté d’une bande vide. La page reste alignée sur la sidebar, sans centrage : le titre ne bouge pas d’une page à l’autre.',
      'Le slot `head` remplace le titre par un en-tête composé : pastille de projet, titre éditable, actions.'
    ],
    rules: [
      'Un seul titre `t-heading-1` par page : c’est celui d’`AtPage`.',
      'La description est une ligne qui situe, pas un paragraphe.',
      '`wide` pour un tableau ou un board, pas pour de la lecture.'
    ],
    props: [
      { name: 'title', type: 'string', desc: 'Titre de la page.' },
      { name: 'description', type: 'string', desc: 'Une ligne de contexte.' },
      { name: 'wide', type: 'boolean', desc: 'Page fluide jusqu’à `measure-wide` (1920 px) au lieu de 1120 px.' }
    ],
    slots: [
      { name: 'default', type: '—', desc: 'Sections de la page.' },
      { name: 'head', type: '—', desc: 'En-tête composé, à la place du titre.' }
    ],
    classes: ['at-page', 'at-page--wide', 'at-page__head'],
    related: ['at-app-shell', 'at-card'],
    examples: [
      {
        title: 'En-tête composé',
        frame: 'plain',
        code: `
          <AtPage>
            <template #head>
              <div style="display: flex; gap: var(--space-4); align-items: flex-start">
                <AtIconTile name="bolt" color="chart-1" size="lg" />
                <div style="flex: 1; min-width: 0">
                  <h1 class="t-heading-1" style="margin: 0">Application mobile</h1>
                  <p class="at-muted" style="margin: 2px 0 0">Première version iOS et Android de l’application client.</p>
                </div>
                <AtButton size="sm" icon="expand">Propriétés</AtButton>
              </div>
            </template>
            <AtCard title="Une section" description="Les sections d’une page sont espacées de space-6." />
          </AtPage>
        `
      }
    ]
  },

  {
    name: 'AtIcon',
    slug: 'at-icon',
    family: 'Pictogrammes',
    tagline: 'Pictogramme du jeu intégré, 16 px, à la couleur du texte.',
    about: [
      'Jeu de référence : Lucide, trait 1,5, extrémités arrondies, `currentColor`. Le jeu intégré couvre l’interface d’app ; `registerIcons` en ajoute d’autres sans toucher au paquet.',
      'Sans `label`, l’icône est `aria-hidden` : c’est le bon réglage quand elle accompagne un texte. Avec `label`, elle devient une image accessible.'
    ],
    rules: [
      'Couleur : `ink-muted` par défaut, `ink-subtle` dans les en-têtes de tableau, jamais l’accent seule.',
      'Icône seule cliquable = `AtButton` avec `iconOnly` et `label`, pas une icône nue.',
      '16 px partout dans l’interface ; au-delà, c’est une illustration, pas un picto.'
    ],
    props: [
      { name: 'name', type: 'string', required: true, desc: 'Nom dans le jeu d’icônes.' },
      { name: 'size', type: 'number', default: '16', desc: 'Côté, en pixels.' },
      { name: 'label', type: 'string', desc: 'Alternative textuelle ; sans elle, l’icône est décorative.' }
    ],
    classes: ['at-icon'],
    related: ['at-button', 'at-nav-item'],
    examples: [
      {
        title: 'Le jeu intégré',
        desc: 'Cliquer un nom pour le copier.',
        frame: 'plain',
        code: `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: var(--space-1)">
            <button v-for="n in noms" :key="n" type="button" class="at-menu-item" :title="n"
              @click="copier(n)">
              <AtIcon :name="n" /><span class="at-ellipsis" style="font-size: 12px">{{ n }}</span>
            </button>
          </div>
          <p class="at-muted" style="margin-top: 8px">{{ copie ? 'Copié : ' + copie : noms.length + ' pictogrammes' }}</p>
        `,
        setup: () => {
          const copie = ref('')
          return {
            noms: computed(() => Object.keys(icons)),
            copie,
            copier: (n: string) => {
              navigator.clipboard?.writeText(n).catch(() => {})
              copie.value = n
            }
          }
        }
      },
      {
        title: 'Ajouter des icônes',
        code: `<AtIcon name="info" :size="24" label="Information" /><AtIcon name="alert" :size="24" label="Attention" />`
      }
    ]
  },

  {
    name: 'AtIconTile',
    slug: 'at-icon-tile',
    family: 'Pictogrammes',
    tagline: 'Icône en couleur forte sur un aplat pâle : l’identité visuelle d’une entité.',
    about: [
      'Remplace les monogrammes (une lettre sur un fond coloré). Pas de dégradé, pas d’ombre, pas de contour : un aplat `chart-N-soft` et l’icône en `chart-N-ink`, qui tient 4,5:1 dans les deux thèmes.',
      'Trois tailles : 20 px dans la navigation, 32 px dans une liste ou une carte, 48 px dans l’en-tête d’une page d’entité. `neutral` est la valeur par défaut : pas d’aplat, un contour `border-strong` et une icône `ink-muted`.'
    ],
    rules: [
      'Une entité garde la même icône et la même couleur partout : navigation, en-tête, bande de carte, marque de relation.',
      '`ink` est réservé au logo de l’espace de travail, en tête de barre latérale.',
      '`lg` dans l’en-tête d’une page d’entité, centrée verticalement sur le titre et la description.',
      'Dans `AtNavItem`, passer `icon` et `tile` plutôt que d’insérer la tuile à la main.',
      'Sans `label`, la tuile est décorative (`aria-hidden`) : c’est le bon réglage quand le nom de l’entité est juste à côté.'
    ],
    props: [
      { name: 'name', type: 'string', required: true, desc: 'Nom du pictogramme (jeu intégré ou `registerIcons`).' },
      { name: 'color', type: "'chart-1' … 'chart-5' | 'ink' | 'neutral'", default: "'neutral'", desc: 'Teinte de la tuile.' },
      { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'sm'", desc: '20, 32 ou 48 px.' },
      { name: 'label', type: 'string', desc: 'Alternative textuelle ; sans elle, la tuile est décorative.' }
    ],
    classes: ['at-tile', 'at-tile--md|--lg', 'at-tile--neutral', 'at-tone-chart-1…5', 'at-tone-ink'],
    related: ['at-icon', 'at-nav-item', 'at-card', 'at-stat'],
    examples: [
      {
        title: 'Tailles et teintes',
        frame: 'col',
        code: `
          <div style="display: flex; align-items: center; gap: var(--space-4)">
            <AtIconTile name="layers" color="chart-1" />
            <AtIconTile name="layers" color="chart-1" size="md" />
            <AtIconTile name="layers" color="chart-1" size="lg" label="Migration" />
          </div>
          <div style="display: flex; align-items: center; gap: var(--space-3)">
            <AtIconTile v-for="(n, i) in ['bolt', 'globe', 'layers', 'book', 'palette']" :key="n"
              :name="n" :color="\`chart-\${i + 1}\`" size="md" />
            <AtIconTile name="blocks" color="ink" size="md" />
            <AtIconTile name="folder" size="md" />
          </div>
        `
      },
      {
        title: 'En situation',
        desc: 'La même couleur identifie le projet du haut en bas de l’écran : tuile, navigation, bande de carte.',
        frame: 'plain',
        code: `
          <div style="display: grid; grid-template-columns: 240px 1fr; gap: var(--space-5); align-items: start">
            <div style="background: var(--surface-sunken); padding: 8px; border-radius: var(--radius-lg)">
              <AtNavGroup label="Projets">
                <AtNavItem icon="bolt" tile="chart-1" active>Application mobile</AtNavItem>
                <AtNavItem icon="globe" tile="chart-2">Refonte du site</AtNavItem>
                <AtNavItem icon="layers" tile="chart-3">Migration cloud</AtNavItem>
              </AtNavGroup>
            </div>
            <div style="display: flex; flex-direction: column; gap: var(--space-4)">
              <div style="display: flex; gap: var(--space-4); align-items: center">
                <AtIconTile name="bolt" color="chart-1" size="lg" />
                <div>
                  <h2 class="t-heading-2" style="margin: 0">Application mobile</h2>
                  <p class="at-muted" style="margin: 2px 0 0">Première version iOS et Android.</p>
                </div>
              </div>
              <AtCard color="chart-1" title="Version bêta" description="Connexion, recherche, notifications." />
            </div>
          </div>
        `
      }
    ]
  }
]
