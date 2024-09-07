<script lang="ts" setup>
import type { HTMLAttributes, HtmlHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import { skeletonTheme } from "./skeletonTheme";

interface SkeletonProps extends /* @vue-ignore */ HTMLAttributes {
  animation?: boolean;
  class?: HtmlHTMLAttributes["class"];
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  animation: true,
  class: "",
});

const restProps = computed(() => {
  const { class: _, animation, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <div
    ref="HTMLDivElement"
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
