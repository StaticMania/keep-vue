<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface CardFooterProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CardFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div v-bind="restProps" :class="cn(props.class)">
    <slot />
  </div>
</template>
