<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface StepsProps {
  class?: HtmlHTMLAttributes["class"];
}

const stepsRef = ref<HTMLDivElement | null>(null);
const props = defineProps<StepsProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>
<template>
  <div
    ref="stepsRef"
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
