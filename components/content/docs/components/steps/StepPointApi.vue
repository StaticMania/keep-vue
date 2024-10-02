<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const StepPointAPI = [
  {
    id: 1,
    propsName: "completed",
    propsType: "boolean",
    propsDescription: "Indicates if the step is completed.",
    default: "false",
  },
  {
    id: 2,
    propsName: "variant",
    propsType: ["default", "border", "icon"],
    propsDescription: "Variant of the step point.",
    default: "default",
  },
];
</script>

<template>
  <ComponentApiTable :data="StepPointAPI" />
</template>
