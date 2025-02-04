<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const radioApiData = [
  {
    id: 1,
    propsName: "variant",
    propsType: ["circle", "rounded", "square"],
    propsDescription: "Specifies the shape of the radio input.",
    default: "rounded",
  },
  {
    id: 2,
    propsName: "v-model",
    propsType: "string",
    propsDescription: "The controlled value of the radio item to check.",
  },
  {
    id: 2,
    propsName: "@update:model-value",
    propsType: "[payload: string]",
    propsDescription:
      "Event handler called when the radio group value changes.",
  },
];
</script>

<template>
  <ComponentApiTable :data="radioApiData" />
</template>
