<script setup lang="ts">
import DocsContentLayout from "~/components/DocsContentLayout.vue";
import EditPage from "~/components/EditPage.vue";

definePageMeta({
  layout: "docs",
});

const { page, next } = useContent();
if (!page)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

const { _path, title, raw, description } = page.value;

const metadata = ref({
  title: raw ? title : `${title} - Keep Vue`,
  meta: [{ name: "description", content: description }],
});
useHead({ ...metadata.value });
</script>

<template>
  <DocsContentLayout
    :title="raw ? title : `${title} - Keep Vue`"
    :description="description">
    <ContentRenderer id="mainContent" :value="page" />
    <EditPage
      :page-link="`${_path}`"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />
  </DocsContentLayout>
</template>
