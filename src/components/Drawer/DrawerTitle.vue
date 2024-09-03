<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue";
import { DrawerTitle } from "vaul-vue";
import { type HtmlHTMLAttributes, computed } from "vue";
import { cn } from "../../utils/cn";

const props = defineProps<
  DrawerTitleProps & { class?: HtmlHTMLAttributes["class"] }
>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DrawerTitle
    v-bind="restProps"
    :class="
      cn('text-lg font-semibold leading-none tracking-tight', props.class)
    ">
    <slot />
  </DrawerTitle>
</template>
