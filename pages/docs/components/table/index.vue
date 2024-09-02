<script setup lang="ts">
import DefaultTable from "./variant/DefaultTable.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Table - Keep Vue",
  description:
    "A Table Component is a fundamental user interface element used to present data in a structured and organized format. Tables consist of rows and columns, with each row representing a data entry and each column representing a specific attribute or field. Tables are commonly used to display tabular data, such as lists, grids, or datasets, making information easier to comprehend and compare.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-2">
        <DefaultTable />
      </div>
    </div>
  </DocsContentLayout>
</template>
