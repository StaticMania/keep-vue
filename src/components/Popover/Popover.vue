<script lang="ts" setup>
import {
  PopoverRoot,
  useForwardPropsEmits,
  type PopoverRootEmits,
  type PopoverRootProps,
} from "radix-vue";

const props = defineProps<PopoverRootProps>();
const emits = defineEmits<PopoverRootEmits>();

const propsEmit = useForwardPropsEmits(props, emits);
</script>

<template>
  <PopoverRoot v-bind="propsEmit">
    <slot></slot>
  </PopoverRoot>
</template>
