<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import type { FileUploadOptions } from "vue3-dropzone";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import { useProvideUpload } from "./useUpload";

export interface UploadProps extends /*@vue-ignore*/ HTMLAttributes {
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
    v-bind="restProps"
    :class="
      cn(
        'w-full',
        props.horizontal ? 'max-w-[468px]' : 'max-w-[440px]',
        props.class,
      )
    ">
    <slot />
  </div>
</template>
