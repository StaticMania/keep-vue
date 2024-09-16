<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface CardHeaderProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CardHeaderProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div v-bind="restProps" ref="HTMLDivElement" :class="cn(props.class)">
    <slot></slot>
  </div>
</template>
