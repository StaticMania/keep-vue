<script lang="ts" setup>
import { docsRoutes, gettingStaredRoutes, layoutRoutes } from "~/Routes/routes";
import {
  Accordion,
  AccordionContainer,
  AccordionContent,
  AccordionIcon,
  AccordionPanel,
  AccordionTitle,
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/src";

interface MobileMenuDrawer {
  isActive: (str: string) => boolean;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

defineProps<MobileMenuDrawer>();
</script>

<template>
  <Drawer position="right" :open="isOpen">
    <DrawerTrigger as-child @click="setIsOpen(true)">
      <button>
        <span>
          <PhList :size="24" class="text-metal-900 dark:text-white" />
        </span>
      </button>
    </DrawerTrigger>

    <DrawerContent
      class="w-full overflow-y-auto overflow-x-hidden sm:w-1/2 lg:hidden dark:border-metal-900 dark:bg-metal-900">
      <div class="mx-2 w-full">
        <DrawerHeader>
          <VisuallyHidden>
            <DrawerTitle
              class="text-heading-3 font-bold text-metal-900 lg:text-heading-2 dark:text-white">
              Keep Vue
            </DrawerTitle>
          </VisuallyHidden>

          <!-- close  -->
          <DrawerClose as-child @click="setIsOpen(false)">
            <Button color="secondary" class="mb-4 max-w-max p-3">
              <PhArrowLeft class="size-5 text-white dark:text-metal-900" />
            </Button>
          </DrawerClose>

          <DrawerDescription class="text-5xl">
            <!-- getting stated route section  -->
            <Accordion
              flush
              type="single"
              collapsible
              default-value="gettingStarted">
              <AccordionPanel class="border-b-0" value="gettingStarted">
                <AccordionContainer class="p-0">
                  <AccordionTitle
                    class="text-body-3 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
                    Getting Started
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent class="border-b-0 p-0 text-left">
                  <ul
                    class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                    <li
                      v-for="route in gettingStaredRoutes"
                      :key="route?.id"
                      @click="setIsOpen(false)">
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
            <Accordion flush type="single" collapsible default-value="layout">
              <AccordionPanel class="border-b-0" value="layout">
                <AccordionContainer class="p-0">
                  <AccordionTitle
                    class="text-body-3 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
                    Layout
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent class="border-b-0 p-0 text-left">
                  <ul
                    class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                    <li
                      v-for="route in layoutRoutes"
                      :key="route?.id"
                      @click="setIsOpen(false)">
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
            <Accordion flush type="single" collapsible>
              <AccordionPanel class="border-b-0" value="docs">
                <AccordionContainer class="p-0">
                  <AccordionTitle
                    class="text-body-3 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-white dark:first-letter:!text-white">
                    Docs
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionContainer>
                <AccordionContent class="border-b-0 p-0 text-left">
                  <ul
                    class="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                    <li
                      v-for="route in docsRoutes"
                      :key="route?.id"
                      @click="setIsOpen(false)">
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
          </DrawerDescription>
        </DrawerHeader>
      </div>
    </DrawerContent>
  </Drawer>
</template>
