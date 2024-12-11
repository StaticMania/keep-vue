<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<AvatarImageProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <AvatarImage
    v-bind="restProps"
    :class="cn('aspect-square h-full w-full', props.class)" />
</template>
