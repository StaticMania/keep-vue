<script setup lang="ts">
import DefaultRadio from "./variant/DefaultRadio.vue";
import RadioVariant from "./variant/RadioVariant.vue";

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
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h1>Default Radio Button</h1>
        <DefaultRadio />
      </div>
      <div class="bg-white p-6">
        <h1>Radio Button with Different Shapes</h1>
        <RadioVariant />
      </div>
    </div>
  </DocsContentLayout>
</template>
