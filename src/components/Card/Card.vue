<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface CardProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<CardProps>();

const cardRef = ref<HTMLDivElement>();
</script>
<template>
  <div
    ref="cardRef"
    v-bind="$attrs"
    :class="
      cn(
        'max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small dark:border-metal-900 dark:bg-metal-900',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
