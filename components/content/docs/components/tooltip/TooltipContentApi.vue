<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";
const tooltipContentApi = [
  {
    id: 1,
    propsName: "side",
    propsType: ["top", "bottom", "right", "left"],
    propsDescription: "Placement of the tooltip.",
    default: "top",
  },
];
</script>

<template>
  <ComponentApiTable :data="tooltipContentApi" />
</template>
