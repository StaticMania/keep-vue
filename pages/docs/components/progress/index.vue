<script setup lang="ts">
import CustomizeProgress from "./variant/CustomizeProgress.vue";
import DefaultLineProgress from "./variant/DefaultLineProgress.vue";
import DefaultProgress from "./variant/DefaultProgress.vue";
import VariantOfProgress from "./variant/VariantOfProgress.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Progress - Keep Vue",
  description:
    "The Progress Bar Component in the Keep React allows you to visually represent the progress or completion of a task or process.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="rounded-lg bg-white p-6">
        <h3>Default Progress</h3>
        <DefaultProgress />
      </div>
      <div class="rounded-lg bg-white p-6">
        <h3>Progress Variant</h3>
        <VariantOfProgress />
      </div>
      <div class="rounded-lg bg-white p-6">
        <h3>Line Progress</h3>
        <DefaultLineProgress />
      </div>
      <div class="rounded-lg bg-white p-6">
        <h3>Customize Progress</h3>
        <CustomizeProgress />
      </div>
    </div>
  </DocsContentLayout>
</template>
