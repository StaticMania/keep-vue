<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";
import { useCarousel } from "./useCarousel";

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<ButtonProps & ClassProps>();

const restProps = computed(() => {
  const { asChild, class: _, ...rest } = props;

  return rest;
});

const { canScrollPrev, scrollPrev } = useCarousel();
</script>

<template>
  <slot v-if="asChild" :can-scroll-prev :scroll-prev v-bind="restProps"></slot>

  <button
    v-else
    v-bind="restProps"
    :class="cn(carouselTheme.controls.button.wrapper, props.class)"
    type="button"
    :disabled="!canScrollPrev"
    @click="scrollPrev">
    <slot>
      <svg :class="cn(carouselTheme.controls.button.svg)" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" />
      </svg>
    </slot>
  </button>
</template>
