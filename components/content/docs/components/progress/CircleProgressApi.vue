<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const circleProgressDataApi = [
  {
    id: 2,
    propsName: "progress",
    propsType: "number",
    propsDescription: "Defines the progress control for the progress bar.",
    default: "55",
  },
  {
    id: 3,
    propsName: "strokeColor",
    propsType: "string",
    propsDescription: "Circle Stroke Color",
    default: "",
  },
  {
    id: 4,
    propsName: "strokeWidth",
    propsType: "number",
    propsDescription: "Circle Stroke Width",
    default: "2.5",
  },
];
</script>

<template>
  <ComponentApiTable :data="circleProgressDataApi" />
</template>
