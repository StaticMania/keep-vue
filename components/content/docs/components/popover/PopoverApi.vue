<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const popoverAPI = [
  {
    id: 1,
    propsName: "side",
    propsType: ["top", "bottom", "left", "right"],
    propsDescription:
      "Defines the position of the popover relative to the trigger element. Applicable in the PopoverContent Component Prop",
    default: "bottom",
  },
];
</script>

<template>
  <ComponentApiTable :data="popoverAPI" />
</template>
