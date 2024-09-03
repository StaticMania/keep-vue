<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface TableBodyProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableBodyProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <tbody
    ref="HTMLTableSectionElement"
    v-bind="restProps"
    :class="cn('[&_tr:last-child]:border-0', props.class)">
    <slot></slot>
  </tbody>
</template>
