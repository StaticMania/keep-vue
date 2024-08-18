<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface BreadcrumbProps {
  class?: HTMLAttributes["class"];
  borderType?: "border-xy" | "border-y";
}

const props = defineProps<BreadcrumbProps>();

const breadcrumbRef = ref<HTMLUListElement>();
</script>
<template>
  <ul
    v-bind="$attrs"
    ref="breadcrumbRef"
    :class="
      cn(
        'flex max-w-max items-center gap-3 border-metal-100 px-3.5 py-2.5 dark:border-metal-700',
        props.borderType === 'border-y' && 'border-y',
        props.borderType === 'border-xy' && 'rounded-xl border',
        props.class,
      )
    ">
    <slot></slot>
  </ul>
</template>
