<script lang="ts" setup>
import {
  CalendarGrid,
  type CalendarGridProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<CalendarGridProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarGrid :class="cn('', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarGrid>
</template>
