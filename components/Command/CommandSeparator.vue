<script setup lang="ts">
import type { ComboboxSeparatorProps } from "radix-vue";
import { ComboboxSeparator } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<ComboboxSeparatorProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <!-- command seperator  -->
  <ComboboxSeparator
    v-bind="restProps"
    :class="cn('-mx-1 h-px bg-metal-25 dark:bg-metal-800', props.class)">
    <slot />
  </ComboboxSeparator>
</template>
