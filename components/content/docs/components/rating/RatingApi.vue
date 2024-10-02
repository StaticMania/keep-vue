<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const RatingDataApi = [
  {
    id: 1,
    propsName: "handleRating",
    propsType: "function",
    propsDescription: "Get value from the rating",
    default: "",
  },
];
</script>

<template>
  <ComponentApiTable :data="RatingDataApi" />
</template>
