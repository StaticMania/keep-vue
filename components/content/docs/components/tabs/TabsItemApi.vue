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
    propsName: "contentClass",
    propsType: "string",
    propsDescription: "Add custom css style into tabsItem.",
    default: "",
  },
  {
    id: 3,
    propsName: "bgClass",
    propsType: "string",
    propsDescription: "Add bg class and  css style into tabsItem",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="tabsItemApiData" />
</template>
