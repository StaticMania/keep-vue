<script lang="ts" setup>
import {
  CalendarPrev,
  type CalendarPrevProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<CalendarPrevProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarPrev
    :class="
      cn('h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100', props.class)
    "
    v-bind="forwardedProps">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        viewBox="0 0 256 256">
        <path
          d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
      </svg>
    </slot>
  </CalendarPrev>
</template>
