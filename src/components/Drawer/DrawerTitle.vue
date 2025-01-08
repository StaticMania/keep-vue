<script lang="ts" setup>
import type { DrawerTitleProps } from "vaul-vue";
import { DrawerTitle } from "vaul-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DrawerTitleProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;

  return rest;
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
