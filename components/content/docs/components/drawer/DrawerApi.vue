<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const drawerAPIData = [
  {
    id: 2,
    propsName: "position",
    propsType: ["left", "top", "right", "bottom"],
    propsDescription: "Drawer position",
    default: "bottom",
  },
];
</script>

<template>
  <ComponentApiTable :data="drawerAPIData" />
</template>
