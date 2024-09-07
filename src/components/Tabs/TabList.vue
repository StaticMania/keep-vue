<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";
import { useTabs } from "./useTabs";

interface TabListProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<TabListProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const { variant } = useTabs();
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="
      cn(
        'mb-2 flex items-center',
        variant === 'underline' &&
          'border-y border-y-metal-100 dark:border-y-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
