<script setup lang="ts">
import DefaultDivider from "./variants/DefaultDivider.vue";
import DividerAlign from "./variants/DividerAlign.vue";
import DividerColor from "./variants/DividerColor.vue";
import DividerSize from "./variants/DividerSize.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Divider - Keep Vue",
  description:
    "The Divider component serves as a visual separator, helping to organize content and improve readability in user interfaces. It allows you to add horizontal lines or dividers between different sections of a page or within a component. With customizable options for color, size, and alignment, the Divider component enhances the overall design and structure of your application.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <DefaultDivider />
      <DividerAlign />
      <DividerColor />
      <DividerSize />
    </div>
  </DocsContentLayout>
</template>
