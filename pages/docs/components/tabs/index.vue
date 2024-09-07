<script setup lang="ts">
import DefaultTabs from "./variant/DefaultTabs.vue";
import TabsFill from "./variant/TabsFill.vue";
import TabsUnderline from "./variant/TabsUnderline.vue";
import TabsWithIcon from "./variant/TabsWithIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Tabs - Keep Vue",
  description:
    "The Tab Group Component in the Keep React allows you to organize and display content in a tabbed interface. It provides a convenient way to switch between different sections or views within a single container.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Tab</h3>
        <DefaultTabs />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Tabs With Icon</h3>
        <TabsWithIcon />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Tabs Fill variant</h3>
        <TabsFill />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Tabs Underline variant</h3>
        <TabsUnderline />
      </div>
    </div>
  </DocsContentLayout>
</template>
