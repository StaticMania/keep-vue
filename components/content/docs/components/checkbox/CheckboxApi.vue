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
    id: 2,
    propsName: "default-checked",
    propsType: "boolean",
    propsDescription: "Checked state of the checkbox",
    default: "false",
  },
  {
    id: 3,
    propsName: "checked",
    propsType: "v-model",
    propsDescription: "Checked state of the checkbox",
  },
];
</script>

<template>
  <ComponentApiTable :data="CheckBoxApiData" />
</template>
