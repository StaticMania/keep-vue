import { type CalendarRootProps } from "radix-vue";
import type { ClassProps } from "../../utils/interface";
import type { classesType } from "./CalendarTypes";
export interface DatePickerClass {
    classes?: classesType;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<CalendarRootProps & ClassProps & DatePickerClass>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("@internationalized/date").DateValue | undefined) => void;
    "update:placeholder": (date: import("@internationalized/date").DateValue) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<import("node_modules/radix-vue/dist/Calendar/CalendarRoot").MultipleCalendarRootProps & ClassProps & DatePickerClass>> | import("vue").ExtractPropTypes<__VLS_TypePropsToOption<import("node_modules/radix-vue/dist/Calendar/CalendarRoot").SingleCalendarRootProps & ClassProps & DatePickerClass>>> & {
    "onUpdate:modelValue"?: ((date: import("@internationalized/date").DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import("@internationalized/date").DateValue) => any) | undefined;
}, {} | {}, {}>;
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
