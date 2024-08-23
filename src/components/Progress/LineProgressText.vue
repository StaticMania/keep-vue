<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { useProgressStore } from "./useProgressStore";

interface LineProgressText {
  class?: HTMLAttributes["class"];
}
const props = defineProps<LineProgressText>();
const lineProgressTextRef = ref<HTMLDivElement>();
const { progressBar } = useProgressStore()!;
</script>
<template>
  <div
    v-bind="$attrs"
    ref="lineProgressTextRef"
    :class="
      cn('w-10 text-end text-body-4 font-medium text-primary-500', props.class)
    ">
    {{ progressBar }}%
  </div>
</template>
