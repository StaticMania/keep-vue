<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProgressStore } from "./useProgressStore";

interface LineProgressText extends /* @vue-ignore*/ HTMLAttributes {}
const props = defineProps<LineProgressText & ClassProps>();
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
      cn('w-10 text-end text-body-4 font-medium text-primary-500', props.class)
    ">
    {{ progressBar }}%
  </div>
</template>
