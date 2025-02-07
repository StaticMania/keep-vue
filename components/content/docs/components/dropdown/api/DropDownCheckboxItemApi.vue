<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const dropdownCheckboxItemApiData = [
  {
    id: 1,
    propsName: "checked",
    propsType: ["false", "true", "indeterminate"],
    propsDescription:
      "The controlled checked state of the item. Can be used as v-model:checked.",
  },
  {
    id: 2,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription:
      "Change the default rendered element for the one passed as a child, merging their props and behavior.",
  },
  {
    id: 3,
    propsName: "update:checked",
    propsType: "[payload: boolean]",
    propsDescription: "Event handler called when the checked state changes.",
  },
  {
    id: 3,
    propsName: "select",
    propsType: "[event: Event]",
    propsDescription:
      "Event handler called when the user selects an item (via mouse or keyboard).Calling `event.preventDefault` in this handler will prevent the menu from closing when selecting that item.",
  },
];
</script>

<template>
  <ComponentApiTable :data="dropdownCheckboxItemApiData" />
</template>
