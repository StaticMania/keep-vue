<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";

export interface TableCellProps extends /* @vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableCellProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <td
    v-bind="restProps"
    :class="
      cn(
        'px-6 py-3.5 align-middle text-body-4 font-medium capitalize text-metal-800 dark:text-white [&:has([role=checkbox])]:pr-0',
        props.class,
      )
    ">
    <slot></slot>
  </td>
</template>
