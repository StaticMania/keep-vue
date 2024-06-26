<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Tooltip - Keep Vue",
  description:
    "The Tooltips component in the Keep React allows you to provide additional information or context to users when they hover over or interact with specific elements. With customizable options for type, theme, and arrow placement, you can create versatile tooltips that fit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Tooltip
  </DocsContentLayout>
</template>
