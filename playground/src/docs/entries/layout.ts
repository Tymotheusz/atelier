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
                    <div class="at-workspace"><span class="at-workspace__mark">M</span>Mon outil</div>
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
      'Largeur maximale `measure-page` (1120 px), gouttière `space-8` (desktop) ou 16 px (mobile), sections séparées de `space-6`. `wide` passe à 1280 px, pour les vues de données.',
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
      { name: 'wide', type: 'boolean', desc: 'Largeur 1280 px au lieu de 1120 px.' }
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
                <span style="width: 44px; height: 44px; border-radius: var(--radius-lg); display: grid;
                  place-items: center; font-size: 20px; font-weight: 650; color: var(--bg); background: var(--chart-1)">A</span>
                <div style="flex: 1; min-width: 0">
                  <h1 class="t-heading-1" style="margin: 0">Atelier DS</h1>
                  <p class="at-muted" style="margin: 2px 0 0">Design system : tokens, CSS et composants Vue.</p>
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
  }
]
