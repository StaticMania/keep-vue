<script setup lang="ts">
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "~/src";
import { AccordionWithCustomIconCode } from "../AccordionCode";
</script>

<template>
  <CodeHighlightWithPreview :code="AccordionWithCustomIconCode">
    <Accordion class="w-full space-y-4" collapsible>
      <AccordionPanel value="item-1">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
            <section class="flex items-center gap-2.5">
              <AccordionIcon>
                <PhosphorIconKeyhole
                  :size="22"
                  class="fill-black dark:fill-metal-25" />
              </AccordionIcon>
              How do I authenticate with the API?
            </section>
          </AccordionTitle>

          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          To authenticate with the API, you need to include your API key in the
          request header as 'Authorization: Bearer YOUR_API_KEY'. You can obtain
          your API key by signing up on our platform and navigating to the API
          section of your account settings.
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="item-2">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
            <section class="flex items-center gap-2.5">
              <AccordionIcon>
                <PhosphorIconFilePlus
                  :size="22"
                  class="fill-black dark:fill-metal-25" />
              </AccordionIcon>
              What are the rate limits for API requests?
            </section>
          </AccordionTitle>

          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          Our API has a rate limit of 100 requests per minute per user. If you
          exceed this limit, you will receive a 429 Too Many Requests response.
          You can monitor your usage via the dashboard, and if you need higher
          limits, please contact our support team.
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="item-3">
        <AccordionContainer>
          <AccordionTitle class="first-letter:text-primary-500">
            <section class="flex items-center gap-2.5">
              <AccordionIcon>
                <PhosphorIconShieldWarning
                  :size="22"
                  class="fill-black dark:fill-metal-25" />
              </AccordionIcon>
              How do I handle errors in API responses?
            </section>
          </AccordionTitle>

          <AccordionIcon />
        </AccordionContainer>
        <AccordionContent>
          When an error occurs, the API will return a response with a status
          code indicating the type of error (e.g., 400 for bad requests, 401 for
          unauthorized, etc.). The response body will contain an error message
          with details about the issue. Make sure to check these codes and
          messages to troubleshoot problems effectively.
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </CodeHighlightWithPreview>
</template>
