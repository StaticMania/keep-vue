<script setup lang="ts">
import DefaultPieChart from "./variant/DefaultPieChart.vue";
import DoughnutChart from "./variant/DoughnutChart.vue";
import DoughnutChartTwoLevel from "./variant/DoughnutChartTwoLevel.vue";
import PieChartWithColor from "./variant/PieChartWithColor.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Pie Chart - Keep Vue",
  description:
    "The Pie Chart component offers an intuitive and visually compelling way to represent data distribution. With its circular graph divided into slices, users can easily visualize proportions and percentages of different categories within their dataset. Customizable features such as colors and hierarchical levels enhance the charts versatility, making it an essential tool for data analysis and presentation.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h1>Default Pie Chart</h1>
        <DefaultPieChart />
      </div>
      <div class="bg-white p-6">
        <h3>Pie Chart with Color</h3>
        <PieChartWithColor />
      </div>
      <div class="bg-white p-6">
        <h3>Dought Pie Chart</h3>
        <DoughnutChart />
      </div>
      <div class="bg-white p-6">
        <h3>Dought Pie Chart With Two Level</h3>
        <DoughnutChartTwoLevel />
      </div>
    </div>
  </DocsContentLayout>
</template>
