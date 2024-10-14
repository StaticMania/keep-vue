<script lang="ts" setup>
import {
  TooltipProvider,
  TooltipRoot,
  useForwardPropsEmits,
  type TooltipRootEmits,
  type TooltipRootProps,
} from "radix-vue";
import { computed } from "vue";
import type { toolTipTheme } from "./tooltipTheme";
import { useProvideTooltip } from "./useTooltipStore";

export interface TooltipColor {
  color?: keyof typeof toolTipTheme.color;
}
const props = withDefaults(defineProps<TooltipRootProps & TooltipColor>(), {
  color: "primary",
});
const emits = defineEmits<TooltipRootEmits>();

const restProps = computed(() => {
  const { color, ...rest } = props;
  return rest;
});
const forwardPropsAndEmit = useForwardPropsEmits(restProps, emits);

const changedColor = computed(() => {
  return props.color;
});
useProvideTooltip(changedColor);
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <TooltipRoot v-bind="forwardPropsAndEmit">
      <slot></slot>
    </TooltipRoot>
  </TooltipProvider>
</template>
