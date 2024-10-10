import { type ComputedRef } from "vue";
declare const useProvideAlert: (color: ComputedRef<string>) => {
    color: ComputedRef<string>;
};
declare function useAlert(): {
    color: ComputedRef<string>;
};
export { useAlert, useProvideAlert };
