<script setup lang="ts">
import { AvatarFallback, type AvatarFallbackProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<AvatarFallbackProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <AvatarFallback
    v-bind="restProps"
    :class="
      cn(
        'flex h-full w-full items-center justify-center rounded-full bg-metal-50 text-body-4 font-medium dark:bg-metal-800',
        props.class,
      )
    ">
    <slot />
  </AvatarFallback>
</template>
