<script lang="ts" setup>
import {
  RangeCalendarGrid,
  type RangeCalendarGridProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarGridProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarGrid :class="cn('', props.class)" v-bind="forwardedProps">
    <slot />
  </RangeCalendarGrid>
</template>
