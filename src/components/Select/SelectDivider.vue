<script setup lang="ts">
import { SelectSeparator, type SelectSeparatorProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<SelectSeparatorProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <SelectSeparator
    v-bind="restProps"
    :class="
      cn('-mx-1 my-1 h-px bg-metal-400 dark:bg-metal-300', props.class)
    " />
</template>
