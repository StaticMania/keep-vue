<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Textarea - Keep Vue",
  description:
    "Textarea Input Component is a user interface element used to collect and display multiline text input from users. It provides an expandable box where users can enter a larger amount of text, such as comments, descriptions, or messages.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Textarea
  </DocsContentLayout>
</template>
