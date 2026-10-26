/**
 * Marque Atelier : une construction commune et un glyphe par app.
 *
 * Source unique de la marque. `AtLogo` la lit à l'exécution ; `scripts/build-brand.mjs`
 * en tire les fichiers SVG de `brand/` (monochromes et en couleur) et le favicon du playground.
 *
 * Grille 24 × 24. La tuile occupe toute la grille, rayon 6 (25 %) sur trois coins et
 * un coin d'équerre (rayon 1) en bas à gauche. Le glyphe est un dessin au trait 2,
 * extrémités arrondies, tenu dans la zone utile 5 → 19 (axes des traits entre 6 et 18).
 */
import type { ColorToken } from './tokens'

/** Mesures de la construction, en unités de la grille de 24. */
export const brandGrid = {
  /** Côté de la grille et de la tuile. */
  size: 24,
  /** Rayon des trois coins arrondis (25 % du côté). */
  radius: 6,
  /** Rayon du coin d'équerre, en bas à gauche. */
  corner: 1,
  /** Marge intérieure : la zone utile du glyphe va de 5 à 19. */
  padding: 5,
  /** Épaisseur du trait du glyphe. */
  stroke: 2,
  /** Zone de protection autour de la marque (25 % du côté). */
  clearspace: 6,
  /** Écart entre la marque et le nom (40 % du côté). */
  gap: 9.6,
  /** Corps du nom, relatif au côté de la marque. */
  wordmarkRatio: 0.7
} as const

/** Contour de la tuile : carré de 24, rayon 6, coin d'équerre en bas à gauche. */
export const LOGO_TILE = 'M6 0H18A6 6 0 0 1 24 6V18A6 6 0 0 1 18 24H1A1 1 0 0 1 0 23V6A6 6 0 0 1 6 0Z'

/** Une app de la famille : son nom, son glyphe et la couleur de sa tuile. */
export interface LogoApp {
  /** Nom affiché à côté de la marque. */
  name: string
  /**
   * Intérieur du glyphe, sur la grille de 24, au trait (`stroke` et `fill` sont posés par la marque).
   * Un élément plein porte `fill="currentColor"`.
   */
  glyph: string
  /**
   * Token de couleur de la tuile. Le glyphe est posé en `bg` : la tuile doit tenir ≥ 3:1 contre `bg`
   * dans les deux thèmes, ce qui la rend aussi visible sur la page.
   */
  color: ColorToken
}

/** Apps intégrées. `atelier` est la marque mère ; les autres sont ses déclinaisons. */
export const logoApps: Record<string, LogoApp> = {
  atelier: {
    name: 'Atelier',
    // Le compas d'atelier : une charnière, deux branches, une traverse. Il se lit aussi comme un A.
    glyph: '<path d="M12 6v2M7 18l5-10 5 10M9.5 14.5h5"/>',
    color: 'ink'
  },
  dashboard: {
    name: 'Tableau de bord',
    // Le compteur : un cadran ouvert et son aiguille.
    glyph: '<path d="M7.76 17.24a6 6 0 1 1 8.48 0"/><path d="M12 13l3-3"/>',
    color: 'chart-2'
  },
  admin: {
    name: 'Administration',
    // Les réglages : deux curseurs.
    glyph: '<path d="M6 9h12M6 15h12"/><circle cx="9.5" cy="9" r="2.5" fill="currentColor"/><circle cx="14.5" cy="15" r="2.5" fill="currentColor"/>',
    color: 'chart-5'
  },
  tasks: {
    name: 'Tâches',
    // La coche.
    glyph: '<path d="M6.5 12.5l3.5 3.5 7.5-8"/>',
    color: 'chart-3'
  },
  mail: {
    name: 'Courrier',
    // L'enveloppe.
    glyph: '<rect x="6" y="7.5" width="12" height="9" rx="1.5"/><path d="M6.5 8.5 12 12.5l5.5-4"/>',
    color: 'chart-4'
  },
  agenda: {
    name: 'Agenda',
    // La page de calendrier et ses deux anneaux.
    glyph: '<rect x="6" y="7.5" width="12" height="10.5" rx="1.5"/><path d="M6 11.5h12M9.5 6v3M14.5 6v3"/>',
    color: 'tag-blue-fg'
  },
  docs: {
    name: 'Documents',
    // La page cornée et une ligne de texte.
    glyph: '<path d="M7.5 6h6l3.5 3.5V18h-9.5z"/><path d="M13.5 6v3.5H17M10 14h4.5"/>',
    color: 'tag-brown-fg'
  },
  files: {
    name: 'Fichiers',
    // Le dossier.
    glyph: '<path d="M6 8a1 1 0 0 1 1-1h3.5l1.5 2h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/>',
    color: 'tag-green-fg'
  },
  contacts: {
    name: 'Contacts',
    // Le buste.
    glyph: '<circle cx="12" cy="9.5" r="3"/><path d="M6.5 18c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5"/>',
    color: 'tag-red-fg'
  }
}

/** Identifiants des apps intégrées. `registerLogoApps` en ajoute d'autres. */
export type LogoAppId = 'atelier' | 'dashboard' | 'admin' | 'tasks' | 'mail' | 'agenda' | 'docs' | 'files' | 'contacts'

/**
 * Ajoute ou remplace des apps de la famille à l'exécution.
 * `registerLogoApps({ notes: { name: 'Notes', glyph: '<path d="…"/>', color: 'tag-yellow-fg' } })`
 */
export function registerLogoApps(apps: Record<string, LogoApp>) {
  Object.assign(logoApps, apps)
}

/**
 * Le nom « Atelier » vectorisé : Inter graisse 650, approche −0,015 em, corps 16,8 (0,7 × 24),
 * ligne de base à y = 0. Sert aux fichiers SVG autonomes ; dans l'interface, le nom est du texte.
 */
export const WORDMARK = {
  width: 51.99,
  capHeight: 12.22,
  d: 'M0.4 0 4.63 -12.22H7.66L11.98 0H9.39L7.32 -6.12Q6.99 -7.19 6.63 -8.49Q6.28 -9.79 5.87 -11.38H6.37Q5.97 -9.78 5.63 -8.47Q5.3 -7.16 4.98 -6.12L2.98 0ZM2.95 -2.93V-4.8H9.43V-2.93ZM17.19 -9.17V-7.4H11.86V-9.17ZM13.15 -11.35H15.44V-2.63Q15.44 -2.17 15.65 -1.95Q15.85 -1.73 16.32 -1.73Q16.46 -1.73 16.71 -1.76Q16.96 -1.79 17.1 -1.83L17.44 -0.08Q17.06 0.03 16.67 0.08Q16.29 0.13 15.93 0.13Q14.58 0.13 13.86 -0.54Q13.15 -1.2 13.15 -2.43ZM22.52 0.18Q21.13 0.18 20.12 -0.4Q19.11 -0.97 18.57 -2.03Q18.03 -3.09 18.03 -4.53Q18.03 -5.95 18.56 -7.02Q19.1 -8.09 20.08 -8.69Q21.06 -9.29 22.39 -9.29Q23.26 -9.29 24.03 -9.01Q24.79 -8.73 25.38 -8.16Q25.97 -7.59 26.3 -6.71Q26.64 -5.84 26.64 -4.65V-3.97H19.04V-5.46H25.5L24.43 -5.04Q24.43 -5.79 24.2 -6.35Q23.97 -6.9 23.52 -7.21Q23.07 -7.52 22.4 -7.52Q21.73 -7.52 21.26 -7.21Q20.79 -6.9 20.55 -6.37Q20.3 -5.83 20.3 -5.17V-4.13Q20.3 -3.29 20.58 -2.73Q20.86 -2.16 21.37 -1.87Q21.88 -1.58 22.55 -1.58Q23 -1.58 23.37 -1.71Q23.74 -1.84 24 -2.09Q24.26 -2.34 24.4 -2.71L26.5 -2.31Q26.28 -1.56 25.73 -1Q25.19 -0.44 24.38 -0.13Q23.56 0.18 22.52 0.18ZM30.44 -12.22V0H28.14V-12.22ZM32.37 0V-9.17H34.66V0ZM33.52 -10.42Q32.98 -10.42 32.6 -10.77Q32.22 -11.13 32.22 -11.63Q32.22 -12.14 32.6 -12.5Q32.98 -12.85 33.52 -12.85Q34.05 -12.85 34.44 -12.5Q34.82 -12.14 34.82 -11.63Q34.82 -11.13 34.44 -10.77Q34.05 -10.42 33.52 -10.42ZM40.69 0.18Q39.3 0.18 38.3 -0.4Q37.29 -0.97 36.75 -2.03Q36.2 -3.09 36.2 -4.53Q36.2 -5.95 36.74 -7.02Q37.28 -8.09 38.26 -8.69Q39.24 -9.29 40.56 -9.29Q41.43 -9.29 42.2 -9.01Q42.97 -8.73 43.56 -8.16Q44.15 -7.59 44.48 -6.71Q44.81 -5.84 44.81 -4.65V-3.97H37.21V-5.46H43.68L42.61 -5.04Q42.61 -5.79 42.38 -6.35Q42.15 -6.9 41.7 -7.21Q41.25 -7.52 40.58 -7.52Q39.91 -7.52 39.44 -7.21Q38.97 -6.9 38.73 -6.37Q38.48 -5.83 38.48 -5.17V-4.13Q38.48 -3.29 38.76 -2.73Q39.04 -2.16 39.55 -1.87Q40.06 -1.58 40.73 -1.58Q41.18 -1.58 41.55 -1.71Q41.91 -1.84 42.18 -2.09Q42.44 -2.34 42.58 -2.71L44.67 -2.31Q44.45 -1.56 43.91 -1Q43.37 -0.44 42.55 -0.13Q41.74 0.18 40.69 0.18ZM46.32 0V-9.17H48.54V-7.61H48.64Q48.89 -8.43 49.5 -8.86Q50.1 -9.29 50.88 -9.29Q51.07 -9.29 51.29 -9.28Q51.51 -9.26 51.67 -9.22V-7.14Q51.52 -7.19 51.22 -7.23Q50.91 -7.26 50.63 -7.26Q50.06 -7.26 49.6 -7.01Q49.14 -6.76 48.88 -6.33Q48.61 -5.89 48.61 -5.31V0Z'
} as const
