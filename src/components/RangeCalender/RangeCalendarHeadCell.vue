<script lang="ts" setup>
import {
  RangeCalendarHeadCell,
  type RangeCalendarHeadCellProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarHeadCellProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarHeadCell
    :class="
      cn(
        'w-10 rounded-xl text-body-4 font-normal text-metal-400 dark:text-white',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeadCell>
</template>
