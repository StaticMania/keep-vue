<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Slider - Keep Vue",
  description:
    "The slider component in the Keep React allows users to select a value within a specified range. With customizable options for the control handle type, scale display, label, and tooltip, you can create versatile sliders that fit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Slider
  </DocsContentLayout>
</template>
