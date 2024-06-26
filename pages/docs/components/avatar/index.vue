<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Avatar - Keep Vue",
  description:
    "The Avatar component in the Keep React allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Avatar
  </DocsContentLayout>
</template>
