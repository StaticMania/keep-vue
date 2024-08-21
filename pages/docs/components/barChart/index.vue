<script setup lang="ts">
import ChartWithDoubleData from "./variant/ChartWithDoubleData.vue";
import DefaultBarChart from "./variant/DefaultBarChart.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Bar Chart - Keep Vue",
  description:
    "The Bar Chart component provides a visual representation of data through bars of varying lengths. It's a graphical representation commonly used to display and compare the values of different categories or groups. The Bar Chart component is highly customizable and can be tailored to fit various data visualization needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-10">
      <div class="bg-white p-6">
        <h3>Chart Axis Data</h3>
        <DefaultBarChart />
      </div>
      <div class="bg-white p-6">
        <ChartWithDoubleData />
      </div>
    </div>
  </DocsContentLayout>
</template>
