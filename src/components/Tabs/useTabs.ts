import { createInjectionState } from "@vueuse/core";
import { ref } from "vue";

interface TabsContextParameterType {
  defaultActive: string;
  variant: "default" | "fill" | "underline";
}

type TabPropsContext = {
  activeItem?: Ref<string>;
  defaultActive?: string;
  handleActive: (item: string) => void;
  variant?: "default" | "fill" | "underline";
};

// custom injectionKey
const TabsStoreKey = "tabs-store";

const [useProvideTabsStore, useInjectTabStore] = createInjectionState(
  (
    variant: TabsContextParameterType["variant"],
    defaultActive: TabsContextParameterType["defaultActive"],
  ): TabPropsContext => {
    const activeItem = ref<string>(defaultActive);

    const handleActive = (item: string) => {
      activeItem.value = item;
    };

    return {
      variant,
      defaultActive,
      activeItem,
      handleActive,
    };
  },
  {
    injectionKey: TabsStoreKey,
  },
);

function useTabs() {
  const tabsState = useInjectTabStore();
  if (!tabsState)
    throw new Error("useTabs must be used within a <Tabs /> Component");
  return tabsState;
}

export { useProvideTabsStore, useTabs };
