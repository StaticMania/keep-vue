<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/helpers/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const color = inject("alertContext");

const { description } = alertTheme;
</script>

<template>
  <p
    v-bind="$attrs"
    :class="
      cn(
        description.color[color as keyof ColorVariant],
        description.base,
        props.class,
      )
    "
    ref="AlertDescriptionRef">
    <slot></slot>
  </p>
</template>
