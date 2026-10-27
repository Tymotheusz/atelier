/**
 * Pied de sidebar : avatar en initiales, nom et e-mail. Le menu s'ouvre à droite et regroupe le compte
 * et les préférences (thème, densité), branchées sur useTheme / useDensity.
 * Les items Profil, Paramètres et Se déconnecter n'apparaissent que si leur événement est écouté.
 */
type __VLS_Props = {
    name: string;
    email?: string;
    src?: string;
    theme?: boolean;
    density?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default?: () => unknown;
    }> & {
        default?: () => unknown;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    theme: boolean;
    density: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    settings: () => void;
    logout: () => void;
    profile: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_Props>, {
    theme: boolean;
    density: boolean;
}>>> & {
    onSettings?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
    onProfile?: (() => any) | undefined;
}, {
    theme: boolean;
    density: boolean;
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
