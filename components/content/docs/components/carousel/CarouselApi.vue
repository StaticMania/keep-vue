<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const carouselDataApi = [
  {
    id: 1,
    propsName: "options",
    propsType: "EmblaOptionsType",
    propsDescription: "Embla carousel options.",
  },
  {
    id: 2,
    propsName: "plugins",
    propsType: "EmblaPluginType[]",
    propsDescription: "Embla carousel plugins for adding more variants.",
  },
  {
    id: 3,
    propsName: "view-port-class",
    propsType: "String",
    propsDescription: "Customize the viewport of the carousel container",
  },
];
</script>

<template>
  <ComponentApiTable :data="carouselDataApi" />
</template>
