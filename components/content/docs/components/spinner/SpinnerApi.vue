<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const SpinnerApiData = [
  {
    id: 1,
    propsName: "color",
    propsType: [
      "failure",
      "gray",
      "info",
      "pink",
      "purple",
      "success",
      "warning",
    ],
    propsDescription: "Available colors for the spinner",
    default: "gray",
  },
  {
    id: 2,
    propsName: "Size",
    propsType: ["xs", "sm", "md", "lg", "xl"],
    propsDescription: "Available sizes for the spinner",
    default: "lg",
  },
];
</script>

<template>
  <ComponentApiTable :data="SpinnerApiData" />
</template>
