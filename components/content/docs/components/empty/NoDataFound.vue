<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";
import { NoDataFoundCode } from "./emptyCode";
</script>
<template>
  <CodeHighlightWithPreview :code="NoDataFoundCode">
    <Empty>
      <EmptyImage>
        <NuxtImg
          src="https://staticmania.cdn.prismic.io/staticmania/16994ca5-ac01-4868-8ade-1b9e276ccdb3_Property+1%3DFolder_+Property+2%3DLg.svg"
          :height="234"
          width="350"
          alt="404 No Data Found" />
      </EmptyImage>
      <EmptyTitle class="mb-[14px] mt-5">No Data Found</EmptyTitle>
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
