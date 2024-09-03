<script lang="ts" setup>
import { DrawerDescription, type DrawerDescriptionProps } from "vaul-vue";
import type { HtmlHTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";

const props = defineProps<
  DrawerDescriptionProps & { class?: HtmlHTMLAttributes["class"] }
>();
const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DrawerDescription
    v-bind="restProps"
    :class="cn('text-sm text-metal-500', props.class)">
    <slot></slot>
  </DrawerDescription>
</template>
