<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed, ref } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface AvatarGroupProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<AvatarGroupProps & ClassProps>();

const avatarGroupRef = ref<HTMLDivElement>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    ref="avatarGroupRef"
    v-bind="restProps"
    :class="cn('flex items-center -space-x-3', props.class)">
    <slot></slot>
  </div>
</template>
