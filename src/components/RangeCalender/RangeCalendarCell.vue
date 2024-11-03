<script lang="ts" setup>
import {
  RangeCalendarCell,
  useForwardProps,
  type RangeCalendarCellProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useRangeCalender } from "./RangeCalenderStore";

const props = defineProps<RangeCalendarCellProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardProps = useForwardProps(restProps);

const { dayShape } = useRangeCalender();
</script>

<template>
  <RangeCalendarCell
    v-bind="forwardProps"
    :class="
      cn(
        'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-metal-50 first:[&:has([data-selected])]:rounded-l-none last:[&:has([data-selected])]:rounded-r-none',

        dayShape === 'circle'
          ? '[&:has([data-selected][data-selection-end])]:rounded-r-full [&:has([data-selected][data-selection-start])]:rounded-l-full'
          : '[&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md',

        // dark
        'dark:[&:has([data-selected])]:bg-metal-800',
        props.class,
      )
    ">
    <slot />
  </RangeCalendarCell>
</template>
