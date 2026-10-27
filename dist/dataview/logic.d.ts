import type { Property, PropertyOption, View, FilterRule, FilterOp, Layout } from './types';
import type { TagColor } from '../types';
export declare const NONE = "__none";
export declare const toISODate: (d: Date) => string;
export declare const today: () => string;
export declare const addDays: (iso: string, n: number) => string;
export declare const uid: () => string;
export declare const isEmpty: (v: unknown) => boolean;
export declare const getValue: <R>(row: R, p: Property<R>) => any;
export declare const optionsOf: <R>(p: Property<R>, row?: R) => PropertyOption[];
export declare const findOption: <R>(p: Property<R>, row: R | undefined, v: unknown) => PropertyOption | undefined;
export declare const isEditable: (p: Property) => boolean;
export declare const OPTION_TYPES: readonly ["status", "select", "relation", "person"];
export declare const isOptionType: (p: Property) => boolean;
export declare const TYPE_ICON: Record<string, string>;
export declare const typeIcon: (p: Property) => string;
export declare const LAYOUTS: {
    value: Layout;
    label: string;
    icon: string;
}[];
export declare const OPS: Record<string, FilterOp[]>;
export declare const OP_LABEL: Record<FilterOp, string>;
export declare const NO_VALUE: FilterOp[];
export declare function matchRule<R>(row: R, p: Property<R>, r: FilterRule, now?: string): boolean;
export declare function compareRows<R>(p: Property<R>, a: R, b: R): number;
/** Recherche plein texte sur le titre + filtres (ET) + tris successifs. */
export declare function applyView<R>(rows: R[], schema: Property<R>[], view: View, search?: string): R[];
export interface Group<R> {
    key: string;
    option: PropertyOption | null;
    rows: R[];
}
/** Regroupe selon une propriété à options. `keepEmpty` garde les groupes vides (colonnes de board). */
export declare function groupRows<R>(rows: R[], p: Property<R> | null, keepEmpty?: boolean): Group<R>[];
/** Jours d'une grille de mois (lundi en premier), 5 ou 6 semaines. */
export declare function monthGrid(month: string): {
    iso: string;
    day: number;
    outside: boolean;
}[];
export declare const shiftMonth: (month: string, n: number) => string;
export declare function createView(name: string, layout?: Layout, extra?: Partial<View>): View;
export declare const filter: (prop: string, op: FilterOp, value?: string) => FilterRule;
export declare const sort: (prop: string, dir?: "asc" | "desc") => {
    id: string;
    prop: string;
    dir: "desc" | "asc";
};
/** Valeurs par défaut d'une nouvelle ligne déduites des filtres « est » / « contient » de la vue. */
export declare function defaultsFromFilters<R>(view: View, schema: Property<R>[]): Record<string, unknown>;
export declare const fmtNumber: Intl.NumberFormat;
export declare function formatDate(iso?: string | null): string;
export declare const formatMonth: (month: string) => string;
/** Minuscules sans accents ni espaces de bord : base de la recherche d'options. */
export declare const normalize: (s: string) => string;
/** Options dont le libellé contient la saisie, hors valeurs exclues (déjà choisies). */
export declare const matchOptions: (options: PropertyOption[], query: string, exclude?: string[]) => PropertyOption[];
/** « Créer » est proposé tant que la saisie n'est pas exactement une option existante. */
export declare const canCreate: (options: PropertyOption[], query: string) => boolean;
/** Ordre des couleurs données aux options créées. */
export declare const TAG_ROTATION: TagColor[];
/** Première couleur pas encore prise, sinon on reprend le cycle. */
export declare const nextTagColor: (options: PropertyOption[]) => TagColor;
/** Découpe un libellé autour de la partie qui correspond à la saisie, pour la mettre en gras. */
export declare const splitMatch: (label: string, query: string) => [string, string, string];
