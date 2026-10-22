/** Modèle de la documentation : décrit un composant, ses exemples et son API. */

export interface ApiRow {
  name: string
  type: string
  /** Valeur par défaut, vide si aucune. */
  default?: string
  desc: string
  required?: boolean
}

export interface Example {
  title?: string
  desc?: string
  /** Template Vue compilé à l'exécution et affiché tel quel comme code. */
  code: string
  /** Portée de l'exemple : refs et helpers utilisés par le template. */
  setup?: () => Record<string, unknown>
  frame?: 'row' | 'col' | 'grid' | 'plain'
  open?: boolean
}

export type Family =
  | 'Actions' | 'Formulaires' | 'Statut' | 'Contenu'
  | 'Navigation' | 'Données' | 'Mise en page' | 'Pictogrammes'

export interface ComponentDoc {
  name: string
  /** Identifiant d'URL, ex. `at-button`. */
  slug: string
  family: Family
  /** Une phrase : à quoi sert le composant. */
  tagline: string
  /** Paragraphes d'introduction. */
  about?: string[]
  /** Règles d'usage. */
  rules?: string[]
  /** Ce qu'il ne faut pas faire. */
  avoid?: string[]
  props?: ApiRow[]
  models?: ApiRow[]
  events?: ApiRow[]
  slots?: ApiRow[]
  /** Classes `at-*` posées par le composant, pour l'usage en CSS seul. */
  classes?: string[]
  examples: Example[]
  /** Slugs des composants liés. */
  related?: string[]
}
