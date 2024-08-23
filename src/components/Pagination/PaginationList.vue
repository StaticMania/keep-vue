<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { paginationTheme } from "./paginationTheme";

interface PaginationListProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<PaginationListProps>();

const { list } = paginationTheme;

const paginationListRef = ref<HTMLUListElement>();
</script>
<template>
  <ul
    v-bind="$attrs"
    ref="paginationListRef"
    :class="cn(list.base, props.class)">
    <slot></slot>
  </ul>
</template>
