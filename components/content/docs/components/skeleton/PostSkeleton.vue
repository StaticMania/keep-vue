<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Skeleton, SkeletonLine } from "~/src";
import { PostSkeletonCode } from "./skeletonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="PostSkeletonCode">
    <div class="grid grid-cols-1 gap-5 xl:grid-cols-2">
      <Skeleton class="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine class="h-52 w-full" />
        <SkeletonLine class="h-4 w-full" />
        <SkeletonLine class="h-4 w-3/5" />
        <SkeletonLine class="h-4 w-4/5" />
        <SkeletonLine class="h-10 w-2/5" />
      </Skeleton>
      <Skeleton class="w-full space-y-2.5 xl:max-w-md">
        <SkeletonLine class="h-52 w-full" />
        <SkeletonLine class="h-4 w-full" />
        <SkeletonLine class="h-4 w-3/5" />
        <SkeletonLine class="h-4 w-4/5" />
        <SkeletonLine class="h-10 w-2/5" />
      </Skeleton>
    </div>
  </CodeHighlightWithPreview>
</template>
