<script setup lang="ts">
definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Navbar - Keep Vue",
  description:
    "The Navbar component is a fundamental UI element used in web development to create a navigation bar at the top of a webpage. It provides a structured and organized way to display links, menus, and other navigation-related content to users.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description"
  >
    Navbar
  </DocsContentLayout>
</template>
