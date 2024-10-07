<script lang="ts" setup>
const breadcrumbPageApiData = [
  {
    id: 1,
    propsName: "outline",
    propsType: "boolean",
    propsDescription: "Change the active item style.",
    default: "False",
  },
];
</script>

<template>
  <ComponentApiTable :data="breadcrumbPageApiData" />
</template>
