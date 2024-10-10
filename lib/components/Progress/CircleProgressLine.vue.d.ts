import type { SVGAttributes } from "vue";
import type { ClassProps } from "../../utils/interface";
export interface CircleLineProps extends /* @vue-ignore*/ SVGAttributes {
    strokeWidth?: number;
    strokeColor?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<CircleLineProps & ClassProps>, {
    strokeWidth: number;
    strokeColor: string;
    class: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<CircleLineProps & ClassProps>, {
    strokeWidth: number;
    strokeColor: string;
    class: string;
}>>>, {
    class: any;
    strokeWidth: number;
    strokeColor: string;
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
