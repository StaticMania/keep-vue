<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface EmptyProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<EmptyProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const EmptyRef = ref<HTMLDivElement>();
</script>
<template>
  <div
    ref="EmptyRef"
    v-bind="restProps"
    :class="
      cn(
        'mx-auto flex max-w-xl flex-col items-center justify-center p-6',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
