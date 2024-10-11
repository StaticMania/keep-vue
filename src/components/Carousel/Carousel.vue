<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from "vue";

import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import CarouselViewport from "./CarouselViewport.vue";
import type { CarouselEmits, CarouselProps, ClassProps } from "./interface";
import { useProvideCarousel } from "./useCarousel";

const props = withDefaults(defineProps<CarouselProps & ClassProps>(), {
  orientation: "horizontal",
});

const emits = defineEmits<CarouselEmits>();

const { canScrollNext, canScrollPrev } = useProvideCarousel(props, emits);

defineExpose({
  canScrollNext,
  canScrollPrev,
});
</script>

<template>
  <div :class="cn(carouselTheme.carouselContainer, props.class)">
    <CarouselViewport :view-port-class="props.viewPortClass">
      <slot></slot>
    </CarouselViewport>
  </div>
</template>
