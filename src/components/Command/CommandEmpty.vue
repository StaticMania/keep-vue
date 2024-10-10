<script setup lang="ts">
import type { ComboboxEmptyProps } from "radix-vue";
import { ComboboxEmpty } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<ComboboxEmptyProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <ComboboxEmpty
    v-bind="restProps"
    :class="cn('py-6 text-center text-sm', props.class)">
    <slot />
  </ComboboxEmpty>
</template>
