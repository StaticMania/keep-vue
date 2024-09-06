<script lang="ts" setup>
import { cn } from "~/src/utils/cn";
import { carouselTheme } from "./carouselTheme";
import { useCarousel } from "./useCarousel";

interface ViewPortProps {
  viewPortClass?: string;
}
const props = defineProps<ViewPortProps>();

const { carouselRef } = useCarousel();
</script>

<template>
  <div
    ref="carouselRef"
    :class="cn(carouselTheme.viewport, props.viewPortClass)">
    <slot></slot>
  </div>
</template>
