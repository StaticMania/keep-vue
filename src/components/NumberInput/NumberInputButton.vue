<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface NumberInputButtonProps
  extends /* @vue-ignore*/ ButtonHTMLAttributes {}

const props = defineProps<NumberInputButtonProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <button
    v-bind="restProps"
    :class="
      cn(
        'max-w-max flex-1 text-metal-900 disabled:text-metal-300 dark:text-metal-200 dark:disabled:text-metal-400',
        props.class,
      )
    ">
    <slot></slot>
  </button>
</template>
