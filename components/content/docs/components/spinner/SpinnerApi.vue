<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const SpinnerApiData = [
  {
    id: 1,
    propsName: "color",
    propsType: ["primary", "secondary", "error", "success", "warning"],
    propsDescription: "Available colors for the spinner",
    default: "primary",
  },
];
</script>

<template>
  <ComponentApiTable :data="SpinnerApiData" />
</template>
