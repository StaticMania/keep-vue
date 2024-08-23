<!-- RootComponent.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { progressTheme } from "./progressTheme";
import { useProvideProgressStore } from "./useProgressStore";

interface ProgressProps {
  progress?: number;
  class?: HTMLAttributes["class"];
}
const props = withDefaults(defineProps<ProgressProps>(), {
  progress: 0,
  class: "",
});

const { line } = progressTheme;
const progressRef = ref<HTMLDivElement>();

//pass the store
useProvideProgressStore(props.progress)!;
</script>

<template>
  <div ref="progressRef" v-bind="$attrs" :class="cn(line.root, props.class)">
    <slot></slot>
  </div>
</template>
