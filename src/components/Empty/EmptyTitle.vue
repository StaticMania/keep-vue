<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface EmptyTitleProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<EmptyTitleProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>
<template>
  <slot v-if="asChild" v-bind="restProps"></slot>

  <h1
    v-else
    v-bind="restProps"
    :class="
      cn(
        'text-heading-5 font-medium text-metal-700 dark:text-white',
        props.class,
      )
    ">
    <slot />
  </h1>
</template>
