<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface EmptyImageProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<EmptyImageProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div ref="HTMLDivElement" v-bind="restProps" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
