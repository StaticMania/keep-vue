<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const CheckBoxApiData = [
  {
    id: 1,
    propsName: "variant",
    propsType: ["default", "rounded", "circle"],
    propsDescription: "Checkbox Variant",
    default: "default",
  },
  {
    id: 3,
    propsName: "default-checked",
    propsType: "boolean",
    propsDescription: "Default Checked state of the checkbox",
  },
];
</script>

<template>
  <ComponentApiTable :data="CheckBoxApiData" />
</template>
