<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { accordionTheme } from "./accordionTheme";

interface AccordionPanelProps {
  class?: HTMLAttributes["class"];
  state?: {
    isOpen: boolean;
    setIsOpen: () => void;
    flush: boolean;
  };

  [key: string]: any;
}
const props = defineProps<AccordionPanelProps>();

const { panel } = accordionTheme;

const accordionPanelRef = ref<HTMLDivElement>();
</script>
<template>
  <div
    :class="
      cn(props.state?.flush ? panel.flush.on : panel.flush.off, props.class)
    "
    v-bind="$attrs"
    ref="accordionPanelRef">
    asdf
  </div>
</template>
