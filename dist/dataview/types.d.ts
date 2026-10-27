import type { TagColor, Tone } from '../types';
export type PropertyType = 'title' | 'text' | 'number' | 'select' | 'status' | 'multi' | 'person' | 'relation' | 'date' | 'progress' | 'checkbox';
export type Layout = 'table' | 'board' | 'list' | 'calendar';
export interface PropertyOption {
    value: string;
    label: string;
    /** Couleur de tag (select, multi). */
    color?: TagColor;
    /** Ton de badge (status). */
    tone?: Tone;
    /** Pastille de couleur CSS (relation), ex. 'var(--chart-2)'. */
    mark?: string;
}
export interface Property<R = any> {
    key: string;
    name: string;
    type: PropertyType;
    /** Options fixes, ou calculées à partir de la ligne (relations dépendantes). Appelée sans ligne pour filtres et groupes. */
    options?: PropertyOption[] | ((row?: R) => PropertyOption[]);
    /** Valeur calculée : la propriété devient en lecture seule. */
    compute?: (row: R) => unknown;
    readonly?: boolean;
    /** Select, multi : options créées en tapant, renommées, recolorées et supprimées depuis l'éditeur (« ⋯ »). L'app les enregistre via les événements `*-option`. */
    creatable?: boolean;
    /** Interdit « Effacer » dans l'éditeur. */
    required?: boolean;
    /** Date : marque la valeur en rouge quand ce prédicat est vrai. */
    overdue?: (row: R) => boolean;
    /** Nombre : suffixe affiché, ex. ' h' ou ' €'. */
    suffix?: string;
    /** Largeur par défaut en tableau (px). */
    width?: number;
    /** Pictogramme d'en-tête (sinon celui du type). */
    icon?: string;
}
export type FilterOp = 'contains' | 'notcontains' | 'empty' | 'notempty' | 'is' | 'isnot' | 'before' | 'after' | 'past' | 'week' | 'eq' | 'gt' | 'lt' | 'checked' | 'unchecked';
export interface FilterRule {
    id: string;
    prop: string;
    op: FilterOp;
    value: string;
}
export interface SortRule {
    id: string;
    prop: string;
    dir: 'asc' | 'desc';
}
export interface View {
    id: string;
    name: string;
    layout: Layout;
    filters: FilterRule[];
    sorts: SortRule[];
    /** Propriété de regroupement (colonnes du board). */
    groupBy: string | null;
    /** Propriété date du calendrier. */
    dateProp: string | null;
    hidden: string[];
    order: string[];
    widths: Record<string, number>;
    collapsed: string[];
    /** Mois affiché par le calendrier, 'AAAA-MM'. */
    month: string | null;
}
