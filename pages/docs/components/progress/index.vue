<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Progress - Keep Vue",
  description:
    "The Progress Bar Component in the Keep React allows you to visually represent the progress or completion of a task or process.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Progress
  </DocsContentLayout>
</template>
