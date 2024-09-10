<script lang="ts" setup>
import { type TooltipArrowProps } from "radix-vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<TooltipArrowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <TooltipArrow v-bind="restProps" :class="cn('fill-primary-500', props.class)">
    <slot></slot>
  </TooltipArrow>
</template>
