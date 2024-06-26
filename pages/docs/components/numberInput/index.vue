<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Number Input - Keep Vue",
  description:
    "Number Input Component is a user interface element designed for collecting numeric input from users. It provides a field where users can enter numerical values, such as integers or decimals, using keyboard input or arrow buttons.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Number Input
  </DocsContentLayout>
</template>
