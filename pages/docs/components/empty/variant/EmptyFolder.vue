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
        src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
        :height="234"
        :width="350"
        alt="404 Empty Folder" />
    </EmptyImage>
    <EmptyTitle class="mb-[14px] mt-5">This folder has gone missing</EmptyTitle>
    <EmptyDescription class="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>
