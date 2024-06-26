<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Divider - Keep Vue",
  description:
    "The Divider component serves as a visual separator, helping to organize content and improve readability in user interfaces. It allows you to add horizontal lines or dividers between different sections of a page or within a component. With customizable options for color, size, and alignment, the Divider component enhances the overall design and structure of your application.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Divider
  </DocsContentLayout>
</template>
