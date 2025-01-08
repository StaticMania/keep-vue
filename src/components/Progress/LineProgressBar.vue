<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { progressTheme } from "./progressTheme";
import { useProgressStore } from "./useProgressStore";

export interface LineProgressBarProps extends /* @vue-ignore*/ HTMLAttributes {
  lineBackground?: string;
}

const props = defineProps<LineProgressBarProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, lineBackground, ...rest } = props;
  return rest;
});

const { line } = progressTheme;
const { progressBar } = useProgressStore()!;
</script>

<template>
  <div
    v-bind="restProps"
    :class="cn(line.progress.base, 'h-2.5', props.lineBackground)">
    <div
      :class="cn(line.progress.bar, props.class)"
      :style="{ width: `${progressBar}%` }"></div>
  </div>
</template>
