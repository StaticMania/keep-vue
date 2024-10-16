const DefaultAccordionCode = {
  "AccordionComponent.vue": `
 <script setup>
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";

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
  <Accordion class="w-full" type="single" collapsible>
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
  `,
};
const AccordionOpenFirstPanelCode = {
  "AccordionComponent.vue": `
 <script setup>
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";

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
</template>`,
};

const flushAccordionCode = {
  "AccordionComponent.vue": `
 <script setup>
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";

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
</template>`,
};

const AccordionWithCustomIconCode = {
  "AccordionComponent.vue": `
 <script setup>
import { PhCaretLineDown } from "@phosphor-icons/vue";
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";

</script>

<template>
     <Accordion type="single" class="w-full space-y-4" collapsible>
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
 </template>`,
};

const AccordionWithoutIconCode = {
  "AccordionComponent.vue": `
 <script setup>
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";
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
     <Accordion type="single" class="w-full" collapsible>
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
</template>`,
};

const AccordionDisabledCode = {
  "AccordionComponent.vue": `
 <script setup>
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
} from "keep-vue";

const accordionItems = [
  {
    value: "item-1",
    title: "Q. What is the purpose of the Keep Vue?",
    content:
      "The Keep Vue is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications",
  },
  {
    value: "item-2",
    title: "Q. How do I customize the color scheme of components?",
    content:
      "The Keep Vue offers a range of color variants for components. To customize the color scheme, you can use the available color options such as gray,info,error,warning and success. Simply set the desired color variant as a prop when using the component, and it will reflect the chosen color.",
  },
];
</script>

<template>
  <Accordion disabled type="single" class="w-full" collapsible>
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
  `,
};

export {
  AccordionDisabledCode,
  AccordionOpenFirstPanelCode,
  AccordionWithCustomIconCode,
  AccordionWithoutIconCode,
  DefaultAccordionCode,
  flushAccordionCode,
};
