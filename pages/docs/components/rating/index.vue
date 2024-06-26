<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Rating - Keep Vue",
  description:
    "The Rating Component in the Keep React allows users to provide ratings for various items or content. It provides a visual representation of the rating using a set of stars or other symbols. With customizable options for the rating status, you can create rating components that accurately reflect user feedback.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Rating
  </DocsContentLayout>
</template>
