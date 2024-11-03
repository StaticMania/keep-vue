<script lang="ts" setup>
const drawerAPIData = [
  {
    id: 1,
    propsName: "defaultOpen",
    propsType: "boolean",
    propsDescription:
      "The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",
    default: "false",
  },
  {
    id: 2,
    propsName: "modal",
    propsType: "boolean",
    propsDescription:
      "The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.",
    default: "false",
  },
  {
    id: 3,
    propsName: "open",
    propsType: "boolean",
    propsDescription: "The controlled open state of the popover.",
  },
  {
    id: 4,
    propsName: "position",
    propsType: ["left", "top", "right", "bottom"],
    propsDescription: "Drawer position",
    default: "bottom",
  },
];
</script>

<template>
  <ComponentApiTable :data="drawerAPIData" />
</template>
