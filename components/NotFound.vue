<script setup lang="ts">
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";

const metadata = ref({
  title: "Page not Found",
  meta: [
    {
      name: "description",
      content:
        "When a invalid or unknown route is hit then the not found page will show to the ui",
    },
  ],
});

useHead({ ...metadata.value });
</script>

<template>
  <div class="flex h-dvh items-center justify-center">
    <Empty class="py-10 lg:py-40">
      <EmptyImage>
        <NuxtImg
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height="{234}"
          width="{350}"
          alt="404" />
      </EmptyImage>
      <EmptyTitle class="mb-[14px] mt-5">Sorry, No Result Found!</EmptyTitle>
      <EmptyDescription class="mb-8">
        The page/topic you are looking for is not found.
      </EmptyDescription>
      <NuxtLink href="/" :class="buttonVariants()">Back to Docs</NuxtLink>
    </Empty>
  </div>
</template>
