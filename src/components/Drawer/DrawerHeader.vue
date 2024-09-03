<script lang="ts" setup>
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface DrawerHeaderProps {
  class?: HtmlHTMLAttributes["class"];
}

const props = defineProps<DrawerHeaderProps>();
</script>

<template>
  <div :class="cn('grid gap-1.5 p-4 text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
