<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface EmptyDescriptionProps extends /*@vue-ignore*/ HTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<EmptyDescriptionProps & ClassProps>();

// computed property that extracts and returns all the properties from the props object without the class property.
const restProps = computed(() => {
  const { class: _, asChild, ...rest } = props;
  return rest;
});
</script>
<template>
  <!-- user define element -->
  <slot v-if="asChild" v-bind="restProps"></slot>

  <!-- default element  -->
  <p
    v-else
    v-bind="restProps"
    :class="
      cn(
        'text-center text-body-3 font-normal text-metal-400 dark:text-metal-300',
        props.class,
      )
    ">
    <slot></slot>
  </p>
</template>
