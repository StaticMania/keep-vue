<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { alertTheme, type ColorVariant } from "./alertTheme";

interface AlertLinkProps {
  class?: HTMLAttributes["class"];
  href: string;
  asChild?: boolean;
}
const props = withDefaults(defineProps<AlertLinkProps>(), {
  asChild: false,
  class: "",
  href: "#",
});

const color = inject("alertContext");

// get the ref
const alertLinkRef = ref<HTMLAnchorElement | null>(null);
</script>

<template>
  <!-- default alert link icon  -->
  <a
    v-if="props.asChild"
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
  </a>
  <a
    v-else
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
