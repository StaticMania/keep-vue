<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface TableCaptionProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableCaptionProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <caption
    ref="HTMLTableCaptionElement"
    v-bind="restProps"
    :class="
      cn(
        'bg-white px-6 py-4 text-body-4 text-metal-900 dark:bg-metal-900 dark:text-white',
        props.class,
      )
    ">
    <slot></slot>
  </caption>
</template>
