<script lang="ts" setup>
import { computed, watch } from "vue";
import * as Dropzone from "vue3-dropzone";
import { cn } from "../../utils/cn";
import type { ClassProps } from "../../utils/interface";
import type { CommonUploadProps } from "./uploadInterface";
import { useUpload } from "./useUpload";

const props = defineProps<CommonUploadProps & ClassProps>();
const emit = defineEmits(["update:isDragActive"]);

const restProps = computed(() => {
  const { class: _, ...rest } = props;
  return rest;
});

const { options, horizontal } = useUpload();

const { getRootProps, getInputProps, isDragActive } =
  Dropzone.useDropzone(options);

watch(isDragActive, (newValue) => {
  emit("update:isDragActive", newValue);
});

defineExpose({ isDragActive });
</script>

<template>
  <div
    v-bind="{ ...restProps, ...getRootProps() }"
    :class="
      cn(
        horizontal
          ? 'flex cursor-pointer items-center gap-x-4 rounded-xl border border-dashed border-metal-300 bg-white p-4 transition-all duration-300 hover:bg-metal-25 dark:border-metal-700 dark:bg-metal-900 dark:hover:bg-metal-900'
          : 'flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-metal-300 bg-white p-6 text-center transition-all duration-300 hover:bg-metal-25 dark:border-metal-700 dark:bg-metal-900 dark:hover:bg-metal-900',
        props.class,
      )
    ">
    <input v-bind="{ ...getInputProps() }" />
    <slot />
  </div>
</template>
