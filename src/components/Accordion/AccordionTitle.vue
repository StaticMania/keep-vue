<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { accordionTheme } from "./accordionTheme";

interface AccordionTileProps {
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<AccordionTileProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <span v-bind="restProps" :class="cn(accordionTheme.title.base, props.class)">
    <slot></slot>
  </span>
</template>
