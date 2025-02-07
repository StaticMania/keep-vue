<script setup lang="ts">
import {
  SelectScrollDownButton,
  type SelectScrollDownButtonProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<SelectScrollDownButtonProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <SelectScrollDownButton
    v-bind="forwardedProps"
    :class="
      cn('flex cursor-default items-center justify-center py-1', props.class)
    ">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 fill-metal-900 dark:fill-white"
        viewBox="0 0 256 256">
        <path
          d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
      </svg>
    </slot>
  </SelectScrollDownButton>
</template>
