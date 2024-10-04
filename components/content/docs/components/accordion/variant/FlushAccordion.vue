<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { flushAccordionCode } from "../AccordionCode";

const accordionItems = [
  {
    value: "item-1",
    title: "Privacy Policy and Data",
    content:
      "We are committed to protecting your personal data. Our privacy policy outlines the types of information we collect and how it is used.",
  },
  {
    value: "item-2",
    title: "Terms of Service Guidelines",
    content:
      "By using our website, you agree to our terms of service, including guidelines on purchases, content use, and account management.",
  },
  {
    value: "item-3",
    title: "Cookie Policy and Preferences",
    content:
      "Our website uses cookies to enhance your browsing experience. You can manage or disable cookies through your browser settings, but this may affect certain functionalities on our site.",
  },
];
</script>

<template>
  <CodeHighlightWithPreview :code="flushAccordionCode">
    <Accordion type="single" flush collapsible>
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
  </CodeHighlightWithPreview>
</template>
