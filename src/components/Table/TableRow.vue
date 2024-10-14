<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableRowProps extends /*@vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableRowProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <tr
    v-bind="restProps"
    :class="
      cn(
        'border-b border-b-metal-50 transition-colors hover:bg-metal-25 data-[state=selected]:bg-metal-50 dark:border-b-metal-800 dark:hover:bg-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </tr>
</template>
