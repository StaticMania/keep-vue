<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { radioTheme } from "./radioTheme";

interface RadioProps {
  variant?: "circle" | "rounded" | "square";
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<RadioProps>(), {
  class: "",
  variant: "rounded",
});

const radioInputRef = ref<HTMLInputElement>();
</script>

<template>
  <input
    type="radio"
    ref="radioInputRef"
    v-bind="$attrs"
    :class="cn(radioTheme.input)" />
  <button
    :class="
      cn(
        radioTheme.button.base,
        radioTheme.button.variant[variant],
        props.class,
      )
    "></button>
</template>
