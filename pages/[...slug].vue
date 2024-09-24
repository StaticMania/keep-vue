<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const { page, next } = useContent();
if (!page)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

const { _path, title, description } = page.value;

const metadata = reactive({
  title: `${title} - Keep Vue`,
  meta: [{ name: "description", content: description }],
});
useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout :title="title" :description="description">
    <ContentRenderer id="mainContent" :value="page" />
    <EditPage
      :page-link="`${_path}.md`"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />
  </DocsContentLayout>
</template>
