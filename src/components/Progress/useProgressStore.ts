import { createInjectionState } from "@vueuse/core";
import type { ComputedRef } from "vue";
import { ref, watch } from "vue";

const [useProvideProgressStore, useInjectProgress] = createInjectionState(
  (initialProgress: ComputedRef<number>) => {
    //state
    const progress = ref(initialProgress);
    const progressBar = ref(0);

    watch(
      progress,
      (newValue) => {
        const timer = setTimeout(() => {
          progressBar.value = newValue;
        }, 200);

        //side Effect return
        return () => clearTimeout(timer);
      },
      { immediate: true },
    );

    return { progressBar };
  },
);

function useProgressStore() {
  const progressStore = useInjectProgress();
  if (progressStore == null) {
    throw new Error(
      "Please call `useProvideProgressStore` on the <progress/> component",
    );
  }
  return progressStore;
}

export { useProgressStore, useProvideProgressStore };
