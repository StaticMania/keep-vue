<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const popoverContentAPI = [
  {
    id: 1,
    propsName: "side",
    propsType: ["top", "bottom", "left", "right"],
    propsDescription:
      "Defines the position of the popover relative to the trigger element. Applicable in the PopoverContent Component Prop",
    default: "bottom",
  },
  {
    id: 2,
    propsName: "arrowPadding",
    propsType: "number",
    propsDescription:
      "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
  },
  {
    id: 3,
    propsName: "sticky",
    propsType: ["partial", "always"],
    propsDescription:
      "The sticky behavior on the align axis. partial will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `always` will keep the content in the boundary regardless.",
  },
];
</script>

<template>
  <ComponentApiTable :data="popoverContentAPI" />
</template>
