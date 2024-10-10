import type { InputHTMLAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface NumberInputBoxProps extends /* @vue-ignore*/ InputHTMLAttributes {
    min?: number;
    max?: number;
}
declare let __VLS_typeProps: NumberInputBoxProps & ClassProps;
type __VLS_PublicProps = {
    modelValue?: number;
} & typeof __VLS_typeProps;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_PublicProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (modelValue: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_PublicProps>>> & {
    "onUpdate:modelValue"?: ((modelValue: number) => any) | undefined;
}, {}, {}>;
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
