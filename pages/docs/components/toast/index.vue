<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Toast - Keep Vue",
  description:
    "Toasts typically appear as small, non-intrusive pop-up notifications that appear near the edge of the screen and disappear automatically after a short period of time or when dismissed by the user.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Toast
  </DocsContentLayout>
</template>
