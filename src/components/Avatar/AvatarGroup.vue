<!-- AvatarGroup.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/helpers/cn";

interface AvatarGroupProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<AvatarGroupProps>();
const avatarGroupRef = ref<HTMLDivElement | null>(null);
</script>

<template>
  <div
    ref="avatarGroupRef"
    v-bind="$attrs"
    :class="cn('flex items-center -space-x-3', props.class)">
    <div v-if="$slots.default">
      <!-- Render slot content -->
      <slot></slot>
    </div>
    <div v-else>
      <!-- Debugging message if no slot content -->
      <p>No avatars provided</p>
    </div>
  </div>
</template>
