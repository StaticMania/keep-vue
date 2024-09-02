<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface TableHeadProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableHeadProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <th
    ref="HTMLTableCellElement"
    v-bind="restProps"
    :class="
      cn(
        'h-14 bg-metal-50 px-6 text-left align-middle text-body-4 font-medium text-metal-900 dark:bg-metal-800 dark:text-white [&:has([role=checkbox])]:pr-0',
        props.class,
      )
    ">
    <slot></slot>
  </th>
</template>
