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
import { pieChartWithColor } from "./pieChartCode";

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
      data: [400, 130, 100, 200],
      backgroundColor: ["#1C222B", "#B4C4FF", "#7DFEB9", "#FFA19B"],
      hoverBackgroundColor: ["#1C222B", "#B4C4FF", "#7DFEB9", "#FFA19B"],
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
      text: "Keep Vue Pie Chart with Color",
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1B4DFF",
      borderColor: "#FFFFFF",
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
  <CodeHighlightWithPreview :code="pieChartWithColor">
    <div style="width: 100%; height: 400px">
      <Pie id="default-pie-chart" :data="data" :options="options" />
    </div>
  </CodeHighlightWithPreview>
</template>
