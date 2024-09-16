<script setup lang="ts">
import AlertColorVariant from "./varient/AlertColorVariant.vue";
import AlertWithBgColor from "./varient/AlertWithBgColor.vue";
import AlertWithDismissIcon from "./varient/AlertWithDismissIcon.vue";
import DefaultAlert from "./varient/DefaultAlert.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Alert - Keep Vue",
  description:
    "The Alert component in the Keep React allows you to display important messages, notifications, or warnings to users. With customizable options for style, close icon, border, and state, you can create visually appealing and informative alerts that align with your design requirements.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-8">
      <div class="space-y-3 bg-white p-10">
        <h3 class="text-2xl font-medium">Default Alert</h3>
        <DefaultAlert />
      </div>

      <div class="space-y-3 bg-white p-10">
        <h3 class="text-2xl font-medium">Color Variants of Alerts</h3>
        <AlertColorVariant />
      </div>

      <div class="space-y-3 bg-white p-10">
        <h3 class="text-2xl font-medium">Alert With Background Color</h3>
        <AlertWithBgColor />
      </div>

      <div class="space-y-3 bg-white p-10">
        <h3 class="text-2xl font-medium">Dismissible Alerts</h3>
        <AlertWithDismissIcon />
      </div>
    </div>
  </DocsContentLayout>
</template>
