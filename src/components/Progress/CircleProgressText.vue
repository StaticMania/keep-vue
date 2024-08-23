<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { useProgressStore } from "./useProgressStore";

interface CircleProgressTextProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<CircleProgressTextProps>();

const { progressBar } = useProgressStore()!;
const circleProgressTextRef = ref<HTMLDivElement>();
</script>
<template>
  <div
    ref="circleProgressTextRef"
    v-bind="$attrs"
    :class="
      cn(
        'absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-body-4 font-medium text-primary-500',
        props.class,
      )
    ">
    {{ progressBar }}
  </div>
</template>
