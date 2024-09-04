<script setup lang="ts">
import {
  AccordionItem,
  type AccordionItemProps,
  useForwardProps,
} from "radix-vue";
import { type HTMLAttributes, computed } from "vue";
import { cn } from "~/src/utils/cn";
import { accordionTheme } from "./accordionTheme";
import { useAccordionStoreOrThrow } from "./useAccordionStore";

const props = defineProps<
  AccordionItemProps & { class?: HTMLAttributes["class"] }
>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
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
