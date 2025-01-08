<script lang="ts" setup>
import { computed, type TableHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TableBodyProps extends /*@vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableBodyProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <tbody
    v-bind="restProps"
    :class="cn('[&_tr:last-child]:border-0', props.class)">
    <slot />
  </tbody>
</template>
