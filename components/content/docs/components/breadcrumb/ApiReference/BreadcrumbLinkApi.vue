<script lang="ts" setup>
const breadcrumbLinkApiData = [
  {
    id: 1,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription:
      "Change the default rendered element for the one passed as a child, merging their props and behavior.",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="breadcrumbLinkApiData" />
</template>
