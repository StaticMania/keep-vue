<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { DefaultAccordionCode } from "../AccordionCode";
</script>

<template>
  <CodeHighlightWithPreview :code="DefaultAccordionCode">
    <Accordion type="single" class="w-full" collapsible>
      <AccordionPanel value="item-1">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
            Q. What is the purpose of the Keep Vue?
          </AccordionTitle>
          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          The Keep Vue is a collection of UI components, styles, and guidelines
          that ensure consistency and a unified user experience across our
          products. It simplifies the design and development process by
          providing ready-to-use components that can be easily customized and
          integrated into various applications.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </CodeHighlightWithPreview>
</template>
