<script lang="ts" setup>
import { ref, type HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface BreadcrumbItemProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}
const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  asChild: false,
  class: "",
});

const breadcrumbItemRef = ref<HTMLLIElement>();
const setAsChildRef = (value: HTMLLIElement) =>
  (breadcrumbItemRef.value = value);
</script>
<template>
  <li
    v-bind="$attrs"
    ref="breadcrumbItemRef"
    :class="
      cn(
        'flex cursor-pointer items-center gap-1.5 text-body-4 font-medium text-metal-900 transition-colors duration-300 hover:text-primary-500 dark:text-white dark:hover:text-primary-500',
        props.class,
      )
    ">
    <slot></slot>
  </li>
</template>
