<script setup lang="ts">
import { SelectLabel, type SelectLabelProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<SelectLabelProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <SelectLabel
    v-bind="restProps"
    :class="
      cn(
        'p-2.5 text-body-4 font-medium text-metal-900 dark:text-white',
        props.class,
      )
    ">
    <slot />
  </SelectLabel>
</template>
