<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { paginationTheme } from "./paginationTheme";
import { usePaginationStoreOrThrow } from "./usePaginationStore";

interface PaginationItemProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
  active?: boolean;
}

type ShapeType = "rounded" | "circle";

const props = withDefaults(defineProps<PaginationItemProps>(), {
  class: "",
  active: false,
});

const paginationItemRef = ref<HTMLElement>();
const setRef = (value: HTMLElement) => (paginationItemRef.value = value);

const { shape } = usePaginationStoreOrThrow();
const { item } = paginationTheme;
</script>

<template>
  <!-- as child provided by user  -->
  <slot
    v-if="asChild"
    v-bind="{
      ...$attrs,
      ref: setRef,
    }" />

  <li v-else>
    <button
      v-bind="$attrs"
      ref="paginationItemRef"
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
