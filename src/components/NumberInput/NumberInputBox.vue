<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface NumberInputBoxProps {
  class?: HTMLAttributes["class"];
  min?: number;
  max?: number;
}

const props = defineProps<NumberInputBoxProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const numberInputRef = ref<HTMLInputElement>();

//needed for animation later
// const variants = reactive({
//   initial: { opacity: 0, y: "10px" },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: "-10px" },
// });

const proxyValue = defineModel<number>();
</script>

<template>
  <input
    ref="numberInputRef"
    v-bind="restProps"
    v-model="proxyValue"
    :min="props.min"
    :max="props.max"
    type="number"
    :class="
      cn(
        'flex-auto bg-transparent px-3 py-2.5 text-center text-body-3 font-medium text-metal-900 outline-none',
        props.class,
      )
    " />
</template>
