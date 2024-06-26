<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Skeleton - Keep Vue",
  description:
    "The Preloader component in the Keep React provides a visual indication of an ongoing process or loading state. With various options for type and device, you can choose the appropriate preloader style to enhance the user experience on both web and mobile platforms.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Skeleton
  </DocsContentLayout>
</template>
