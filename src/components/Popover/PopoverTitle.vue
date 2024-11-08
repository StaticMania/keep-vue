<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface PopoverTitleProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<PopoverTitleProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <h2
    v-bind="restProps"
    :class="
      cn('text-body-3 font-medium text-metal-900 dark:text-white', props.class)
    ">
    <slot />
  </h2>
</template>
