<script setup lang="ts">
import DefaultToast from "./variant/DefaultToast.vue";
import ToastVariant from "./variant/ToastVariant.vue";
import ToastWithAction from "./variant/ToastWithAction.vue";
import ToastWithDescription from "./variant/ToastWithDescription.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Toast - Keep Vue",
  description:
    "Toasts typically appear as small, non-intrusive pop-up notifications that appear near the edge of the screen and disappear automatically after a short period of time or when dismissed by the user.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Toast</h3>
        <DefaultToast />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Toast With Description</h3>
        <ToastWithDescription />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Toast With Action</h3>
        <ToastWithAction />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Toast With Color Variant</h3>
        <ToastVariant />
      </div>
    </div>
  </DocsContentLayout>
</template>
