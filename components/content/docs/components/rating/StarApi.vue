<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const RatingStarApi = [
  {
    id: 1,
    propsName: "value",
    propsType: "number",
    propsDescription: "Set value in the rating star",
    default: "1",
  },
  {
    id: 2,
    propsName: "children",
    propsType: "ReactNode",
    propsDescription: "Pass your own icon as children",
    default: "",
  },
  {
    id: 3,
    propsName: "className",
    propsType: "",
    propsDescription: "Custom class name",
    default: "",
  },
  {
    id: 4,
    propsName: "inputStyle",
    propsType: "",
    propsDescription: "Custom class name for input styles",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="RatingStarApi" />
</template>
