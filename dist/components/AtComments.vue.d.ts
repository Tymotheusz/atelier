import type { CommentItem } from '../types';
/**
 * Fil d'activité : commentaires et changements mêlés par ordre chronologique, saisie en bas.
 * Le composant n'écrit jamais dans `items` : il émet `post`, `edit`, `delete`, l'app enregistre.
 */
type __VLS_Props = {
    items: CommentItem[];
    /** Nom de la personne connectée : avatar de la saisie, droit de modifier ses messages. */
    me: string;
    /** Personnes mentionnables avec `@`. */
    people?: string[];
    label?: string;
    placeholder?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    people: () => never[];
    label: string;
    placeholder: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    edit: (item: CommentItem, text: string) => void;
    post: (text: string) => void;
    delete: (item: CommentItem) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    people: () => never[];
    label: string;
    placeholder: string;
}>>> & {
    onEdit?: ((item: CommentItem, text: string) => any) | undefined;
    onPost?: ((text: string) => any) | undefined;
    onDelete?: ((item: CommentItem) => any) | undefined;
}, {
    label: string;
    people: string[];
    placeholder: string;
}, {}>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
