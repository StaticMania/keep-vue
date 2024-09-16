<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface EmptyProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<EmptyProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>
<template>
  <div
    ref="HTMLDivElement"
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
