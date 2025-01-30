<script lang="ts" setup>
import ComponentApiTable from "~/components/content/ComponentApiTable.vue";

const inputOtpApi = [
  {
    id: 1,
    propsName: "asChild",
    propsType: "boolean",
    propsDescription:
      "Change the default rendered element for the one passed as a child, merging their props and behavior.",
  },
  {
    id: 2,
    propsName: "defaultValue",
    propsType: "string[]",
    propsDescription:
      "The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.",
  },
  {
    id: 3,
    propsName: "mask",
    propsType: "string",
    propsDescription:
      "The name of the pin input. Submitted with its owning form as part of a name/value pair.",
  },
  {
    id: 4,
    propsName: "otp",
    propsType: "boolean",
    propsDescription:
      "When `true`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.",
  },
  {
    id: 5,
    propsName: "type",
    propsType: ["number, text"],
    propsDescription: "Input type for the inputs.",
    default: "text",
  },
  {
    id: 5,
    propsName: "v-model",
    propsType: "string[]",
    propsDescription: "Current input values.",
  },
  {
    id: 6,
    propsName: "complete",
    propsType: "[value: string[]]",
    propsDescription: "Otp input complete handler",
  },
];
</script>

<template>
  <ComponentApiTable :data="inputOtpApi" />
</template>
