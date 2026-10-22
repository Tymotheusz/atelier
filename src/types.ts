export type TagColor = 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'
export type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type Size = 'sm' | 'md' | 'lg'
export type ThemeMode = 'system' | 'light' | 'dark'
export type Density = 'comfortable' | 'compact'

export interface TabItem<V = string> { value: V; label: string; count?: number; icon?: string; disabled?: boolean }
export interface SelectOption<V = string> { value: V; label: string; disabled?: boolean }
export interface TableColumn<R> { key: keyof R & string; label: string; align?: 'left' | 'right'; width?: string; format?: (v: any, row: R) => string }
export type ChartColor = 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4' | 'chart-5'
/** Couleur d'une tuile d'icône : une série chart-*, l'encre, ou neutre (détourée). */
export type TileColor = ChartColor | 'ink' | 'neutral'
/** Couleur de la bande d'un widget : une série chart-* ou un état. */
export type StripeColor = ChartColor | Exclude<Tone, 'neutral'>
