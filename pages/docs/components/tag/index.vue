<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Tag - Keep Vue",
  description:
    "The Color Tag Component in the Keep React allows you to visually represent and label items. With customizable options for the style, icon.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Tag
  </DocsContentLayout>
</template>
