<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "DatePicker - Keep Vue",
  description:
    "The Date Picker component offers an intuitive way for users to select dates from a calendar. With this component, users can easily navigate through months and years to pick specific dates. The Date Picker supports a range of customization options, allowing developers to control date formats, highlight specific dates, set minimum and maximum selectable dates, and more.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Date Picker
  </DocsContentLayout>
</template>
