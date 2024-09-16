<script setup lang="ts">
import {
  AccordionItem,
  type AccordionItemProps,
  useForwardProps,
} from "radix-vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { accordionTheme } from "./accordionTheme";
import { useAccordionStoreOrThrow } from "./useAccordionStore";

const props = defineProps<AccordionItemProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);

const { panel } = accordionTheme;

const { flush } = useAccordionStoreOrThrow()!;
</script>

<template>
  <AccordionItem
    v-bind="forwardedProps"
    :class="cn(flush ? panel.flush.on : panel.flush.off, props.class)">
    <slot />
  </AccordionItem>
</template>
