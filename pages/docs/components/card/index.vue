<script setup lang="ts">
import CardWithAvatar from "./varient/CardWithAvatar.vue";
import DefaultCard from "./varient/DefaultCard.vue";
import ProductCard from "./varient/ProductCard.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Card - Keep Vue",
  description:
    "The card component in Keep React offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="my-4">
      <p>Default Card</p>
      <DefaultCard />
    </div>

    <div class="my-4">
      <p>Card with avatar</p>
      <CardWithAvatar />
    </div>

    <div class="my-4">
      <p>Card with product</p>
      <ProductCard />
    </div>
  </DocsContentLayout>
</template>
