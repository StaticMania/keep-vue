import { type HTMLAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface PaginationProps extends /* @vue-ignore */ HTMLAttributes {
    shape?: "rounded" | "circle";
}
declare var __VLS_0: {};
declare var __VLS_inheritedAttrs: {};
declare const __VLS_templateResult: {
    slots: {
        default?(_: typeof __VLS_0): any;
    };
    refs: {};
    attrs: Partial<typeof __VLS_inheritedAttrs>;
};
type __VLS_Slots = typeof __VLS_templateResult['slots'];
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<PaginationProps & ClassProps>, {
    shape: string;
    class: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PaginationProps & ClassProps>, {
    shape: string;
    class: string;
}>>>, {
    class: any;
    shape: "rounded" | "circle";
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
