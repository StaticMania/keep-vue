<script setup lang="ts">
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "~/src/utils/interface";

const props = defineProps<ClassProps>();
</script>

<template>
  <!-- command shortcut  -->
  <span :class="cn('ml-auto text-body-5 text-metal-400', props.class)">
    <slot />
  </span>
</template>
