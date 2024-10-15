const CommentLayoutCode = {
  "SkeletonComponent.vue": `<script setup>
import { Skeleton, SkeletonLine } from "keep-vue";
</script>

<template>
  <Skeleton class="flex max-w-md items-center gap-3">
    <SkeletonLine class="h-12 w-12 rounded-full" />
    <div class="space-y-2">
      <SkeletonLine class="h-4 w-[250px]" />
      <SkeletonLine class="h-4 w-[200px]" />
    </div>
  </Skeleton>
</template>`,
};

const DefaultSkeletonCode = {
  "SkeletonComponent.vue": `<script setup>
import { Skeleton, SkeletonLine } from "keep-vue";
</script>

<template>
  <Skeleton class="max-w-xl space-y-2.5">
    <SkeletonLine class="h-4 w-full" />
    <SkeletonLine class="h-4 w-full" />
    <SkeletonLine class="h-4 w-3/5" />
    <SkeletonLine class="h-4 w-4/5" />
    <SkeletonLine class="h-10 w-2/5" />
  </Skeleton>
</template>`,
};

const ParagraphSkeletonCode = {
  "SkeletonComponent.vue": `<script setup>
import { Skeleton, SkeletonLine } from "keep-vue";
</script>

<template>
  <Skeleton class="max-w-xl space-y-2.5">
    <SkeletonLine class="h-4 w-11/12" />
    <SkeletonLine class="h-4 w-9/12" />
    <SkeletonLine class="h-4 w-10/12" />
    <SkeletonLine class="h-4 w-7/12" />
  </Skeleton>
</template>`,
};

const PostSkeletonCode = {
  "SkeletonComponent.vue": `<script setup>
import { Skeleton, SkeletonLine } from "keep-vue";
</script>

<template>
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
</template>`,
};

const SkeletonWithoutAnimationCode = {
  "SkeletonComponent.vue": `<script setup>
import { Skeleton, SkeletonLine } from 'keep-vue'
</script>

<template>
  <Skeleton :animation="false" class="max-w-xl space-y-2.5">
    <SkeletonLine class="h-4 w-11/12" />
    <SkeletonLine class="h-4 w-9/12" />
    <SkeletonLine class="h-4 w-10/12" />
    <SkeletonLine class="h-4 w-7/12" />
  </Skeleton>
</template>`,
};

export {
  CommentLayoutCode,
  DefaultSkeletonCode,
  ParagraphSkeletonCode,
  PostSkeletonCode,
  SkeletonWithoutAnimationCode,
};
