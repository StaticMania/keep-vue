<script lang="ts" setup>
import { computed, defineProps, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import { useCarousel } from "./useCarousel";

export interface ViewPortProps extends /* @vue-ignore */ HTMLAttributes {
  viewPortClass?: string;
}
const props = defineProps<ViewPortProps>();

const restProps = computed(() => {
  const { viewPortClass, ...rest } = props;
  return rest;
});

const { carouselRef } = useCarousel();
</script>

<template>
  <div
    v-bind="restProps"
    ref="carouselRef"
    :class="cn(carouselTheme.viewport, props.viewPortClass)">
    <slot></slot>
  </div>
</template>
