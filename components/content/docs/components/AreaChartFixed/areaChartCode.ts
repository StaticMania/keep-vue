const defaultAreaChartCode = {
  "AreaChartComponent.Vue": `<script setup>
import {
  CategoryScale,
  ChartTooltip,
  Filler,
  KeepChart,
  Legend,
  Line,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "keep-vue";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
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
      const activePoint = tooltip._active[0];
      const xPosition = activePoint.element.x;

      // vertical line visible when hover
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "#afbaca";
      ctx.moveTo(xPosition, top);
      ctx.lineTo(xPosition, bottom);
      ctx.stroke();
      ctx.closePath();

      //point is visible when hover
      ctx.beginPath();
      ctx.arc(activePoint.element.x, activePoint.element.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#1B4DFF";
      ctx.fill();
      ctx.closePath();
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
      borderColor: "#1B4DFF",
      borderWidth: 0.8,
      hoverBorderWidth: 5,
      fill: true,

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
      text: "Keep Vue Default Area Chart",
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
</script>

<template>
  <Line
    id="defaultAreaChart"
    :options="chartOptions"
    :data="chartData"
    :plugins="[hoverLine as any]" />
</template>
 `,
};

const doubleAreaChartCode = {
  "AreaChartComponent.Vue": `<script setup>
import {
  CategoryScale,
  ChartTooltip,
  Filler,
  KeepChart,
  Legend,
  Line,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "keep-vue";

KeepChart.register(
  Title,
  ChartTooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
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
      fill: true,

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
      fill: true,

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
      text: "Keep Vue Double Series Area Chart",
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

</script>
<template>
  <Line
    id="hoverLine"
    :options="chartOptions"
    :data="chartData"
    :plugins="[hoverLine as any]" />
</template>
`,
};

export { defaultAreaChartCode, doubleAreaChartCode };
