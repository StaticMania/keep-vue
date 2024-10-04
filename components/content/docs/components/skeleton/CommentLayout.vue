<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Skeleton, SkeletonLine } from "~/src";
import { CommentLayoutCode } from "./skeletonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="CommentLayoutCode">
    <Skeleton class="flex max-w-md items-center gap-3">
      <SkeletonLine class="h-12 w-12 rounded-full" />
      <div class="space-y-2">
        <SkeletonLine class="h-4 w-[250px]" />
        <SkeletonLine class="h-4 w-[200px]" />
      </div>
    </Skeleton>
  </CodeHighlightWithPreview>
</template>
