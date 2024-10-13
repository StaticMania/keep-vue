<script setup lang="ts">
import {
  ComboboxInput,
  type ComboboxInputProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<ComboboxInputProps & ClassProps>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <!-- command input  -->

  <div
    class="flex items-center border-b border-b-metal-100 px-3 dark:border-b-metal-800"
    cmdk-input-wrapper>
    <svg
      class="mr-2 h-4 w-4 shrink-0 fill-metal-600 opacity-50 dark:fill-metal-25"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 256 256">
      <path
        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      aria-hidden="true"
      :class="
        cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-metal-400 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-metal-600',
          props.class,
        )
      " />
  </div>
</template>
