<script setup lang="ts">
import DefaultNumberInput from "./Variant/DefaultNumberInput.vue";
import NumberInputWithLabel from "./Variant/NumberInputWithLabel.vue";
import NumberInputWithState from "./Variant/NumberInputWithState.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Number Input - Keep Vue",
  description:
    "Number Input Component is a user interface element designed for collecting numeric input from users. It provides a field where users can enter numerical values, such as integers or decimals, using keyboard input or arrow buttons.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h3>Default Number value</h3>
        <DefaultNumberInput />
      </div>
      <div class="bg-white p-6">
        <h3 class="mb-4">Number Input With Label</h3>
        <NumberInputWithLabel />
      </div>
      <div class="bg-white p-6">
        <h1>Number Input With State</h1>
        <NumberInputWithState />
      </div>
    </div>
  </DocsContentLayout>
</template>
