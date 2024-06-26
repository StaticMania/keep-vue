<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Tabs - Keep Vue",
  description:
    "The Tab Group Component in the Keep React allows you to organize and display content in a tabbed interface. It provides a convenient way to switch between different sections or views within a single container.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Tabs
  </DocsContentLayout>
</template>
