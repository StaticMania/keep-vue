<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface CardProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CardProps & ClassProps>();

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
        'max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small dark:border-metal-900 dark:bg-metal-900',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
