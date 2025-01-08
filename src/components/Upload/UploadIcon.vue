<script lang="ts" setup>
import { computed } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import type { CommonUploadProps } from "./uploadInterface";

const props = defineProps<CommonUploadProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div
    v-bind="restProps"
    :class="
      cn(
        'flex h-16 w-16 items-center justify-center rounded-full bg-metal-50 dark:bg-metal-800',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
