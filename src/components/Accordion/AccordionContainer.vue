<script setup lang="ts">
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { type HTMLAttributes, computed } from "vue";
import { cn } from "~/src/utils/cn";
import { accordionTheme } from "./accordionTheme";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex">
    <!-- container main -->
    <AccordionTrigger
      v-bind="restProps"
      :class="
        cn(
          accordionTheme.container.base,
          '[&[data-state=open]>svg>rect]:!rotate-180',
          'data-[disabled]:cursor-not-allowed',
          props.class,
        )
      ">
      <!-- title  -->
      <slot />

      <!-- acc icon  -->
      <slot name="icon">
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
    </AccordionTrigger>
  </AccordionHeader>
</template>
