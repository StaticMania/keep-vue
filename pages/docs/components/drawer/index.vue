<script setup lang="ts">
import BottomDrawer from "./variant/BottomDrawer.vue";
import DefaultDrawer from "./variant/DefaultDrawer.vue";
import LeftDrawer from "./variant/LeftDrawer.vue";
import RightDrawer from "./variant/RightDrawer.vue";
import TopDrawer from "./variant/TopDrawer.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Drawer - Keep Vue",
  description:
    "The Drawer component provides a flexible and customizable way to create drawers that can slide in from different directions (left, right, top, or bottom) within your React application. It supports features like animation, keyboard accessibility (ESC key to close), and clicking outside the drawer to close it.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Drawer</h3>
        <DefaultDrawer />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Drawer with Position</h3>
        <div class="flex gap-3">
          <LeftDrawer />

          <RightDrawer />

          <TopDrawer />

          <BottomDrawer />
        </div>
      </div>
    </div>
  </DocsContentLayout>
</template>
