<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Breadcrumb - Keep Vue",
  description:
    "The Breadcrumbs component in the Keep React provides a navigation aid that allows users to understand their current location within a website or application. With customizable options for type, icon, divider, line, and style, you can create breadcrumbs that align with your design and enhance the navigation experience.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Breadcrumb
  </DocsContentLayout>
</template>
