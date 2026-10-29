import type { Property, PropertyOption } from '../dataview/types';
/** Liste libellé / valeur éditable d'une ligne, pour un panneau de détail. */
type __VLS_Props = {
    schema: Property[];
    row: any;
    exclude?: string[];
};
/** Opens the editor of a field as a click would; no-op for a read-only, hidden or unknown field. */
declare function edit(key: string): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    edit: typeof edit;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    update: (key: string, value: unknown) => void;
    createOption: (key: string, option: PropertyOption) => void;
    updateOption: (key: string, value: string, patch: Partial<PropertyOption>) => void;
    deleteOption: (key: string, value: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & {
    onUpdate?: ((key: string, value: unknown) => any) | undefined;
    onCreateOption?: ((key: string, option: PropertyOption) => any) | undefined;
    onUpdateOption?: ((key: string, value: string, patch: Partial<PropertyOption>) => any) | undefined;
    onDeleteOption?: ((key: string, value: string) => any) | undefined;
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
