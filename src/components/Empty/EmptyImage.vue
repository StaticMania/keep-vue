<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface EmptyImageProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<EmptyImageProps>();
const emptyImageRef = ref<HTMLDivElement>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>
<template>
  <div ref="emptyImageRef" v-bind="restProps" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
