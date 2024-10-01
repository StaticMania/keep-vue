<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const DatePickerApiData = [
  {
    id: 1,
    propsName: "classes",
    propsType: [
      "datePickerHeader",
      "prevBtn",
      "datePickerHeading",
      "nextBtn",
      "datePickerBody",
      "MonthContainer",
      "weekContainer",
      "weekHeader",
      "weekLabel",
      "dateContainer",
      "dateRow",
      "dateBody",
      "dateCell",
      "dateTrigger",
    ],
    propsDescription:
      "use the properties under the classes object as key value pair and customize the date picker",
    default: "default",
  },
];
</script>

<template>
  <ComponentApiTable :data="DatePickerApiData" />
</template>
