<script setup lang="ts">
import { PopoverTrigger, type PopoverTriggerProps } from "radix-vue";
import { defineProps } from "vue";

const props = defineProps<PopoverTriggerProps>();
</script>

<template>
  <PopoverTrigger v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
