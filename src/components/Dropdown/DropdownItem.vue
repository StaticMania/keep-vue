<script setup lang="ts">
import {
  DropdownMenuItem,
  type DropdownMenuItemProps,
  useForwardProps,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { dropdownTheme } from "./dropdownTheme";

const props = defineProps<DropdownMenuItemProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(dropdownTheme.item, props.class)">
    <slot />
  </DropdownMenuItem>
</template>
