<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import {
  buttonVariants,
  type ButtonColorVariant,
  type ButtonSizeVariant,
} from "./buttonTheme";

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: keyof ButtonSizeVariant;
  color?: keyof ButtonColorVariant;
  variant?: "link" | "outline" | "softBg" | "default";
  shape?: "circle" | "icon";
  position?: "center" | "start" | "end";
  radius?: "default" | "full";
}

const props = withDefaults(defineProps<ButtonProps & ClassProps>(), {
  size: "md",
  color: "primary",
  radius: "default",
  variant: "default",
});

const restProps = computed(() => {
  const { class: _, color, variant, shape, position, size, ...rest } = props;
  return rest;
});
</script>

<template>
  <button
    v-bind="restProps"
    :class="
      cn(
        buttonVariants({ size, color, variant, shape, radius, position }),
        props.class,
      )
    ">
    <slot />
  </button>
</template>
