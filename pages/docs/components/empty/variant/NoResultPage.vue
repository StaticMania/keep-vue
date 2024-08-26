<script lang="ts" setup>
import { buttonVariants } from "~/src/components/Button/buttonTheme";
import Empty from "~/src/components/Empty/Empty.vue";
import EmptyDescription from "~/src/components/Empty/EmptyDescription.vue";
import EmptyImage from "~/src/components/Empty/EmptyImage.vue";
import EmptyTitle from "~/src/components/Empty/EmptyTitle.vue";
</script>

<template>
  <Empty>
    <EmptyImage>
      <NuxtImg
        src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 No Result Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">Sorry, no result found!</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>
