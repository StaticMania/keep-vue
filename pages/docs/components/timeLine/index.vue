<script setup lang="ts">
import DashedBorderTimeline from "./variant/DashedBorderTimeline.vue";
import DefaultTimeline from "./variant/DefaultTimeline.vue";
import DottedBorderTimeline from "./variant/DottedBorderTimeline.vue";
import TimelineWithImage from "./variant/TimelineWithImage.vue";

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
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Timeline</h3>
        <DefaultTimeline />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Dashed Border Timeline</h3>
        <DashedBorderTimeline />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Dotted Border Timeline</h3>
        <DottedBorderTimeline />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Timeline With Image#</h3>
        <TimelineWithImage />
      </div>
    </div>
  </DocsContentLayout>
</template>
