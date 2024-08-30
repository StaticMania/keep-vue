<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface NumberInputButtonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<NumberInputButtonProps>();

const numberInputBtnRef = ref<null | HTMLButtonElement>(null);

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <button
    v-bind="restProps"
    ref="numberInputBtnRef"
    :class="cn('max-w-max flex-1', props.class)">
    <slot></slot>
  </button>
</template>
