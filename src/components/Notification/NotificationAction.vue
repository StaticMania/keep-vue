<script lang="ts" setup>
import { DialogTrigger, type DialogTriggerProps } from "radix-vue";
import { computed, defineProps } from "vue";
import type { ClassProps } from "../../utils/interface";

const props = defineProps<DialogTriggerProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <DialogTrigger v-bind="restProps">
    <slot></slot>
  </DialogTrigger>
</template>
