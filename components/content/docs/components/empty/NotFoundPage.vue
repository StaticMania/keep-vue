<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";
import { NotFoundPageCode } from "./emptyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="NotFoundPageCode">
    <Empty>
      <EmptyImage>
        <NuxtImg
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          :height="234"
          :width="350"
          alt="404 Not Found" />
      </EmptyImage>
      <EmptyTitle class="mb-[14px] mt-5">404 Not Found</EmptyTitle>
      <EmptyDescription class="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <NuxtLink href="/" :class="buttonVariants({ color: 'primary' })">
        Go to home
      </NuxtLink>
    </Empty>
  </CodeHighlightWithPreview>
</template>
