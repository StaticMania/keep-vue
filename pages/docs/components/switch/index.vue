<script setup lang="ts">
import DefaultSwitch from "./variant/DefaultSwitch.vue";
import DisabledSwitch from "./variant/DisabledSwitch.vue";
import SwitchWithIcon from "./variant/SwitchWithIcon.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Switch - Keep Vue",
  description:
    "The Toggle Switch component provides a user-friendly way to enable or disable a setting or feature. It presents a visual representation of two states, typically on and off, allowing users to easily toggle between them. The Toggle Switch component is highly versatile and can be integrated into various user interfaces to enhance user interactions and control options.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Switch</h3>
        <DefaultSwitch />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Switch With Icon</h3>
        <SwitchWithIcon />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Disabled Switch</h3>
        <DisabledSwitch />
      </div>
    </div>
  </DocsContentLayout>
</template>
