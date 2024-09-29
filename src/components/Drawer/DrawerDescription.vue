<script lang="ts" setup>
import { DrawerDescription, type DrawerDescriptionProps } from "vaul-vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DrawerDescriptionProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <DrawerDescription
    v-bind="restProps"
    :class="cn('text-sm text-metal-500', props.class)">
    <slot></slot>
  </DrawerDescription>
</template>
