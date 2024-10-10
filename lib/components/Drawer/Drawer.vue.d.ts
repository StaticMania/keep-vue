import { type DrawerDirection, type DrawerRootProps } from "vaul-vue";
import type { ClassProps } from "../../utils/interface";
export interface DrawerProps {
    position?: DrawerDirection;
}
declare var __VLS_6: {};
declare var __VLS_inheritedAttrs: {};
declare const __VLS_templateResult: {
    slots: {
        default?(_: typeof __VLS_6): any;
    };
    refs: {};
    attrs: Partial<typeof __VLS_inheritedAttrs>;
};
type __VLS_Slots = typeof __VLS_templateResult['slots'];
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<DrawerRootProps & DrawerProps & ClassProps>, {
    shouldScaleBackground: boolean;
    position: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    drag: (percentageDragged: number) => void;
    release: (open: boolean) => void;
    close: () => void;
    "update:open": (open: boolean) => void;
    "update:activeSnapPoint": (val: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    activeSnapPoint?: number | string | null;
    closeThreshold?: number;
    shouldScaleBackground?: boolean;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    modal?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    nested?: boolean;
    direction?: DrawerDirection;
} & import("node_modules/vaul-vue/dist/controls").WithFadeFromProps & DrawerProps & ClassProps>, {
    shouldScaleBackground: boolean;
    position: string;
}>> | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<{
    activeSnapPoint?: number | string | null;
    closeThreshold?: number;
    shouldScaleBackground?: boolean;
    scrollLockTimeout?: number;
    fixed?: boolean;
    dismissible?: boolean;
    modal?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    nested?: boolean;
    direction?: DrawerDirection;
} & import("node_modules/vaul-vue/dist/controls").WithoutFadeFromProps & DrawerProps & ClassProps>, {
    shouldScaleBackground: boolean;
    position: string;
}>>> & {
    onDrag?: ((percentageDragged: number) => any) | undefined;
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
    onRelease?: ((open: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
}, {
    position: DrawerDirection;
    shouldScaleBackground: boolean;
} | {
    position: DrawerDirection;
    shouldScaleBackground: boolean;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_Slots>;
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
