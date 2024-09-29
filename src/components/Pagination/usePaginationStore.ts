import { ref, type ComputedRef } from "vue";

import { createInjectionState } from "@vueuse/core";

// custom injectionKey
const PaginationStoreKey = "pagination-store";

const [useProvidePagination, usePaginationStore] = createInjectionState(
  (initialValue: ComputedRef<string>) => {
    //state
    const shape = ref(initialValue);
    return { shape };
  },

  {
    injectionKey: PaginationStoreKey,
  },
);

function usePagination() {
  const paginationStore = usePaginationStore();

  if (paginationStore == null) {
    throw new Error(
      "Please call `useProvidePagination` on the <Pagination/> component",
    );
  }
  return paginationStore;
}

export { usePagination, useProvidePagination };
