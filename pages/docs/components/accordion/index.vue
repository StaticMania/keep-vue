<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Accordion - Keep Vue",
  description:
    "The Accordion Component in the Keep Vue allows you to create collapsible sections of content, commonly known as accordions. Users can toggle the visibility of the content by clicking on the disclosure button. With customizable options for the theme, open state, type, and state, you can create accordion components that fit seamlessly into your design and provide an intuitive user experience.",
});
useHead({ ...metadata });
const { page, next } = useContent();
if (!page)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <ContentRenderer id="mainContent" :value="page" />
    <EditPage
      :page-link="`${page?._path}.md`"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />
  </DocsContentLayout>
</template>
