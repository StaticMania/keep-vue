<script setup lang="ts">
import KeepBarChart from "~/src/components/chart-bar/KeepBarChart.vue";

const data = [
  {
    name: "Jan",
    total: 340,
  },
  {
    name: "Feb",
    total: 300,
  },
  {
    name: "Mar",
    total: 170,
  },
  {
    name: "Apr",
    total: 190,
  },
  {
    name: "May",
    total: 450,
  },
  {
    name: "Jun",
    total: 400,
  },
  {
    name: "Jul",
    total: 350,
  },
];
</script>

<template>
  <KeepBarChart
    class="p-10"
    index="name"
    x-axis-label="Monthly Expense"
    :data="data"
    :categories="['total']"
    :y-formatter="
      (tick, i) => {
        return typeof tick === 'number'
          ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
          : '';
      }
    "
    :rounded-corners="10" />
</template>
