<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

interface AvatarTextProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AvatarTextProps>();

const avatarTextRef = ref<HTMLSpanElement>();
</script>

<template>
  <span
    ref="avatarTextRef"
    v-bind="$attrs"
    :class="
      cn(
        'flex h-full w-full items-center justify-center rounded-full text-body-4 font-semibold text-metal-900 dark:text-white',
        props.class,
      )
    ">
    <slot></slot>
  </span>
</template>
