<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { skeletonTheme } from "./skeletonTheme";

interface SkeletonLineProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonLineProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="cn(skeletonTheme.line, props.class)" />
</template>
