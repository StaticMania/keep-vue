<script lang="ts" setup>
import { useForwardProps, type DialogTitleProps } from "radix-vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogTitleProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <DialogTitle
    v-bind="forwardedProps"
    :class="
      cn('text-body-1 font-medium text-metal-900 dark:text-white', props.class)
    ">
    <slot></slot>
  </DialogTitle>
</template>
