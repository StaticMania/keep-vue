<script lang="ts" setup>
import {
  PopoverArrow as PopoverIndicator,
  type PopoverArrowProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<PopoverArrowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <PopoverIndicator
    v-bind="restProps"
    :class="cn('fill-white dark:fill-metal-900', props.class)">
    <slot></slot>
  </PopoverIndicator>
</template>
