<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface AvatarTextProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<AvatarTextProps & ClassProps>();

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
