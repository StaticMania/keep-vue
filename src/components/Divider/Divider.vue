<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../helpers/cn";
import {
  type DividerColorVariant,
  type DividerSizeVariant,
  dividerTheme,
} from "./theme";

interface DividerProps {
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
    v-bind="$attrs"
    ref="dividerRef"
    v-if="hasChildren"
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
    v-bind="$attrs"
    ref="dividerRef"
    v-else
    :class="
      cn(
        dividerTheme.withOutChildren.base,
        dividerTheme.withOutChildren.size[size],
        dividerTheme.withOutChildren.color[color],
        props.class,
      )
    " />
</template>
