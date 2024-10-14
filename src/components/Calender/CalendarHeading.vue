<script lang="ts" setup>
import {
  CalendarHeading,
  type CalendarHeadingProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<CalendarHeadingProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <CalendarHeading
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
  </CalendarHeading>
</template>
