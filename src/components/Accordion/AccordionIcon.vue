<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { accordionTheme } from "./accordionTheme";

interface AccordionIconProps extends /* @vue-ignore */ HTMLAttributes {
  asChild?: boolean;
  animation?: boolean;
}

const props = defineProps<AccordionIconProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>

<template>
  <slot v-if="asChild" />
  <span
    v-else
    v-bind="restProps"
    :class="cn(accordionTheme.icon.base, props.class)">
    <slot>
      <svg
        class="shrink-0 fill-metal-600 dark:fill-metal-300"
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          class="origin-center transform transition duration-150 ease-out" />
        <rect
          y="7"
          width="16"
          height="2"
          rx="1"
          class="origin-center rotate-90 transform transition duration-150 ease-out" />
      </svg>
    </slot>
  </span>
</template>
