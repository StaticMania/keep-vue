<script lang="ts" setup>
import {
  ArcElement,
  CategoryScale,
  ChartTooltip,
  Doughnut,
  KeepChart,
  Legend,
  LinearScale,
  Title,
} from "~/src";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
);

// chart data
const data = reactive({
  labels: ["June", "March", "April", "May"],
  datasets: [
    {
      data: [400, 130, 100, 200],
      backgroundColor: ["#1b4dff", "#11a75c", "#e9b90b", "#5e718d"],
      hoverBackgroundColor: ["#0f3cd9", "#0a9952", "#d8a800", "#455468"],
    },
    {
      data: [200, 100, 130, 400],
      backgroundColor: ["#1C222B", "#B4C4FF", "#7DFEB9", "#FFA19B"],
      hoverBackgroundColor: ["#1C222B", "#B4C4FF", "#7DFEB9", "#FFA19B"],
    },
  ],
});

// Define the chart options
const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: "40%",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Keep Vue Doughnut Pie Chart with Color",
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1B4DFF",
      borderColor: "#FFFFFF",
      borderWidth: 0.8,
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
  <div style="width: 100%; height: 400px">
    <Doughnut id="default-pie-chart" :data="data" :options="options" />
  </div>
</template>
