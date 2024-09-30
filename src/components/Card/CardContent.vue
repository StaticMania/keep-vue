<script lang="ts" setup>
import { computed, defineProps, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface CardContentProps extends /*@vue-ignore*/ HTMLAttributes {}
const props = defineProps<CardContentProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div v-bind="restProps" :class="cn('p-6', props.class)">
    <slot />
  </div>
</template>
