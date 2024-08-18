<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { badgeTheme, badgeVariants } from "./badgeTheme";

interface BadgeProps {
  color?: keyof typeof badgeTheme.color.base;
  variant?: keyof typeof badgeTheme.color;
}

const props = defineProps<BadgeProps & { class?: HTMLAttributes["class"] }>();

const { color = "secondary", variant } = props;
</script>

<template>
  <div
    :class="cn(badgeVariants({ color, variant }), props.class)"
    v-bind="$attrs"
    ref="badgeRef">
    <slot></slot>
  </div>
</template>
