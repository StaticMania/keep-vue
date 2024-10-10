import { type RangeCalendarRootProps } from "radix-vue";
import type { ClassProps } from "../../utils/interface";
import type { classesType } from "../Calender/CalendarTypes";
export interface DatePickerClass {
    classes?: classesType;
}
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<RangeCalendarRootProps & ClassProps & DatePickerClass>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: import("radix-vue").DateRange) => void;
    "update:placeholder": (date: import("@internationalized/date").DateValue) => void;
    "update:startValue": (date: import("@internationalized/date").DateValue | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<RangeCalendarRootProps & ClassProps & DatePickerClass>>> & {
    "onUpdate:modelValue"?: ((date: import("radix-vue").DateRange) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import("@internationalized/date").DateValue) => any) | undefined;
    "onUpdate:startValue"?: ((date: import("@internationalized/date").DateValue | undefined) => any) | undefined;
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
