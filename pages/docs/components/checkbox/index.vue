<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "CheckBox - Keep Vue",
  description:
    "The Checkbox Component is a user interface element that allows users to toggle between two states, typically representing selection or deselection. It consists of a small box that can be checked (selected) or unchecked (deselected). Checkboxes are commonly used in forms, lists, and interactive interfaces to enable users to make multiple selections or indicate their preferences.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Check Box
  </DocsContentLayout>
</template>
