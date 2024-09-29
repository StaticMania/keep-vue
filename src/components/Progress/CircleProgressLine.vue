<script lang="ts" setup>
import type { SVGAttributes } from "vue";
import { computed, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { progressTheme } from "./progressTheme";
import { useProgressStore } from "./useProgressStore";

export interface CircleLineProps extends /* @vue-ignore*/ SVGAttributes {
  strokeWidth?: number;
  strokeColor?: string;
}

const props = withDefaults(defineProps<CircleLineProps & ClassProps>(), {
  strokeWidth: 3.5,
  strokeColor: "",
  class: "",
});

const restProps = computed(() => {
  const { class: _, strokeColor, strokeWidth, ...rest } = props;
  return rest;
});

const { circle } = progressTheme;
const { progressBar } = useProgressStore()!;
</script>
<template>
  <svg
    v-bind="restProps"
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
