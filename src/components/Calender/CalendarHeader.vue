<script lang="ts" setup>
import {
  CalendarHeader,
  type CalendarHeaderProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<CalendarHeaderProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarHeader
    :class="cn('relative flex items-center justify-between pt-1', props.class)"
    v-bind="forwardedProps">
    <slot />
  </CalendarHeader>
</template>
