<script setup lang="ts">
import DefaultLineChart from "./variant/DefaultLineChart.vue";
import DoubleLineLineChart from "./variant/DoubleLineLineChart.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "LineChart - Keep Vue",
  description:
    "The Line Chart component is a powerful tool for visualizing numerical data trends over time or across categories. With its clear and intuitive presentation, it enables users to easily identify patterns, correlations, and outliers within their datasets.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <DefaultLineChart />
      </div>
      <div class="bg-white p-6">
        <DoubleLineLineChart />
      </div>
    </div>
  </DocsContentLayout>
</template>
