<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Sidebar - Keep Vue",
  description:
    "Sidebar Component is a user interface element commonly found in web and mobile applications. It provides a dedicated space at the side of the main content area to display navigation links, menu items, or other relevant information.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Sidebar
  </DocsContentLayout>
</template>
