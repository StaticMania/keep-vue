<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { accordionTheme } from "./accordionTheme";

interface AccordionPanelProps extends HTMLAttributes {
  class?: string;
  state: {
    isOpen: (index: number) => boolean;
    setIsOpen: (index: number) => void;
    flush?: boolean;
  };
  panelIndex: number;
}

const props = defineProps<AccordionPanelProps>();

const { panel } = accordionTheme;

// Handle context value change
const contextValue = computed(() => ({
  isOpen: props.state.isOpen(props.panelIndex),
  setIsOpen: () => props.state.setIsOpen(props.panelIndex),
  flush: props.state.flush ?? false,
}));

// Providing the context
const AccordionContext = Symbol("AccordionContext");
provide(AccordionContext, contextValue);

const accordionPanelRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    :class="
      cn(props.state.flush ? panel.flush.on : panel.flush.off, props.class)
    "
    v-bind="props"
    ref="accordionPanelRef">
    <slot />
  </div>
</template>
