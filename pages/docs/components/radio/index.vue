<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Radio - Keep Vue",
  description:
    "Radio Input Component is a user interface element used for selecting a single option from a set of mutually exclusive choices. It presents a list of options, and users can choose one option at a time by clicking on a radio button associated with each choice.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Radio
  </DocsContentLayout>
</template>
