<script lang="ts" setup>
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { carouselTheme } from "./carouselTheme";

interface CarouselProps {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  carouselViewportClasses?: string;
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<CarouselProps>();
</script>

<template>
  <div
    ref="HTMLDivElement"
    :class="cn(carouselTheme.carouselContainer, props.class)"></div>
</template>
