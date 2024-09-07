<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { stepPointTheme } from "./stepPointTheme";

interface StepPointProps {
  variant?: "default" | "border" | "icon";
  completed?: boolean;
  class?: HtmlHTMLAttributes["class"];
}
const props = withDefaults(defineProps<StepPointProps>(), {
  variant: "default",
  class: "",
});

const restProps = computed(() => {
  const { class: _, variant, completed, ...delegated } = props;

  return {
    ...delegated,
    "data-completed": completed,
  };
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="
      cn(
        variant === 'default' && stepPointTheme.default,
        variant === 'border' && stepPointTheme.border,
        variant === 'icon' && stepPointTheme.icon,
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
