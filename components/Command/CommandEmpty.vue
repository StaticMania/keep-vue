<script setup lang="ts">
import type { ComboboxEmptyProps } from "radix-vue";
import { ComboboxEmpty } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<ComboboxEmptyProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <!-- command empty  -->
  <ComboboxEmpty
    v-bind="restProps"
    :class="cn('py-6 text-center text-body-4', props.class)">
    <slot />
  </ComboboxEmpty>
</template>
