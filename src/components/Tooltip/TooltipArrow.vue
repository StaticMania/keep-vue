<script lang="ts" setup>
import {
  TooltipArrow as TooltipIndicator,
  type TooltipArrowProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { toolTipTheme } from "./tooltipTheme";
import { useTooltip } from "./useTooltipStore";

const props = defineProps<TooltipArrowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { color } = useTooltip();
</script>

<template>
  <TooltipIndicator
    v-bind="restProps"
    :class="cn(toolTipTheme.arrowColor[color], props.class)">
    <slot />
  </TooltipIndicator>
</template>
