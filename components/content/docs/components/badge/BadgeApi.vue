<script lang="ts" setup>
const badgeApiData = [
  {
    id: 1,
    propsName: "color",
    propsType: ["primary", "secondary", "success", "warning", "error"],
    propsDescription: "Available Badge color.",
    default: "secondary",
  },
  {
    id: 2,
    propsName: "variant",
    propsType: ["base", "border", "background"],
    propsDescription: "Variant the badge",
    default: "background",
  },
];
</script>

<template>
  <ComponentApiTable :data="badgeApiData" />
</template>
