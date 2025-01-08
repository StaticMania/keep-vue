<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from "radix-vue";
import { ComboboxRoot, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = withDefaults(defineProps<ComboboxRootProps & ClassProps>(), {
  open: true,
  modelValue: "",
});

const emits = defineEmits<ComboboxRootEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <!-- command   -->
  <ComboboxRoot
    v-bind="forwarded"
    :class="cn('flex h-full w-full flex-col overflow-hidden', props.class)">
    <slot />
  </ComboboxRoot>
</template>
