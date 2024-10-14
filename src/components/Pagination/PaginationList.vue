<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { paginationTheme } from "./paginationTheme";

export interface PaginationListProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<PaginationListProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { list } = paginationTheme;
</script>
<template>
  <ul v-bind="restProps" :class="cn(list.base, props.class)">
    <slot></slot>
  </ul>
</template>
