<script lang="ts" setup>
import {
  RangeCalendarCellTrigger,
  type RangeCalendarCellTriggerProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarCellTriggerProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarCellTrigger
    :class="
      cn(
        'inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-lg p-0 text-body-4 font-medium text-metal-900 ring-offset-metal-50 transition-colors hover:bg-metal-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-metal-50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 aria-selected:opacity-100 dark:text-white dark:hover:bg-metal-800 dark:aria-selected:text-metal-900',
        // Selection Start
        'data- data-[selection-start]:bg-primary-500 data-[selection-start]:text-white data-[selection-start]:focus:bg-primary-500 data-[selection-start]:focus:text-white',
        //selection start dark
        'dark:data-[selection-start]:text-white',

        // current data
        'data-[selected]:opacity-100',
        '[&[data-today]:not([data-selected])]:bg-metal-100 [&[data-today]:not([data-selected])]:text-white',
        //current date dark
        'data-[selected]:opacity-100',
        '[&[data-today]:not([data-selected])]:bg-metal-800',

        //data selected dark
        'dark:data-[selected]:text-white',

        // Selection End
        'data-[selection-end]:bg-primary-500 data-[selection-end]:text-white data-[selection-end]:focus:bg-primary-500 data-[selection-end]:focus:text-white',
        //dark
        'dark:data-[selection-end]:text-white',

        // Outside months
        'data-[outside-view]:text-metal-400 data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-metal-400 [&[data-outside-view][data-selected]]:opacity-30',
        // Disabled
        'data-[disabled]:text-metal-400 data-[disabled]:opacity-50',

        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarCellTrigger>
</template>
