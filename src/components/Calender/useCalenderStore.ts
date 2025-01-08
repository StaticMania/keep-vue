import { createInjectionState } from "@vueuse/core";
import { type ComputedRef } from "vue";

const calendarStoreKey = "calendar-store";
const [useProvideCalender, useInjectCalendar] = createInjectionState(
  (dayShape: ComputedRef<"circle" | "rounded">) => {
    return { dayShape };
  },

  { injectionKey: calendarStoreKey },
);

function useCalender() {
  const calendarState = useInjectCalendar();
  if (!calendarState)
    throw new Error("useCalendar must be used within a <Calendar /> Component");
  return calendarState;
}

export { useCalender, useProvideCalender };
