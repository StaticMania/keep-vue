<script setup lang="ts">
import AvatarGroup from "~/src/components/Avatar/AvatarGroup.vue";
import AvatarWithImage from "./variant/AvatarWithImage.vue";
import AvatarWithStatus from "./variant/AvatarWithStatus.vue";
import DefaultAvatar from "./variant/DefaultAvatar.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Avatar - Keep Vue",
  description:
    "The Avatar component in the Keep React allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Default Avatar</h1>
        <DefaultAvatar />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Using User Images</h1>
        <AvatarWithImage />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Avatar Status</h1>
        <AvatarWithStatus />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h1 class="text-2xl font-medium">Avatar Group</h1>
        <AvatarGroup />
      </div>
    </div>
  </DocsContentLayout>
</template>
