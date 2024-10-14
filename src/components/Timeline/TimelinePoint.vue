<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TimelinePointProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<TimelinePointProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'absolute -left-[9px] h-4 w-4 rounded-full border border-white bg-metal-200 dark:border-metal-800 dark:bg-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
