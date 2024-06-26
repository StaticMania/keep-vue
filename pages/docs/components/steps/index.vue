<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Steps - Keep Vue",
  description:
    "Steps Component is a user interface element used to guide users through a multi-step process or workflow. It presents a visual representation of the various stages or steps a user needs to complete in a sequential order. Each step is typically accompanied by a title, description, and an indicator of completion status, helping users track their progress.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Steps
  </DocsContentLayout>
</template>
