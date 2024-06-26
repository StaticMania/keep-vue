<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Popover - Keep Vue",
  description:
    "Popover component is a user interface element that displays additional information or options when a user interacts with a specific trigger, such as hovering over text or clicking a button.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Popover
  </DocsContentLayout>
</template>
