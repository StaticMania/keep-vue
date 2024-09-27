<script setup lang="ts">
import { TooltipTrigger, type TooltipTriggerProps } from "radix-vue";
import { defineProps } from "vue";
const props = defineProps<TooltipTriggerProps>();
</script>

<template>
  <TooltipTrigger v-bind="props">
    <slot />
  </TooltipTrigger>
</template>
