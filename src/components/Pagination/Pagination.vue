<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { paginationTheme } from "./paginationTheme";
import { useProvidePaginationStore } from "./usePaginationStore";

export interface PaginationProps {
  class?: HTMLAttributes["class"];
  shape?: "rounded" | "circle";
}

const paginationRef = ref<HTMLDivElement>();
const { root } = paginationTheme;
const props = withDefaults(defineProps<PaginationProps>(), {
  shape: "rounded",
  class: "",
});

const updatedValue = computed(() => props.shape);
useProvidePaginationStore(updatedValue);
</script>
<template>
  <div
    ref=" paginationRef"
    v-bind="$attrs"
    aria-label="pagination"
    :class="cn(root.base, props.class)">
    <slot></slot>
  </div>
</template>
