<script lang="ts" setup>
import {
  RangeCalendarHeader,
  type RangeCalendarHeaderProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarHeaderProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarHeader
    :class="cn('relative flex items-center justify-between pt-1', props.class)"
    v-bind="forwardedProps">
    <slot />
  </RangeCalendarHeader>
</template>
