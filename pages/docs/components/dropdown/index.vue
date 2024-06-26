<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Dropdown - Keep Vue",
  description:
    "The Dropdown Component is a versatile user interface element that provides users with a menu of selectable options. With a wide range of customization options, including labels, icons, search bars, checkboxes, and more, the Dropdown Component enhances user interaction by offering intuitive and flexible selection functionalities.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Dropdown
  </DocsContentLayout>
</template>
