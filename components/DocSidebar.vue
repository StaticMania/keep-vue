<script lang="ts" setup>
import { docsRoutes, gettingStaredRoutes, layoutRoutes } from "~/Routes/routes";
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "~/src";

const pathname = useRoute();

const isActive = (str: string) => {
  const lastPart = pathname?.path?.toLocaleLowerCase()?.split("/")?.pop();
  const strPart = str.toLowerCase().split("/").pop();
  return strPart === lastPart;
};
</script>

<template>
  <div class="hidden lg:col-span-3 lg:block xl:col-span-2">
    <aside
      id="componentListSidebar"
      class="sticky top-28 h-[75vh] space-y-5 overflow-auto 2xl:top-56 2xl:py-6 2xl:pl-8">
      <!-- getting started route section  -->

      <Accordion flush type="multiple" collapsible>
        <AccordionPanel class="border-b-0" value="gettingStarted">
          <AccordionContainer class="p-0">
            <AccordionTitle
              class="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
              Getting Started
            </AccordionTitle>
          </AccordionContainer>
          <AccordionContent class="border-b-0 p-0">
            <ul
              class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
              <li v-for="route in gettingStaredRoutes" :key="route?.id">
                <NuxtLink
                  :href="route?.href"
                  class="-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white"
                  :class="
                    isActive(route?.href)
                      ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                      : ''
                  ">
                  {{ route?.name }}
                </NuxtLink>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- layout route section  -->
      <Accordion flush type="multiple" collapsible>
        <AccordionPanel class="border-b-0" value="layout">
          <AccordionContainer class="p-0">
            <AccordionTitle
              class="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
              Layout
            </AccordionTitle>
          </AccordionContainer>
          <AccordionContent class="border-b-0 p-0">
            <ul
              class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
              <li v-for="route in layoutRoutes" :key="route?.id">
                <NuxtLink
                  :href="route?.href"
                  class="-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white"
                  :class="
                    isActive(route?.href)
                      ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                      : ''
                  ">
                  {{ route?.name }}
                </NuxtLink>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>

      <!-- docs layout route section  -->
      <Accordion flush type="multiple" collapsible>
        <AccordionPanel class="border-b-0" value="docs">
          <AccordionContainer class="p-0">
            <AccordionTitle
              class="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
              Docs
            </AccordionTitle>
          </AccordionContainer>
          <AccordionContent class="border-b-0 p-0">
            <ul
              class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
              <li v-for="route in docsRoutes" :key="route?.id">
                <NuxtLink
                  :href="route?.href"
                  class="-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white"
                  :class="
                    isActive(route?.href)
                      ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                      : ''
                  ">
                  {{ route.name }}
                </NuxtLink>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </aside>
  </div>
</template>
