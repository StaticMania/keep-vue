<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed, defineProps } from "vue";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";

export interface UploadFooterProps extends /*@vue-ignore*/ HTMLAttributes {
  isFileExists?: boolean;
}

const props = defineProps<UploadFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, isFileExists, ...rest } = props;
  return rest;
});
</script>

<template>
  <div v-bind="restProps" :class="cn(props.class)">
    <slot v-if="isFileExists"></slot>
  </div>
</template>
