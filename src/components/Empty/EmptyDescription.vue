<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface EmptyDescriptionProps {
  asChild?: boolean;
  class?: HTMLAttributes["class"];
}

const props = defineProps<EmptyDescriptionProps>();

const emptyDescriptionAsChildRef = ref<HTMLElement>();
const emptyDescriptionRef = ref<HTMLParagraphElement>();

// computed property that extracts and returns all the properties from the props object without the class property.
const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
<template>
  <slot
    :ref="emptyDescriptionAsChildRef"
    v-if="asChild"
    v-bind="restProps"></slot>

  <p
    v-else
    v-bind="restProps"
    ref="emptyDescriptionRef"
    :class="
      cn(
        'text-center text-body-3 font-normal text-metal-400 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
