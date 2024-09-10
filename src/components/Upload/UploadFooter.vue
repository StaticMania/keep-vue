<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";

interface UploadFooterProps extends /*@vue-ignore*/ HTMLAttributes {
  isFileExists?: boolean;
}

const props = defineProps<UploadFooterProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, isFileExists, ...rest } = props;
  return rest;
});
</script>

<template>
  <div ref="HTMLDivElement" v-bind="restProps" :class="cn(props.class)">
    <slot v-if="isFileExists"></slot>
  </div>
</template>
