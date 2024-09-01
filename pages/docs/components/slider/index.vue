<script setup lang="ts">
import DefaultSlider from "./variant/DefaultSlider.vue";
import DoubleSlider from "./variant/DoubleSlider.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Slider - Keep Vue",
  description:
    "The slider component in the Keep React allows users to select a value within a specified range. With customizable options for the control handle type, scale display, label, and tooltip, you can create versatile sliders that fit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Slider</h3>
        <DefaultSlider />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Double Slider</h3>
        <DoubleSlider />
      </div>
    </div>
  </DocsContentLayout>
</template>
