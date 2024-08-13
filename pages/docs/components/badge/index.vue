<script setup lang="ts">
import BadgeDots from "./Variants/BadgeDots.vue";
import BadgeSizes from "./Variants/BadgeSizes.vue";
import BadgeVariants from "./Variants/BadgeVariants.vue";
import DefaultBadge from "./Variants/DefaultBadge.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Badge - Keep Vue",
  description:
    "The Badge component in the Keep Vue allows you to add visual indicators or labels to highlight specific information or provide additional context. With customizable options for style, size, type, icon, and state, you can create versatile badges that fit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <div class="space-y-3">
        <h1 class="text-2xl font-medium">Default Badge</h1>
        <DefaultBadge />
      </div>
      <div class="space-y-3">
        <h1 class="text-2xl font-medium">Sizes of Badge</h1>
        <BadgeSizes />
      </div>
      <div class="space-y-3">
        <h1 class="text-2xl font-medium">Variants of Badge</h1>
        <BadgeVariants />
      </div>
      <div class="space-y-3">
        <h1 class="text-2xl font-medium">Badge With Dot</h1>
        <BadgeDots />
      </div>
    </div>
  </DocsContentLayout>
</template>
