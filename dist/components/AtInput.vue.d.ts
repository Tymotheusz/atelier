type __VLS_Props = {
    type?: string;
    placeholder?: string;
    /** Pictogramme à gauche (ex. "search"). */
    icon?: string;
    /** Raccourci affiché à droite (ex. "⌘K"). */
    kbd?: string;
    invalid?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md';
};
type __VLS_PublicProps = {
    modelValue?: string | number | null;
} & __VLS_Props;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    type: string;
    size: string;
}>, {
    focus: () => void | undefined;
    el: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    type: string;
    size: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}, {
    size: "sm" | "md";
    type: string;
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
