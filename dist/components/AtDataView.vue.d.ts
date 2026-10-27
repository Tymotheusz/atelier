import type { Property, View } from '../dataview/types';
declare const _default: <R extends Record<string, any>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        onUpdate?: ((row: R, key: string, value: unknown) => any) | undefined;
        onOpen?: ((row: R) => any) | undefined;
        "onUpdate:views"?: ((value: View[]) => any) | undefined;
        "onUpdate:activeView"?: ((value: string) => any) | undefined;
        onCreate?: ((defaults: Partial<R>) => any) | undefined;
        onDelete?: ((rows: R[]) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{}>> & {
        onUpdate?: ((row: R, key: string, value: unknown) => any) | undefined;
        onOpen?: ((row: R) => any) | undefined;
        "onUpdate:views"?: ((value: View[]) => any) | undefined;
        "onUpdate:activeView"?: ((value: string) => any) | undefined;
        onCreate?: ((defaults: Partial<R>) => any) | undefined;
        onDelete?: ((rows: R[]) => any) | undefined;
    }, never>, "onUpdate" | "onOpen" | "onUpdate:views" | "onUpdate:activeView" | "onCreate" | "onDelete"> & Partial<{}> & ({
        views?: View[];
        activeView?: string;
    } & {
        rows: R[];
        schema: Property<R>[];
        rowKey?: string;
        newLabel?: string;
        /** Masque la barre de vues (une seule vue imposée). */
        hideViews?: boolean;
        /** Filtrer, Trier, Grouper et Propriétés en pictogramme seul (libellé en infobulle). Activé par défaut ; `false` affiche les libellés. */
        iconTools?: boolean;
        /** Interdit d'ajouter, de dupliquer ou de supprimer une vue ; les vues restent paramétrables. */
        lockViews?: boolean;
    })> & import("vue").PublicProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: (((evt: "open", row: R) => void) & ((evt: "update", row: R, key: string, value: unknown) => void) & ((evt: "create", defaults: Partial<R>) => void) & ((evt: "delete", rows: R[]) => void)) & (((evt: "update:views", value: View[]) => void) & ((evt: "update:activeView", value: string) => void));
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
