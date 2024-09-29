<script lang="ts" setup>
import {
  RangeCalendarGridRow,
  type RangeCalendarGridRowProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

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
