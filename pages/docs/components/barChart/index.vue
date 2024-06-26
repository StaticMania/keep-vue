<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Bar Chart - Keep Vue",
  description:
    "The Bar Chart component provides a visual representation of data through bars of varying lengths. It's a graphical representation commonly used to display and compare the values of different categories or groups. The Bar Chart component is highly customizable and can be tailored to fit various data visualization needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Bar Chart
  </DocsContentLayout>
</template>
