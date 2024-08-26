<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { paginationTheme } from "./paginationTheme";

interface PaginationGotoProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<PaginationGotoProps>();

const paginationGotoRef = ref<HTMLDivElement>();

const { goto } = paginationTheme;
</script>
<template>
  <div
    v-bind="$attrs"
    ref="paginationGotoRef"
    :class="cn(goto.base, props.class)">
    <slot></slot>
  </div>
</template>
