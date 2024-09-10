<script setup lang="ts">
import CustomizeModal from "./variant/CustomizeModal.vue";
import DefaultModal from "./variant/DefaultModal.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Modal - Keep Vue",
  description:
    "A modal component is a user interface element commonly used in web and mobile applications to display focused content or interactions that temporarily overlay the main screen. Modal components typically appear as a small window or dialog box that appears on top of the existing content, effectively blocking interaction with the underlying interface until the modal is dismissed.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Modal</h3>
        <DefaultModal />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Customizable Modal</h3>
        <CustomizeModal />
      </div>
    </div>
  </DocsContentLayout>
</template>
