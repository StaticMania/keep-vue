<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface DrawerFooterProps {
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<DrawerFooterProps>();
</script>

<template>
  <div :class="cn('mt-auto flex flex-col gap-2 p-4', props.class)">
    <slot></slot>
  </div>
</template>
