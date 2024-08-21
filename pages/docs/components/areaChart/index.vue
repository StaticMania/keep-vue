<script setup lang="ts">
import DefaultAreaChart from "./variant/DefaultAreaChart.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Area Chart - Keep Vue",
  description:
    "An Area Chart is a visual way to show data as a line that turns into a colored shape below it. This shape helps you understand how the data changes over time or categories. It's like coloring under a line graph to see where the data is bigger or smaller. People use Area Charts to see trends, compare things, and notice patterns in data. The colored area makes it clear which parts are higher or lower in value",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="rounded-xl bg-white p-6">
        <DefaultAreaChart />
      </div>
    </div>
  </DocsContentLayout>
</template>
