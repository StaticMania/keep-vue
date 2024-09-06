<script lang="ts" setup>
import { cn } from "~/src/utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";

const props = defineProps<ClassProps>();
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="$attrs"
    :class="cn(carouselTheme.controls.wrapper, props.class)">
    <slot></slot>
  </div>
</template>
