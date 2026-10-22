import type { ButtonVariant, Size } from '../types';
type __VLS_Props = {
    variant?: ButtonVariant;
    size?: Size;
    /** Pictogramme placé avant le libellé. */
    icon?: string;
    /** Bouton carré sans libellé : `label` devient obligatoire (aria-label). */
    iconOnly?: boolean;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
    /** Rend un lien <a> au lieu d'un <button>. */
    href?: string;
    type?: 'button' | 'submit' | 'reset';
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    variant: string;
    size: string;
    type: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    variant: string;
    size: string;
    type: string;
}>>>, {
    size: Size;
    type: "button" | "submit" | "reset";
    variant: ButtonVariant;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
