<script setup lang="ts">
import {
  PinInputRoot,
  type PinInputRootEmits,
  type PinInputRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = withDefaults(defineProps<PinInputRootProps & ClassProps>(), {
  modelValue: () => [],
});
const emits = defineEmits<PinInputRootEmits>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <PinInputRoot
    v-bind="forwarded"
    :class="cn('flex items-center gap-2', props.class)">
    <slot />
  </PinInputRoot>
</template>
