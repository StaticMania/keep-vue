<script lang="ts" setup>
import {
  Bar,
  BarElement,
  CategoryScale,
  ChartTooltip,
  KeepChart,
  Legend,
  LinearScale,
  Title,
} from "~/src/components/Charts";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

const chartData = reactive({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      data: [340, 300, 170, 190, 450, 400, 250, 320, 280],
      label: "Price",
      borderRadius: 8,
      borderColor: "red",
      backgroundColor: "#1B4DFF", //single bar color
    },
  ],
});

const customHight = reactive({
  height: 300, // custom height
});

const myStyles = computed(() => ({
  //if custom height is provided then the position relative is needed
  height: `${customHight.height}px`,
  width: `100%`,
  position: "relative",
}));

const chartOptions = reactive({
  responsive: true,

  plugins: {
    //title fo the chart
    title: {
      display: true,
      text: "Keep Vue Default Chart",
    },
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1B4DFF",
      borderColor: "#FFFFFF",
      borderWidth: 0.5,
    },
  },
  scales: {
    // x axis options and styles
    x: {
      border: {
        color: "#EBEDF1",
        width: 2,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: "#afbaca",
        font: {
          size: 16,
        },
      },
    },

    // x axis options and styles
    y: {
      min: 0,
      max: 600,
      border: {
        color: "#EBEDF1",
        width: 2,
      },
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 150,
        color: "#afbaca",
        font: {
          size: 16,
        },
      },
    },
  },
});
</script>
<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :style="myStyles" />
</template>
