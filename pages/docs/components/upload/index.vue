<script setup lang="ts">
import DefaultUpload from "./variant/DefaultUpload.vue";
import HorizontalUpload from "./variant/HorizontalUpload.vue";
import SingleUpload from "./variant/SingleUpload.vue";
import UploadDisabled from "./variant/UploadDisabled.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Upload - Keep Vue",
  description:
    "Upload Component is a user interface element that enables users to upload files or media from their local device to a web application or platform. It provides a means to select files, preview them if applicable, and initiate the upload process. The component is essential for allowing users to share content, images, documents, and other files with the application or website.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Upload</h3>
        <DefaultUpload />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Horizontal Upload</h3>
        <HorizontalUpload />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Single Upload</h3>
        <SingleUpload />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Upload Disabled</h3>
        <UploadDisabled />
      </div>
    </div>
  </DocsContentLayout>
</template>
