<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface TimelineContentProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<TimelineContentProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="cn('space-y-1.5', props.class)">
    <slot></slot>
  </div>
</template>
