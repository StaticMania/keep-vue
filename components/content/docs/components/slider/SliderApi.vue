<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const SliderApiData = [
  {
    id: 1,
    propsName: "trackClass",
    propsType: "string",
    propsDescription: "Change the style of the track line.",
  },
  {
    id: 2,
    propsName: "rangeClass",
    propsType: "string",
    propsDescription: "Change the style of the track range area.",
  },
  {
    id: 3,
    propsName: "thumbClass",
    propsType: "string",
    propsDescription: "Change the style of the track thumb icon.",
  },
];
</script>

<template>
  <ComponentApiTable :data="SliderApiData" />
</template>
