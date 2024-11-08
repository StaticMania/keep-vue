<script lang="ts" setup>
const drawerContentAPIData = [
  {
    id: 1,
    propsName: "disable-outside-pointer-events",
    propsType: "boolean",
    propsDescription:
      "When true, hover/focus/click interactions will be disabled on elements outside the DismissableLayer. Users will need to click twice on outside elements to interact with them: once to close the DismissableLayer, and again to trigger the element",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="drawerContentAPIData" />
</template>
