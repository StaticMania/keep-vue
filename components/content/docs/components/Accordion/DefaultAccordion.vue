<script setup lang="ts">
const accordionItems = [
  {
    value: "item-1",
    title: "Q. What is the purpose of the Keep React?",
    content:
      "The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications",
  },
];
</script>

<template>
  <Accordion type="single" class="w-full" collapsible>
    <AccordionPanel
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value">
      <AccordionContainer>
        <AccordionTitle>
          {{ item.title }}
        </AccordionTitle>
        <AccordionIcon />
      </AccordionContainer>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
