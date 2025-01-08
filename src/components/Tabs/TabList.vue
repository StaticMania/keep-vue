<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useTabs } from "./useTabs";

export interface TabListProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<TabListProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const { variant } = useTabs();
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'mb-2 flex items-center',
        variant === 'underline' &&
          'border-y border-y-metal-100 dark:border-y-metal-800',
        variant === 'fill' && 'max-w-max rounded-xl bg-metal-600/5 p-1',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
