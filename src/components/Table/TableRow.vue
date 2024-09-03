<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface TableRowProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableRowProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <tr
    ref="HTMLTableRowElement"
    v-bind="restProps"
    :class="
      cn(
        'border-b border-b-metal-50 transition-colors hover:bg-metal-25 data-[state=selected]:bg-metal-50 dark:border-b-metal-800 dark:hover:bg-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </tr>
</template>
