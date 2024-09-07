<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
import type { ButtonHTMLAttributes, HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import {
  buttonVariants,
  type ButtonColorVariant,
  type ButtonSizeVariant,
} from "./buttonTheme";

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: keyof ButtonSizeVariant;
  color?: keyof ButtonColorVariant;
  variant?: "link" | "outline";
  shape?: "circle" | "icon";
  position?: "center" | "start" | "end";
  class?: HtmlHTMLAttributes["class"];
}

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "md",
  color: "primary",
});

const buttonRef = ref<null | HTMLButtonElement>(null);
</script>

<template>
  <button
    v-bind="$attrs"
    ref="buttonRef"
    :class="
      cn(buttonVariants({ size, color, variant, shape, position }), props.class)
    ">
    <slot></slot>
  </button>
</template>
