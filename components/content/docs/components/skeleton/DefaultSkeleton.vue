<script lang="ts" setup>
import CodeHighlightWithPreview from "~/components/content/CodeHighlightWithPreview.vue";
import { Skeleton, SkeletonLine } from "~/src";
import { DefaultSkeletonCode } from "./skeletonCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultSkeletonCode">
    <div class="flex items-center justify-center">
      <Skeleton class="max-w-xl space-y-2.5">
        <SkeletonLine class="h-4 w-full" />
        <SkeletonLine class="h-4 w-full" />
        <SkeletonLine class="h-4 w-3/5" />
        <SkeletonLine class="h-4 w-4/5" />
        <SkeletonLine class="h-10 w-2/5" />
      </Skeleton>
    </div>
  </CodeHighlightWithPreview>
</template>
