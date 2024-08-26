<script setup lang="ts">
import DefaultEmpty from "./variant/DefaultEmpty.vue";
import EmptyFolder from "./variant/EmptyFolder.vue";
import NoDataFound from "./variant/NoDataFound.vue";
import NoResultPage from "./variant/NoResultPage.vue";
import NotFoundPage from "./variant/NotFoundPage.vue";
import PageNotAvailable from "./variant/PageNotAvailable.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Empty - Keep Vue",
  description:
    "Empty Component is a user interface element specifically designed to handle situations where a requested page or resource cannot be found. It is often displayed when a user navigates to a URL that doesn't correspond to any existing content within the application or website.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h3>Default Empty</h3>
        <DefaultEmpty />
      </div>

      <div class="bg-white p-6">
        <h3>Empty Folder</h3>
        <EmptyFolder />
      </div>
      <div class="bg-white p-6">
        <h3>No Result Page</h3>
        <NoResultPage />
      </div>
      <div class="bg-white p-6">
        <h3>Page Not Available</h3>
        <PageNotAvailable />
      </div>
      <div class="bg-white p-6">
        <h3>Not Found Page</h3>
        <NotFoundPage />
      </div>
      <div class="bg-white p-6">
        <h3>No Data Found</h3>
        <NoDataFound />
      </div>
    </div>
  </DocsContentLayout>
</template>
