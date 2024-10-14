<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "./interface";

export interface DotButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<DotButtonProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, asChild, type, ...rest } = props;
  return rest;
});
</script>

<template>
  <slot v-if="asChild" v-bind="restProps"></slot>
  <button v-else type="button" v-bind="restProps" :class="cn(props.class)">
    <slot></slot>
  </button>
</template>
