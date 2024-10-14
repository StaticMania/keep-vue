<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { progressTheme } from "./progressTheme";
import { useProvideProgressStore } from "./useProgressStore";

export interface ProgressCircleProps extends /* @vue-ignore*/ HTMLAttributes {
  progress?: number;
}

const props = withDefaults(defineProps<ProgressCircleProps & ClassProps>(), {
  class: "",
  progress: 0,
});
const restProps = computed(() => {
  const { class: _, progress, ...rest } = props;
  return rest;
});

const { circle } = progressTheme;
const updatedProgressValue = computed(() => props.progress);
useProvideProgressStore(updatedProgressValue);
</script>

<template>
  <div v-bind="restProps" :class="cn(circle.root, props.class)">
    <slot></slot>
  </div>
</template>
