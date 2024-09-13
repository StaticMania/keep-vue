<script lang="ts" setup>
import {
  RangeCalendarGridRow,
  type RangeCalendarGridRowProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<RangeCalendarGridRowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarGridRow
    :class="cn('flex', props.class)"
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarGridRow>
</template>
