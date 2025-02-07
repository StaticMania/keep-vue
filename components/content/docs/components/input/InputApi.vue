<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const inputApi = [
  {
    id: 1,
    propsName: "defaultValue",
    propsType: "string",
    propsDescription: "Set Default value to the input field",
  },
  {
    id: 2,
    propsName: "modelValue",
    propsType: "string | number",
    propsDescription: "The controlled value of the input field.",
    default: "false",
  },
  {
    id: 3,
    propsName: "update:modelValue",
    propsType: "function",
    propsDescription: "Event handler called when the value changes",
  },
];
</script>

<template>
  <ComponentApiTable :data="inputApi" />
</template>
