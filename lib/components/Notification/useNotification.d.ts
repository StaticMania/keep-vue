import { type ComputedRef } from "vue";
declare const useProvideNotification: (position: ComputedRef<any>) => {
    position: ComputedRef<any>;
};
declare function useNotification(): {
    position: ComputedRef<any>;
};
export { useNotification, useProvideNotification };
