type __VLS_Props = {
    anchor?: HTMLElement | null;
    align?: 'start' | 'end';
    offset?: number;
};
declare function place(): void;
declare function close(): void;
declare function toggle(): void;
type __VLS_PublicProps = {
    'open'?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            toggle: typeof toggle;
            open: boolean;
        }): any;
        default?(_: {
            close: typeof close;
        }): any;
    };
    refs: {
        triggerEl: HTMLSpanElement;
        el: HTMLDivElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    align: string;
    offset: number;
}>, {
    place: typeof place;
    close: typeof close;
    toggle: typeof toggle;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
    "update:open": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    align: string;
    offset: number;
}>>> & {
    onClose?: (() => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}, {
    align: "start" | "end";
    offset: number;
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
