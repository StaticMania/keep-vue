<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";

import {
  type DividerColorVariant,
  type DividerSizeVariant,
  dividerTheme,
} from "./theme";

export interface DividerProps {
  color?: keyof DividerColorVariant;
  size?: keyof DividerSizeVariant;
  variant?: "start" | "end" | "center";
}
const props = defineProps<DividerProps & { class?: HTMLAttributes["class"] }>();

const { color = "secondary", size = "md", variant = "start" } = props;

const restProps = computed(() => {
  const { class: _, color, size, variant, ...rest } = props;
  return rest;
});
</script>

<template>
  <hr
    v-if="!$slots.default"
    v-bind="restProps"
    :class="
      cn(
        dividerTheme.withOutChildren.base,
        dividerTheme.withOutChildren.size[size],
        dividerTheme.withOutChildren.color[color],
        props.class,
      )
    " />
  <div
    v-else
    v-bind="restProps"
    :class="
      cn(
        dividerTheme.withChildren.base,
        dividerTheme.withChildren.textColor[color],
        dividerTheme.withChildren.variant[variant],
        dividerTheme.withChildren.color[variant][color],
        dividerTheme.withChildren.size[variant][size],
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
