<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface AccordionProps {
  flush?: boolean;
  disabled?: boolean;
  openFirstPanel?: boolean;
  class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<AccordionProps>(), {
  disabled: false,
  flush: false,
});

const isOpen = ref(props.openFirstPanel ? 0 : 1);

// define accordion state
const getAccordionState = computed(() => ({
  isOpen: isOpen.value === 2,

  setIsOpen: (index: number) => {
    isOpen.value = isOpen.value === index ? -1 : index;
  },
  flush: props.flush,
}));

const update = (index: number) => {
  const AccordionState = computed(() => ({
    isOpen: isOpen.value === index,

    setIsOpen: () => {
      isOpen.value = isOpen.value === index ? -1 : index;
    },
    flush: props.flush,
  }));

  return AccordionState;
};

const slots = useSlots();

const children = slots.default?.();

const accordionRef = ref<HTMLDivElement>();
</script>
<template>
  <div
    ref="accordionRef"
    v-bind="$attrs"
    :class="cn(props.disabled && 'pointer-events-none opacity-50', props.class)"
    aria-labelledby="accordion">
    <slot test="alu">sdfsdf</slot>
  </div>
</template>
