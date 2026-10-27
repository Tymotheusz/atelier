import type { Property, PropertyOption } from '../dataview/types';
type __VLS_Props = {
    prop: Property | null;
    row: any;
    anchor: HTMLElement | null;
};
type __VLS_PublicProps = {
    'open'?: boolean;
} & __VLS_Props;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    update: (value: unknown) => void;
    createOption: (option: PropertyOption) => void;
    updateOption: (value: string, patch: Partial<PropertyOption>) => void;
    deleteOption: (value: string) => void;
    "update:open": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onUpdate?: ((value: unknown) => any) | undefined;
    onCreateOption?: ((option: PropertyOption) => any) | undefined;
    onUpdateOption?: ((value: string, patch: Partial<PropertyOption>) => any) | undefined;
    onDeleteOption?: ((value: string) => any) | undefined;
}, {}, {}>;
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
