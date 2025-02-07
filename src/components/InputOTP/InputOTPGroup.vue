<script setup lang="ts">
import { Primitive, type PrimitiveProps, useForwardProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<PrimitiveProps & ClassProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
const forwardedProps = useForwardProps(restProps);
</script>

<template>
  <Primitive
    v-bind="forwardedProps"
    :class="cn('flex items-center gap-2.5', props.class)">
    <slot />
  </Primitive>
</template>
