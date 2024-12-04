<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Skeleton, SkeletonLine } from "~/src";
import { ParagraphSkeletonCode } from "./skeletonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="ParagraphSkeletonCode">
    <div class="flex items-center justify-center">
      <Skeleton class="max-w-xl space-y-2.5">
        <SkeletonLine class="h-4 w-11/12" />
        <SkeletonLine class="h-4 w-9/12" />
        <SkeletonLine class="h-4 w-10/12" />
        <SkeletonLine class="h-4 w-7/12" />
      </Skeleton>
    </div>
  </CodeHighlightWithPreview>
</template>
