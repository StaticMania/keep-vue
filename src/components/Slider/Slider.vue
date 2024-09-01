<script lang="ts" setup>
import { SliderRange, SliderRoot, SliderTrack } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface SliderProps {
  trackClass?: string;
  rangeClass?: string;
  thumbClass?: string;
  class?: HTMLAttributes["class"];
}
const props = defineProps<SliderProps>();

const restProps = computed(() => {
  const { class: _, trackClass, rangeClass, thumbClass, ...delegated } = props;
  return delegated;
});

const sliderRef = ref<typeof SliderRoot>();
</script>

<template>
  <SliderRoot
    ref="sliderRef"
    v-bind="restProps"
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center',
        props.class,
      )
    ">
    <SliderTrack
      :class="
        cn(
          'relative h-2 w-full grow overflow-hidden rounded-full bg-primary-25',
          props.trackClass,
        )
      ">
      <SliderRange
        :class="
          cn('absolute h-full bg-primary-500', props.rangeClass)
        "></SliderRange>
    </SliderTrack>

    <SliderThumb
      :class="
        cn(
          'block h-5 w-5 rounded-full border-2 border-primary-500 bg-primary-25 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          props.thumbClass,
        )
      " />

    <SliderThumb
      :class="
        cn(
          'block h-5 w-5 rounded-full border-2 border-primary-500 bg-primary-25 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          props.thumbClass,
        )
      " />
  </SliderRoot>
</template>
