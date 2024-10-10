import type { ComputedRef } from "vue";
declare const useProvideProgressStore: (initialProgress: ComputedRef<number>) => {
    progressBar: import("vue").Ref<number>;
};
declare function useProgressStore(): {
    progressBar: import("vue").Ref<number>;
};
export { useProgressStore, useProvideProgressStore };
