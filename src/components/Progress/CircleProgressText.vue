<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProgressStore } from "./useProgressStore";

export interface CircleProgressTextProps
  extends /* @vue-ignore*/ HTMLAttributes {}

const props = defineProps<CircleProgressTextProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { progressBar } = useProgressStore()!;
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-body-4 font-medium text-primary-500',
        props.class,
      )
    ">
    {{ progressBar }}
  </div>
</template>
