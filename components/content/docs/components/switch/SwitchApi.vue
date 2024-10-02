<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const toggleApiData = [
  {
    id: 1,
    propsName: "variant",
    propsType: ["default", "icon"],
    propsDescription: "Switch variant",
    default: "default",
  },
  {
    id: 2,
    propsName: "disabled",
    propsType: "Boolean",
    propsDescription: "Disables interactions with the toggle.",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="toggleApiData" />
</template>
