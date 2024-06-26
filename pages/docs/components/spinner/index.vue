<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Spinner - Keep Vue",
  description:
    "A Spinner Component is a visual user interface element commonly found in web and mobile applications. It is used to indicate ongoing processes or loading states, providing users with a visual cue that something is happening in the background.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Spinner
  </DocsContentLayout>
</template>
