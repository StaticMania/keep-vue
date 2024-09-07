<script lang="ts" setup>
import type { ButtonHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "./interface";

interface DotButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  asChild?: boolean;
}

const props = defineProps<DotButtonProps & ClassProps>();
</script>

<template>
  <slot v-if="asChild"></slot>
  <button
    v-else
    ref="HTMLButtonElement"
    type="button"
    v-bind="$attrs"
    :class="cn(props.class)">
    <slot></slot>
  </button>
</template>
