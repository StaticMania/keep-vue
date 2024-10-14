import { createInjectionState } from "@vueuse/core";
import { type ComputedRef } from "vue";

const rangeCalendarStoreKey = "range-calendar-store";
const [useProvideRangeCalender, useInjectRangeCalendar] = createInjectionState(
  (dayShape: ComputedRef<"circle" | "rounded">) => {
    return { dayShape };
  },

  { injectionKey: rangeCalendarStoreKey },
);

function useRangeCalender() {
  const rangeCalendarState = useInjectRangeCalendar();
  if (!rangeCalendarState)
    throw new Error(
      "useRangeCalender must be used within a <RangeCalendar /> Component",
    );
  return rangeCalendarState;
}

export { useProvideRangeCalender, useRangeCalender };
