<script setup lang="ts">
import { cn } from "~/src/helpers/cn";
import { alertTheme } from "./alertTheme";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :class="cn(alertTheme.container.base, props.class)"
    ref="alertContainer"
    v-bind="$attrs">
    <slot></slot>
  </div>
</template>
