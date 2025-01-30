<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const textareaApiData = [
  {
    id: 2,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription: "Disables interactions with the textarea component.",
    default: "false",
  },
];
</script>

<template>
  <ComponentApiTable :data="textareaApiData" />
</template>
