<script lang="ts" setup>
import { defineProps, type HtmlHTMLAttributes } from "vue";
import { DotButton } from "~/src";
import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";
import { useCarousel } from "./useCarousel";

export interface CarouselIndicatorsProps
  extends /* @vue-ignore */ HtmlHTMLAttributes {
  dotButtonStyle?: string;
}
const props = defineProps<CarouselIndicatorsProps & ClassProps>();

const { selectedIndex, scrollSnaps, onDotButtonClick } = useCarousel()!;
</script>
<template>
  <div :class="cn(carouselTheme.controls.indicators.container, props.class)">
    <DotButton
      v-for="(number, index) in scrollSnaps"
      :key="number"
      :class="
        cn(
          carouselTheme.controls.indicators.dot,
          index === selectedIndex && 'border-metal-900 dark:border-metal-100',
          props.dotButtonStyle,
        )
      "
      @click="() => onDotButtonClick(index)" />
  </div>
</template>
