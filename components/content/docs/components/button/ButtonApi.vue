<script lang="ts" setup>
const buttonApiData = ref([
  {
    id: 1,
    propsName: "color",
    propsType: ["primary", "secondary", "error", "success", "warning"],
    propsDescription: "Color variant of the button",
    default: "primary",
  },
  {
    id: 2,
    propsName: "variant",
    propsType: ["default", "link", "outline", "softBg"],
    propsDescription: "Variant of the button.",
    default: "default",
  },
  {
    id: 3,
    propsName: "shape",
    propsType: ["circle", "icon"],
    propsDescription: "Apply circular styling to the button.",
    default: "",
  },
  {
    id: 4,
    propsName: "position",
    propsType: ["start", "end", "center"],
    propsDescription: "Position of the button within a button group.",
    default: "",
  },
  {
    id: 5,
    propsName: "size",
    propsType: ["xs", "sm", "md", "lg", "xl", "2xl"],
    propsDescription: "Size variant of the button.",
    default: "md",
  },
  {
    id: 5,
    propsName: "radius",
    propsType: ["default", "full"],
    propsDescription: "Change the radius of the button.",
    default: "default",
  },
]);
</script>

<template>
  <ComponentApiTable :data="buttonApiData" />
</template>
