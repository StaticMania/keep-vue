<script lang="ts" setup>
import type { HTMLAttributes, HtmlHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import { accordionTheme } from "./accordionTheme";

export interface AccordionTileProps extends /* @vue-ignore */ HTMLAttributes {
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<AccordionTileProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <p v-bind="restProps" :class="cn(accordionTheme.title.base, props.class)">
    <slot></slot>
  </p>
</template>
