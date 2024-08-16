<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/helpers/cn";

interface AvatarGroupProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AvatarGroupProps>();

const avatarGroupRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    ref="avatarGroupRef"
    v-bind="$attrs"
    :class="cn('flex items-center -space-x-3', props.class)">
    <slot>dsfsdf</slot>
  </div>
</template>
