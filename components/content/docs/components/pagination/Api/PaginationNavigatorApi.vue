<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const navigatorApiData = [
  {
    id: 1,
    propsName: "shape",
    propsType: ["rounded", "circle"],
    propsDescription: "Shape of the pagination navigator",
    default: "rounded",
  },
  {
    id: 2,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription: "Component will be rendered as a child",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="navigatorApiData" />
</template>
