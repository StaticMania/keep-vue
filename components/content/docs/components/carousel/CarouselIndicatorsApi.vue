<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const carouselIndicatorsApi = [
  {
    id: 1,
    propsName: " dot-button-style",
    propsType: "string",
    propsDescription:
      "Add your own class to style the dot button. Use data-[active=true] and data-[active=false] to apply specific styles to the dot buttons.",
  },
];
</script>

<template>
  <ComponentApiTable :data="carouselIndicatorsApi" />
</template>
