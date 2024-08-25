<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface EmptyTitleProps {
  class?: HTMLAttributes["class"];
  asChild?: boolean;
}

const props = defineProps<EmptyTitleProps>();

const emptyTitleRef = ref<HTMLParagraphElement>();
const emptyTitleAsChildRef = ref<HTMLElement>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
<template>
  <slot v-if="asChild" v-bind="restProps" :ref="emptyTitleAsChildRef"></slot>

  <h1
    v-else
    ref="emptyTitleRef"
    v-bind="restProps"
    :class="
      cn(
        'text-heading-5 font-medium text-metal-700 dark:text-white',
        props.class,
      )
    ">
    <slot></slot>
  </h1>
</template>
