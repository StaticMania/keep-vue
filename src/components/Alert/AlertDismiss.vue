<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

import type { ClassProps } from "../../utils/interface";
import { alertTheme, type ColorVariant } from "./alertTheme";
import { useAlert } from "./useAlert";

interface AlertDismissProps extends /* @vue-ignore */ ButtonHTMLAttributes {}

const props = defineProps<AlertDismissProps & ClassProps>();

const { link } = alertTheme;

const { color } = useAlert();

const emit = defineEmits(["dismiss"]);

const handleDismiss = () => {
  emit("dismiss");
};

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <button
    v-bind="restProps"
    ref="HTMLButtonElement"
    :class="cn(link.color[color as keyof ColorVariant], props.class)"
    @click="handleDismiss">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 256 256">
        <path
          d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </slot>
  </button>
</template>
