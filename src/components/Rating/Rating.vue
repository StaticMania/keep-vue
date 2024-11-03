<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProvideRatingStore } from "./useRatingStore";

export interface RatingProps extends /*@vue-ignore*/ HTMLAttributes {
  handleRating?: (value: number | undefined) => void;
}

const props = defineProps<RatingProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, handleRating, ...rest } = props;
  return rest;
});

useProvideRatingStore(props.handleRating);
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn('items center flex flex-row-reverse justify-end gap-0.5', props.class)
    ">
    <slot />
  </div>
</template>
