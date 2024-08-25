<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { progressTheme } from "./progressTheme";
import { useProvideProgressStore } from "./useProgressStore";

interface ProgressCircleProps {
  class?: HTMLAttributes["class"];
  progress?: number;
}

const props = withDefaults(defineProps<ProgressCircleProps>(), {
  class: "",
  progress: 0,
});

const circleProgressRef = ref<HTMLDivElement>();

const { circle } = progressTheme;

const updatedProgressValue = computed(() => props.progress);

useProvideProgressStore(updatedProgressValue);
</script>
<template>
  <div
    ref="circleProgressRef"
    v-bind="$attrs"
    :class="cn(circle.root, props.class)">
    <slot></slot>
  </div>
</template>
