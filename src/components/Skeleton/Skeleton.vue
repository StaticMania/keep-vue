<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps, withDefaults } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { skeletonTheme } from "./skeletonTheme";

export interface SkeletonProps extends /* @vue-ignore */ HTMLAttributes {
  animation?: boolean;
}

const props = withDefaults(defineProps<SkeletonProps & ClassProps>(), {
  animation: true,
  class: "",
});

const restProps = computed(() => {
  const { class: _, animation, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        props.animation && skeletonTheme.animation,
        skeletonTheme.base,
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
