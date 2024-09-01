<script setup lang="ts">
import DefaultRating from "./variant/DefaultRating.vue";
import RatingTypes from "./variant/RatingTypes.vue";
import ValueFromRating from "./variant/ValueFromRating.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Rating - Keep Vue",
  description:
    "The Rating Component in the Keep React allows users to provide ratings for various items or content. It provides a visual representation of the rating using a set of stars or other symbols. With customizable options for the rating status, you can create rating components that accurately reflect user feedback.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="bg-white p-6">
        <h3>Default Rating</h3>
        <DefaultRating />
      </div>
      <div class="bg-white p-6">
        <h3>Rating Type</h3>
        <RatingTypes />
      </div>
      <div class="bg-white p-6">
        <h3>Value From Rating</h3>
        <ValueFromRating />
      </div>
    </div>
  </DocsContentLayout>
</template>
