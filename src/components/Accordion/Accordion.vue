<script lang="ts" setup>
import {
  AccordionRoot,
  useForwardPropsEmits,
  type AccordionRootEmits,
  type AccordionRootProps,
} from "radix-vue";
import { useProvideAccordionStore } from "./useAccordionStore";

interface AccordionFlushProps {
  flush?: boolean;
}

const props = defineProps<AccordionRootProps & AccordionFlushProps>();
const emits = defineEmits<AccordionRootEmits>();

const forwardProps = useForwardPropsEmits(props, emits);
const flushProxyProps = computed(() => props.flush);
useProvideAccordionStore(flushProxyProps);
</script>

<template>
  <AccordionRoot v-bind="forwardProps">
    <slot />
  </AccordionRoot>
</template>
