<script lang="ts" setup>
import { VisuallyHidden } from "radix-vue";
import {
  docsRoutes,
  gettingStaredRoutes,
  layoutRoutes,
  navbarRoutes,
} from "~/Routes/routes";
import {
  buttonVariants,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "~/src";
import { cn } from "~/src/utils/cn";
import SearchBar from "./SearchBar.vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const route = useRoute();

const active = ref<boolean>(false);

const routePath = computed(() => {
  return route.path;
});

watchTriggerable(routePath, () => (active.value = false));

//check the route path and str comes here are equal or not
const isActive = (str: string): boolean => {
  const lastPart = routePath.value.toLocaleLowerCase().split("/").pop();
  const strPart = str.toLocaleLowerCase().split("/").pop();
  return lastPart === strPart;
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 z-50 w-full border-b bg-white dark:border-metal-800',
      routePath === '/'
        ? 'border-b-metal-100 dark:border-b-metal-900 dark:bg-[#0D1015]'
        : 'border-b-transparent dark:border-b-transparent dark:bg-metal-900',
    ]">
    <div class="relative mx-auto max-w-7xl px-6 2xl:px-0">
      <nav class="flex items-center justify-between py-4">
        <div class="flex items-center space-x-28">
          <!-- logo of nav  -->
          <NuxtLink href="/" class="flex">
            <NuxtImg
              src="/images/keep.svg"
              alt="Keep Vue"
              :width="130"
              :height="53"
              class="block dark:hidden" />
            <NuxtImg
              src="/images/keep-dark.svg"
              alt="Keep Vue"
              :width="130"
              :height="53"
              class="hidden dark:block" />
          </NuxtLink>
          <!-- nav routes  -->
          <div
            class="hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10">
            <NuxtLink
              v-for="nav in navbarRoutes"
              :key="nav?.id"
              :href="nav?.href"
              :target="nav.redirect ? '_blank' : '_self'"
              :class="`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 dark:text-metal-300 dark:active:text-white ${nav.name === 'Documentation' && route.path.includes('/docs/') ? 'text-primary-500 dark:text-white' : ''} ${nav.name === 'Blog' && route.path === '/blog' ? 'text-primary-500 dark:text-white' : ''}`">
              {{ nav.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- other nav items  -->
        <div class="flex items-center gap-3">
          <!-- search bar  -->
          <SearchBar />

          <!-- github logo -->
          <NuxtLink
            href="https://github.com/StaticMania/keep-vue"
            target="_blank"
            class="hidden rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 sm:block dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
            <NuxtImg
              src="/images/icon/github.svg"
              :height="22"
              :width="22"
              alt="github"
              class="block dark:hidden" />
            <NuxtImg
              src="/images/icon/github-dark.svg"
              :height="22"
              :width="22"
              alt="github"
              class="hidden dark:block" />
          </NuxtLink>

          <!-- discord logo  -->
          <NuxtLink
            href="https://discord.gg/fSxDJyvJmr"
            target="_blank"
            class="hidden rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 sm:block dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
            <NuxtImg
              src="/images/icon/discord.svg"
              :height="22"
              :width="22"
              alt="discord" />
          </NuxtLink>

          <!-- theme switch  -->
          <ThemeSwitcher />

          <!-- mobile drawer  -->
          <Drawer v-model:open="active" position="right">
            <DrawerTrigger as-child>
              <button
                class="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 laptop:hidden dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900"
                @click="() => (active = true)">
                <span v-if="active">
                  <PhosphorIconX
                    :size="20"
                    class="text-metal-900 dark:text-white" />
                </span>

                <span v-else>
                  <PhosphorIconList
                    :size="20"
                    class="text-metal-900 dark:text-white" />
                </span>
              </button>
            </DrawerTrigger>

            <DrawerContent
              class="w-full overflow-y-auto overflow-x-hidden sm:w-1/2 lg:hidden dark:border-metal-900 dark:bg-metal-900">
              <div class="mx-2 w-full">
                <DrawerHeader>
                  <VisuallyHidden>
                    <DrawerTitle />
                  </VisuallyHidden>

                  <DrawerClose as-child>
                    <Button
                      color="secondary"
                      class="mb-4 max-w-max p-3"
                      @click="active = false">
                      <PhosphorIconArrowLeft
                        class="size-5 text-white dark:text-metal-900" />
                    </Button>
                  </DrawerClose>

                  <DrawerDescription class="space-y-2 text-5xl">
                    <!-- getting stated route section  -->
                    <Accordion
                      flush
                      type="single"
                      collapsible
                      default-value="gettingStarted">
                      <AccordionPanel class="border-b-0" value="gettingStarted">
                        <AccordionContainer class="p-0">
                          <AccordionTitle
                            class="text-body-4 font-semibold text-metal-900 dark:text-white">
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
                              @click="active = false">
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
                    <Accordion
                      flush
                      type="single"
                      collapsible
                      default-value="layout">
                      <AccordionPanel class="border-b-0" value="layout">
                        <AccordionContainer class="p-0">
                          <AccordionTitle
                            class="text-body-4 font-semibold text-metal-900 dark:text-white">
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
                              @click="active = false">
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
                            class="text-body-4 font-semibold text-metal-900 dark:text-white">
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
                              @click="active = false">
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
          <NuxtLink
            href="/docs/getting-started/introduction"
            :class="cn(buttonVariants({ color: 'secondary' }))">
            get started
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>
