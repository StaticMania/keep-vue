<script setup lang="ts">
import type { ComboboxRootEmits, ComboboxRootProps } from "radix-vue";
import { ComboboxRoot, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

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
  <ComboboxRoot
    v-bind="forwarded"
    :class="
      cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        props.class,
      )
    ">
    <slot />
  </ComboboxRoot>
</template>
