<script lang="ts" setup>
import { computed, defineProps, type HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { carouselTheme } from "./carouselTheme";

export interface CarouselItemProps
  extends /* @vue-ignore */ HtmlHTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<CarouselItemProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;

  return rest;
});
</script>

<template>
  <slot v-if="asChild" v-bind="restProps"></slot>

  <div
    v-else
    v-bind="restProps"
    role="group"
    aria-roledescription="slide"
    :class="cn(carouselTheme.item.slide, props.class)">
    <slot></slot>
  </div>
</template>
