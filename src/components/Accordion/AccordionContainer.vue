<script setup lang="ts">
import { AccordionTrigger, type AccordionTriggerProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { accordionTheme } from "./accordionTheme";

const props = defineProps<AccordionTriggerProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <AccordionTrigger
    v-bind="restProps"
    :class="
      cn(
        accordionTheme.container.base,
        '[&[data-state=open]>span>svg>rect]:!rotate-180',
        'data-[disabled]:cursor-not-allowed',
        'data-[disabled]:opacity-50',
        '[&[data-state=open]>span]:!rotate-180',
        props.class,
      )
    ">
    <slot />
  </AccordionTrigger>
</template>
