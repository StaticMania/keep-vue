<script lang="ts" setup>
import type { OlHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TimelineProps extends /*@vue-ignore*/ OlHTMLAttributes {}

const props = defineProps<TimelineProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <ol
    v-bind="restProps"
    :class="
      cn(
        'relative space-y-6 border-l-2 border-metal-100 dark:border-metal-800',
        props.class,
      )
    ">
    <slot />
  </ol>
</template>
