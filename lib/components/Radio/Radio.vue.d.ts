import type { InputHTMLAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface RadioProps extends /* @vue-ignore */ InputHTMLAttributes {
    variant?: "circle" | "rounded" | "square";
    id?: string;
    name?: string;
    value: string;
    disabled?: boolean;
}
declare let __VLS_typeProps: RadioProps & ClassProps;
type __VLS_PublicProps = {
    "modelValue"?: string;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    class: string;
    variant: string;
    id: string;
    name: string;
    disabled: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<__VLS_PublicProps>, {
    class: string;
    variant: string;
    id: string;
    name: string;
    disabled: boolean;
}>>> & {
    "onUpdate:modelValue"?: ((modelValue: string) => any) | undefined;
}, {
    disabled: boolean;
    class: any;
    id: string;
    name: string;
    variant: "circle" | "rounded" | "square";
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
