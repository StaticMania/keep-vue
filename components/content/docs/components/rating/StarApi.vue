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
