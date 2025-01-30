<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const dropDownRadioGroupApiData = [
  {
    id: 1,
    propsName: "v-modal",
    propsType: "string",
    propsDescription: "The value of the selected item in the group.",
  },
  {
    id: 2,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription:
      "Change the default rendered element for the one passed as a child, merging their props and behavior.",
  },
];
</script>

<template>
  <ComponentApiTable :data="dropDownRadioGroupApiData" />
</template>
