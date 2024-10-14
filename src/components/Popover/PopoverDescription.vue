<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";

import { cn } from "../../utils/cn";
import type { ClassProps } from "../Carousel/interface";

export interface PopoverDescriptionProps
  extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<PopoverDescriptionProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <p
    v-bind="restProps"
    :class="
      cn(
        'text-body-4 font-normal text-metal-600 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
