<script lang="ts" setup>
import {
  computed,
  defineProps,
  withDefaults,
  type LiHTMLAttributes,
} from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
interface BreadcrumbItemProps extends /*@vue-ignore*/ LiHTMLAttributes {
  asChild?: boolean;
}
const props = withDefaults(defineProps<BreadcrumbItemProps & ClassProps>(), {
  class: "",
});

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>
<template>
  <!-- as child props  -->
  <slot v-if="props.asChild" v-bind="restProps"></slot>

  <!-- default li component  -->
  <li
    v-else
    v-bind="restProps"
    :class="
      cn(
        'flex cursor-pointer items-center gap-1.5 text-body-4 font-medium text-metal-900 transition-colors duration-300 hover:text-primary-500 dark:text-white dark:hover:text-primary-500',
        props.class,
      )
    ">
    <slot></slot>
  </li>
</template>
