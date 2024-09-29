<script lang="ts" setup>
import {
  CalendarCellTrigger,
  type CalendarCellTriggerProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<CalendarCellTriggerProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarCellTrigger
    :class="
      cn(
        'inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-lg p-0 text-body-4 font-medium text-metal-900 ring-offset-metal-50 transition-colors hover:bg-metal-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-metal-50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 dark:text-white dark:hover:bg-metal-800 dark:aria-selected:text-metal-900',
        //initial select
        '[&[data-today]:not([data-selected])]:bg-metal-100',
        // Selected
        'data-[selected]:bg-primary-500 data-[selected]:text-white data-[selected]:opacity-100 data-[selected]:focus:bg-primary-500',
        // Disabled
        'data-[disabled]:text-metal-400 data-[disabled]:opacity-50',
        // Unavailable
        'data-[unavailable]:text-red-400 data-[unavailable]:line-through',
        // Outside months
        'data-[outside-view]:text-metal-400 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-metal-400 [&[data-outside-view][data-selected]]:opacity-30',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot />
  </CalendarCellTrigger>
</template>
