<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";
import { PageNotAvailableCode } from "./emptyCode";
</script>

<template>
  <CodeHighlightWithPreview :code="PageNotAvailableCode">
    <Empty>
      <EmptyImage>
        <NuxtImg
          src="https://staticmania.cdn.prismic.io/staticmania/aa469681-b2d1-4384-a990-91906711a24d_Property+1%3DNight+sky_+Property+2%3DSm.svg"
          :height="234"
          :width="350"
          alt="404 Page not available" />
      </EmptyImage>
      <EmptyTitle class="mb-[14px] mt-5">
        Page is not available right now
      </EmptyTitle>
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
