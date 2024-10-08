<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbEllipsisProps
  extends /* @vue-ignore*/ HTMLAttributes {}

const props = defineProps<BreadcrumbEllipsisProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, role, ...rest } = props;
  return rest;
});
</script>

<template>
  <span
    role="presentation"
    v-bind="restProps"
    aria-hidden="true"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-5 fill-metal-600 dark:fill-metal-400"
        viewBox="0 0 256 256">
        <path
          d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path>
      </svg>
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
