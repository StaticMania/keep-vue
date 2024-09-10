<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

interface ModalFooterProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<ModalFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="cn('flex items-center gap-3', props.class)">
    <slot></slot>
  </div>
</template>
