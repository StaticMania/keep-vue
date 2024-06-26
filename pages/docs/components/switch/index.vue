<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Switch - Keep Vue",
  description:
    "The Toggle Switch component provides a user-friendly way to enable or disable a setting or feature. It presents a visual representation of two states, typically on and off, allowing users to easily toggle between them. The Toggle Switch component is highly versatile and can be integrated into various user interfaces to enhance user interactions and control options.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Switch
  </DocsContentLayout>
</template>
