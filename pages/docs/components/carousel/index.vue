<script setup lang="ts">
import CarouselWithAutoPlay from "./variant/CarouselWithAutoPlay.vue";
import CarouselWithClassNames from "./variant/CarouselWithClassNames.vue";
import CarouselWithLoop from "./variant/CarouselWithLoop.vue";
import DefaultCarousel from "./variant/DefaultCarousel.vue";
import SlidesToScroll from "./variant/SlidesToScroll.vue";

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
      <div class="space-y-3 bg-white p-6">
        <h1>Carousel with loop</h1>
        <CarouselWithLoop />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1>SlideToScroll Carousel</h1>
        <SlidesToScroll />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1>Auto Play Plugin</h1>
        <CarouselWithAutoPlay />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1>ClassNames Plugin</h1>
        <CarouselWithClassNames />
      </div>
    </div>
  </DocsContentLayout>
</template>
