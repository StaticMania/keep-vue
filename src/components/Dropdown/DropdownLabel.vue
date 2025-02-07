<script setup lang="ts">
import {
  DropdownMenuLabel,
  type DropdownMenuLabelProps,
  useForwardProps,
} from "radix-vue";
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

const props = defineProps<
  DropdownMenuLabelProps & { class?: HTMLAttributes["class"]; inset?: boolean }
>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <DropdownMenuLabel
    v-bind="forwardedProps"
    :class="
      cn(
        'px-2 py-1.5 text-body-3 font-semibold text-metal-900 dark:text-white',
        inset && 'pl-8',
        props.class,
      )
    ">
    <slot />
  </DropdownMenuLabel>
</template>
