<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const tabsApiData = [
  {
    id: 1,
    propsName: "defaultActive",
    propsType: "string",
    propsDescription: "Which tabs by default will be active",
    default: "",
  },
  {
    id: 2,
    propsName: "variant",
    propsType: ["default", "fill", "underline"],
    propsDescription: "Tabs item variant",
    default: "default",
  },
];
</script>

<template>
  <ComponentApiTable :data="tabsApiData" />
</template>
