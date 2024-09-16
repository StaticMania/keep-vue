<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

interface DrawerFooterProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<DrawerFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="cn('mt-auto flex flex-col gap-2 p-4', props.class)">
    <slot></slot>
  </div>
</template>
