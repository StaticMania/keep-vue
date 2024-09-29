<script lang="ts" setup>
import { ref } from "vue";
import {
  ArcElement,
  CategoryScale,
  ChartTooltip,
  KeepChart,
  Legend,
  LinearScale,
  Pie,
  Title,
} from "~/src";
import { defaultPieChartCode } from "./pieChartCode";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
);

// chart data
const data = ref({
  labels: ["June", "March", "April", "May"],
  datasets: [
    {
      data: [130, 200, 100, 400],
      backgroundColor: ["#1B4DFF"],
      hoverBackgroundColor: ["#1B4DFF"],
    },
  ],
});

// Define the chart options
const options = ref({
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Keep Vue Default Pie Chart",
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1B4DFF",
      borderColor: "#FFFFFF",
      borderWidth: 1,
      padding: 10,
      titleFont: {
        size: 16,
      },
      bodyFont: {
        size: 16,
      },
    },
  },
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
});
</script>

<template>
  <CodeHighlightWithPreview :code="defaultPieChartCode">
    <div style="width: 100%; height: 400px">
      <Pie id="default-pie-chart" :data="data" :options="options" />
    </div>
  </CodeHighlightWithPreview>
</template>
