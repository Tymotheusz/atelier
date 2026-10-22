type __VLS_Props = {
    label: string;
    value: string | number;
    /** Variation déjà formatée, ex. "+12,4 %". */
    delta?: string;
    /** Sens métier de la variation : 'up' = bonne nouvelle, 'down' = mauvaise. */
    trend?: 'up' | 'down';
    /** Série pour la sparkline (au moins 2 points). */
    spark?: number[];
    foot?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        value?(_: {}): any;
        foot?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
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
