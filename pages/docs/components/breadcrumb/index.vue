<script setup lang="ts">
import BreadcrumbDividerIcon from "./variant/BreadcrumbDividerIcon.vue";
import BreadcrumbWithBorder from "./variant/BreadcrumbWithBorder.vue";
import DefaultBreadcrumb from "./variant/DefaultBreadcrumb.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Breadcrumb - Keep Vue",
  description:
    "The Breadcrumbs component in the Keep React provides a navigation aid that allows users to understand their current location within a website or application. With customizable options for type, icon, divider, line, and style, you can create breadcrumbs that align with your design and enhance the navigation experience.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Default Breadcrumb</h1>
        <DefaultBreadcrumb />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Border Types</h1>
        <BreadcrumbWithBorder />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Divider Icon Type</h1>
        <BreadcrumbDividerIcon />
      </div>
    </div>
  </DocsContentLayout>
</template>
