<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Alert - Keep Vue",
  description:
    "The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.",
});

useHead({ ...metadata });

const { page } = useContent();

// if (!page)
//   throw createError({ statusCode: 404, statusMessage: "Page not found" });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <ContentRenderer id="mainContent" :value="page" />
  </DocsContentLayout>
</template>
