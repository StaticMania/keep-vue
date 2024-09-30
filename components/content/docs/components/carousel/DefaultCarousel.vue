<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "~/src";
import { DefaultCarouselCode } from "./carouselCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultCarouselCode">
    <Carousel>
      <CarouselSlides>
        <CarouselItem v-for="(_, index) in 5" :key="index">
          <div
            class="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
            <h1
              class="text-heading-1 font-medium text-metal-900 dark:text-white">
              {{ index + 1 }}
            </h1>
          </div>
        </CarouselItem>
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  </CodeHighlightWithPreview>
</template>
