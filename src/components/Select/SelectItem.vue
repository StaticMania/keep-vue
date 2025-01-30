<script setup lang="ts">
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

type itemIndicatorProps = {
  showCheckIcon?: boolean;
};

const props = defineProps<SelectItemProps & ClassProps & itemIndicatorProps>();
const restProps = computed(() => {
  const { class: _, showCheckIcon, ...rest } = props;
  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-lg p-2.5 text-body-4 font-medium text-metal-600 outline-none focus:bg-metal-50 focus:text-metal-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:text-white dark:focus:bg-metal-800 dark:focus:text-white',
        props.class,
      )
    ">
    <span
      :class="
        cn(
          'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
          showCheckIcon ? 'block' : 'hidden',
        )
      ">
      <SelectItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 fill-metal-900 dark:fill-white"
          viewBox="0 0 256 256">
          <path
            d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
