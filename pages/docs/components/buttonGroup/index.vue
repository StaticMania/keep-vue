<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Button Group - Keep Vue",
  description:
    "The Buttons component in the Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Button Group
  </DocsContentLayout>
</template>
