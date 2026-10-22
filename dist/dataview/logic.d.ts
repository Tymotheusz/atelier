import type { Property, PropertyOption, View, FilterRule, FilterOp, Layout } from './types';
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
