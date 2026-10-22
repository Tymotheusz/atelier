import type { ComponentDoc, Family } from './types'
import { actions } from './entries/actions'
import { forms } from './entries/forms'
import { status } from './entries/status'
import { content } from './entries/content'
import { navigation } from './entries/navigation'
import { data } from './entries/data'
import { layout } from './entries/layout'

/** Tous les composants documentés, dans l'ordre des familles. */
export const components: ComponentDoc[] = [...actions, ...forms, ...status, ...content, ...navigation, ...data, ...layout]

export const FAMILIES: Family[] = ['Actions', 'Formulaires', 'Statut', 'Contenu', 'Navigation', 'Données', 'Mise en page', 'Pictogrammes']

export const byFamily = FAMILIES.map(family => ({ family, items: components.filter(c => c.family === family) }))

export const bySlug: Record<string, ComponentDoc> = Object.fromEntries(components.map(c => [c.slug, c]))

/** Page de documentation hors composants. */
export interface GuidePage {
  id: string
  label: string
  icon: string
  group: 'Démarrer' | 'Fondations' | 'Canons'
  /** Une ligne, affichée dans l'index de l'introduction. */
  tagline: string
}

export const guides: GuidePage[] = [
  { id: '', label: 'Introduction', icon: 'home', group: 'Démarrer', tagline: 'Ce qu’est Atelier, et comment cette documentation est faite.' },
  { id: 'installation', label: 'Installation', icon: 'doc', group: 'Démarrer', tagline: 'Installer le paquet, charger le CSS, enregistrer les composants.' },
  { id: 'theme', label: 'Thème et densité', icon: 'sun', group: 'Démarrer', tagline: '`useTheme`, `useDensity`, et les attributs posés sur la page.' },

  { id: 'fondations/principes', label: 'Principes', icon: 'star', group: 'Fondations', tagline: 'Les quatre décisions qui tiennent tout le reste.' },
  { id: 'fondations/couleurs', label: 'Couleurs', icon: 'tags', group: 'Fondations', tagline: 'Les 52 couleurs, leur rôle, et leurs valeurs dans les deux thèmes.' },
  { id: 'fondations/typographie', label: 'Typographie', icon: 'text', group: 'Fondations', tagline: 'Inter et JetBrains Mono, et les douze styles `t-*`.' },
  { id: 'fondations/espacement', label: 'Espacement', icon: 'expand', group: 'Fondations', tagline: 'La grille de 4 px, et où chaque palier sert.' },
  { id: 'fondations/formes', label: 'Formes et ombres', icon: 'checkbox', group: 'Fondations', tagline: 'Rayons par usage, et les trois seules ombres du système.' },
  { id: 'fondations/densite', label: 'Densité et gabarits', icon: 'sliders', group: 'Fondations', tagline: 'Hauteurs de contrôle, lignes de tableau, largeurs de référence.' },
  { id: 'fondations/mouvement', label: 'Mouvement', icon: 'progress', group: 'Fondations', tagline: 'Trois durées, une courbe, et le respect de `prefers-reduced-motion`.' },
  { id: 'fondations/etats', label: 'États', icon: 'eye', group: 'Fondations', tagline: 'Survol, focus, désactivé, erreur, sélection.' },
  { id: 'fondations/icones', label: 'Pictogrammes', icon: 'flag', group: 'Fondations', tagline: 'Le jeu intégré, et comment l’étendre.' },
  { id: 'fondations/ton', label: 'Ton et contenu', icon: 'edit', group: 'Fondations', tagline: 'Français, sentence case, libellés à l’infinitif, nombres à la française.' },

  { id: 'canons/dashboard', label: 'Dashboard', icon: 'chart', group: 'Canons', tagline: 'Résumé avant détail : shell, tuiles, tableau.' },
  { id: 'canons/base-de-donnees', label: 'Base de données', icon: 'table', group: 'Canons', tagline: 'Vues enregistrées, densité compacte, panneau de détail.' },
  { id: 'canons/site', label: 'Page de site', icon: 'doc', group: 'Canons', tagline: 'Lecture, respiration, `t-prose` sur `measure-prose`.' }
]

export const GUIDE_GROUPS = ['Démarrer', 'Fondations', 'Canons'] as const
export const guidesOf = (group: string) => guides.filter(g => g.group === group)
export const guideById: Record<string, GuidePage> = Object.fromEntries(guides.map(g => [g.id, g]))

/** Titre lisible d'une route de documentation, pour le fil d'Ariane. */
export function titleOf(id: string): string {
  if (id === 'composants') return 'Composants'
  if (id.startsWith('composants/')) return bySlug[id.slice('composants/'.length)]?.name ?? 'Composant'
  return guideById[id]?.label ?? 'Introduction'
}
