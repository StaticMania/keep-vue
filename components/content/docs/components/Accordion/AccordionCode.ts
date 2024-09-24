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
  <Accordion class="w-full" collapsible>
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
  {
    value: "item-3",
    title: "Q. Can I add additional content to notifications?",
    content:
      "Yes, the Notification component in the Keep Vue allows you to include extra content alongside the primary message. The additionalContent prop can be used to display supplementary information, such as buttons, links,or icons, within the notification to provide users with more context and options.",
  },
];
</script>

<template>
  <Accordion type="multiple" flush collapsible>
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
  {
    value: "item-3",
    title: "Q. Can I add additional content to notifications?",
    content:
      "Yes, the Notification component in the Keep Vue allows you to include extra content alongside the primary message. The additionalContent prop can be used to display supplementary information, such as buttons, links,or icons, within the notification to provide users with more context and options.",
  },
];
</script>

<template>
  <Accordion
    type="multiple"
    class="w-full"
    collapsible
    :default-value="defaultValue">
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
  <Accordion type="single" class="w-full" collapsible>
    <AccordionPanel
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value">
      <AccordionContainer>
        <AccordionTitle>
          {{ item.title }}
        </AccordionTitle>

        <!-- custom icon  -->
        <AccordionIcon as-child>
          <PhCaretLineDown :size="20" />
        </AccordionIcon>
      </AccordionContainer>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
</template>
  `,
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
    title: "Q. What is the purpose of the Keep Vue?",
    content:
      "The Keep Vue is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications",
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
        </AccordionContainer>
        <AccordionContent>
          {{ item.content }}
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
</template>
  `,
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
    title: "Q. What is the purpose of the Keep React?",
    content:
      "The Keep React is a collection of UI components, styles, and guidelines that ensure consistency and a unified user experience across our products. It simplifies the design and development process by providing ready-to-use components that can be easily customized and integrated into various applications",
  },
  {
    value: "item-2",
    title: "Q. How do I customize the color scheme of components?",
    content:
      "The Keep React offers a range of color variants for components. To customize the color scheme, you can use the available color options such as gray,info,error,warning and success. Simply set the desired color variant as a prop when using the component, and it will reflect the chosen color.",
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
