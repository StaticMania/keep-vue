<script lang="ts" setup>
import {
  CalendarNext,
  type CalendarNextProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<CalendarNextProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarNext
    :class="
      cn(
        'inline-flex h-7 w-7 items-center justify-center whitespace-nowrap rounded-lg border border-metal-200 bg-transparent p-0 text-body-4 font-medium opacity-50 ring-offset-1 transition-colors hover:bg-metal-25 hover:text-metal-900 hover:opacity-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-metal-50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 dark:border-metal-700 dark:fill-white dark:hover:border-metal-800 dark:hover:bg-metal-800',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute right-1.5 h-4 w-4"
        viewBox="0 0 256 256">
        <path
          d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>
    </slot>
  </CalendarNext>
</template>
