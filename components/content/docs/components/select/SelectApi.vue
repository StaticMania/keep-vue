<script lang="ts" setup>
import ComponentApiTable, {
  type ComponentApiProps,
} from "~/components/content/ComponentApiTable.vue";

const selectApiData: ComponentApiProps[] = [
  {
    id: 1,
    propsName: "defaultOpen",
    propsType: "boolean",
    propsDescription:
      "The open state of the select when it is initially rendered. Use when you do not need to control its open state.",
  },
  {
    id: 2,
    propsName: "defaultValue",
    propsType: "string",
    propsDescription:
      "The value of the select when initially rendered. Use when you do not need to control the state of the Select",
  },
  {
    id: 3,
    propsName: "disabled",
    propsType: "boolean",
    propsDescription:
      "When true, prevents the user from interacting with Select",
  },
  {
    id: 4,
    propsName: "modelValue",
    propsType: "string",
    propsDescription:
      "The name of the Select. Submitted with its owning form as part of a name/value pair.",
  },
  {
    id: 5,
    propsName: "open",
    propsType: "boolean",
    propsDescription:
      "The controlled open state of the Select. Can be bind as v-model:open.",
  },
  {
    id: 6,
    propsName: "update:modelValue",
    propsType: "function",
    propsDescription: "Event handler called when the value changes.",
  },
  {
    id: 7,
    propsName: "update:open",
    propsType: "function",
    propsDescription:
      "Event handler called when the open state of the context menu changes.",
  },
];
</script>

<template>
  <ComponentApiTable :data="selectApiData" />
</template>
