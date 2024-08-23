<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { progressTheme } from "./progressTheme";
import { useProgressStore } from "./useProgressStore";

interface LineProgressBarProps {
  class?: HTMLAttributes["class"];
  lineBackground?: string;
}

const props = defineProps<LineProgressBarProps>();

const { line } = progressTheme;
const { progressBar } = useProgressStore()!;
const lineProgressBarRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    ref=" lineProgressBarRef"
    v-bind="$attrs"
    :class="cn(line.progress.base, 'h-2.5', props.lineBackground)">
    <div
      :class="cn(line.progress.bar, props.class)"
      :style="{ width: `${progressBar}%` }"></div>
  </div>
</template>
