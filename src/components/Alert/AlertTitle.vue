<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useAlert } from "./useAlert";

export interface AlertTitleProps extends /* @vue-ignore */ HTMLAttributes {}
const props = defineProps<AlertTitleProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { title } = alertTheme;

// Get the color from the context
const { color } = useAlert();
</script>

<template>
  <p
    v-bind="restProps"
    ref="HTMLDivElement"
    :class="
      cn(title.base, title.color[color as keyof ColorVariant], props.class)
    ">
    <slot />
  </p>
</template>
