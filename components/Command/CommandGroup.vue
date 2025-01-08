<script setup lang="ts">
import type { ComboboxGroupProps } from "radix-vue";
import { ComboboxGroup, ComboboxLabel } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";
export interface CommandGroupProps {
  heading: string;
}

const props = defineProps<
  ComboboxGroupProps & ClassProps & CommandGroupProps
>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <!-- command group -->
  <ComboboxGroup
    v-bind="restProps"
    :class="
      cn(
        'overflow-hidden p-1 text-metal-600 dark:text-white [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-body-5 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-metal-400 dark:[&_[cmdk-group-heading]]:text-white/50',
        props.class,
      )
    ">
    <ComboboxLabel
      v-if="heading"
      class="text-muted-foreground px-2 py-1.5 text-xs font-medium">
      {{ heading }}
    </ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
