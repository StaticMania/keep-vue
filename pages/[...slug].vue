<script setup lang="ts">
import DocsContentLayout from "~/components/DocsContentLayout.vue";
import EditPage from "~/components/EditPage.vue";

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
      :page-link="`${_path}`"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />
  </DocsContentLayout>
</template>
