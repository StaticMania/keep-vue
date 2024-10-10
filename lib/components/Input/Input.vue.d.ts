import type { InputHTMLAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
    type: string;
    defaultValue?: string | number;
    placeholder: string;
    modelValue?: string | number;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps & ClassProps>, {
    class: string;
    type: string;
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: string | number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<InputProps & ClassProps>, {
    class: string;
    type: string;
    modelValue: string;
}>>> & {
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}, {
    type: string;
    modelValue: string | number;
    class: any;
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
