<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface CardFooterProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<CardFooterProps>();

const cardFooterRef = ref<HTMLDivElement>();
</script>
<template>
  <div v-bind="$attrs" ref="cardFooterRef" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
