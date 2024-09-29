<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import {
  CategoryScale,
  ChartTooltip,
  KeepChart,
  Legend,
  Line,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "~/src";
import { doubleLineChartCode } from "./lineChartCode";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
);

//hover style effect
const hoverLine = reactive({
  afterDatasetsDraw(KeepChart: {
    ctx: any;
    scales: { x: any; y: any };
    tooltip: any;
    chartArea: { top: any; bottom: any };
  }) {
    const {
      ctx,
      tooltip,
      chartArea: { top, bottom },
    } = KeepChart;

    if (tooltip._active && tooltip._active.length) {
      const activePoints = tooltip._active;
      activePoints.forEach((activePoint: any) => {
        const xPosition = activePoint.element.x;

        // Vertical line visible when hover
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#afbaca";
        ctx.moveTo(xPosition, top);
        ctx.lineTo(xPosition, bottom);
        ctx.stroke();
        ctx.closePath();

        // Point is visible when hover
        ctx.beginPath();
        ctx.arc(
          activePoint.element.x,
          activePoint.element.y,
          4,
          0,
          Math.PI * 2,
        );
        ctx.fillStyle = "#1B4DFF";
        ctx.fill();
        ctx.closePath();
      });
    }
  },
});

const chartData = reactive({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Price",
      data: [340, 300, 170, 190, 450, 400, 250, 320, 280],

      //gradient bg color
      backgroundColor: (context: { chart: { chartArea: any; ctx?: any } }) => {
        const bgColorStart = "#1b4cff4d";
        const bgColorEnd = "#1b4cff00";

        if (!context.chart.chartArea) {
          return;
        }
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColorStart);
        gradientBg.addColorStop(1, bgColorEnd);
        return gradientBg;
      },

      //border style
      borderColor: "blue",
      borderWidth: 0.8,
      hoverBorderWidth: 5,

      //remove point radius
      pointRadius: 0,
    },
    {
      label: "amount",
      data: [200, 180, 300, 230, 100, 200, 220, 240, 70],

      //gradient bg color
      backgroundColor: (context: { chart: { chartArea: any; ctx?: any } }) => {
        const bgColorStart = "#1b4cff4d";
        const bgColorEnd = "#1b4cff00";

        if (!context.chart.chartArea) {
          return;
        }
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColorStart);
        gradientBg.addColorStop(1, bgColorEnd);
        return gradientBg;
      },

      //border style
      borderColor: "blue",
      borderWidth: 0.8,
      hoverBorderWidth: 5,

      //remove point radius
      pointRadius: 0,
    },
  ],
});

const chartOptions = reactive({
  responsive: true,
  tension: 0.3,

  plugins: {
    //title for the chart
    title: {
      display: true,
      text: "Keep Vue Double Series Line Chart",
    },
    legend: {
      display: false,
    },
    tooltip: {
      displayColors: false,
      backgroundColor: "#1B4DFF",
      borderColor: "#FFFFFF",
      borderWidth: 0.5,
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  },

  // axis config and style
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

const customHight = reactive({
  height: 400, // custom height
});

const myStyles = computed(() => ({
  height: `${customHight.height}px`,
  width: `100%`,
  //if custom height is provided then the position relative is needed
  position: "relative",
}));
</script>
<template>
  <CodeHighlightWithPreview :code="doubleLineChartCode">
    <Line
      id="hoverLine"
      :options="chartOptions"
      :data="chartData"
      :style="myStyles"
      :plugins="[hoverLine as any]" />
  </CodeHighlightWithPreview>
</template>
