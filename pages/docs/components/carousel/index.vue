<script setup lang="ts">
import DefaultCarousel from "./variant/DefaultCarousel.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Carousel - Keep Vue",
  description:
    "A Carousel component is a user interface element commonly found in web and mobile applications that allows you to display a series of images, content, or media items in a rotating manner. It is often used to showcase multiple items in a limited space, allowing users to view different items by sliding or swiping through them.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h1>Default Carousel</h1>
        <DefaultCarousel />
      </div>
    </div>
  </DocsContentLayout>
</template>
