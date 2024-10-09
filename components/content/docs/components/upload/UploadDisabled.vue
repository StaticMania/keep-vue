<script lang="ts" setup>
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "~/src";
import { UploadDisabledCode } from "./uploadCode";
interface UploadedFile {
  path?: string;
  name?: string;
  lastModified?: number;
  lastModifiedDate?: string;
  type?: string;
  size?: number;
}
const files = ref<UploadedFile[]>([]);

function onDrop(acceptedFiles: UploadedFile[]) {
  files.value = acceptedFiles;
}

const options = reactive({
  onDrop,
  disabled: true,
});

const dragState = ref(false);
watch(dragState, (newValue) => {
  dragState.value = newValue;
});
</script>

<template>
  <CodeHighlightWithPreview :code="UploadDisabledCode">
    <Upload :options="options">
      <UploadBody v-model:isDragActive="dragState">
        <UploadIcon>
          <NuxtImg
            src="/images/icon/folder.svg"
            alt="folder"
            :height="28"
            :width="28" />
        </UploadIcon>
        <UploadText>
          <p
            v-if="dragState"
            class="text-body-3 font-medium text-metal-600 dark:text-white">
            Drag File to Upload
          </p>
          <p
            v-else
            class="text-body-3 font-medium text-metal-600 dark:text-white">
            Drag & Drop or Choose File to Upload
          </p>
          <p class="text-body-4 font-normal text-metal-400 dark:text-metal-300">
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </p>
        </UploadText>
      </UploadBody>
      <UploadFooter :is-file-exists="files.length > 0">
        <p
          class="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600 dark:text-metal-300">
          <PhosphorIconInfo :size="16" />
          Uploaded Files
        </p>
        <ul class="space-y-1">
          <li
            v-for="file in files"
            :key="file?.name"
            class="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600 dark:border-l-metal-600 dark:bg-metal-800 dark:text-metal-300">
            {{ file?.name }}
            <PhosphorIconTrash :size="16" color="red" />
          </li>
        </ul>
      </UploadFooter>
    </Upload>
  </CodeHighlightWithPreview>
</template>
