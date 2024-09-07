<script lang="ts" setup>
import { Skeleton, SkeletonLine } from "~/src";
</script>

<template>
  <Skeleton class="max-w-xl space-y-2.5">
    <SkeletonLine class="h-4 w-11/12" />
    <SkeletonLine class="h-4 w-9/12" />
    <SkeletonLine class="h-4 w-10/12" />
    <SkeletonLine class="h-4 w-7/12" />
  </Skeleton>
</template>
