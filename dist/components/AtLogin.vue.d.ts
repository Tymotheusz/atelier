type __VLS_Props = {
    /** Nom de l'app ou du domaine, affiché au-dessus de la carte. */
    brand?: string;
    /** Lettre de la pastille de marque ; par défaut, la première lettre de `brand`. */
    mark?: string;
    title?: string;
    description?: string;
    /** Message d'échec, annoncé aux lecteurs d'écran. */
    error?: string;
    /** Connexion en cours : `true` ou `'password'` pour le mot de passe, `'passkey'` pour la passkey. */
    loading?: boolean | 'password' | 'passkey';
    /** Affiche le bouton de connexion par passkey (émet `passkey`). */
    passkey?: boolean;
    /** Affiche la case « Rester connecté » (`v-model:remember`). */
    rememberable?: boolean;
    usernameLabel?: string;
    passwordLabel?: string;
    submitLabel?: string;
    passkeyLabel?: string;
    rememberLabel?: string;
    /** Élément racine : `main` pour une page de connexion, `div` pour l'insérer ailleurs. */
    as?: string;
};
type __VLS_PublicProps = {
    'username'?: string;
    'password'?: string;
    'remember'?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        brand?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        usernameInput: import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            focus: () => void | undefined;
            el: import("vue").Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: string | number | null) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            size: "sm" | "md";
            type: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            focus: () => void | undefined;
            el: import("vue").Ref<HTMLInputElement | undefined>;
        }, {}, {}, {}, {
            size: "sm" | "md";
            type: string;
        }> | null;
        passwordInput: import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            focus: () => void | undefined;
            el: import("vue").Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            "update:modelValue": (value: string | number | null) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            size: "sm" | "md";
            type: string;
        }, true, {}, {}, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            size: {
                type: import("vue").PropType<"sm" | "md">;
                default: string;
            };
            type: {
                type: import("vue").PropType<string>;
                default: string;
            };
            kbd: {
                type: import("vue").PropType<string>;
            };
            icon: {
                type: import("vue").PropType<string>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            modelValue: {
                type: import("vue").PropType<string | number | null>;
            };
            placeholder: {
                type: import("vue").PropType<string>;
            };
            invalid: {
                type: import("vue").PropType<boolean>;
            };
        }>> & {
            "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
        }, {
            focus: () => void | undefined;
            el: import("vue").Ref<HTMLInputElement | undefined>;
        }, {}, {}, {}, {
            size: "sm" | "md";
            type: string;
        }> | null;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    as: string;
    title: string;
    loading: boolean;
    usernameLabel: string;
    passwordLabel: string;
    submitLabel: string;
    passkeyLabel: string;
    rememberLabel: string;
}>, {
    focusUsername: () => void | undefined;
    focusPassword: () => void | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    submit: (credentials: {
        username: string;
        password: string;
        remember: boolean;
    }) => void;
    passkey: () => void;
    "update:username": (value: string) => void;
    "update:password": (value: string) => void;
    "update:remember": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    as: string;
    title: string;
    loading: boolean;
    usernameLabel: string;
    passwordLabel: string;
    submitLabel: string;
    passkeyLabel: string;
    rememberLabel: string;
}>>> & {
    onSubmit?: ((credentials: {
        username: string;
        password: string;
        remember: boolean;
    }) => any) | undefined;
    onPasskey?: (() => any) | undefined;
    "onUpdate:username"?: ((value: string) => any) | undefined;
    "onUpdate:password"?: ((value: string) => any) | undefined;
    "onUpdate:remember"?: ((value: boolean) => any) | undefined;
}, {
    title: string;
    loading: boolean | "password" | "passkey";
    as: string;
    usernameLabel: string;
    passwordLabel: string;
    submitLabel: string;
    passkeyLabel: string;
    rememberLabel: string;
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
