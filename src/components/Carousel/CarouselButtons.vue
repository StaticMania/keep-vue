<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";

const props = defineProps<ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="cn(carouselTheme.controls.button.container, props.class)">
    <slot></slot>
  </div>
</template>
