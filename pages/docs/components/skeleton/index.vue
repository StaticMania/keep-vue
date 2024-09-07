<script setup lang="ts">
import CommentLayout from "./variant/CommentLayout.vue";
import DefaultSkeleton from "./variant/DefaultSkeleton.vue";
import ParagraphSkeleton from "./variant/ParagraphSkeleton.vue";
import PostSkeleton from "./variant/PostSkeleton.vue";
import SkeletonWithoutAnimation from "./variant/SkeletonWithoutAnimation.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Skeleton - Keep Vue",
  description:
    "The Preloader component in the Keep React provides a visual indication of an ongoing process or loading state. With various options for type and device, you can choose the appropriate preloader style to enhance the user experience on both web and mobile platforms.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Skeleton</h3>
        <DefaultSkeleton />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Comment Layout Skeleton</h3>
        <CommentLayout />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Paragraph Skeleton</h3>
        <ParagraphSkeleton />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Post Skeleton</h3>
        <PostSkeleton />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Skeleton with animation</h3>
        <SkeletonWithoutAnimation />
      </div>
    </div>
  </DocsContentLayout>
</template>
