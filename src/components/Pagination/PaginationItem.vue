<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { paginationTheme } from "./paginationTheme";
import { usePagination } from "./usePaginationStore";
export interface PaginationItemProps
  extends /* @vue-ignore*/ ButtonHTMLAttributes {
  asChild?: boolean;
  active?: boolean;
}

export type ShapeType = "rounded" | "circle";

const props = withDefaults(defineProps<PaginationItemProps & ClassProps>(), {
  class: "",
  active: false,
});
const restProps = computed(() => {
  const { class: _, active, asChild, ...rest } = props;
  return rest;
});

const { shape } = usePagination()!;
const { item } = paginationTheme;
</script>

<template>
  <!-- as child provided by user  -->
  <slot v-if="asChild" v-bind="restProps" />

  <li v-else>
    <button
      v-bind="restProps"
      :class="
        cn(
          item.base,
          item.active[active ? 'on' : 'off'],
          item.shape[shape as ShapeType],
          props.class,
        )
      ">
      <slot></slot>
    </button>
  </li>
</template>
