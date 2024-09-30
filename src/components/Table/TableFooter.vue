<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableFooterProps extends /*@vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableFooterProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <tfoot
    v-bind="restProps"
    :class="
      cn(
        'border-t bg-metal-900 font-medium [&>tr]:last:border-b-0',
        props.class,
      )
    ">
    <slot></slot>
  </tfoot>
</template>
