import { createInjectionState } from "@vueuse/core";
import { type ComputedRef } from "vue";

const AlertStoreKey = "alert-store";
const [useProvideAlert, useInjectAlert] = createInjectionState(
  (color: ComputedRef<string>) => {
    return { color };
  },

  {
    injectionKey: AlertStoreKey,
  },
);

function useAlert() {
  const alertState = useInjectAlert();

  if (!alertState) {
    throw new Error("useAlert must be used within a <Alert /> Component");
  }
  return alertState;
}

export { useAlert, useProvideAlert };
