<script lang="ts" setup>
import {
  RangeCalendarHeading,
  type RangeCalendarHeadingProps,
  useForwardProps,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<RangeCalendarHeadingProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <RangeCalendarHeading
    v-slot="{ headingValue }"
    :class="
      cn(
        'text-body-3 font-semibold text-metal-900 dark:text-white',
        props.class,
      )
    "
    v-bind="forwardedProps">
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </RangeCalendarHeading>
</template>
