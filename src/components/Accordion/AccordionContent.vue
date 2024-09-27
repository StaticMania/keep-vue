<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { accordionTheme } from "./accordionTheme";
const props = defineProps<AccordionContentProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <AccordionContent
    v-bind="restProps"
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
    <div :class="cn(accordionTheme.content.base, props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
