<script lang="ts" setup>
import { cn } from "~/src/utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";

interface CarouselItemProps {
  asChild?: boolean;
}

const props = defineProps<CarouselItemProps & ClassProps>();
</script>

<template>
  <slot v-if="asChild"></slot>

  <div
    v-else
    v-bind="$attrs"
    ref="HTMLDivElement"
    role="group"
    aria-roledescription="slide"
    :class="cn(carouselTheme.item.slide, props.class)">
    <slot></slot>
  </div>
</template>
