<script setup lang="ts">
import {
  TooltipContent,
  type TooltipContentEmits,
  type TooltipContentProps,
  TooltipPortal,
  useForwardPropsEmits,
} from "radix-vue";
import {
  computed,
  defineEmits,
  defineOptions,
  defineProps,
  withDefaults,
} from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { toolTipTheme } from "./tooltipTheme";
import { useTooltip } from "./useTooltipStore";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TooltipContentProps & ClassProps>(), {
  sideOffset: 4,
  class: "",
});

const emits = defineEmits<TooltipContentEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const { color } = useTooltip();
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="{ ...forwarded, ...$attrs }"
      :class="cn(toolTipTheme.base, toolTipTheme.color[color], props.class)">
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
