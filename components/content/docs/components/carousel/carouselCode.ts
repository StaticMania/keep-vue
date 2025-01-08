const CarouselWithAutoPlayCode = {
  "CarouselComponent.vue": `<script setup>
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-vue";
</script>

<template>
  <Carousel
    :options="{ loop: true }"
    :plugins="[
      Autoplay({
        delay: 2000,
      }),
    ]">
    <CarouselSlides>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div
          class="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
          <h1 class="text-heading-1 font-medium text-metal-900 dark:text-white">
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
</template>`,
};
const CarouselWithClassNamesCode = {
  "CarouselComponent.vue": `<script setup>
import ClassNames from "embla-carousel-class-names";
import { Carousel } from "keep-vue";
</script>

<template>
  <Carousel :options="{ loop: true }" :plugins="[ClassNames()]">
    <CarouselSlides>
      <CarouselItem
        v-for="(_, index) in 5"
        :key="index"
        class="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
        <NuxtImg
          class="rounded-xl"
          :src="https://picsum.photos/700/350?v=1}"
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
</template>`,
};
const CarouselWithLoopCode = {
  "CarouselComponent.vue": `<script setup>
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-vue";
</script>

<template>
  <Carousel :options="{ loop: true }">
    <CarouselSlides>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div
          class="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
          <h1 class="text-heading-1 font-medium text-metal-900 dark:text-white">
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
</template>`,
};
const DefaultCarouselCode = {
  "CarouselComponent.vue": `<script setup>
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-vue";
</script>

<template>
  <Carousel>
    <CarouselSlides>
      <CarouselItem v-for="(_, index) in 5" :key="index">
        <div
          class="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
          <h1 class="text-heading-1 font-medium text-metal-900 dark:text-white">
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
</template>`,
};
const SlidesToScrollCode = {
  "CarouselComponent.vue": `<script setup>
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from "keep-vue";
</script>

<template>
  <Carousel :options="{ slidesToScroll: 2 }">
    <CarouselSlides class="flex">
      <CarouselItem v-for="(_, index) in 5" :key="index" class="flex-[0_0_50%]">
        <div
          class="flex h-96 items-center justify-center rounded-xl border border-metal-100 bg-metal-50 dark:border-metal-900 dark:bg-metal-900">
          <h1 class="text-heading-1 font-medium text-metal-900 dark:text-white">
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
</template>`,
};

export {
  CarouselWithAutoPlayCode,
  CarouselWithClassNamesCode,
  CarouselWithLoopCode,
  DefaultCarouselCode,
  SlidesToScrollCode,
};
