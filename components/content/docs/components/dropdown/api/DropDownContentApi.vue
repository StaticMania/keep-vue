<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const dropdownContentApiData = [
  {
    id: 1,
    propsName: "align",
    propsType: ["end", "center", "start"],
    propsDescription: "Placement of the Dropdown when shows the content",
    default: "center",
  },
  {
    id: 2,
    propsName: "avoid-collisions",
    propsType: "boolean",
    propsDescription:
      "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
    default: "true",
  },
];
</script>

<template>
  <ComponentApiTable :data="dropdownContentApiData" />
</template>
