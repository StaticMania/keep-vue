<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const tabsItemApiData = [
  {
    id: 1,
    propsName: "value",
    propsType: "string",
    propsDescription: "This value connect to the content",
    default: "",
  },
  {
    id: 2,
    propsName: "contentClassName",
    propsType: "string",
    propsDescription: "Content className",
    default: "",
  },
  {
    id: 3,
    propsName: "bgClassName",
    propsType: "string",
    propsDescription: "Content Background className",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="tabsItemApiData" />
</template>
