import { type LogoAppId } from '../brand';
type __VLS_Props = {
    /** App de la famille : la marque mère `atelier`, une app intégrée, ou une app ajoutée par `registerLogoApps`. */
    app?: LogoAppId | (string & {});
    /** Côté de la marque, en px. 16 au minimum. */
    size?: number;
    /** Affiche le nom de l'app à côté de la marque. */
    wordmark?: boolean;
    /** Remplace le nom affiché (et le libellé accessible). */
    name?: string;
    /** Libellé accessible de la marque seule ; sans lui (et sans nom affiché), elle est décorative. */
    label?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    app: string;
    size: number;
    wordmark: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    app: string;
    size: number;
    wordmark: boolean;
}>>>, {
    size: number;
    app: LogoAppId | (string & {});
    wordmark: boolean;
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
