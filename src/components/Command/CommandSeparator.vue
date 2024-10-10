<script setup lang="ts">
import type { ComboboxSeparatorProps } from "radix-vue";
import { ComboboxSeparator } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<ComboboxSeparatorProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <ComboboxSeparator
    v-bind="restProps"
    :class="cn('bg-border -mx-1 h-px', props.class)">
    <slot />
  </ComboboxSeparator>
</template>
