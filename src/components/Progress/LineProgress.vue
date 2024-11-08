<!-- RootComponent.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { progressTheme } from "./progressTheme";
import { useProvideProgressStore } from "./useProgressStore";

export interface ProgressProps extends /* @vue-ignore*/ HTMLAttributes {
  progress?: number;
}
const props = withDefaults(defineProps<ProgressProps & ClassProps>(), {
  progress: 0,
  class: "",
});
const restProps = computed(() => {
  const { class: _, progress, ...rest } = props;
  return rest;
});

const updatedProgressValue = computed(() => props.progress);

const { line } = progressTheme;

//pass the store
useProvideProgressStore(updatedProgressValue)!;
</script>

<template>
  <div v-bind="restProps" :class="cn(line.root, props.class)">
    <slot />
  </div>
</template>
