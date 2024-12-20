<script lang="ts" setup>
import {
  CheckboxIndicator,
  CheckboxRoot,
  useForwardPropsEmits,
  type CheckboxRootEmits,
  type CheckboxRootProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

// Define the props for the component
export interface CheckboxProps {
  iconClass?: string;
  variant?: "rounded" | "circle" | "default";
}

const props = withDefaults(
  defineProps<CheckboxProps & ClassProps & CheckboxRootProps>(),
  {
    class: "",
    iconClass: "",
    variant: "default",
  },
);

const emits = defineEmits<CheckboxRootEmits>();

const restProps = computed(() => {
  const { class: _, iconClass, variant, ...rest } = props;
  return rest;
});
const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'peer relative h-4 w-4 shrink-0 border border-metal-200 ring-offset-primary-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-100 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-500 data-[state=checked]:text-primary-500 dark:border-metal-100 dark:ring-offset-primary-500 dark:focus-visible:ring-primary-500 dark:data-[state=checked]:text-primary-500',
        props.variant !== 'default' &&
          'data-[state=checked]:before:absolute data-[state=checked]:before:left-1/2 data-[state=checked]:before:top-1/2 data-[state=checked]:before:h-2.5 data-[state=checked]:before:w-2.5 data-[state=checked]:before:-translate-x-1/2 data-[state=checked]:before:-translate-y-1/2 data-[state=checked]:before:bg-primary-500 data-[state=checked]:before:content-[\'\'] dark:data-[state=checked]:before:bg-primary-500',
        props.variant === 'default' &&
          'data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500',
        props.variant === 'circle' &&
          'rounded-full data-[state=checked]:before:rounded-full',
        props.variant !== 'circle' &&
          'rounded data-[state=checked]:before:rounded-sm',
        props.class,
      )
    ">
    <!-- indicator -->
    <CheckboxIndicator
      v-if="props.variant === 'default'"
      :class="
        cn('flex items-center justify-center text-white', props.iconClass)
      ">
      <slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.97842 0.271671C8.27717 0.570422 8.27717 1.05479 7.97842 1.35354L3.60342 5.72854C3.30467 6.0273 2.8203 6.0273 2.52155 5.72854L0.334049 3.54104C0.0352976 3.24229 0.0352976 2.75792 0.334049 2.45917C0.6328 2.16042 1.11717 2.16042 1.41592 2.45917L3.06249 4.10573L6.89655 0.271671C7.1953 -0.0270804 7.67967 -0.0270804 7.97842 0.271671Z"
            fill="white" />
        </svg>
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
