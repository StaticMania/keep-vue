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
];
</script>

<template>
  <ComponentApiTable :data="radioApiData" />
</template>
