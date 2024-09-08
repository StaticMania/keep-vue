<script lang="ts" setup>
import {
  TooltipProvider,
  TooltipRoot,
  useForwardPropsEmits,
  type TooltipRootEmits,
  type TooltipRootProps,
} from "radix-vue";

const props = defineProps<TooltipRootProps>();
const emits = defineEmits<TooltipRootEmits>();

const forwardPropsAndEmit = useForwardPropsEmits(props, emits);
</script>

<template>
  <TooltipProvider :skip-delay-duration="0">
    <TooltipRoot v-bind="forwardPropsAndEmit">
      <slot></slot>
    </TooltipRoot>
  </TooltipProvider>
</template>
