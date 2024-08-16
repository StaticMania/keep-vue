<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/helpers/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  href: string;
}>();

const color = inject("alertContext");
</script>

<template>
  <a
    :href="props.href"
    v-bind="$attrs"
    :class="
      cn(
        alertTheme.link.base,
        alertTheme.link.color[color as keyof ColorVariant],
        props.class,
      )
    "
    ref="alertLinkRef">
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      viewBox="0 0 256 256">
      <path
        d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
    </svg>
  </a>
</template>
