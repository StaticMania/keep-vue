<script lang="ts" setup>
import type { PopoverArrowProps } from "radix-vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<PopoverArrowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <PopoverArrow v-bind="restProps" :class="cn('fill-white', props.class)">
    <slot></slot>
  </PopoverArrow>
</template>
