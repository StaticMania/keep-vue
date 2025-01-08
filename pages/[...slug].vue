<script setup lang="ts">
import DocsContentLayout from "~/components/DocsContentLayout.vue";
import EditPage from "~/components/EditPage.vue";

definePageMeta({
  layout: "docs",
});

const { page, next, prev } = useContent();
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
      v-if="page?.title === 'Introduction'"
      :page-link="`${_path}`"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />

    <EditPage
      v-else
      :page-link="`${_path}`"
      :prev-page-link="prev?._path"
      :prev-page-name="prev?.title"
      :next-page-link="next?._path"
      :next-page-name="next?.title" />
  </DocsContentLayout>
</template>
