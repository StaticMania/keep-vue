<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface AvatarGroupProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<AvatarGroupProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'flex items-center -space-x-3 *:ring *:ring-white dark:*:ring-metal-900',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
