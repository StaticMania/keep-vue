<script lang="ts" setup>
import type { AnchorHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface BreadcrumbLinkProps
  extends /*@vue-ignore*/ AnchorHTMLAttributes {
  asChild?: boolean;
}

const props = withDefaults(defineProps<BreadcrumbLinkProps & ClassProps>(), {});

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <slot v-if="asChild" v-bind="$attrs"></slot>

  <a
    v-else
    v-bind="restProps"
    :class="
      cn(
        'flex cursor-pointer items-center justify-center gap-1 text-metal-900 transition-colors duration-300 hover:text-primary-500 dark:text-white dark:hover:text-primary-500',
        props.class,
      )
    ">
    <slot></slot>
  </a>
</template>
