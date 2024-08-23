// custom injectionKey
const PaginationStoreKey = "pagination-store";

const [useProvidePaginationStore, usePaginationStore] = createInjectionState(
  (initialValue: ComputedRef<string> | Ref<string>) => {
    //state
    const shape = ref(initialValue);
    return { shape };
  },

  {
    injectionKey: PaginationStoreKey,
  },
);

export { usePaginationStore, useProvidePaginationStore };

export function usePaginationStoreOrThrow() {
  const paginationStore = usePaginationStore();

  if (paginationStore == null) {
    throw new Error(
      "Please call `useProvideCounterStore` on the appropriate parent component",
    );
  }
  return paginationStore;
}
