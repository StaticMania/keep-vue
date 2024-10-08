<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { AccordionOpenFirstPanelCode } from "../AccordionCode";

const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Q. What is your return policy?",
    content:
      "Our return policy allows you to return any product within 30 days of purchase as long as it’s in its original condition. Refunds are processed within 7–10 business days.",
  },
  {
    value: "item-2",
    title: "Q. How long does shipping take?",
    content:
      "Standard shipping typically takes 5–7 business days. Expedited shipping options are available during checkout.",
  },
  {
    value: "item-3",
    title: "Q. Can I track my order?",
    content:
      "Yes, you will receive a tracking number once your order is shipped. You can use it to check the status of your delivery at any time.",
  },
];
</script>

<template>
  <CodeHighlightWithPreview :code="AccordionOpenFirstPanelCode">
    <Accordion
      type="single"
      class="space-y-4"
      collapsible
      :default-value="defaultValue">
      <AccordionPanel
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
            {{ item.title }}
          </AccordionTitle>
          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </CodeHighlightWithPreview>
</template>
