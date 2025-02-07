<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";

export interface TableCellProps extends /* @vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableCellProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
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
    <slot />
  </td>
</template>
