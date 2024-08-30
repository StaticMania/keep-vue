<script setup lang="ts">
import DefaultSpinner from "./variant/DefaultSpinner.vue";
import SpinnerButton from "./variant/SpinnerButton.vue";
import SpinnerColors from "./variant/SpinnerColors.vue";
import SpinnerSizes from "./variant/SpinnerSizes.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Spinner - Keep Vue",
  description:
    "A Spinner Component is a visual user interface element commonly found in web and mobile applications. It is used to indicate ongoing processes or loading states, providing users with a visual cue that something is happening in the background.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h3>Default Spinner</h3>
        <DefaultSpinner />
      </div>
      <div class="bg-white p-6">
        <h3>Spinner Colors</h3>
        <SpinnerColors />
      </div>
      <div class="bg-white p-6">
        <h3>Spinner Sizes</h3>
        <SpinnerSizes />
      </div>
      <div class="bg-white p-6">
        <h3>Default Spinner</h3>
        <SpinnerButton />
      </div>
    </div>
  </DocsContentLayout>
</template>
