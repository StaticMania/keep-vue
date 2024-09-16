<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface CardProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CardProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="
      cn(
        'max-w-xs overflow-hidden rounded-xl border border-metal-100 bg-white shadow-small dark:border-metal-900 dark:bg-metal-900',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
