<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface SpinnerColors {
  primary: string;
  secondary: string;
  error: string;
  success: string;
  warning: string;
}

const fillClasses = {
  primary: "fill-primary-500",
  secondary: "fill-metal-900 dark:fill-white",
  error: "fill-error-500",
  success: "fill-success-500",
  warning: "fill-warning-500",
} as SpinnerColors;

export interface SpinnerProps extends /*@vue-ignore*/ HTMLAttributes {
  color?: keyof SpinnerColors;
}

const props = withDefaults(defineProps<SpinnerProps & ClassProps>(), {
  color: "primary",
  class: "",
});
</script>

<template>
  <div aria-label="Loading..." role="status">
    <svg
      :class="
        cn(
          'size-8 animate-spin',
          fillClasses[color as keyof SpinnerColors],
          props.class,
        )
      "
      viewBox="3 3 18 18">
      <path
        class="opacity-20"
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" />
      <path
        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z" />
    </svg>
  </div>
</template>
