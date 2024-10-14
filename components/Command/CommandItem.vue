<script setup lang="ts">
import type { ComboboxItemEmits, ComboboxItemProps } from "radix-vue";
import { ComboboxItem, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<ComboboxItemProps & ClassProps>();
const emits = defineEmits<ComboboxItemEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <!-- command item  -->

  <ComboboxItem
    v-bind="forwarded"
    :class="
      cn(
        'relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 text-body-4 outline-none transition-all duration-200 data-[disabled=true]:pointer-events-none data-[highlighted]:bg-metal-50 data-[highlighted]:text-metal-900 data-[disabled]:opacity-50 dark:data-[highlighted]:bg-metal-800 dark:data-[highlighted]:text-white',
        props.class,
      )
    ">
    <slot />
  </ComboboxItem>
</template>
