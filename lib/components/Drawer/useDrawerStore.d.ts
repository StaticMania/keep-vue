import { type ComputedRef } from "vue";
declare const useProvideDrawer: (position: ComputedRef<string>) => {
    position: ComputedRef<string>;
};
declare function useDrawer(): {
    position: ComputedRef<string>;
};
export { useDrawer, useProvideDrawer };
