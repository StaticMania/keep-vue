<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Pie Chart - Keep Vue",
  description:
    "The Pie Chart component offers an intuitive and visually compelling way to represent data distribution. With its circular graph divided into slices, users can easily visualize proportions and percentages of different categories within their dataset. Customizable features such as colors and hierarchical levels enhance the charts versatility, making it an essential tool for data analysis and presentation.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Pie Chart
  </DocsContentLayout>
</template>
