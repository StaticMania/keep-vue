import { type DialogContentProps } from "radix-vue";
import type { ClassProps } from "../../utils/interface";
declare var __VLS_17: {};
declare var __VLS_inheritedAttrs: {};
declare const __VLS_templateResult: {
    slots: {
        default?(_: typeof __VLS_17): any;
    };
    refs: {};
    attrs: Partial<typeof __VLS_inheritedAttrs>;
};
type __VLS_Slots = typeof __VLS_templateResult['slots'];
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<DialogContentProps & ClassProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    openAutoFocus: (event: Event) => void;
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => void;
    focusOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
    interactOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
    closeAutoFocus: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<DialogContentProps & ClassProps>>> & {
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
}, {}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_Slots>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
