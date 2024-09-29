<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { skeletonTheme } from "./skeletonTheme";

export interface SkeletonLineProps extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<SkeletonLineProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn(skeletonTheme.line, props.class)" />
</template>
