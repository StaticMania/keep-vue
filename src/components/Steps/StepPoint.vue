<script lang="ts" setup>
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { stepPointTheme } from "./stepPointTheme";

export interface StepPointProps {
  variant?: "default" | "border" | "icon";
  completed?: boolean;
}
const props = withDefaults(defineProps<StepPointProps & ClassProps>(), {
  variant: "default",
  class: "",
});

const restProps = computed(() => {
  const { class: _, variant, completed, ...rest } = props;

  return {
    ...rest,
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
