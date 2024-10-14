<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { paginationTheme } from "./paginationTheme";
import { useProvidePagination } from "./usePaginationStore";
export interface PaginationProps extends /* @vue-ignore */ HTMLAttributes {
  shape?: "rounded" | "circle";
}

const { root } = paginationTheme;
const props = withDefaults(defineProps<PaginationProps & ClassProps>(), {
  shape: "rounded",
  class: "",
});

const restProps = computed(() => {
  const { class: _, shape, ...rest } = props;
  return rest;
});

const updatedValue = computed(() => props.shape);
useProvidePagination(updatedValue);
</script>

<template>
  <div
    v-bind="restProps"
    aria-label="pagination"
    :class="cn(root.base, props.class)">
    <slot></slot>
  </div>
</template>
