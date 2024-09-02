<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface TableHeaderProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<TableHeaderProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <thead
    ref="HTMLTableSectionElement"
    v-bind="restProps"
    :class="cn('[&_tr]:border-b', props.class)">
    <slot></slot>
  </thead>
</template>
