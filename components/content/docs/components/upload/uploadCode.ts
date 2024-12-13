const DefaultUploadCode = {
  "UploadComponent.vue": `<script setup>
import { PhInfo, PhTrash } from "phosphor-vue";  
import {ref,watch} from "vue";  
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-vue";

const files = ref([]);
function onDrop(acceptedFiles) {
  files.value = acceptedFiles;
}

const options = ref({
  multiple: true,
  onDrop,
  accept: ".jpg",
});

const dragState = ref(false);
watch(dragState, (newValue) => {
  dragState.value = newValue;
});

</script>

<template>
    <Upload :options="options">
        <UploadBody v-model:isDragActive="dragState" class="space-y-4">
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
            <p
              class="text-body-4 font-normal text-metal-400 dark:text-metal-300">
              DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
            </p>
          </UploadText>

          <Button variant="outline" color="secondary">Browse</Button>
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
</template>`,
};

const HorizontalUploadCode = {
  "UploadComponent.vue": `<script setup>
import { PhInfo, PhTrash } from "phosphor-vue";
import {ref,watch} from "vue";    
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-vue";


const files = ref([]);

function onDrop(acceptedFiles) {
  files.value = acceptedFiles;
}

const options = ref({
  multiple: true,
  onDrop,
  accept: ".jpg",
});

const dragState = ref(false);
watch(dragState, (newValue) => {
  dragState.value = newValue;
});
</script>

<template>
   <Upload horizontal :options="options">
        <UploadBody
          v-model:isDragActive="dragState"
          class="flex items-center justify-between">
          <div class="flex items-center gap-x-3">
            <UploadIcon class="">
              <NuxtImg
                src="/images/icon/CloudArrowUp.svg"
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
                Upload your cv
              </p>
              <p
                class="text-body-4 font-normal text-metal-400 dark:text-metal-300">
                DOCX or PDF formats, up to 5MB.
              </p>
            </UploadText>
          </div>
          <Button variant="outline" color="secondary">Upload</Button>
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
</template>`,
};

const SingleUploadCode = {
  "UploadComponent.vue": `<script setup>
import { PhInfo, PhTrash} from "phosphor-vue";
import {ref,watch} from "vue";    
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-vue";


const files = ref([]);

function onDrop(acceptedFiles) {
  files.value = acceptedFiles;
}

const options = ref({
  multiple: false,
  onDrop,
  accept: ".jpg",
});

const dragState = ref(false);
watch(dragState, (newValue) => {
  dragState.value = newValue;
});
</script>

<template>
   <Upload :options="options">
        <UploadBody v-model:isDragActive="dragState" class="space-y-4">
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
            <p
              class="text-body-4 font-normal text-metal-400 dark:text-metal-300">
              DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
            </p>
          </UploadText>
          <Button variant="outline" color="secondary">Browse</Button>
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
</template>`,
};

const UploadDisabledCode = {
  "UploadComponent.vue": `<script setup>
import { PhInfo, PhTrash } from "phosphor-vue";
import {ref,watch} from "vue";  
import {
  Upload,
  UploadBody,
  UploadFooter,
  UploadIcon,
  UploadText,
} from "keep-vue";

const files = ref>([]);

function onDrop(acceptedFiles) {
  files.value = acceptedFiles;
}

const options = ref({
  onDrop,
  disabled: true,
});

const dragState = ref(false);
watch(dragState, (newValue) => {
  dragState.value = newValue;
});
</script>

<template>
   <Upload :options="options">
        <UploadBody
          v-model:isDragActive="dragState"
          class="cursor-not-allowed space-y-4">
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
            <p
              class="text-body-4 font-normal text-metal-400 dark:text-metal-300">
              DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
            </p>
          </UploadText>
          <Button variant="outline" color="secondary">Browse</Button>
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
</template>`,
};

export {
  DefaultUploadCode,
  HorizontalUploadCode,
  SingleUploadCode,
  UploadDisabledCode,
};
