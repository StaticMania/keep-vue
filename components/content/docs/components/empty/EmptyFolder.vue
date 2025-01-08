<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import {
  buttonVariants,
  Empty,
  EmptyDescription,
  EmptyImage,
  EmptyTitle,
} from "~/src";
import { EmptyFolderCode } from "./emptyCode";
</script>
<template>
  <CodeHighlightWithPreview :code="EmptyFolderCode">
    <Empty>
      <EmptyImage>
        <NuxtImg
          src="https://staticmania.cdn.prismic.io/staticmania/7c82d76e-be06-41ca-a6ef-3db9009e6231_Property+1%3DFolder_+Property+2%3DSm.svg"
          :height="234"
          :width="350"
          alt="404 Empty Folder" />
      </EmptyImage>
      <EmptyTitle class="mb-[14px] mt-5">
        This folder has gone missing
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
