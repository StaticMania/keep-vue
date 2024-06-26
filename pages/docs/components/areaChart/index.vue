<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Area Chart - Keep Vue",
  description:
    "An Area Chart is a visual way to show data as a line that turns into a colored shape below it. This shape helps you understand how the data changes over time or categories. It's like coloring under a line graph to see where the data is bigger or smaller. People use Area Charts to see trends, compare things, and notice patterns in data. The colored area makes it clear which parts are higher or lower in value",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Area Chart
  </DocsContentLayout>
</template>
