<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { AccordionWithoutIconCode } from "../AccordionCode";

const accordionItems = [
  {
    value: "item-1",
    title: "Q. How Do I Prepare for a Job Interview?",
    content:
      "To prepare for a job interview, research the company and review the job description thoroughly. Practice answering common interview questions and have examples ready to demonstrate your skills and experience. Dress appropriately, arrive early, and bring copies of your resume along with a positive attitude.",
  },
];
</script>

<template>
  <CodeHighlightWithPreview :code="AccordionWithoutIconCode">
    <Accordion class="w-full" collapsible>
      <AccordionPanel
        v-for="item in accordionItems"
        :key="item.value"
        :value="item.value">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
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
