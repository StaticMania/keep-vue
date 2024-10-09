<script lang="ts" setup>
import {
  RangeCalendarCell,
  useForwardProps,
  type RangeCalendarCellProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarCellProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarCell
    v-bind="forwardProps"
    :class="
      cn(
        'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-metal-50 first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',
        // dark
        'dark:[&:has([data-selected])]:bg-metal-700',
        props.class,
      )
    ">
    <slot></slot>
  </RangeCalendarCell>
</template>
