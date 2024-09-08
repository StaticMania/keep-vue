<script setup lang="ts">
import DefaultTooltip from "./variant/DefaultTooltip.vue";
import TooltipPlacement from "./variant/TooltipPlacement.vue";
import TooltipWithLargeText from "./variant/TooltipWithLargeText.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Tooltip - Keep Vue",
  description:
    "The Tooltips component in the Keep React allows you to provide additional information or context to users when they hover over or interact with specific elements. With customizable options for type, theme, and arrow placement, you can create versatile tooltips that fit your design needs.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Tooltip</h3>
        <DefaultTooltip />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Tooltip Placement</h3>
        <TooltipPlacement />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Tooltip With Large Text</h3>
        <TooltipWithLargeText />
      </div>
    </div>
  </DocsContentLayout>
</template>
