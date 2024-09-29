<script lang="ts" setup>
import {
  useForwardPropsEmits,
  type DropdownMenuRootEmits,
  type DropdownMenuRootProps,
} from "radix-vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps<DropdownMenuRootProps>();
const emits = defineEmits<DropdownMenuRootEmits>();

const forwardPropsAndEmits = useForwardPropsEmits(props, emits);
</script>

<template>
  <DropdownMenuRoot v-bind="forwardPropsAndEmits">
    <slot></slot>
  </DropdownMenuRoot>
</template>
