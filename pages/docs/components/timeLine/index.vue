<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Timeline - Keep Vue",
  description:
    "Timeline Component is a graphical representation used to visualize a sequence of events or activities over time. It presents information in a chronological order, allowing users to track the progression of events, milestones, or changes. Timelines often include markers, labels, and other visual cues to enhance understanding and engagement.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Timeline
  </DocsContentLayout>
</template>
