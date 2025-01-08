<script lang="ts" setup>
import ClassNames from "embla-carousel-class-names";
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Carousel } from "~/src";
import { CarouselWithClassNamesCode } from "./carouselCode";
</script>

<template>
  <CodeHighlightWithPreview :code="CarouselWithClassNamesCode">
    <Carousel :options="{ loop: true }" :plugins="[ClassNames()]">
      <CarouselSlides>
        <CarouselItem
          v-for="(_, index) in 5"
          :key="index"
          class="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
          <NuxtImg
            class="rounded-xl"
            :src="`https://picsum.photos/700/350?v=${index + 1}`"
            alt="Carousel Item" />
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
