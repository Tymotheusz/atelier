import type { Property } from '../dataview/types';
/** Liste libellé / valeur éditable d'une ligne, pour un panneau de détail. */
type __VLS_Props = {
    schema: Property[];
    row: any;
    exclude?: string[];
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    update: (key: string, value: unknown) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>> & {
    onUpdate?: ((key: string, value: unknown) => any) | undefined;
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
