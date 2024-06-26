<script setup lang="ts">
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
    :description="metadata.description"
  >
    Upload
  </DocsContentLayout>
</template>
