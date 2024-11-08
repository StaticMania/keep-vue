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
          class="text-current"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z"
            fill="#1B4DFF" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9784 5.27167C12.2772 5.57042 12.2772 6.05479 11.9784 6.35354L7.60342 10.7285C7.30467 11.0273 6.8203 11.0273 6.52155 10.7285L4.33405 8.54104C4.0353 8.24229 4.0353 7.75792 4.33405 7.45917C4.6328 7.16042 5.11717 7.16042 5.41592 7.45917L7.06249 9.10573L10.8965 5.27167C11.1953 4.97292 11.6797 4.97292 11.9784 5.27167Z"
            fill="white" />
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
