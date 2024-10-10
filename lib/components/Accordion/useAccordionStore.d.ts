import { type ComputedRef } from "vue";
declare const useProvideAccordionStore: (flush: ComputedRef<boolean>) => {
    flush: ComputedRef<boolean>;
};
export { useProvideAccordionStore };
export declare function useAccordionStoreOrThrow(): {
    flush: ComputedRef<boolean>;
};
