<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const notificationApi = [
  {
    id: 1,
    propsName: "position",
    propsType: [
      "bottomRight",
      "topLeft",
      "topCenter",
      "topRight",
      "bottomLeft",
    ],
    propsDescription: "Sets the position of the notification.",
    default: "bottomRight",
  },
];
</script>

<template>
  <ComponentApiTable :data="notificationApi"></ComponentApiTable>
</template>
