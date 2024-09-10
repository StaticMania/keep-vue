<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface ModalFooterProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<ModalFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn('flex flex-col gap-1', props.class)">
    <slot></slot>
  </div>
</template>
