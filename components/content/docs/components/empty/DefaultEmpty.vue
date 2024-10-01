<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";
import { DefaultEmptyCode } from "./emptyCode";
</script>
<template>
  <CodeHighlightWithPreview :code="DefaultEmptyCode">
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
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
  </CodeHighlightWithPreview>
</template>
