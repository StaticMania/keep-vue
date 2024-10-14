<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const DatePickerApiData = [
  {
    id: 1,
    propsName: "dayShape",
    propsType: ["circle", "rounded"],
    propsDescription: "use the properties to change the shape of date picker",
    default: "rounded",
  },
  {
    id: 2,
    propsName: "datePickerHeader",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the header section of dayPicker.",
  },
  {
    id: 3,
    propsName: "prevBtn",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the prevBtn section of dayPicker.",
  },
  {
    id: 4,
    propsName: "datePickerHeading",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the datePickerHeading section of dayPicker.",
  },
  {
    id: 5,
    propsName: "nextBtn",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the nextBtn section of dayPicker.",
  },
  {
    id: 6,
    propsName: "datePickerBody",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the datePickerBody section of dayPicker.",
  },
  {
    id: 7,
    propsName: "MonthContainer",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the MonthContainer section of dayPicker.",
  },
  {
    id: 8,
    propsName: "weekContainer",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the weekContainer section of dayPicker.",
  },
  {
    id: 9,
    propsName: "weekHeader",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the weekHeader section of dayPicker.",
  },
  {
    id: 10,
    propsName: "weekLabel",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the weekLabel section of dayPicker.",
  },
  {
    id: 11,
    propsName: "dateContainer",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the dateContainer section of dayPicker.",
  },
  {
    id: 12,
    propsName: "dateRow",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the dateRow section of dayPicker.",
  },
  {
    id: 13,
    propsName: "dateBody",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the dateBody section of dayPicker.",
  },
  {
    id: 14,
    propsName: "dateCell",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the dateCell section of dayPicker.",
  },
  {
    id: 15,
    propsName: "dateTrigger",
    propsType: ["string"],
    propsDescription:
      "use the props to add custom style in the dateTrigger section of dayPicker.",
  },
];
</script>

<template>
  <ComponentApiTable :data="DatePickerApiData" />
</template>
