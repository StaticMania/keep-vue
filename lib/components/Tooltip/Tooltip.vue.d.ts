import { type TooltipRootProps } from "radix-vue";
import type { toolTipTheme } from "./tooltipTheme";
export interface TooltipColor {
    color?: keyof typeof toolTipTheme.color;
}
declare var __VLS_12: {};
declare var __VLS_inheritedAttrs: {};
declare const __VLS_templateResult: {
    slots: {
        default?(_: typeof __VLS_12): any;
    };
    refs: {};
    attrs: Partial<typeof __VLS_inheritedAttrs>;
};
type __VLS_Slots = typeof __VLS_templateResult['slots'];
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<TooltipRootProps & TooltipColor>, {
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:open": (value: boolean) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<TooltipRootProps & TooltipColor>, {
    color: string;
}>>> & {
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}, {
    color: keyof typeof toolTipTheme.color;
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
