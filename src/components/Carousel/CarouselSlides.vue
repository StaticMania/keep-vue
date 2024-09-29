<script lang="ts" setup>
import { defineProps } from "vue";
import { cn } from "../../utils/cn";
import { carouselTheme } from "./carouselTheme";
import type { ClassProps } from "./interface";

const props = defineProps<ClassProps>();
</script>

<template>
  <div v-bind="$attrs" :class="cn(carouselTheme.item.container, props.class)">
    <slot></slot>
  </div>
</template>
