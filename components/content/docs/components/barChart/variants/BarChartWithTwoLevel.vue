<script setup lang="ts">
import KeepBarChart from "~/src/components/chart-bar/KeepBarChart.vue";

const data = [
  {
    name: "Jan",
    total: 340,
    predicted: 140,
  },
  {
    name: "Feb",
    total: 300,
    predicted: 200,
  },
  {
    name: "Mar",
    total: 170,
    predicted: 120,
  },
  {
    name: "Apr",
    total: 190,
    predicted: 130,
  },
  {
    name: "May",
    total: 450,
    predicted: 120,
  },
  {
    name: "Jun",
    total: 400,
    predicted: 213,
  },
  {
    name: "Jul",
    total: 350,
    predicted: 250,
  },
];
</script>

<template>
  <KeepBarChart
    class="p-10"
    index="name"
    :data="data"
    :categories="['total', 'predicted']"
    :rounded-corners="10" />
</template>
