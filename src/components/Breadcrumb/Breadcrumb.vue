<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

import { computed, defineProps } from "vue";
interface BreadcrumbProps extends /*@vue-ignore*/ HTMLAttributes {
  borderType?: "border-xy" | "border-y";
}
const props = defineProps<BreadcrumbProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, borderType, ...rest } = props;
  return rest;
});
</script>
<template>
  <ul
    v-bind="restProps"
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
