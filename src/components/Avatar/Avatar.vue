<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";

interface AvatarProps {
  class?: HTMLAttributes["class"];
}
const avatarRef = ref<null | HTMLDivElement>(null);
const props = defineProps<AvatarProps>();
</script>
<template>
  <div
    ref="avatarRef"
    v-bind="$attrs"
    :class="
      cn(
        'relative flex size-12 shrink-0 items-center justify-center rounded-full border border-metal-200 bg-metal-50 dark:border-metal-800 dark:bg-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
