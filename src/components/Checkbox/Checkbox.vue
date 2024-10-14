<script lang="ts" setup>
import { CheckboxIndicator, CheckboxRoot } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

// Define the props for the component
export interface CheckboxProps {
  iconClass?: string;
  variant?: "rounded" | "circle" | "default";
}

const props = withDefaults(defineProps<CheckboxProps & ClassProps>(), {
  class: "",
  iconClass: "",
  variant: "default",
});

const restProps = computed(() => {
  const { class: _, iconClass, variant, ...rest } = props;
  return rest;
});
</script>

<template>
  <CheckboxRoot
    v-bind="restProps"
    :class="
      cn(
        'peer relative h-5 w-5 shrink-0 border border-metal-200 ring-offset-primary-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:text-primary-500 dark:border-metal-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500',
        props.variant !== 'default' &&
          'data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:bg-primary-500 data-[state=checked]:before:content-[\'\'] dark:data-[state=checked]:before:bg-primary-500',
        props.variant === 'default' &&
          'data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500',
        props.variant === 'circle' &&
          'rounded-full data-[state=checked]:before:rounded-full',
        props.variant !== 'circle' &&
          'rounded data-[state=checked]:before:rounded-sm',
      )
    ">
    <CheckboxIndicator
      v-if="props.variant === 'default'"
      :class="
        cn('flex items-center justify-center text-white', props.iconClass)
      ">
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3 text-current"
          fill="currentColor"
          viewBox="0 0 256 256">
          <path
            d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
