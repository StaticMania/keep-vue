<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { progressTheme } from "./progressTheme";
import { useProgressStore } from "./useProgressStore";

interface CircleLineProps {
  strokeWidth?: number;
  strokeColor?: string;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<CircleLineProps>(), {
  strokeWidth: 3.5,
});

const circleLineRef = ref<SVGAElement>();

const { circle } = progressTheme;
const { progressBar } = useProgressStore()!;
</script>
<template>
  <svg
    v-bind="$attrs"
    ref="circleLineRef"
    :class="circle.svg.base"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      :cx="18"
      :cy="18"
      :r="16"
      fill="none"
      :class="cn(circle.svg.circle, props.class)"
      :stroke-width="props.strokeWidth" />
    <g :class="circle.svg.g">
      <circle
        :cx="18"
        :cy="18"
        :r="16"
        fill="none"
        :class="cn(circle.svg.gCircle, props.strokeColor)"
        :stroke-width="props.strokeWidth + 0.2"
        :stroke-dasharray="100"
        :stroke-dashoffset="100 - progressBar" />
    </g>
  </svg>
</template>
