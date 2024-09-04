<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { type HTMLAttributes, computed } from "vue";
import { cn } from "~/src/utils/cn";
import { accordionTheme } from "./accordionTheme";

const props = defineProps<
  AccordionContentProps & { class?: HTMLAttributes["class"] }
>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionContent
    v-bind="restProps"
    class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all">
    <div :class="cn(accordionTheme.content.base, props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
