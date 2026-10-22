/**
 * Tableau simple et typé. Pour une vue base de données (filtres, tris, vues), utiliser AtDataView.
 * Slot par colonne : #cell-<key>="{ row, value }".
 */
import type { TableColumn } from '../types';
declare const _default: <T extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        onRowClick?: ((row: T) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        onRowClick?: ((row: T) => any) | undefined;
    }, never>, "onRowClick"> & Partial<{}> & {
        columns: TableColumn<T>[];
        rows: T[];
        rowKey?: keyof T & string;
        empty?: string;
    }> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Partial<Record<`cell-${keyof T & string}`, (_: {
        row: T;
        value: T[keyof T & string];
    }) => any>>;
    emit: (evt: "rowClick", row: T) => void;
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
