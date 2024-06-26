<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "LineChart - Keep Vue",
  description:
    "The Line Chart component is a powerful tool for visualizing numerical data trends over time or across categories. With its clear and intuitive presentation, it enables users to easily identify patterns, correlations, and outliers within their datasets.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Line Chart
  </DocsContentLayout>
</template>
