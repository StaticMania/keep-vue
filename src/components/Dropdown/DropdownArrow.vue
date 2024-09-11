<script lang="ts" setup>
import { DropdownMenuArrow, type DropdownMenuArrowProps } from "radix-vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DropdownMenuArrowProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <DropdownMenuArrow
    v-bind="restProps"
    :width="20"
    :height="14"
    :class="cn('fill-white', props.class)" />
</template>
