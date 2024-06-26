<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Pagination - Keep Vue",
  description:
    "The Pagination component enhances user experience by providing a user-friendly way to navigate through large sets of content. Whether its articles, search results, or product listings, Pagination breaks down the data into manageable pages, allowing users to easily access different sections.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Pagination
  </DocsContentLayout>
</template>
