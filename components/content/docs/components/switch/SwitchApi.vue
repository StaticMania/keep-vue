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
    propsName: "checked",
    propsType: "boolean",
    propsDescription: "Switch check status",
    default: "false",
  },
  {
    id: 3,
    propsName: "default-checked",
    propsType: "boolean",
    propsDescription: "Switch default checked status",
    default: "false",
  },
  {
    id: 4,
    propsName: "disabled",
    propsType: "Boolean",
    propsDescription: "Disables interactions with the toggle.",
    default: "false",
  },
  {
    id: 5,
    propsName: "update:checked",
    propsType: "[payload: boolean]",
    propsDescription:
      "Event handler called when the checked state of the switch changes.",
  },
];
</script>

<template>
  <ComponentApiTable :data="toggleApiData" />
</template>
