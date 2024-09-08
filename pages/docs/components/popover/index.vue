<script setup lang="ts">
import CardPopover from "./variant/CardPopover.vue";
import DefaultPopover from "./variant/DefaultPopover.vue";
import IconPopover from "./variant/IconPopover.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Popover - Keep Vue",
  description:
    "Popover component is a user interface element that displays additional information or options when a user interacts with a specific trigger, such as hovering over text or clicking a button.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6 p-3">
      <div class="space-y-3">
        <h3>Default Popover</h3>
        <DefaultPopover />
      </div>
      <div class="space-y-3">
        <h3>Card Popover</h3>
        <CardPopover />
      </div>
      <div class="space-y-3">
        <h3>Icon Popover</h3>
        <IconPopover />
      </div>
    </div>
  </DocsContentLayout>
</template>
