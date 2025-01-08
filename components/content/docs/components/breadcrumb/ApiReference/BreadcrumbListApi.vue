<script lang="ts" setup>
const breadcrumbApiData = [
  {
    id: 1,
    propsName: "borderType",
    propsType: ["border-xy", "border-y"],
    propsDescription:
      "Breadcrumb border type  used in the BreadcrumbList component.",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="breadcrumbApiData" />
</template>
