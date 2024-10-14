<script lang="ts" setup>
import { computed, ref } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

const avatarRef = ref<null | HTMLDivElement>(null);
const props = defineProps<ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>
<template>
  <div
    ref="avatarRef"
    v-bind="restProps"
    :class="
      cn(
        'relative flex size-12 shrink-0 items-center justify-center rounded-full border border-metal-200 bg-metal-50 dark:border-metal-800 dark:bg-metal-800',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
