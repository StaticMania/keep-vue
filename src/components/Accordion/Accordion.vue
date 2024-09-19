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

const restProps = computed(() => {
  const { flush, ...rest } = props;
  return rest;
});

const forwardProps = useForwardPropsEmits(restProps, emits);

useProvideAccordionStore(props.flush);
</script>

<template>
  <AccordionRoot aria-labelledby="accordion" v-bind="forwardProps">
    <slot />
  </AccordionRoot>
</template>
