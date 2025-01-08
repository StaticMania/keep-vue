<script lang="ts" setup>
import type { DialogOverlayProps } from "radix-vue";
import { DrawerOverlay } from "vaul-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogOverlayProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
});
</script>

<template>
  <DrawerOverlay
    v-bind="restProps"
    :class="cn('fixed inset-0 z-50 bg-black/80', props.class)" />
</template>
