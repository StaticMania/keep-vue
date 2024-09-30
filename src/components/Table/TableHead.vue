<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableHeadProps extends /*@vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableHeadProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <th
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
