<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface StepLineProps extends /* @vue-ignore */ HTMLAttributes {
  completed?: boolean;
  stepLineBg?: string;
}

const props = defineProps<StepLineProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, stepLineBg, completed, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn('relative h-0.5 w-full rounded-full bg-primary-25', props.stepLineBg)
    ">
    <div
      :style="{ width: completed ? '100%' : '0%' }"
      :class="
        cn(
          'absolute bottom-0 left-0 top-0 rounded-full bg-primary-500',
          props.class,
        )
      " />
  </div>
</template>
