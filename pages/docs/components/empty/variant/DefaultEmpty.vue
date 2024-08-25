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
        src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 Not Found" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">Oops! You seem to be lost</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink
      href="/"
      :class="
        buttonVariants({
          color: 'primary',
        })
      ">
      Go to home
    </NuxtLink>
  </Empty>
</template>
