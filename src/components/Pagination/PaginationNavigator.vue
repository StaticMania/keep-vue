<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { paginationTheme } from "./paginationTheme";
export interface PaginationNavigatorProps
  extends /*@vue-ignore*/ ButtonHTMLAttributes {
  shape?: "rounded" | "circle";
  asChild?: boolean;
}
const props = withDefaults(
  defineProps<PaginationNavigatorProps & ClassProps>(),
  {
    shape: "rounded",
    class: "",
  },
);

const restProps = computed(() => {
  const { class: _, shape, asChild, ...rest } = props;
  return rest;
});

const { navigator } = paginationTheme;
</script>
<template>
  <slot v-if="asChild" v-bind="restProps" />

  <button
    v-else
    v-bind="restProps"
    :class="cn(navigator.base, navigator.shape[shape], props.class)">
    <slot />
  </button>
</template>
