<script lang="ts" setup>
import type { OlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbListProps extends /*@vue-ignore*/ OlHTMLAttributes {
  borderType?: "border-xy" | "border-y";
}

const props = defineProps<BreadcrumbListProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <ol
    v-bind="restProps"
    :class="
      cn(
        'flex max-w-max items-center gap-3 border-metal-100 px-3.5 py-2.5 text-body-4 font-medium dark:border-metal-700',
        props.borderType === 'border-y' && 'border-y',
        props.borderType === 'border-xy' && 'rounded-xl border',
        props.class,
      )
    ">
    <slot />
  </ol>
</template>
