import { type ChecklistGroup, type ChecklistItem, type ChecklistState } from '../checklist';
type __VLS_Props = {
    items: ChecklistItem[];
    groups?: ChecklistGroup[];
    numbered?: boolean;
    collapseDone?: number;
    keyboard?: boolean;
};
declare function move(step: number): void;
type __VLS_PublicProps = {
    'current'?: string | null;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        meta?: (p: {
            item: ChecklistItem;
            current: boolean;
        }) => any;
        actions?: (p: {
            item: ChecklistItem;
        }) => any;
        empty?: () => any;
    }> & {
        meta?: (p: {
            item: ChecklistItem;
            current: boolean;
        }) => any;
        actions?: (p: {
            item: ChecklistItem;
        }) => any;
        empty?: () => any;
    };
    refs: {
        el: HTMLDivElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    numbered: boolean;
    keyboard: boolean;
}>, {
    move: typeof move;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    check: (id: string, state: ChecklistState) => void;
    open: (item: ChecklistItem) => void;
    "update:current": (value: string | null) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    numbered: boolean;
    keyboard: boolean;
}>>> & {
    onCheck?: ((id: string, state: ChecklistState) => any) | undefined;
    onOpen?: ((item: ChecklistItem) => any) | undefined;
    "onUpdate:current"?: ((value: string | null) => any) | undefined;
}, {
    numbered: boolean;
    keyboard: boolean;
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
