<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface TimelineContentProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<TimelineContentProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn('space-y-1.5', props.class)">
    <slot></slot>
  </div>
</template>
