<script lang="ts" setup>
import {
  AccordionRoot,
  useForwardPropsEmits,
  type AccordionRootEmits,
  type AccordionRootProps,
} from "radix-vue";
import { computed, defineEmits, defineProps, onMounted, ref } from "vue";
import { useProvideAccordionStore } from "./useAccordionStore";

export interface AccordionFlushProps {
  flush?: boolean;
}

const props = defineProps<AccordionRootProps & AccordionFlushProps>();

const emits = defineEmits<AccordionRootEmits>();

const restProps = computed(() => {
  const { flush, ...rest } = props;
  return rest;
});

const forwardProps = useForwardPropsEmits(restProps, emits);

const changedFlushProps = computed(() => {
  return props.flush;
});

useProvideAccordionStore(changedFlushProps);

const mounted = ref<boolean>(false);

onMounted(() => {
  mounted.value = true;
});
</script>

<template>
  <AccordionRoot v-if="mounted" v-bind="forwardProps">
    <slot />
  </AccordionRoot>
</template>
