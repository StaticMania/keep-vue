<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { inputTheme } from "./inputTheme";

export interface InputIconProps extends /*@vue-ignore */ HtmlHTMLAttributes {}

const props = defineProps<InputIconProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;
  return delegated;
});
</script>

<template>
  <div v-bind="restProps" :class="cn(inputTheme.icon, props.class)">
    <slot></slot>
  </div>
</template>
