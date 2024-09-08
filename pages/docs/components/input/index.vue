<script setup lang="ts">
import DefaultInput from "./variant/DefaultInput.vue";
import DisabledInput from "./variant/DisabledInput.vue";
import InputUseCases from "./variant/InputUseCases.vue";
import InputWithIcon from "./variant/InputWithIcon.vue";
import LabelInput from "./variant/LabelInput.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Input - Keep Vue",
  description:
    "Input Component is a fundamental user interface element used to collect user input or data in various forms, such as text, numbers, dates, or selections. It provides a space where users can type or select information, allowing them to interact with the application and provide necessary inputs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Input</h3>
        <DefaultInput />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Input With Label</h3>
        <LabelInput />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Input With Icon</h3>
        <InputWithIcon />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Disabled Input</h3>
        <DisabledInput />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Use Case of Input</h3>
        <InputUseCases />
      </div>
    </div>
  </DocsContentLayout>
</template>
