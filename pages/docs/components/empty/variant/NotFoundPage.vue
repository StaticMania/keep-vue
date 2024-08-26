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
        src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
        :height="234"
        :width="350"
        alt="404 Not Found" />
    </EmptyImage>
    <EmptyTitle className="mb-[14px] mt-5">404 Not Found</EmptyTitle>
    <EmptyDescription className="mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry.
    </EmptyDescription>
    <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
      Go to home
    </NuxtLink>
  </Empty>
</template>
