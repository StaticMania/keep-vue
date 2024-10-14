<script lang="ts" setup>
import {
  CalendarCell,
  useForwardProps,
  type CalendarCellProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<CalendarCellProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardProps = useForwardProps(restProps);
</script>

<template>
  <CalendarCell
    v-bind="forwardProps"
    :class="
      cn(
        'relative p-0 text-center text-body-4 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:rounded-xl [&:has([aria-selected])]:bg-metal-500 first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl [&:has([aria-selected].day-outside)]:bg-metal-50 [&:has([aria-selected].day-outside)]:text-metal-400 dark:[&:has([aria-selected].day-outside)]:bg-metal-700 [&:has([aria-selected].day-range-end)]:rounded-r-xl',
        props.class,
      )
    ">
    <slot></slot>
  </CalendarCell>
</template>
