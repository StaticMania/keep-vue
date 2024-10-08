<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadCrumbPageProps extends /*@vue-ignore*/ HTMLAttributes {
  outline?: boolean;
}
const props = withDefaults(defineProps<BreadCrumbPageProps & ClassProps>(), {
  outline: false,
});
const restProps = computed(() => {
  const { class: _, outline, role, ...rest } = props;
  return rest;
});
</script>

<template>
  <span
    role="link"
    v-bind="restProps"
    :class="
      cn(
        'flex items-center justify-center gap-1',
        props.outline
          ? 'rounded-md border border-primary-500 px-1.5 py-1 text-primary-500 dark:border-primary-400 dark:text-primary-400'
          : 'rounded-md bg-primary-50 px-1.5 py-1 text-primary-500 dark:bg-primary-900 dark:text-primary-400',
        props.class,
      )
    ">
    <slot />
  </span>
</template>

<!-- 'rounded-md bg-primary-50 px-1.5 py-1 text-primary-500 dark:bg-primary-900 dark:text-primary-400', -->

<!-- 'rounded-md border border-primary-500 px-1.5 py-1 text-primary-500 dark:border-primary-400 dark:text-primary-400', -->
