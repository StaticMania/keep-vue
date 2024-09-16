<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface AvatarGroupProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<AvatarGroupProps & ClassProps>();

const avatarGroupRef = ref<HTMLDivElement>();
</script>

<template>
  <div
    ref="avatarGroupRef"
    v-bind="$attrs"
    :class="cn('flex items-center -space-x-3', props.class)">
    <slot></slot>
  </div>
</template>
