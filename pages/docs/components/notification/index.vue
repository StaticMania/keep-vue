<script setup lang="ts">
import DefaultNotification from "./variant/DefaultNotification.vue";
import NotificationPosition from "./variant/NotificationPosition.vue";
import NotificationWithCard from "./variant/NotificationWithCard.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Notification - Keep Vue",
  description:
    "Notification component in the Keep React allows you to display informative messages or alerts to users. With various styles and options for positioning, you can effectively communicate important updates or messages in a visually appealing manner.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Notification</h3>
        <DefaultNotification />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Notification With Card</h3>
        <NotificationWithCard />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Notification Position</h3>
        <NotificationPosition />
      </div>
    </div>
  </DocsContentLayout>
</template>
