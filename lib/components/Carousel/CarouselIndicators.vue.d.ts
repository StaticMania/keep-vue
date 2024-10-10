import { type HtmlHTMLAttributes } from "vue";
import type { ClassProps } from "./interface";
export interface CarouselIndicatorsProps extends /* @vue-ignore */ HtmlHTMLAttributes {
    dotButtonStyle?: string;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<CarouselIndicatorsProps & ClassProps>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<CarouselIndicatorsProps & ClassProps>>>, {}, {}>;
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
