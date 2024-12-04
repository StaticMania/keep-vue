<script lang="ts" setup>
const paginationApiData = [
  {
    id: 1,
    propsName: "shape",
    propsType: ["rounded", "circle"],
    propsDescription: "Shape of the pagination element",
    default: "rounded",
  },
];
</script>

<template>
  <ComponentApiTable :data="paginationApiData" />
</template>
