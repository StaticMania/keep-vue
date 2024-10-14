<script lang="ts" setup>
import { computed, type HTMLAttributes } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import type { CommonUploadProps } from "./uploadInterface";

export interface UploadTextProps extends /*@vue-ignore*/ HTMLAttributes {}

const props = defineProps<CommonUploadProps & ClassProps & UploadTextProps>();
const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn('my-5 space-y-2', props.class)">
    <slot></slot>
  </div>
</template>
