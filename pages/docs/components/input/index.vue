<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Input - Keep Vue",
  description:
    "Input Component is a fundamental user interface element used to collect user input or data in various forms, such as text, numbers, dates, or selections. It provides a space where users can type or select information, allowing them to interact with the application and provide necessary inputs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Input
  </DocsContentLayout>
</template>
