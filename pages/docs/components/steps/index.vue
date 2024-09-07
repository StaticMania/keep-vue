<script setup lang="ts">
import DefaultStep from "./variant/DefaultStep.vue";
import StepWithBorder from "./variant/StepWithBorder.vue";
import StepWithIcon from "./variant/StepWithIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Steps - Keep Vue",
  description:
    "Steps Component is a user interface element used to guide users through a multi-step process or workflow. It presents a visual representation of the various stages or steps a user needs to complete in a sequential order. Each step is typically accompanied by a title, description, and an indicator of completion status, helping users track their progress.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Step</h3>
        <DefaultStep />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Step With Border</h3>
        <StepWithBorder />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Step With Icon</h3>
        <StepWithIcon />
      </div>
    </div>
  </DocsContentLayout>
</template>
