<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface NumberInputProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<NumberInputProps & ClassProps>();

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
        'flex h-12 max-w-sm items-center justify-between rounded-lg border border-metal-100 bg-white px-5',
        //dark
        'dark:border-metal-800 dark:bg-metal-900',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
