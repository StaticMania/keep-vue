<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";
const accordionApiData = [
  {
    id: 1,
    propsName: "default-value",
    propsType: "string",
    propsDescription: "Keep selected panel always open.",
  },
  {
    id: 2,
    propsName: "flush",
    propsType: "boolean",
    propsDescription: "Accordion without outer border and and background color",
    default: "false",
  },
  {
    id: 3,
    propsName: "type",
    propsType: ["single", "multiple"],
    propsDescription:
      "Determines whether a single or multiple items can be pressed at a time.",
    default: "single",
  },
  {
    id: 4,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disable interaction with the accordion.",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="accordionApiData" />
</template>
