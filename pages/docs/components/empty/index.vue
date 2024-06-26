<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Empty - Keep Vue",
  description:
    "Empty Component is a user interface element specifically designed to handle situations where a requested page or resource cannot be found. It is often displayed when a user navigates to a URL that doesn't correspond to any existing content within the application or website.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Empty
  </DocsContentLayout>
</template>
