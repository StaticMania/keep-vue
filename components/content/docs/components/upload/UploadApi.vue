<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const uploadApiData = [
  {
    id: 3,
    propsName: "horizontal",
    propsType: "boolean",
    propsDescription: "Upload show horizontally or vertically",
    default: "false",
  },
  {
    id: 4,
    propsName: "options",
    propsType: "DropzoneOptions",
    propsDescription: "Option is object for controlling the upload",
    default: "DropzoneOptions",
  },
];
</script>

<template>
  <ComponentApiTable :data="uploadApiData" />
</template>
