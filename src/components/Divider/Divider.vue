<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps, ref } from "vue";
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
const dividerRef = ref<HTMLElement | null>(null);
const hasChildren = computed(() => !!useSlots().default);
</script>

<template>
  <div
    v-if="hasChildren"
    v-bind="$attrs"
    ref="dividerRef"
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
    <slot />
  </div>
  <hr
    v-else
    v-bind="$attrs"
    ref="dividerRef"
    :class="
      cn(
        dividerTheme.withOutChildren.base,
        dividerTheme.withOutChildren.size[size],
        dividerTheme.withOutChildren.color[color],
        props.class,
      )
    " />
</template>
