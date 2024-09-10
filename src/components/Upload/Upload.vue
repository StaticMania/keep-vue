<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import type { FileUploadOptions } from "vue3-dropzone";
import { cn } from "~/src/utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProvideUpload } from "./useUpload";

interface UploadProps extends /*@vue-ignore*/ HTMLAttributes {
  horizontal?: boolean;
  options?: Partial<FileUploadOptions>;
}

const props = defineProps<UploadProps & ClassProps>();

const restProps = computed(() => {
  const { class: _, horizontal, options, ...rest } = props;

  return rest;
});

useProvideUpload({ options: props.options, horizontal: props.horizontal });
</script>

<template>
  <div
    ref="HTMLDivElement"
    v-bind="restProps"
    :class="
      cn(
        'max-w-full rounded-xl border border-dashed border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900',
        props.class,
      )
    ">
    <slot></slot>
  </div>
</template>
