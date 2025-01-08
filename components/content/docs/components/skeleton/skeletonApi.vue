<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const SkeletonApiData = [
  {
    id: 1,
    propsName: "animation",
    propsType: "boolean",
    propsDescription: "Skeleton animation to be animated",
    default: "true",
  },
];
</script>

<template>
  <ComponentApiTable :data="SkeletonApiData" />
</template>
