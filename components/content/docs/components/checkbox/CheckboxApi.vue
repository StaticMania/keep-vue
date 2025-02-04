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
  {
    id: 3,
    propsName: "checked",
    propsType: ["false ", "true ", "indeterminate"],
    propsDescription: "Current checked state.",
  },
  {
    id: 4,
    propsName: "update:checked",
    propsType: "[value: boolean]",
    propsDescription:
      "Event handler called when the checked state of the checkbox changes.",
  },
];
</script>

<template>
  <ComponentApiTable :data="CheckBoxApiData" />
</template>
