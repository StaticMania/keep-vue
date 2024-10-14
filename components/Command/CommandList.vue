<script setup lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from "radix-vue";
import { ComboboxContent, useForwardPropsEmits } from "radix-vue";
import { computed } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = withDefaults(defineProps<ComboboxContentProps & ClassProps>(), {
  dismissable: false,
});
const emits = defineEmits<ComboboxContentEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <!-- command list  -->
  <ComboboxContent
    v-bind="forwarded"
    :class="cn('max-h-[300px] overflow-y-auto overflow-x-hidden', props.class)">
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>
