<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface ButtonGroupProps {
  class?: HTMLAttributes["class"];
}
const props = defineProps<ButtonGroupProps>();

const buttonGroupRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    v-bind="$attrs"
    ref="buttonGroupRef"
    :class="cn('flex items-center', props.class)">
    <slot></slot>
  </div>
</template>
