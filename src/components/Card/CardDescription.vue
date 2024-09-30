<script lang="ts" setup>
import { computed, defineProps, withDefaults, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface CardDescriptionProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}
const props = withDefaults(defineProps<CardDescriptionProps & ClassProps>(), {
  asChild: false,
  class: "",
});

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <slot v-if="props.asChild" v-bind="restProps"></slot>

  <p
    v-else
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
