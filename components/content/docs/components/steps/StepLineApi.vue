<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const StepLineAPI = [
  {
    id: 1,
    propsName: "completed",
    propsType: "boolean",
    propsDescription: "Indicates if the step line is completed.",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="StepLineAPI" />
</template>
