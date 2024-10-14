<script lang="ts" setup>
import type { TableHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";

export interface TableHeaderProps extends /*@vue-ignore*/ TableHTMLAttributes {}

const props = defineProps<TableHeaderProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <thead v-bind="restProps" :class="cn('[&_tr]:border-b', props.class)">
    <slot></slot>
  </thead>
</template>
