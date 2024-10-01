<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const LineProgressDataApi = [
  {
    id: 2,
    propsName: "progress",
    propsType: "number",
    propsDescription: "Defines the progress control for the progress bar.",
    default: "55",
  },
  {
    id: 3,
    propsName: "lineBackground",
    propsType: "string",
    propsDescription: "Progress line background color",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="LineProgressDataApi" />
</template>
