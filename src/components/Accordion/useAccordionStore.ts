// custom injectionKey
const AccordionStoreKey = "accordion-store";

const [useProvideAccordionStore, useAccordionStore] = createInjectionState(
  (flush: boolean) => {
    return { flush };
  },
  {
    injectionKey: AccordionStoreKey,
  },
);
export { useProvideAccordionStore };

export function useAccordionStoreOrThrow() {
  const accordionStore = useAccordionStore();
  if (accordionStore == null)
    throw new Error(
      "Please call `useProvideAccordionStore` on the appropriate parent component",
    );
  return accordionStore;
}
