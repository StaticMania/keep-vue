import type { TextareaHTMLAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface TextAreaProps extends /* @vue-ignore*/ TextareaHTMLAttributes {
    modelValue?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<ClassProps & TextAreaProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: string) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<ClassProps & TextAreaProps>>> & {
    "onUpdate:modelValue"?: ((payload: string) => any) | undefined;
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
