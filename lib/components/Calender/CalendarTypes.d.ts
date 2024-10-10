import type { HTMLAttributes } from "vue";
type StyledElement<T = HTMLAttributes["class"]> = {
    datePickerHeader?: T;
    prevBtn?: T;
    datePickerHeading?: T;
    nextBtn?: T;
    datePickerBody?: T;
    MonthContainer?: T;
    weekContainer?: T;
    weekHeader?: T;
    weekLabel?: T;
    dateContainer?: T;
    dateRow?: T;
    dateBody?: T;
    dateCell?: T;
    dateTrigger?: T;
};
export type classesType = Partial<StyledElement<string>>;
export {};
