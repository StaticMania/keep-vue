<script setup lang="ts">
import DefaultTextArea from "./variant/DefaultTextArea.vue";
import DisabledTextArea from "./variant/DisabledTextArea.vue";
import TextAreaWithForm from "./variant/TextAreaWithForm.vue";
import TextAreaWithHelperText from "./variant/TextAreaWithHelperText.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Textarea - Keep Vue",
  description:
    "Textarea Input Component is a user interface element used to collect and display multiline text input from users. It provides an expandable box where users can enter a larger amount of text, such as comments, descriptions, or messages.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default TextArea</h3>
        <DefaultTextArea />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Textarea With Helper Text</h3>
        <TextAreaWithHelperText />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Textarea in a Form</h3>
        <TextAreaWithForm />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Disabled Textarea</h3>
        <DisabledTextArea />
      </div>
    </div>
  </DocsContentLayout>
</template>
