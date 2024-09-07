<script lang="ts" setup>
import { Skeleton, SkeletonLine } from "~/src";
</script>

<template>
  <Skeleton class="max-w-xl space-y-2.5">
    <SkeletonLine class="h-4 w-full" />
    <SkeletonLine class="h-4 w-full" />
    <SkeletonLine class="h-4 w-3/5" />
    <SkeletonLine class="h-4 w-4/5" />
    <SkeletonLine class="h-10 w-2/5" />
  </Skeleton>
</template>
