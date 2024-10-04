<script lang="ts" setup>
import {
  DialogRoot,
  useForwardPropsEmits,
  type DialogRootEmits,
  type DialogRootProps,
} from "radix-vue";
import { defineEmits, defineProps } from "vue";

const props = defineProps<DialogRootProps>();
const emits = defineEmits<DialogRootEmits>();

const forwardProps = useForwardPropsEmits(props, emits);
</script>

<template>
  <DialogRoot v-bind="forwardProps">
    <slot></slot>
  </DialogRoot>
</template>
