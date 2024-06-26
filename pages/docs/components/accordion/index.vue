<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Accordion - Keep Vue",
  description:
    "The Accordion Component in the Keep React allows you to create collapsible sections of content, commonly known as accordions. Users can toggle the visibility of the content by clicking on the disclosure button. With customizable options for the theme, open state, type, and state, you can create accordion components that fit seamlessly into your design and provide an intuitive user experience.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Accordion
  </DocsContentLayout>
</template>
