<script lang="ts" setup>
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { defineProps, ref } from "vue";
import { cn } from "../../utils/cn";
import { checkboxTheme } from "./checkboxTheme";

// Define the props for the component
interface CheckboxProps {
  iconClass?: string;
  variant?: "rounded" | "circle" | "default";
  class?: string;
}

const { base, defaultColor, notDefault, circle, notCircle } = checkboxTheme;

const props = withDefaults(defineProps<CheckboxProps>(), {
  class: "",
  iconClass: "",
  variant: "default",
});

const checkboxRef = ref<null | HTMLElement>(null);
</script>

<template>
  <CheckboxRoot
    ref="checkboxRef"
    :class="
      cn(
        base,
        props.variant === 'default' && defaultColor,
        props.variant !== 'default' && notDefault,
        props.variant === 'circle' && circle,
        props.variant !== 'circle' && notCircle,
        props.class,
      )
    "
    v-bind="$attrs">
    <CheckboxIndicator
      v-if="props.variant === 'default'"
      :class="
        cn('flex items-center justify-center text-white', props.iconClass)
      ">
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-current"
          fill="currentColor"
          viewBox="0 0 256 256">
          <path
            d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
