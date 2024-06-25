<template>
  <div
    :aria-disabled="disabled"
    :class="
      cn(
        disabled && badgeTheme.disabled,
        badgeTheme.base,
        badgeTheme.size[size],
        badgeTheme.variant[variant][color],
        props.class
      )
    "
    v-bind="$attrs"
    ref="badgeRef"
  >
    <div
      v-if="showIcon && iconPosition === 'left'"
      :class="
        cn(
          badgeTheme.icon.base,
          badgeTheme.icon.size[size],
          badgeTheme.icon.color[color],
          'mr-1',
          dotStyle
        )
      "
    ></div>
    <slot></slot>
    <div
      v-if="showIcon && iconPosition === 'right'"
      :class="
        cn(
          badgeTheme.icon.base,
          badgeTheme.icon.size[size],
          badgeTheme.icon.color[color],
          'ml-1',
          dotStyle
        )
      "
    ></div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../helpers/cn";
import { badgeTheme } from "./badgeTheme";

interface BadgeProps {
  dotStyle?: string;
  color?: "primary" | "secondary" | "success" | "warning" | "error";
  showIcon?: boolean;
  iconPosition?: "left" | "right";
  size?: "sm" | "md";
  variant?: "base" | "border" | "background";
  disabled?: boolean;
}

const props = defineProps<BadgeProps & { class?: HTMLAttributes["class"] }>();

const {
  color = "primary",
  disabled = false,
  dotStyle,
  showIcon = false,
  iconPosition = "left",
  size = "md",
  variant = "base",
} = props;
</script>
