<script setup lang="ts">
import type { AnchorHTMLAttributes } from "vue";
import { computed, defineProps, ref, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useAlert } from "./useAlert";
export interface AlertLinkProps
  extends /* @vue-ignore */ AnchorHTMLAttributes {}
const props = withDefaults(defineProps<AlertLinkProps & ClassProps>(), {
  href: "#",
});

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { color } = useAlert();

// get the ref
const alertLinkRef = ref<HTMLAnchorElement>();
</script>

<template>
  <a
    v-bind="restProps"
    ref="alertLinkRef"
    :class="
      cn(
        alertTheme.link.base,
        alertTheme.link.color[color as keyof ColorVariant],
        props.class,
      )
    ">
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
