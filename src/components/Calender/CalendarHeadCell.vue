<script lang="ts" setup>
import {
  CalendarHeadCell,
  type CalendarHeadCellProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<CalendarHeadCellProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarHeadCell
    :class="
      cn(
        'w-10 rounded-xl text-body-4 font-normal text-metal-400 dark:text-white',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot />
  </CalendarHeadCell>
</template>
