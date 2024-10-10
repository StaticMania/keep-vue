import { type ComputedRef } from "vue";
declare const useProvidePagination: (initialValue: ComputedRef<string>) => {
    shape: import("vue").Ref<string>;
};
declare function usePagination(): {
    shape: import("vue").Ref<string>;
};
export { usePagination, useProvidePagination };
