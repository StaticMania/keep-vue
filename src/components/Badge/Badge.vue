<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import type { badgeTheme } from "./badgeTheme";
import { badgeVariants } from "./badgeTheme";

interface BadgeProps extends /* @vue-ignore */ HTMLAttributes {
  color?: keyof typeof badgeTheme.color.base;
  variant?: keyof typeof badgeTheme.color;
}

const props = withDefaults(defineProps<BadgeProps & ClassProps>(), {
  color: "primary",
  variant: "background",
});
const restProps = computed(() => {
  const { class: _, color, variant, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="cn(badgeVariants({ color, variant }), props.class)">
    <slot></slot>
  </div>
</template>
