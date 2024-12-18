<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const dividerDataAPI = [
  {
    id: 1,
    propsName: "color",
    propsType: ["primary", "secondary", "success", "warning", "error"],
    propsDescription: "Available color options for the divider.",
    default: "secondary",
  },
  {
    id: 2,
    propsName: "size",
    propsType: ["sm", "md", "lg", "xl", "2xl"],
    propsDescription: "Available sizes options for the divider.",
    default: "md",
  },
  {
    id: 3,
    propsName: "variant",
    propsType: ["start", "end", "center"],
    propsDescription: "Available variants for the divider alignment.",
    default: "center",
  },
];
</script>

<template>
  <ComponentApiTable :data="dividerDataAPI" />
</template>
