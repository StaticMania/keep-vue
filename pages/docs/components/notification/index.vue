<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Notification - Keep Vue",
  description:
    "Notification component in the Keep React allows you to display informative messages or alerts to users. With various styles and options for positioning, you can effectively communicate important updates or messages in a visually appealing manner.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Notification
  </DocsContentLayout>
</template>
