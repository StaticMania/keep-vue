<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { AccordionWithoutIconCode } from "./AccordionCode";

const accordionItems = [
  {
    value: "item-1",
    title: "Q. What is the purpose of the Keep Vue?",
    content:
      "The Keep Vue is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications",
  },
];
</script>

<template>
  <CodeHighlightWithPreview :code="AccordionWithoutIconCode">
    <Accordion type="single" class="w-full" collapsible>
      <AccordionPanel
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value">
        <AccordionContainer>
          <AccordionTitle>
            {{ item.title }}
          </AccordionTitle>
        </AccordionContainer>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </CodeHighlightWithPreview>
</template>
