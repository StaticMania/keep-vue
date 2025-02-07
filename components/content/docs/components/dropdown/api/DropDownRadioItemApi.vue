<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const dropDownRadioItemApiData = [
  {
    id: 1,
    propsName: "textValue",
    propsType: "string",
    propsDescription:
      "Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item.Use this when the content is complex, or you have non-textual content inside.",
  },
  {
    id: 2,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription:
      "Change the default rendered element for the one passed as a child, merging their props and behavior.",
  },
  {
    id: 3,
    propsName: "value",
    propsType: "string",
    propsDescription: "The unique value of the item.",
  },
  {
    id: 3,
    propsName: "select",
    propsType: "[event: Event]",
    propsDescription:
      "Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the menu from closing when selecting that item.",
  },
];
</script>

<template>
  <ComponentApiTable :data="dropDownRadioItemApiData" />
</template>
