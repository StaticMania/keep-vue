<script setup lang="ts">
import ButtonColorVariant from "./varients/ButtonColorVariant.vue";
import ButtonShapeVariant from "./varients/ButtonShapeVariant.vue";
import ButtonSizeVariant from "./varients/ButtonSizeVariant.vue";
import ButtonVariantType from "./varients/ButtonVariantType.vue";
import ButtonWithIcon from "./varients/ButtonWithIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Button - Keep Vue",
  description:
    "The Buttons component in the Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Button Variant Type</h1>
        <ButtonVariantType />
      </div>

      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Button Colors Variant</h1>
        <ButtonColorVariant />
      </div>

      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Button Sizes Variant</h1>
        <ButtonSizeVariant />
      </div>

      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Button Shape Variant</h1>
        <ButtonShapeVariant />
      </div>

      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Button With Icon</h1>
        <ButtonWithIcon />
      </div>
    </div>
  </DocsContentLayout>
</template>
