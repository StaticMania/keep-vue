<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import { useProvideRatingStore } from "./useRatingStore";

interface RatingProps {
  handleRating?: (value: number | undefined) => void;
  class?: HTMLAttributes["class"];
}

const props = defineProps<RatingProps>();

const restProps = computed(() => {
  const { class: _, handleRating, ...delegated } = props;
  return delegated;
});

const ratingRef = ref<HTMLDivElement>();

useProvideRatingStore(props.handleRating);
</script>

<template>
  <div
    ref="ratingRef"
    v-bind="restProps"
    :class="
      cn('items center flex flex-row-reverse justify-end gap-0.5', props.class)
    ">
    <slot></slot>
  </div>
</template>
