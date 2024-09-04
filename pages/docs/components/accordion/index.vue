<script setup lang="ts">
import AccordionOpenFirstPanel from "./variant/AccordionOpenFirstPanel.vue";
import AccordionWithCustomIcon from "./variant/AccordionWithCustomIcon.vue";
import DefaultAccordion from "./variant/DefaultAccordion.vue";
import DisabledAccordion from "./variant/DisabledAccordion.vue";
import FlushAccordion from "./variant/FlushAccordion.vue";

definePageMeta({
  layout: "docs",
});

const metadata = reactive({
  title: "Accordion - Keep Vue",
  description:
    "The Accordion Component in the Keep React allows you to create collapsible sections of content, commonly known as accordions. Users can toggle the visibility of the content by clicking on the disclosure button. With customizable options for the theme, open state, type, and state, you can create accordion components that fit seamlessly into your design and provide an intuitive user experience.",
});

useHead({ ...metadata });
</script>

<template>
  <DocsContentLayout
    :title="metadata.title"
    :description="metadata.description">
    <div class="space-y-6">
      <div class="space-y-3 bg-white p-6">
        <h3>Default Accordion</h3>
        <DefaultAccordion />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Accordion Open First Panel</h3>
        <AccordionOpenFirstPanel />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Flush Accordion</h3>
        <FlushAccordion />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Custom Accordion Icon</h3>
        <AccordionWithCustomIcon />
      </div>
      <div class="space-y-3 bg-white p-6">
        <h3>Disabled Accordion</h3>
        <DisabledAccordion />
      </div>
    </div>
  </DocsContentLayout>
</template>
