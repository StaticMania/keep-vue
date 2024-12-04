<script lang="ts" setup>
const itemApiData = [
  {
    id: 1,
    propsName: "active",
    propsType: "boolean",
    propsDescription: "Page is active or not",
    default: "false",
  },
  {
    id: 2,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription: "Component will be rendered as a child",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="itemApiData" />
</template>
