<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { title } = alertTheme;

// Get the color from the context
const color = inject("alertContext");
</script>

<template>
  <p
    v-bind="$attrs"
    :class="
      cn(title.base, title.color[color as keyof ColorVariant], props.class)
    "
    ref="alertTitle">
    <slot></slot>
  </p>
</template>
