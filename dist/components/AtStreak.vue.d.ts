import type { StreakDay } from '../types';
type __VLS_Props = {
    days: StreakDay[];
    columns?: number;
    tone?: 'success' | 'accent';
    summary?: string;
    legend?: boolean;
    labels?: [string, string, string];
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    columns: number;
    tone: string;
    legend: boolean;
    labels: () => string[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    select: (date: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    columns: number;
    tone: string;
    legend: boolean;
    labels: () => string[];
}>>> & {
    onSelect?: ((date: string) => any) | undefined;
}, {
    legend: boolean;
    tone: "success" | "accent";
    columns: number;
    labels: [string, string, string];
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
