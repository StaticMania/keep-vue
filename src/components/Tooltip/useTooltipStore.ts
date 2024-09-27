import type { toolTipTheme } from "./tooltipTheme";

const TooltipStoreKey = "tooltip-store";

const [useProvideTooltip, useInjectTooltip] = createInjectionState(
  (color: ComputedRef<keyof typeof toolTipTheme.color>) => {
    return { color };
  },

  { injectionKey: TooltipStoreKey },
);

function useTooltip() {
  const drawerState = useInjectTooltip();
  if (!drawerState)
    throw new Error("useTooltip must be used within a <Tooltip /> Component");
  return drawerState;
}

export { useProvideTooltip, useTooltip };
