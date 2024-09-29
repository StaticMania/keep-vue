<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { paginationTheme } from "./paginationTheme";

export interface PaginationGotoProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<PaginationGotoProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
const { goto } = paginationTheme;
</script>

<template>
  <div v-bind="restProps" :class="cn(goto.base, props.class)">
    <slot></slot>
  </div>
</template>
