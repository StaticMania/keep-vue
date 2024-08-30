<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface NumberInputProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<NumberInputProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const numberInputRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    ref="numberInputRef"
    v-bind="restProps"
    :class="
      cn(
        'flex h-12 max-w-sm items-center justify-between rounded-lg border border-metal-100 bg-white px-5',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
