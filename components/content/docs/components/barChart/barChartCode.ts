const defaultBarChartCode = {
  "BarChartComponent.vue": `<script setup>
import {
  Bar,
  BarElement,
  CategoryScale,
  ChartTooltip,
  KeepChart,
  Legend,
  LinearScale,
  Title
} from 'keep-vue'
import { ref } from 'vue'

KeepChart.register(Title, ChartTooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  datasets: [
    {
      data: [340, 300, 170, 190, 450, 400, 250, 320, 280],
      label: 'Price',
      borderRadius: 8,
      borderColor: 'red',
      backgroundColor: '#1B4DFF' //single bar color
    }
  ]
})

const chartOptions = ref({
  responsive: true,

  plugins: {
    //title fo the chart
    title: {
      display: true,
      text: 'Keep Vue Default Chart'
    },
    legend: {
      display: false
    },
    tooltip: {
      displayColors: false,
      backgroundColor: '#1B4DFF',
      borderColor: '#FFFFFF',
      borderWidth: 0.5
    }
  },
  scales: {
    // x axis options and styles
    x: {
      border: {
        color: '#EBEDF1',
        width: 2
      },
      grid: {
        display: false
      },
      ticks: {
        color: '#afbaca',
        font: {
          size: 16
        }
      }
    },

    // x axis options and styles
    y: {
      min: 0,
      max: 600,
      border: {
        color: '#EBEDF1',
        width: 2
      },
      grid: {
        display: false
      },
      ticks: {
        stepSize: 150,
        color: '#afbaca',
        font: {
          size: 16
        }
      }
    }
  }
})
</script>
<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>`,
};

const barChartWithDoubleDataCode = {
  "BarChartComponent.vue": `<script setup>
import {
  Bar,
  BarElement,
  CategoryScale,
  ChartTooltip,
  KeepChart,
  Legend,
  LinearScale,
  Title
} from 'keep-vue'
import { ref } from 'vue'

KeepChart.register(Title, ChartTooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [340, 300, 170, 190, 450, 400],
      label: 'Price',
      borderRadius: 8,
      backgroundColor: '#1B4DFF' //single bar color
    },
    {
      data: [140, 200, 120, 130, 120, 213],
      label: 'Price',
      borderRadius: 8,
      backgroundColor: '#AEBFFF' //single bar color
    }
  ]
})

const chartOptions = ref({
  responsive: true,

  plugins: {
    title: {
      display: true,
      text: 'Keep Vue Multiple data Chart'
    },
    legend: {
      display: false
    },
    tooltip: {
      displayColors: false,
      backgroundColor: '#1B4DFF',
      borderColor: '#FFFFFF',
      borderWidth: 0.5
    }
  },
  scales: {
    // x axis options and styles
    x: {
      border: {
        color: '#EBEDF1',
        width: 2
      },
      grid: {
        display: false
      },
      ticks: {
        color: '#afbaca',
        font: {
          size: 16
        }
      }
    },

    // x axis options and styles
    y: {
      min: 0,
      max: 600,
      border: {
        color: '#EBEDF1',
        width: 2
      },
      grid: {
        display: false
      },
      ticks: {
        stepSize: 150,
        color: '#afbaca',
        font: {
          size: 16
        }
      }
    }
  }
})
</script>
<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>`,
};

export { barChartWithDoubleDataCode, defaultBarChartCode };
