<script setup lang="ts">
import ButtonGroupWithIcon from "./variant/ButtonGroupWithIcon.vue";
import ButtonGroupWithOnlyIcon from "./variant/ButtonGroupWithOnlyIcon.vue";
import DefaultButtonGroup from "./variant/DefaultButtonGroup.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Button Group - Keep Vue",
  description:
    "The Buttons component in the Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="my-4">
      <h3>Default Button Group</h3>
      <DefaultButtonGroup />
    </div>
    <div class="my-4">
      <h3>Button Group with Icon</h3>
      <ButtonGroupWithIcon />
    </div>
    <div class="my-4">
      <h3>Button Group with only icon</h3>
      <ButtonGroupWithOnlyIcon />
    </div>
  </DocsContentLayout>
</template>
