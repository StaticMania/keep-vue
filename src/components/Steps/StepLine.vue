<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface StepLineProps extends /* @vue-ignore */ HtmlHTMLAttributes {
  completed?: boolean;
  stepLineBg?: string;
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<StepLineProps>();

const restProps = computed(() => {
  const { class: _, stepLineBg, completed, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
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
      "></div>
  </div>
</template>
