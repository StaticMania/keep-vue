<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";

export interface StepsProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<StepsProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'relative mx-auto flex w-full items-center justify-between gap-x-5',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
