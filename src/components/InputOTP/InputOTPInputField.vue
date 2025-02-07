<script setup lang="ts">
import {
  PinInputInput,
  type PinInputInputProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<PinInputInputProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <PinInputInput
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex h-16 w-[52px] items-center justify-center rounded-[10px] border border-metal-100 bg-white text-center text-heading-6 font-medium text-metal-900 outline-none transition-all placeholder:text-body-1 placeholder:text-metal-400 focus:z-10 focus:ring-2 focus:ring-metal-600 focus:ring-offset-metal-200 dark:border-metal-800 dark:bg-metal-900 dark:text-white dark:placeholder:text-metal-300 dark:focus:ring-metal-800',
        props.class,
      )
    " />
</template>
