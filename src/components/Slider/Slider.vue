<script lang="ts" setup>
import type { SliderRootEmits, SliderRootProps } from "radix-vue";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from "radix-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface SliderProps {
  trackClass?: string;
  rangeClass?: string;
  thumbClass?: string;
}
const props = defineProps<SliderRootProps & SliderProps & ClassProps>();

const emits = defineEmits<SliderRootEmits>();

const restProps = computed(() => {
  const { class: _, trackClass, rangeClass, thumbClass, ...rest } = props;
  return rest;
});

const forwarded = useForwardPropsEmits(restProps, emits);
</script>

<template>
  <!-- root  -->
  <SliderRoot
    v-bind="forwarded"
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center',
        props.class,
      )
    ">
    <!-- track  -->
    <SliderTrack
      :class="
        cn(
          'relative h-2 w-full grow overflow-hidden rounded-full bg-primary-25',
          props.trackClass,
        )
      ">
      <!-- range  -->
      <SliderRange
        :class="cn('absolute h-full bg-primary-500', props.rangeClass)" />
    </SliderTrack>

    <!-- thumb -->
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      :class="
        cn(
          'block h-5 w-5 rounded-full border-2 border-primary-500 bg-primary-25 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          props.thumbClass,
        )
      " />
  </SliderRoot>
</template>
