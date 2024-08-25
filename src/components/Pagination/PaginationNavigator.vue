<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { paginationTheme } from "./paginationTheme";

interface PaginationNavigatorProps {
  shape?: "rounded" | "circle";
  asChild?: boolean;
  class?: HTMLAttributes["class"];
}
const props = withDefaults(defineProps<PaginationNavigatorProps>(), {
  shape: "rounded",
  class: "",
});
const { navigator } = paginationTheme;

const paginationNavigatorRef = ref<HTMLElement>();

const setRef = (value: HTMLElement) => (paginationNavigatorRef.value = value);
</script>
<template>
  <slot
    v-if="asChild"
    v-bind="{
      ...$attrs,
      ref: setRef,
    }" />

  <button
    v-else
    v-bind="$attrs"
    ref="paginationNavigatorRef"
    :class="cn(navigator.base, navigator.shape[shape], props.class)">
    <slot></slot>
  </button>
</template>
