<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface CardHeaderProps {
  class?: HTMLAttributes["class"];
}
const props = defineProps<CardHeaderProps>();
const cardHeaderRef = ref<HTMLDivElement>();
</script>
<template>
  <div v-bind="$attrs" ref="cardHeaderRef" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
