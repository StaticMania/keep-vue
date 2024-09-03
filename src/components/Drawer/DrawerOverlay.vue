<script lang="ts" setup>
import type { DialogOverlayProps } from "radix-vue";
import { DrawerOverlay } from "vaul-vue";
import { type HtmlHTMLAttributes, computed } from "vue";
import { cn } from "../../utils/cn";

const props = defineProps<
  DialogOverlayProps & { class?: HtmlHTMLAttributes["class"] }
>();

const restProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DrawerOverlay
    v-bind="restProps"
    :class="cn('fixed inset-0 z-50 bg-black/80', props.class)" />
</template>
