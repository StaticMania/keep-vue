<script setup lang="ts">
import DefaultPagination from "./variant/DefaultPagination.vue";
import PaginationNavigatorWithIcon from "./variant/PaginationNavigatorWithIcon.vue";
import PaginationNavigatorWithText from "./variant/PaginationNavigatorWithText.vue";
import PaginationShape from "./variant/PaginationShape.vue";
import PaginationWithInput from "./variant/PaginationWithInput.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Pagination - Keep Vue",
  description:
    "The Pagination component enhances user experience by providing a user-friendly way to navigate through large sets of content. Whether its articles, search results, or product listings, Pagination breaks down the data into manageable pages, allowing users to easily access different sections.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h3 class="mb-3">Default Pagination</h3>
        <DefaultPagination />
      </div>
      <div class="bg-white p-6">
        <h3 class="mb-3">Pagination Shape</h3>
        <PaginationShape />
      </div>
      <div class="bg-white p-6">
        <h3 class="mb-3">Navigator With Icon</h3>
        <PaginationNavigatorWithIcon />
      </div>
      <div class="bg-white p-6">
        <h3 class="mb-3">Navigator With Text</h3>
        <PaginationNavigatorWithText />
      </div>
      <div class="bg-white p-6">
        <h3 class="mb-3">Navigator With Input</h3>
        <PaginationWithInput />
      </div>
    </div>
  </DocsContentLayout>
</template>
