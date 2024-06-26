<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Drawer - Keep Vue",
  description:
    "The Drawer component provides a flexible and customizable way to create drawers that can slide in from different directions (left, right, top, or bottom) within your React application. It supports features like animation, keyboard accessibility (ESC key to close), and clicking outside the drawer to close it.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Drawer
  </DocsContentLayout>
</template>
