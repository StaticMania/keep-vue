import { type Ref } from "vue";
type TabPropsContext = {
    activeItem?: Ref<string>;
    defaultActive?: string;
    handleActive: (item: string) => void;
    variant?: "default" | "fill" | "underline";
};
declare const useProvideTabsStore: (variant: "default" | "fill" | "underline", defaultActive: string) => TabPropsContext;
declare function useTabs(): TabPropsContext;
export { useProvideTabsStore, useTabs };
