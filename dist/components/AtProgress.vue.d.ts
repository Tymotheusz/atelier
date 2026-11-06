import type { Tone } from '../types';
type __VLS_Props = {
    value: number;
    max?: number;
    showLabel?: boolean;
    label?: string;
    /** `bar` : barre horizontale ; `ring` : roue de 16 px, pour une ligne de liste ou de navigation. */
    variant?: 'bar' | 'ring';
    /** Couleur de l'avancement ; `accent` par défaut. */
    tone?: 'accent' | Tone;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    max: number;
    showLabel: boolean;
    variant: string;
    tone: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    max: number;
    showLabel: boolean;
    variant: string;
    tone: string;
}>>>, {
    variant: "bar" | "ring";
    tone: "accent" | Tone;
    max: number;
    showLabel: boolean;
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
